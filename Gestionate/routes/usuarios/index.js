import { query } from '../../DB/db.js';
import schemas from "../../schemas/index.js";

import bcrypt from 'bcrypt';

import {
    getUsersQuery,
    getUserByIdQuery,
    createUserQuery,
    updateUserQuery,
    deleteUserQuery,
    getLoggedUserQuery,
    getUserByEmail
} from "../../DB/queries/users.js";

import {
    getAllGastosQuery,
    getGastoByIdQuery,
    insertGastoQuery,
    updateGastoQuery,
    deleteGastoQuery,
    getGastosByCategoriaQuery
} from "../../DB/queries/gastos.js";
import {
    getAllIngresosQuery,
    getIngresoByIdQuery,
    getIngresoByCategoriaQuery,
    insertIngresoQuery,
    updateIngresoQuery,
    deleteIngresoQuery,
} from "../../DB/queries/ingresos.js";
import {
    associateProductoToGastoQuery,
    disassociateProductoFromGastoQuery,
} from "../../DB/queries/productos.js";
import {
    getAllCategoriasByUserQuery,
    getCategoriasByTipoQuery,
    getCategoriaByIdAndUserQuery,
    insertCategoriaForUserQuery,
    updateCategoriaForUserQuery,
    deleteCategoriaForUserQuery,
} from "../../DB/queries/categorias.js";
import {
    crearSubcategoriaQuery,
    editarSubcategoriaQuery,
    eliminarSubcategoriaQuery,
    getSubcategoriaPorIdYCategoriaQuery,
    getSubcategoriasPorCategoriaQuery
} from '../../DB/queries/subcategorias.js';
class Gasto {
    constructor(id, cantidad, fecha, descripcion, categoria_id, subcategoria_id, usuario_id) {
        this.id = id;
        this.cantidad = cantidad;
        this.fecha = fecha;
        this.descripcion = descripcion;
        this.categoria_id = categoria_id;
        this.subcategoria_id = subcategoria_id;
        this.usuario_id = usuario_id
    }
}
class Ingreso {
    constructor(id, cantidad, fecha, descripcion, categoria_id, subcategoria_id, usuario_id) {
        this.id = id;
        this.cantidad = cantidad;
        this.fecha = fecha;
        this.descripcion = descripcion;
        this.categoria_id = categoria_id;
        this.subcategoria_id = subcategoria_id;
        this.usuario_id = usuario_id
    }

}
class Categoria {
    constructor(id, nombre, estado, usuario_id, tipo, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.estado = estado;
        this.usuario_id = usuario_id;
        this.tipo = tipo;
        this.imagen = imagen;
    }
}

