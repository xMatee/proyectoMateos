import fastify from 'fastify'
import fp from 'fastify-plugin'
import swagger from "@fastify/swagger"
import swaggerui from "@fastify/swagger-ui"

const url = `http://${process.env.FASTIFY_HOST}:${process.env.FASTIFY_PORT}`;

export default fp(async (fastify, opts) => {
    fastify.register(swagger, {
        openapi: {
            info: {
                title: 'OPEN API de Gestionate',
                description: 'Gestionate',
                version: '0.1.0',
            },
            servers: [
                {
                    url: url, // Host y puerto
                    description: 'Desc',
                },
            ],
            components: {
                securitySchemes: {
                    apiKey: {
                        type: 'apiKey',
                        name: 'apiKey',
                        in: 'header',
                    },
                },
            },
            consumes: ['application/json'],
            produces: ['application/json'],
        },
        hideUntagged: true,
        exposeRoute: true,
    })


    fastify.register(swaggerui, {
        routePrefix: '/docs',
        uiConfig: {
            docExpansion: 'full',
            deepLinking: false
        },
        uiHooks: {
            onRequest: function (request, reply, next) { next() },
            preHandler: function (request, reply, next) { next() },
        },
        staticCSP: false,
    })
})