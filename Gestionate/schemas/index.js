const genericLinkSchema = {
    $id: "genericLinkSchema",
    "type": "object",
    "properties": {
        "href": { "type": "string" }
    },
    "required": ["href"]
}

const generic204ResponseSchema = {
    $id: "generic204ResponseSchema",
    "description": "Ok. No elements found",
    type: "null",
}

const generic404ResponseSchema = {
    $id: "generic404ResponseSchema",
    "type": "object",
    "properties": {
        "href": { "type": "string" }
    },
    "required": ["message"]
}

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
    "required": ["nombre", "email", "contrasena"],
    response: {
        201: {
            "$id": "userCreatedResponseSchema",
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

const createExpenseSchema = {
    "$id": "createExpenseSchema",
    "type": "object",
    "properties": {
        "cantidad": {
            "type": "number",
            "description": "Cantidad gastada."
        },
        "fecha": {
            "type": "string",
            "format": "date",
            "description": "Fecha del gasto."
        },
        "descripcion": {
            "type": "string",
            "description": "Descripción adicional del gasto."
        },
        "categoria_id": {
            "type": "integer",
            "description": "ID de la categoría a la que pertenece este gasto."
        },
        "subcategoria_id": {
            "type": "integer",
            "description": "ID de la subcategoría a la que pertenece este gasto."
        },
        "usuario_id": {
            "type": "integer",
            "description": "ID del usuario al que pertenece este gasto."
        }
    },
    "required": ["cantidad", "fecha", "categoria_id", "usuario_id"],
    201: {
        "$id": "expenseCreatedResponseSchema",
        "type": "object",
        "properties": {
            "mensaje": {
                "type": "string",
                "description": "Mensaje de éxito."
            }
        },
    },
    400: {
        "$id": "errorResponseSchema",
        "type": "object",
        "properties": {
            "error": {
                "type": "string",
                "description": "Mensaje de error."
            }
        },
    }
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

const createExpenseCategory = {
    "$id": "createExpenseCategorySchema",
    "type": "object",
    "properties": {
        "nombre": {
            "type": "string",
            "description": "Nombre de la categoría"
        },
        "description": {
            "type": "integer",
            "description": "Descripción de la categoría."
        },
        "usuario_id": {
            "type": "integer",
            "description": "ID del usuario al que pertenece esta categoría."
        },
    },

    "required": ["nombre", "usuario_id"],
    response: {
        201: {
            "$id": "expenseCategoryCreatedResponseSchema",
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
// Quede en la 5 como ejemplo, cuando esten corregidos seguir agregando

const schemas = {
    generic204ResponseSchema, generic404ResponseSchema, genericLinkSchema, createUserSchema, createExpenseSchema, loginUserSchema, logoutUserSchema, createExpenseCategory,
}
export default schemas; 