import { query } from '../../DB/db.js';

export default async function (fastify, opts) {
    fastify.get('/', async function (request, reply) {
        const res = await query("SELECT * FROM public.gastos")
        return res.rows
        //paprobar
    })
}   