export default async function (fastify, opts) {

    // Loguear usuario
    fastify.post("/login", async (request, reply) => {
        const { email, contrasena } = request.body;
        try {
            const user = await query(getUserByEmail, [email]);
            if (user.rowCount === 0) {
                console.error("El email ingresado es incorrecto, no se encuentra en la base de datos.");
                return reply.status(400).send({ error: "Email incorrecto", code: "EMAIL_NOT_FOUND" });
            }
            const hashedPassword = user.rows[0].contrasena;
            const match = await bcrypt.compare(contrasena, hashedPassword);
            if (match) {
                console.log(email, contrasena);
                console.log("Contraseña hasheada: ", hashedPassword);
                const res = await query(getLoggedUserQuery, [email, hashedPassword]);
                const token = fastify.jwt.sign({ email }, { expiresIn: "1h" });
                const user_id = res.rows[0].id;
                return reply.status(200).send({ token, user_id });
            }
            else {
                console.error("La contraseña ingresada es incorrecta.");
                return reply.status(400).send({ error: "Contraseña incorrecta", code: "WRONG_PASSWORD" });
            }
        }
        catch (error) {
            console.error("Error al iniciar sesion", error.message);
            reply.status(500).send("Error del servidor");
        }
    })

    // Validar si email está en uso
    fastify.post("/email", async (request, reply) => {
        const { email } = request.body;
        try {
            const res = await query(getUserByEmail, [email]);
            console.log(res);
            if (res.rowCount === 0) {
                console.log("Email disponible");
                return reply.status(200).send(false);
            }
            else {
                console.log("Email no disponible");
                return reply.status(200).send(true);
            }
        }
        catch (error) {
            console.error("Error al iniciar sesion", error.message);
            reply.status(500).send("Error del servidor");
        }
    })

    // Obtener Todos los usuarios
    fastify.get("/", {
        onRequest: [fastify.authenticate],
        handler: async (request, reply) => {
            try {
                const res = await query(getUsersQuery);
                return res.rows;
            } catch (error) {
                console.error("Error al obtener usuarios", error.message);
                reply.status(500).send("Error del servidor");
            }
        }
    });

    // Obtener usuario por su ID
    fastify.get("/:id", { onRequest: [fastify.authenticate] }, async (request, reply) => {
        const { id } = request.params;
        try {
            const res = await query(getUserByIdQuery, [id]);
            if (res.rowCount === 0) {
                reply.status(404).send("Usuario no encontrado");
            }
            return res.rows[0];
        } catch (error) {
            console.error("Error al obtener usuario", error.message);
            reply.status(500).send("Error del servidor");
        }
    });

    // Crear un usuario
    fastify.post("/", {
        schema: {
            summary: "Crea un nuevo usuario",
            tags: ["users"],
            body: { $ref: "createUserSchema" },
            response: {
                201: {
                    type: "object",
                    properties: {
                        id: { type: "number" },
                        nombre: { type: "string" },
                        email: { type: "string" },
                        contrasena: { type: "string" },
                        estado: { type: "number" }
                    }
                }
            }
        },
        handler: async (request, reply) => {
            const { nombre, email, contrasena } = request.body;
            const hashedContra = await bcrypt.hash(contrasena, 10);
            try {
                const res = await query(createUserQuery, [nombre, email, hashedContra]);
                reply.code(201);
                console.log("Respuesta unica:", res);
                console.log("Respuesta row", res.rows[0])
                return res.rows[0];
            } catch (error) {
                console.error("Error al crear usuario", error.message);
                reply.status(500).send("Error del servidor");
            }
        }
    });

    // Actualizar un usuario
    fastify.put("/:id", {
        onRequest: [fastify.authenticate],
        handler: async (request, reply) => {
            const { id } = request.params;
            const { nombre, email, contrasena } = request.body;
            try {
                const res = await query(updateUserQuery, [nombre, email, contrasena, id]);
                if (res.rowCount === 0) {
                    reply.status(404).send("Usuario no encontrado");
                }
                return res.rows[0];
            } catch (error) {
                console.error("Error al actualizar usuario", error.message);
                reply.status(500).send("Error del servidor");
            }
        }
    });

    // Eliminar un usuario
    fastify.delete("/:id", {
        onRequest: [fastify.authenticate],
        handler: async (request, reply) => {
            const { id } = request.params;
            try {
                const res = await query(deleteUserQuery, [id]);
                if (res.rowCount === 0) {
                    reply.status(404).send("Usuario no encontrado");
                }
                reply.status(204).send();
            } catch (error) {
                console.error("Error al eliminar usuario", error.message);
                reply.status(500).send("Error del servidor");
            }
        }
    });

    // Obtener todos los gastos de un usuario
    fastify.get("/:usuario_id/gastos", {
        onRequest: [fastify.authenticate],
        handler: async function (request, reply) {
            const { usuario_id } = request.params;
            try {
                const res = await query(getAllGastosQuery, [usuario_id]);
                const gastos = res.rows.map(row => new Gasto(row.id, row.cantidad, row.fecha, row.descripcion, row.categoria_id, row.subcategoria_id, row.usuario_id));
                return gastos;
            } catch (error) {
                console.error("Error al obtener gastos", error.message);
                reply.status(500).send("Error del servidor");
            }
        }
    });
    // Obtener todos los gastos de un usuario dentro de una categoría
    fastify.get("/:usuario_id/gastos/categorias/:categoria_id", {
        onRequest: [fastify.authenticate],
        handler: async function (request, reply) {
            const { usuario_id, categoria_id } = request.params;
            try {
                const res = await query(getGastosByCategoriaQuery, [usuario_id, categoria_id]);
                const gastos = res.rows.map(row => new Gasto(row.id, row.cantidad, row.fecha, row.descripcion, row.categoria_id, row.subcategoria_id, row.usuario_id));
                return gastos;
            } catch (error) {
                console.error("Error al obtener gastos por categoría", error.message);
                reply.status(500).send("Error del servidor");
            }
        }
    });


    // Obtener un gasto de un usuario por su ID
    fastify.get("/:usuario_id/gastos/:id", {
        onRequest: [fastify.authenticate],
        handler: async function (request, reply) {
            const { usuario_id, id } = request.params;
            try {
                const res = await query(getGastoByIdQuery, [usuario_id, id]);

                if (res.rows.length > 0) {
                    const gasto = {
                        id: res.rows[0].id,
                        cantidad: res.rows[0].cantidad,
                        fecha: res.rows[0].fecha,
                        descripcion: res.rows[0].descripcion,
                        categoria_id: res.rows[0].categoria_id,
                        subcategoria_id: res.rows[0].subcategoria_id,
                        usuario_id: res.rows[0].usuario_id
                    };
                    console.log(gasto);
                    return gasto;
                } else {
                    // Manejar el caso en que no se encuentre el gasto
                    reply.status(404).send("Gasto no encontrado");
                }
            } catch (error) {
                console.error("Error al obtener el gasto", error.message);
                reply.status(500).send("Error del servidor");
            }
        }
    });

    // Crear un nuevo gasto para un usuario
    fastify.post("/:usuario_id/gastos", {
        onRequest: [fastify.authenticate],
        handler: async function (request, reply) {
            const { cantidad, fecha, descripcion, categoria_id, subcategoria_id } = request.body;
            const { usuario_id } = request.params;

            try {
                const res = await query(insertGastoQuery, [cantidad, fecha, descripcion, categoria_id, subcategoria_id, usuario_id]);
                console.log("Llegó");
                reply.code(201).send({ mensaje: "Gasto creado exitosamente" });
            } catch (error) {
                console.error("Error al crear el gasto", error.message);
                reply.status(500).send("Error del servidor");
            }
        }

    });



    // Actualizar un gasto de un usuario por su ID
    fastify.put("/:usuario_id/gastos/:id", {
        onRequest: [fastify.authenticate],
        handler: async function (request, reply) {
            const { usuario_id, id } = request.params;
            const { cantidad, fecha, descripcion, categoria_id, subcategoria_id } = request.body;
            try {
                const res = await query(updateGastoQuery, [cantidad, fecha, descripcion, categoria_id, subcategoria_id, usuario_id, id]);
                return res.rows[0];
            } catch (error) {
                console.error("Error al actualizar el gasto", error.message);
                reply.status(500).send("Error del servidor");
            }
        }
    });

    // Eliminar un gasto de un usuario por su ID
    fastify.delete("/:usuario_id/gastos/:id", {
        onRequest: [fastify.authenticate],
        handler: async function (request, reply) {
            const { usuario_id, id } = request.params;
            try {
                const res = await query(deleteGastoQuery, [usuario_id, id]);
                reply.code(204);
                return res.rows[0];
            } catch (error) {
                console.error("Error al eliminar el gasto", error.message);
                reply.status(500).send("Error del servidor");
            }
        }
    });

    // PRODUCTOS ASOCIADOS A GASTOS

    // ASOCIAR PRODUCTO A UN GASTO DE UN USUARIO
    fastify.post("/:usuario_id/gastos/:gasto_id/productos/:producto_id", {
        onRequest: [fastify.authenticate],
        handler: async (request, reply) => {
            const { usuario_id, gasto_id, producto_id } = request.params;
            try {
                const res = await query(associateProductoToGastoQuery, [gasto_id, producto_id]);
                reply.code(201);
                return res.rows[0];
            } catch (error) {
                console.error("Error al asociar producto a gasto", error.message);
                reply.status(500).send("Error del servidor");
            }
        }
    });

    // DESASOCIAR PRODUCTO DE UN GASTO DE UN USUARIO
    fastify.delete("/:usuario_id/gastos/:gasto_id/productos/:producto_id", {
        onRequest: [fastify.authenticate],
        handler: async (request, reply) => {
            const { usuario_id, gasto_id, producto_id } = request.params;
            try {
                const res = await query(disassociateProductoFromGastoQuery, [gasto_id, producto_id]);
                reply.code(204);
                return res.rows[0];
            } catch (error) {
                console.error("Error al desasociar producto de gasto", error.message);
                reply.status(500).send("Error del servidor");
            }
        }
    });

    // INGRESOS

    // Obtener todos los ingresos de un usuario
    fastify.get("/:usuario_id/ingresos", {
        onRequest: [fastify.authenticate],
        handler: async function (request, reply) {
            const { usuario_id } = request.params;
            try {
                const res = await query(getAllIngresosQuery, [usuario_id]);
                return res.rows;
            } catch (error) {
                console.error("Error al obtener ingresos", error.message);
                reply.status(500).send("Error del servidor");
            }
        }
    });

    // Obtener un ingreso de un usuario por su ID
    fastify.get("/:usuario_id/ingresos/:id", {
        onRequest: [fastify.authenticate],
        handler: async function (request, reply) {
            const { usuario_id, id } = request.params;
            try {
                const res = await query(getIngresoByIdQuery, [usuario_id, id]);

                if (res.rows.length > 0) {
                    const ingreso = {
                        id: res.rows[0].id,
                        cantidad: res.rows[0].cantidad,
                        fecha: res.rows[0].fecha,
                        descripcion: res.rows[0].descripcion,
                        categoria_id: res.rows[0].categoria_id,
                        subcategoria_id: res.rows[0].subcategoria_id,
                        usuario_id: res.rows[0].usuario_id
                    };
                    return ingreso;
                } else {
                    reply.status(404).send("Ingreso no encontrado");
                }
            } catch (error) {
                console.error("Error al obtener el ingreso", error.message);
                reply.status(500).send("Error del servidor");
            }
        }
    });
    // Obtener todos los ingresos de un usuario dentro de una categoría
    fastify.get("/:usuario_id/ingresos/categorias/:categoria_id", {
        onRequest: [fastify.authenticate],
        handler: async function (request, reply) {
            const { usuario_id, categoria_id } = request.params;
            try {
                const res = await query(getIngresoByCategoriaQuery, [usuario_id, categoria_id]);
                const ingresos = res.rows.map(row => new Ingreso(row.id, row.cantidad, row.fecha, row.descripcion, row.categoria_id, row.subcategoria_id, row.usuario_id));
                return ingresos;
            } catch (error) {
                console.error("Error al obtener ingresos por categoría", error.message);
                reply.status(500).send("Error del servidor");
            }
        }
    });

    // Crear un nuevo ingreso para un usuario
    fastify.post("/:usuario_id/ingresos", {
        onRequest: [fastify.authenticate],
        handler: async function (request, reply) {
            const { cantidad, fecha, descripcion, subcategoria_id, categoria_id } = request.body;
            const { usuario_id } = request.params;
            try {
                const res = await query(insertIngresoQuery, [cantidad, fecha, descripcion, categoria_id, subcategoria_id, usuario_id]);
                reply.code(201);
                return res.rows[0];
            } catch (error) {
                console.error("Error al crear el ingreso", error.message);
                reply.status(500).send("Error del servidor");
            }
        }
    });

    // Actualizar un ingreso de un usuario por su ID
    fastify.put("/:usuario_id/ingresos/:id", {
        onRequest: [fastify.authenticate],
        handler: async function (request, reply) {
            const { usuario_id, id } = request.params;
            const { cantidad, fecha, descripcion } = request.body;
            try {
                const res = await query(updateIngresoQuery, [cantidad, fecha, descripcion, usuario_id, id]);
                return res.rows[0];
            } catch (error) {
                console.error("Error al actualizar el ingreso", error.message);
                reply.status(500).send("Error del servidor");
            }
        }
    });

    // Eliminar un ingreso de un usuario por su ID
    fastify.delete("/:usuario_id/ingresos/:id", {
        onRequest: [fastify.authenticate],
        handler: async function (request, reply) {
            const { usuario_id, id } = request.params;
            try {
                const res = await query(deleteIngresoQuery, [usuario_id, id]);
                reply.code(204);
                return res.rows[0];
            } catch (error) {
                console.error("Error al eliminar el ingreso", error.message);
                reply.status(500).send("Error del servidor");
            }
        }
    });


    //CATEGORIAS

    fastify.get("/:usuario_id/categorias", {
        onRequest: [fastify.authenticate],
        handler: async function (request, reply) {
            const { usuario_id } = request.params;
            try {
                const res = await query(getAllCategoriasByUserQuery, [usuario_id]);
                const categorias = res.rows.map(row => new Categoria(row.id, row.nombre, row.estado, row.usuario_id, row.tipo));
                return categorias;
            } catch (error) {
                console.error("Error al obtener las categorías del usuario", error.message);
                reply.status(500).send("Error del servidor");
            }
        }
    });

    //Obtener categorias de un usuario por su id y tipo de categoria gasto
    fastify.get("/:usuario_id/categorias/gastos", {
        onRequest: [fastify.authenticate],
        handler: async function (request, reply) {
            const { usuario_id } = request.params;
            const tipoGastos = 0;

            try {
                const res = await query(getCategoriasByTipoQuery, [usuario_id, tipoGastos]);
                const categorias = res.rows.map(row => new Categoria(row.id, row.nombre, row.estado, row.usuario_id, row.tipo, row.imagen));
                return categorias;
            } catch (error) {
                console.error("Error al obtener las categorías de gastos del usuario", error.message);
                reply.status(500).send("Error del servidor");
            }
        }
    });

    //Obtener categorias de un usuario por su id y tipo de categoria ingreso
    fastify.get("/:usuario_id/categorias/ingresos", {
        onRequest: [fastify.authenticate],
        handler: async function (request, reply) {
            const { usuario_id } = request.params;
            const tipoIngresos = 1;

            try {
                const res = await query(getCategoriasByTipoQuery, [usuario_id, tipoIngresos]);
                const categorias = res.rows.map(row => new Categoria(row.id, row.nombre, row.estado, row.usuario_id, row.tipo, row.imagen));
                return categorias;
            } catch (error) {
                console.error("Error al obtener las categorías de ingresos del usuario", error.message);
                reply.status(500).send("Error del servidor");
            }
        }
    });

    // Obtener una categoría de un usuario por su ID
    fastify.get("/:usuario_id/categorias/:categoria_id", {
        onRequest: [fastify.authenticate],
        handler: async function (request, reply) {
            const { usuario_id, categoria_id } = request.params;
            try {
                const res = await query(getCategoriaByIdAndUserQuery, [categoria_id, usuario_id]);
                return new Categoria(res.rows[0].id, res.rows[0].nombre, res.rows[0].estado, res.rows[0].usuario_id, res.rows[0].tipo, res.rows[0].imagen);
            } catch (error) {
                console.error("Error al obtener la categoría del usuario", error.message);
                reply.status(500).send("Error del servidor");
            }
        }
    });

    // Crear una nueva categoría para un usuario
    fastify.post("/:usuario_id/categorias", {
        onRequest: [fastify.authenticate],
        handler: async function (request, reply) {
            const { nombre, tipo, imagen } = request.body;
            const { usuario_id } = request.params;
            try {
                const res = await query(insertCategoriaForUserQuery, [nombre, usuario_id, tipo, imagen]);
                reply.code(201);
                return res.rows[0];
            } catch (error) {
                console.error("Error al crear la categoría para el usuario", error.message);
                reply.status(500).send("Error del servidor");
            }
        }
    });


    // Actualizar una categoría de un usuario por su ID
    fastify.put("/:usuario_id/categorias/:categoria_id", {
        onRequest: [fastify.authenticate],
        handler: async function (request, reply) {
            const { usuario_id, categoria_id } = request.params;
            const { nombre, imagen } = request.body;
            try {
                const res = await query(updateCategoriaForUserQuery, [categoria_id, nombre, usuario_id, imagen]);
                return res.rows[0];
            } catch (error) {
                console.error("Error al actualizar la categoría del usuario", error.message);
                reply.status(500).send("Error del servidor");
            }
        }
    });

    // Eliminar una categoría de un usuario por su ID
    fastify.delete("/:usuario_id/categorias/:categoria_id", {
        onRequest: [fastify.authenticate],
        handler: async function (request, reply) {
            const { usuario_id, categoria_id } = request.params;
            try {
                await query(deleteCategoriaForUserQuery, [categoria_id, usuario_id]);
                reply.code(204);
            } catch (error) {
                console.error("Error al eliminar la categoría del usuario", error.message);
                reply.status(500).send("Error del servidor");
            }
        }
    });



    //SUBCATEGORIAS


    // //Obtener todas las subcategorías de una categoría
    // fastify.get('/:categoriaId/subcategorias', {
    //     handler: async function (request, reply) {
    //         const { categoriaId } = request.params;

    //         try {
    //             const queryResult = await query(getSubcategoriasPorCategoriaQuery, [categoriaId]);
    //             return queryResult.rows;
    //         } catch (error) {
    //             console.error('Error al obtener subcategorías:', error.message);
    //             reply.status(500).send('Error del servidor');
    //         }
    //     }
    // });

    // //Obtener una subcategoría por su id
    // fastify.get('/:categoriaId/subcategorias/:subcategoriaId', {
    //     handler: async function (request, reply) {
    //         const { subcategoriaId } = request.params;

    //         try {
    //             const queryResult = await query(getSubcategoriaPorIdYCategoriaQuery, [subcategoriaId, request.params.categoriaId]);
    //             if (queryResult.rows.length === 0) {
    //                 reply.status(404).send('Subcategoría no encontrada');
    //             } else {
    //                 return queryResult.rows[0];
    //             }
    //         } catch (error) {
    //             console.error('Error al obtener subcategoría:', error.message);
    //             reply.status(500).send('Error del servidor');
    //         }
    //     }
    // });

    // //crear una subcategoría
    // fastify.post('/:categoriaId/subcategorias', {
    //     handler: async function (request, reply) {
    //         const { nombre } = request.body;
    //         const { categoriaId } = request.params;

    //         try {
    //             const queryResult = await query(crearSubcategoriaQuery, [nombre, categoriaId]);
    //             reply.code(201);
    //             return queryResult.rows[0];
    //         } catch (error) {
    //             console.error('Error al crear subcategoría:', error.message);
    //             reply.status(500).send('Error del servidor');
    //         }
    //     }
    // });

    // //Editar una subcategoría
    // fastify.put('/:categoriaId/subcategorias/:subcategoriaId', {
    //     handler: async function (request, reply) {
    //         const { subcategoriaId } = request.params;
    //         const { nombre } = request.body;

    //         try {
    //             const queryResult = await query(editarSubcategoriaQuery, [nombre, subcategoriaId, request.params.categoriaId]);
    //             if (queryResult.rows.length === 0) {
    //                 reply.status(404).send('Subcategoría no encontrada');
    //             } else {
    //                 return queryResult.rows[0];
    //             }
    //         } catch (error) {
    //             console.error('Error al editar subcategoría:', error.message);
    //             reply.status(500).send('Error del servidor');
    //         }
    //     }
    // });

    // //Eliminar una subcategoría
    // fastify.delete('/:categoriaId/subcategorias/:subcategoriaId', {
    //     handler: async function (request, reply) {
    //         const { subcategoriaId } = request.params;

    //         try {
    //             const queryResult = await query(eliminarSubcategoriaQuery, [subcategoriaId, request.params.categoriaId]);
    //             if (queryResult.rows.length === 0) {
    //                 reply.status(404).send('Subcategoría no encontrada');
    //             } else {
    //                 reply.code(204);
    //                 return;
    //             }
    //         } catch (error) {
    //             console.error('Error al eliminar subcategoría:', error.message);
    //             reply.status(500).send('Error del servidor');
    //         }
    //     }
    // });
}
