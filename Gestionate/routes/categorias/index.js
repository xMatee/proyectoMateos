import { query } from '../../DB/db.js';
import {
    getAllCategoriasQuery,
    getCategoriaByIdQuery,
    insertCategoriaQuery,
    updateCategoriaQuery,
    deleteCategoriaQuery,
} from "../../DB/queries/categorias.js";

import {
    crearSubcategoriaQuery,
    editarSubcategoriaQuery,
    eliminarSubcategoriaQuery,
    getSubcategoriaPorIdYCategoriaQuery,
    getSubcategoriasPorCategoriaQuery
} from '../../DB/queries/subcategorias.js';

export default async function (fastify, opts) {
    //Obtener todas las categorís
    fastify.get("/", async function (request, reply) {
        try {
            const res = await query(getAllCategoriasQuery);
            return res.rows;
        } catch (error) {
            console.error("Error al obtener categorías", error.message);
            reply.status(500).send("Error del servidor");
        }
    });

    //Obtener una categoría por su id
    fastify.get("/:id", async function (request, reply) {
        const id = request.params.id;
        try {
            const res = await query(getCategoriaByIdQuery, [id]);
            return res.rows[0];
        } catch (error) {
            console.error("Error al obtener la categoría", error.message);
            reply.status(500).send("Error del servidor");
        }
    });

    //rear una nueva categoría
    fastify.post("/", { schema: createExpenseCategorySchema }, async function (request, reply) {
        const { nombre } = request.body;
        try {
            const res = await query(insertCategoriaQuery, [nombre]);
            return res.rows[0];
        } catch (error) {
            console.error("Error al crear la categoría", error.message);
            reply.status(500).send("Error del servidor");
        }
    });
    //Actualizar una categoría por su Id
    fastify.put("/:id", async function (request, reply) {
        const id = request.params.id;
        const { nombre } = request.body;
        try {
            const res = await query(updateCategoriaQuery, [id, nombre]);
            return res.rows[0];
        } catch (error) {
            console.error("Error al actualizar la categoría", error.message);
            reply.status(500).send("Error del servidor");
        }
    });

    //Eliminar una categoría por su id
    fastify.delete("/:id", async function (request, reply) {
        const id = request.params.id;
        try {
            const res = await query(deleteCategoriaQuery, [id]);
            return res.rows[0];
        } catch (error) {
            console.error("Error al eliminar la categoría", error.message);
            reply.status(500).send("Error del servidor");
        }
    });


    //SUBCATEGORIAS


    //Obtener todas las subcategorías de una categoría
    fastify.get('/:categoriaId/subcategorias', {
        handler: async function (request, reply) {
            const { categoriaId } = request.params;

            try {
                const queryResult = await query(getSubcategoriasPorCategoriaQuery, [categoriaId]);
                return queryResult.rows;
            } catch (error) {
                console.error('Error al obtener subcategorías:', error.message);
                reply.status(500).send('Error del servidor');
            }
        }
    });

    //Obtener una subcategoría por su id
    fastify.get('/:categoriaId/subcategorias/:subcategoriaId', {
        handler: async function (request, reply) {
            const { subcategoriaId } = request.params;

            try {
                const queryResult = await query(getSubcategoriaPorIdYCategoriaQuery, [subcategoriaId, request.params.categoriaId]);
                if (queryResult.rows.length === 0) {
                    reply.status(404).send('Subcategoría no encontrada');
                } else {
                    return queryResult.rows[0];
                }
            } catch (error) {
                console.error('Error al obtener subcategoría:', error.message);
                reply.status(500).send('Error del servidor');
            }
        }
    });

    //crear una subcategoría
    fastify.post('/:categoriaId/subcategorias', {
        handler: async function (request, reply) {
            const { nombre } = request.body;
            const { categoriaId } = request.params;

            try {
                const queryResult = await query(crearSubcategoriaQuery, [nombre, categoriaId]);
                return queryResult.rows[0];
            } catch (error) {
                console.error('Error al crear subcategoría:', error.message);
                reply.status(500).send('Error del servidor');
            }
        }
    });

    //Editar una subcategoría
    fastify.put('/categorias/:categoriaId/subcategorias/:subcategoriaId', {
        handler: async function (request, reply) {
            const { subcategoriaId } = request.params;
            const { nombre } = request.body;

            try {
                const queryResult = await query(editarSubcategoriaQuery, [nombre, subcategoriaId, request.params.categoriaId]);
                if (queryResult.rows.length === 0) {
                    reply.status(404).send('Subcategoría no encontrada');
                } else {
                    return queryResult.rows[0];
                }
            } catch (error) {
                console.error('Error al editar subcategoría:', error.message);
                reply.status(500).send('Error del servidor');
            }
        }
    });

    //Eliminar una subcategoría
    fastify.delete('/categorias/:categoriaId/subcategorias/:subcategoriaId', {
        handler: async function (request, reply) {
            const { subcategoriaId } = request.params;

            try {
                const queryResult = await query(eliminarSubcategoriaQuery, [subcategoriaId, request.params.categoriaId]);
                if (queryResult.rows.length === 0) {
                    reply.status(404).send('Subcategoría no encontrada');
                } else {
                    return queryResult.rows[0];
                }
            } catch (error) {
                console.error('Error al eliminar subcategoría:', error.message);
                reply.status(500).send('Error del servidor');
            }
        }
    });
}

