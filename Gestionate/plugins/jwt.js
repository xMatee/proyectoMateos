import fp from 'fastify-plugin'
import jwt from "@fastify/jwt"

export default fp(async (fastify) => {
    fastify.register(jwt, {
        secret: process.env.JWT_SECRET
    })

    fastify.decorate("authenticate", async function (request, reply) {
        try {
            await request.jwtVerify()
        } catch (err) {
            console.log(err)
            reply.send(err)
        }
    })
})
