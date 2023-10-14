import { query } from '../../DB/db.js';
import schemas from "../../schemas/index.js"

import {
    getUsersQuery,
    getUserByIdQuery,
    createUserQuery,
    updateUserQuery,
    deleteUserQuery
} from "../../DB/queries/users.js";

export default async function (fastify, opts) {
    //Obtener Todos los usuarios 
    fastify.get("/", async (request, reply) => {
        try {
            const res = await query(getUsersQuery);
            return res.rows;
        } catch (error) {
            console.error("Error al obtener usuarios", error.message);
            reply.status(500).send("Error del servidor");
        }
    });
    //Obtener usuario x id
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

    //Crear usuario
    fastify.post("/", { schema: schemas.createUserSchema }, async (request, reply) => {
        const { nombre, email, contrasena } = request.body;
        try {
            const res = await query(createUserQuery, [nombre, email, contrasena]);
            return res.rows[0];
        } catch (error) {
            console.error("Error al crear usuario", error.message);
            reply.status(500).send("Error del servidor");
        }
    });

    //Actualizar usuario
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

    //Eliminar usuario
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
}
