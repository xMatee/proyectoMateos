const createUserSchema = {
    "$id": "createUserSchema",
    "type": "object",
    "properties": {
        "nombre": {
            "type": "string",
            "description": "Nombre del usuario."
        },
        "email": {
            "type": "string",
            "description": "Correo electrónico del usuario."
        },
        "contrasena": {
            "type": "string",
            "description": "Contraseña del usuario."
        }
    },
    "required": ["nombre", "email", "contrasena"]
}

const loginUserSchema = {
    "$id": "loginUserSchema",
    "type": "object",
    "properties": {
        "nombre": {
            "type": "string",
            "description": "Nombre del usuario."
        },
        "contrasena": {
            "type": "string",
            "description": "Contraseña del usuario."
        }
    },
    "required": ["nombre", "contrasena"],
    response: {
        201: {
            "$id": "userLoggedResponseSchema",
            "type": "object",
            "properties": {
                "mensaje": {
                    "type": "string",
                    "description": "Mensaje de éxito."
                }
            }
        },
        400: {
            "$id": "errorResponseSchema",
            "type": "object",
            "properties": {
                "error": {
                    "type": "string",
                    "description": "Mensaje de error."
                }
            }
        }
    }
}

const logoutUserSchema = {
    "$id": "logoutUserSchema",
    "type": "object",
    "properties": {
        "nombre": {
            "type": "string",
            "description": "Nombre del usuario."
        },
        "usuario_id": {
            "type": "integer",
            "description": "ID del usuario que se va a desloguear."
        }
    },
    "required": ["nombre", "usuario_id"],
    response: {
        201: {
            "$id": "userLogoutResponseSchema",
            "type": "object",
            "properties": {
                "mensaje": {
                    "type": "string",
                    "description": "Mensaje de éxito."
                }
            }
        },
        400: {
            "$id": "errorResponseSchema",
            "type": "object",
            "properties": {
                "error": {
                    "type": "string",
                    "description": "Mensaje de error."
                }
            }
        }
    }
}

const userSchemas = {
    createUserSchema,
    loginUserSchema,
    logoutUserSchema
}

export default userSchemas;