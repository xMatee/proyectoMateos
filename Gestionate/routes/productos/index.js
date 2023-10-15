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
    fastify.get("/", async (request, reply) => {
        try {
            const res = await query(getAllProductosQuery);
            return res.rows;
        } catch (error) {
            console.error("Error al obtener productos", error.message);
            reply.status(500).send("Error del servidor");
        }
    });
    fastify.post("/", { schema: schemas.createProductSchema }, async (request, reply) => {
        const { nombre } = request.body;

        try {
            const res = await query(insertProductoQuery, [nombre]);
            return res.rows[0];
        } catch (error) {
            console.error("Error al crear el producto no asociado a un gasto", error.message);
            reply.status(500).send("Error del servidor");
        }
    });

    fastify.get("/:id", async (request, reply) => {
        const id = request.params.id;
        try {
            const res = await query(getProductoByIdQuery, [id]);
            return res.rows[0];
        } catch (error) {
            console.error("Error al obtener el producto", error.message);
            reply.status(500).send("Error del servidor");
        }
    });

    fastify.put("/:id", { schema: schemas.editProductSchema }, async (request, reply) => {
        const id = request.params.id;
        const { nombre, gasto_id } = request.body;
        try {
            const res = await query(updateProductoQuery, [nombre, gasto_id, id]);
            return res.rows[0];
        } catch (error) {
            console.error("Error al actualizar el producto", error.message);
            reply.status(500).send("Error del servidor");
        }
    });

    fastify.delete("/:id", { schema: schemas.deleteProductSchema }, async (request, reply) => {
        const id = request.params.id;
        try {
            const res = await query(deleteProductoQuery, [id]);
            return res.rows[0];
        } catch (error) {
            console.error("Error al eliminar el producto", error.message);
            reply.status(500).send("Error del servidor");
        }
    });

}
