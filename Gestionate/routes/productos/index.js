import { query } from '../../DB/db.js';
import schemas from '../../schemas/index.js'
import {
    getAllProductosQuery,
    getProductoByIdQuery,
    insertProductoQuery,
    updateProductoQuery,
    deleteProductoQuery,
} from "../../DB/queries/productos.js";


export default async function (fastify, opts) {
    fastify.get("/", {
        onRequest: [fastify.authenticate],
        handler: async (request, reply) => {
            try {
                const res = await query(getAllProductosQuery);
                return res.rows;
            } catch (error) {
                console.error("Error al obtener productos", error.message);
                reply.status(500).send("Error del servidor");
            }
        }
    });
    fastify.post("/", {
        onRequest: [fastify.authenticate],
        handler: async (request, reply) => {
            const { nombre } = request.body;
            try {
                const res = await query(insertProductoQuery, [nombre]);
                reply.code(201);
                return res.rows[0];
            } catch (error) {
                console.error("Error al crear el producto no asociado a un gasto", error.message);
                reply.status(500).send("Error del servidor");
            }
        }
    });

    fastify.get("/:id", {
        onRequest: [fastify.authenticate],
        handler: async (request, reply) => {
            const id = request.params.id;
            try {
                const res = await query(getProductoByIdQuery, [id]);
                return res.rows[0];
            } catch (error) {
                console.error("Error al obtener el producto", error.message);
                reply.status(500).send("Error del servidor");
            }
        }
    });

    fastify.put("/:id", {
        onRequest: [fastify.authenticate],
        handler: async (request, reply) => {
            const id = request.params.id;
            const { nombre } = request.body;
            try {
                const res = await query(updateProductoQuery, [nombre, id]);
                return res.rows[0];
            } catch (error) {
                console.error("Error al actualizar el producto", error.message);
                reply.status(500).send("Error del servidor");
            }
        }
    });

    fastify.delete("/:id", {
        onRequest: [fastify.authenticate],
        handler: async (request, reply) => {
            const id = request.params.id;
            try {
                const res = await query(deleteProductoQuery, [id]);
                reply.code(204);
                return res.rows[0];
            } catch (error) {
                console.error("Error al eliminar el producto", error.message);
                reply.status(500).send("Error del servidor");
            }
        }
    });

}
