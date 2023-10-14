const createIncomeSchema = {
    "$id": "createIncomeSchema",
    "type": "object",
    "properties": {
      "cantidad": {
        "type": "number",
        "description": "Cantidad del ingreso."
      },
      "fecha": {
        "type": "string",
        "format": "date",
        "description": "Fecha del ingreso."
      },
      "descripcion": {
        "type": "string",
        "description": "Descripción adicional del ingreso."
      },
      "usuario_id": {
        "type": "integer",
        "description": "ID del usuario al que pertenece este ingreso."
      }
    },
    "required": ["cantidad", "fecha", "usuario_id"],
    "response": {
        201: {
            "$id": "incomeCreatedResponseSchema",
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

const incomeSchema = {
    createIncomeSchema
}

export default incomeSchema;