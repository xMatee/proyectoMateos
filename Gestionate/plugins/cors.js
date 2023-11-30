import fp from 'fastify-plugin'
import cors from '@fastify/cors'


export default fp(async (fastify) => {
    fastify.register(cors, {
        origin: ['http://localhost:4200', 'http://10.4.201.63:3000', 'http://localhost'],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true
    })
})
