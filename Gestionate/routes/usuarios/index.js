import { query } from '../../DB/db.js';
import schemas from "../../schemas/index.js";
import fastify from 'fastify';
import fastifyCors from 'fastify-cors';
import {
    getUsersQuery,
    getUserByIdQuery,
    createUserQuery,
    updateUserQuery,
    deleteUserQuery
} from "../../DB/queries/users.js";

import {
    getAllGastosQuery,
    getGastoByIdQuery,
    insertGastoQuery,
    updateGastoQuery,
    deleteGastoQuery,
} from "../../DB/queries/gastos.js";
import {
    getAllIngresosQuery,
    getIngresoByIdQuery,
    insertIngresoQuery,
    updateIngresoQuery,
    deleteIngresoQuery,
} from "../../DB/queries/ingresos.js";
import {
    associateProductoToGastoQuery,
    disassociateProductoFromGastoQuery,
} from "../../DB/queries/productos.js";
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
const app = fastify();
app.register(fastifyCors, {
    origin: '*'
});
export default async function (fastify, opts) {
    // Obtener Todos los usuarios
    fastify.get("/", async (request, reply) => {
        try {
            const res = await query(getUsersQuery);
            return res.rows;
        } catch (error) {
            console.error("Error al obtener usuarios", error.message);
            reply.status(500).send("Error del servidor");
        }
    });

    // Obtener usuario por su ID
    fastify.get("/:id", async (request, reply) => {
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
    fastify.post("/", { schema: schemas.createUserSchema }, async (request, reply) => {
        const { nombre, email, contrasena } = request.body;
        try {
            const res = await query(createUserQuery, [nombre, email, contrasena]);
            reply.code(201);
            return res.rows[0];
        } catch (error) {
            console.error("Error al crear usuario", error.message);
            reply.status(500).send("Error del servidor");
        }
    });

    // Actualizar un usuario
    fastify.put("/:id", async (request, reply) => {
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
    });

    // Eliminar un usuario
    fastify.delete("/:id", async (request, reply) => {
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
    });

    // Obtener todos los gastos de un usuario
    fastify.get("/:usuario_id/gastos", async function (request, reply) {
        const { usuario_id } = request.params;
        try {
            const res = await query(getAllGastosQuery, [usuario_id]);
            const gastos = res.rows.map(row => new Gasto(row.id, row.cantidad, row.fecha, row.descripcion, row.categoria_id, row.subcategoria_id, row.usuario_id));
            console.log(gastos)
            return gastos;
        } catch (error) {
            console.error("Error al obtener gastos", error.message);
            reply.status(500).send("Error del servidor");
        }
    });

    // Obtener un gasto de un usuario por su ID
    fastify.get("/:usuario_id/gastos/:id", async function (request, reply) {
        const { usuario_id, id } = request.params;
        try {
            const res = await query(getGastoByIdQuery, [usuario_id, id]);
            return res.rows[0];
        } catch (error) {
            console.error("Error al obtener el gasto", error.message);
            reply.status(500).send("Error del servidor");
        }
    });

    // Crear un nuevo gasto para un usuario
    fastify.post("/:usuario_id/gastos", { schema: schemas.createExpenseSchema }, async function (request, reply) {
        const { cantidad, fecha, descripcion, categoria_id, subcategoria_id } = request.body;
        const { usuario_id } = request.params;
        try {
            const res = await query(insertGastoQuery, [cantidad, fecha, descripcion, categoria_id, subcategoria_id, usuario_id]);
            reply.code(201);
            return res.rows[0];
        } catch (error) {
            console.error("Error al crear el gasto", error.message);
            reply.status(500).send("Error del servidor");
        }
    });

    // Actualizar un gasto de un usuario por su ID
    fastify.put("/:usuario_id/gastos/:id", { schema: schemas.editExpenseSchema }, async function (request, reply) {
        const { usuario_id, id } = request.params;
        const { cantidad, fecha, descripcion, categoria_id, subcategoria_id } = request.body;
        try {
            const res = await query(updateGastoQuery, [cantidad, fecha, descripcion, categoria_id, subcategoria_id, usuario_id, id]);
            return res.rows[0];
        } catch (error) {
            console.error("Error al actualizar el gasto", error.message);
            reply.status(500).send("Error del servidor");
        }
    });

    // Eliminar un gasto de un usuario por su ID
    fastify.delete("/:usuario_id/gastos/:id", { schema: schemas.expenseDeletedResponseSchema }, async function (request, reply) {
        const { usuario_id, id } = request.params;
        try {
            const res = await query(deleteGastoQuery, [usuario_id, id]);
            reply.code(204);
            return res.rows[0];
        } catch (error) {
            console.error("Error al eliminar el gasto", error.message);
            reply.status(500).send("Error del servidor");
        }
    });

    // PRODUCTOS ASOCIADOS A GASTOS

    // ASOCIAR PRODUCTO A UN GASTO DE UN USUARIO
    fastify.post("/:usuario_id/gastos/:gasto_id/productos/:producto_id", async (request, reply) => {
        const { usuario_id, gasto_id, producto_id } = request.params;
        try {
            const res = await query(associateProductoToGastoQuery, [gasto_id, producto_id]);
            reply.code(201);
            return res.rows[0];
        } catch (error) {
            console.error("Error al asociar producto a gasto", error.message);
            reply.status(500).send("Error del servidor");
        }
    });

    // DESASOCIAR PRODUCTO DE UN GASTO DE UN USUARIO
    fastify.delete("/:usuario_id/gastos/:gasto_id/productos/:producto_id", async (request, reply) => {
        const { usuario_id, gasto_id, producto_id } = request.params;
        try {
            const res = await query(disassociateProductoFromGastoQuery, [gasto_id, producto_id]);
            reply.code(204);
            return res.rows[0];
        } catch (error) {
            console.error("Error al desasociar producto de gasto", error.message);
            reply.status(500).send("Error del servidor");
        }
    });

    // INGRESOS

    // Obtener todos los ingresos de un usuario
    fastify.get("/:usuario_id/ingresos", async function (request, reply) {
        const { usuario_id } = request.params;
        try {
            const res = await query(getAllIngresosQuery, [usuario_id]);
            return res.rows;
        } catch (error) {
            console.error("Error al obtener ingresos", error.message);
            reply.status(500).send("Error del servidor");
        }
    });

    // Obtener un ingreso de un usuario por su ID
    fastify.get("/:usuario_id/ingresos/:id", async function (request, reply) {
        const { usuario_id, id } = request.params;
        try {
            const res = await query(getIngresoByIdQuery, [usuario_id, id]);
            return res.rows[0];
        } catch (error) {
            console.error("Error al obtener el ingreso", error.message);
            reply.status(500).send("Error del servidor");
        }
    });

    // Crear un nuevo ingreso para un usuario
    fastify.post("/:usuario_id/ingresos", { schema: schemas.createIncomeSchema }, async function (request, reply) {
        const { cantidad, fecha, descripcion } = request.body;
        const { usuario_id } = request.params;
        try {
            const res = await query(insertIngresoQuery, [cantidad, fecha, descripcion, usuario_id]);
            reply.code(201);
            return res.rows[0];
        } catch (error) {
            console.error("Error al crear el ingreso", error.message);
            reply.status(500).send("Error del servidor");
        }
    });

    // Actualizar un ingreso de un usuario por su ID
    fastify.put("/:usuario_id/ingresos/:id", { schema: schemas.editIncomeSchema }, async function (request, reply) {
        const { usuario_id, id } = request.params;
        const { cantidad, fecha, descripcion } = request.body;
        try {
            const res = await query(updateIngresoQuery, [cantidad, fecha, descripcion, usuario_id, id]);
            return res.rows[0];
        } catch (error) {
            console.error("Error al actualizar el ingreso", error.message);
            reply.status(500).send("Error del servidor");
        }
    });

    // Eliminar un ingreso de un usuario por su ID
    fastify.delete("/:usuario_id/ingresos/:id", { schema: schemas.incomeDeletedResponseSchema }, async function (request, reply) {
        const { usuario_id, id } = request.params;
        try {
            const res = await query(deleteIngresoQuery, [usuario_id, id]);
            reply.code(204);
            return res.rows[0];
        } catch (error) {
            console.error("Error al eliminar el ingreso", error.message);
            reply.status(500).send("Error del servidor");
        }
    });
}

