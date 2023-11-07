import { query } from '../../DB/db.js';
import schemas from "../../schemas/index.js";
import {
    getAllGastosQuery,
    getGastoByIdQuery,
    insertGastoQuery,
    updateGastoQuery,
    deleteGastoQuery,
} from "../../DB/queries/gastos.js";
import {
    associateProductoToGastoQuery,
    disassociateProductoFromGastoQuery,
} from "../../DB/queries/productos.js";
export default async function (fastify, opts) {
    // Obtener todos los gastos de un usuario
    fastify.get("/", async function (request, reply) {
        try {
            const res = await query(getAllGastosQuery);
            return res.rows;
        } catch (error) {
            console.error("Error al obtener gastos", error.message);
            reply.status(500).send("Error del servidor");
        }
    });

    // Obtener un gasto de un usuario por su ID
    fastify.get("/:id", async function (request, reply) {
        const { id } = request.params;
        try {
            const res = await query(getGastoByIdQuery, [id]);
            return res.rows[0];
        } catch (error) {
            console.error("Error al obtener el gasto", error.message);
            reply.status(500).send("Error del servidor");
        }
    });

    // Crear un nuevo gasto para un usuario
    fastify.post("/", { schema: schemas.createExpenseSchema }, async function (request, reply) {
        const { cantidad, fecha, descripcion, categoria_id, subcategoria_id } = request.body;
        try {
            const res = await query(insertGastoQuery, [cantidad, fecha, descripcion, categoria_id, subcategoria_id]);
            reply.code(201);
            return res.rows[0];
        } catch (error) {
            console.error("Error al crear el gasto", error.message);
            reply.status(500).send("Error del servidor");
        }
    });

    // Actualizar un gasto de un usuario por su ID
    fastify.put("/:id", { schema: schemas.editExpenseSchema }, async function (request, reply) {
        const { id } = request.params;
        const { cantidad, fecha, descripcion, categoria_id, subcategoria_id } = request.body;
        try {
            const res = await query(updateGastoQuery, [cantidad, fecha, descripcion, categoria_id, subcategoria_id, id]);
            return res.rows[0];
        } catch (error) {
            console.error("Error al actualizar el gasto", error.message);
            reply.status(500).send("Error del servidor");
        }
    });

    // Eliminar un gasto de un usuario por su ID
    fastify.delete("/:id", { schema: schemas.expenseDeletedResponseSchema }, async function (request, reply) {
        const { id } = request.params;
        try {
            const res = await query(deleteGastoQuery, [id]);
            reply.code(204);
            return res.rows[0];
        } catch (error) {
            console.error("Error al eliminar el gasto", error.message);
            reply.status(500).send("Error del servidor");
        }
    });

    // PRODUCTOS ASOCIADOS A GASTOS

    // ASOCIAR PRODUCTO A UN GASTO DE UN USUARIO
    fastify.post("/:gasto_id/productos/:producto_id", async (request, reply) => {
        const { gasto_id, producto_id } = request.params;
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
    fastify.delete("/:gasto_id/productos/:producto_id", async (request, reply) => {
        const { gasto_id, producto_id } = request.params;
        try {
            const res = await query(disassociateProductoFromGastoQuery, [gasto_id, producto_id]);
            reply.code(204);
            return res.rows[0];
        } catch (error) {
            console.error("Error al desasociar producto de gasto", error.message);
            reply.status(500).send("Error del servidor");
        }
    });
}

