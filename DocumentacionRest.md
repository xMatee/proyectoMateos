1. Crear un Nuevo Usuario
Descripción:
Permite a los usuarios crear un nuevo perfil de usuario.
Ruta:
POST /api/usuarios
Schem:
{
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
},
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

2. Crear un Nuevo Gasto
Descripción:
Permite a los usuarios crear un nuevo registro de gasto.
Ruta:
POST /api/gastos
Schem:
{
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

},
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


