const createProductSchema = {
  "$id": "createProductSchema",
  "type": "object",
  "properties": {
    "nombre": {
      "type": "string",
      "description": "Nombre del producto."
    },
    "descripcion": {
      "type": "string",
      "description": "Descripción del producto."
    }
  },
  "required": ["nombre"],
  "response": {
    201: {
      "$id": "productCreatedResponseSchema",
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

const editProductSchema = {
  "$id": "editProductSchema",
  "type": "object",
  "properties": {
    "producto_id": {
      "type": "string",
      "description": "ID del producto."
    },
    "nombre": {
      "type": "string",
      "description": "Nuevo nombre del producto."
    },
    "descripcion": {
      "type": "string",
      "description": "Nueva descripción del producto."
    }
  }, "required": ["nombre", "descripcion"],
  "response": {
    200: {
      "$id": "productEditedResponseSchema",
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

const deleteProductSchema = {
  "$id": "productDeletedResponseSchema",
  "type": "object",
  "properties": {
    "mensaje": {
      "type": "string",
      "description": "Mensaje de éxito."
    }
  }
}

const productSchemas = {
  createProductSchema,
  editProductSchema,
  deleteProductSchema
}
export default productSchemas;