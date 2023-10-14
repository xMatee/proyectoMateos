### Documentación Rest


##### 1. Crear un Nuevo Usuario
**Descripción:**
Permite a los usuarios crear un nuevo perfil de usuario.
**Ruta:**
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

##### 2. Crear un Nuevo Gasto 
**Descripción:**
Permite a los usuarios crear un nuevo registro de gasto.
**Ruta:**
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

##### 3. Loguearse con un usuario
**Descripción:**
Permite a los usuarios iniciar sesión con su cuenta
**Ruta:**
POST /api/usuarios/login
Schem:
{
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
},
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

##### 4. Desloguearse con un usuario
**Descripción:**
Permite a los usuarios cerrar sesión con su cuenta
**Ruta:**
PUT /api/usuarios/
Schem:
{
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
  "required": ["nombre", "usuario_id],
},
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

##### 5. Crear categoría
**Descripción:**
Permite a los usuarios crear una categoría para sus gastos
**Ruta:**
POST /api/gastos/categorias
Schem:
{
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
    }
  },
  "usuario_id": {
      "type": "integer",
      "description": "ID del usuario al que pertenece esta categoría."
    }
  "required": ["nombre", "usuario_id"]
},
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

##### 6. Crear subcategoría
**Descripción:**
Permite a los usuarios crear una subcategoría para sus gastos
**Ruta:**
POST /api/gastos/categorias/subcategorias
Schem:
{
  "$id": "createSubcategorySchema",
  "type": "object",
  "properties": {
    "nombre": {
      "type": "string",
      "description": "Nombre de la subcategoría."
    },
    "descripcion": {
      "type": "string",
      "description": "Descripción adicional de la subcategoría."
    },
    "categoria_id": {
      "type": "integer",
      "description": "ID de la categoría principal a la que pertenece esta subcategoría."
    },
    "usuario_id": {
      "type": "integer",
      "description": "ID del usuario al que pertenece esta subcategoría."
    }
  },
  "required": ["nombre", "categoria_id", "usuario_id"]
}
response: {
201: {
  "$id": "subcategoryCreatedResponseSchema",
  "type": "object",
  "properties": {
    "mensaje": {
      "type": "string",
      "description": "Mensaje de éxito."
    }
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

##### 7. Agregar gasto a categoría
**Descripción:**
Permite a los usuarios asociar un gasto a una categoría
**Ruta:**
POST /api/gastos/{gasto_id}/categorias/{categoria_id}/
Schem:
{
  "$id": "addExpenseToCategorySchema",
  "type": "object",
  "properties": {
    "categoria_id": {
      "type": "integer",
      "description": "ID de la categoría."
    },
    "gasto_id": {
      "type": "integer",
      "description": "ID del gasto que se va a agregar."
    },
    "usuario_id": {
      "type": "integer",
      "description": "ID del usuario al que pertenece este gasto."
    }
  },
    "required": ["categoria_id", "gasto_id", "usuario_id"]
}
response: {
201: {
  "$id": "expenseAddedToCategoryResponseSchema",
  "type": "object",
  "properties": {
    "mensaje": {
      "type": "string",
      "description": "Mensaje de éxito."
    }
  }
}
400: {
   {
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
##### 8. Agregar gasto a subcategoría
**Descripción:**
Permite a los usuarios asociar un gasto a una subcategoría
**Ruta:**
POST /api/gastos/{gasto_id}/categorias/{categoria_id}/subcategoria/{categoria_id}
Schem:
{
  "$id": "addExpenseToSubcategorySchema",
  "type": "object",  
  "properties": {
    "categoria_id": {
      "type": "integer",
      "description": "ID de la categoría."
    },
   "subcategoria_id": {
      "type": "integer",
      "description": "ID de la categoría."
    },
    "gasto_id": {
      "type": "integer",
      "description": "ID del gasto que se va a agregar."
    },
    "usuario_id": {
      "type": "integer",
      "description": "ID del usuario al que pertenece este gasto."
    }
  },
  "required": ["categoria_id", "subcategoria_id", "gasto_id", "usuario_id"]
}
response: {
201: {
  "$id": "expenseAddedToSubcategoryResponseSchema",
  "type": "object",
  "properties": {
    "mensaje": {
      "type": "string",
      "description": "Mensaje de éxito."
    }
  }
}
400: {
   {
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

##### 9. Obtener historial de gastos
**Descripción:**
Permite a los usuarios ver sus gastos ordenados por fecha
**Ruta:**
GET /api/gastos
Schem:
200: {
  "$id": "expenseListResponseSchema",
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "description": "ID del gasto."
      },
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
    "required": ["id", "cantidad", "fecha", "categoria_id", "usuario_id"]
  }
}
400: {
   {
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

##### 11. Obtener gráfico de gastos por categoría
**Descripción:**
Permite a los usuarios ver sus gastos de acuerdo a sus categorías
**Ruta:**
GET /api/gastos/graficos
Schem:
200:{
  "$id": "expenseGraphicResponseSchema",
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "categoria_id": {
        "type": "string",
        "description": "ID de la categoría."
      },
      "total_gastado": {
        "type": "number",
        "description": "Total gastado en esta categoría."
      }
    },
    "required": ["categoria", "total_gastado"]
  }
}

"400": {
    "$id": "errorResponseSchema",
    "type": "object",
    "properties": {
      "error": {
        "type": "string",
        "description": "Mensaje de error."
    }
  }
}

##### 12. Búsqueda de gastos entre 2 fechas
**Descripción:**
Permite a los usuarios ver sus gastos entre dos fechas
**Ruta:**
GET /api/gastos/busqueda
Schem:
200: {
  "$id": "expenseSearchResponseSchema",
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "fecha_inicial": {
        "type": "string",
        "format": "date",
        "description": "Fecha desde donde se va a comenzar a contabilizar los gastos."
      },
      "fecha_final": {
        "type": "string",
        "format": "date",
        "description": "Fecha desde donde se a terminar de contabilizar los gastos"
      }
    },
    "required": ["fecha_inicial", "fecha_final"]
  }
}
"400": {
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

##### 13. Registrar ingresos
**Descripción:**
Permite a los usuarios registrar sus ingresos
**Ruta:**
POST /api/ingresos
Schem:
{
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
  "required": ["cantidad", "fecha", "usuario_id"]
}
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

##### 14. Editar gastos
**Descripción:**
Permite a los usuarios editar sus gastos
**Ruta:**
PUT /api/gastos/{gasto_id}
Schem:
{
  "$id": "editExpenseSchema",
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
  "required": ["cantidad", "fecha", "categoria_id", "usuario_id"]
}
"response": {
200: {
  "$id": "expenseEditedResponseSchema",
  "type": "object",
  "properties": {
    "mensaje": {
      "type": "string",
      "description": "Mensaje de éxito."
      }
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

##### 15. Eliminar gastos
**Descripción:**
Permite a los usuarios eliminar sus gastos
**Ruta:**
DELETE /api/gastos/{gasto_id}
Schem:
"response": {
200: {
  "$id": "expenseDeletedResponseSchema",
  "type": "object",
  "properties": {
    "mensaje": {
      "type": "string",
      "description": "Mensaje de éxito."
      }
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

##### 16. Estadísticas mensuales de gastos
**Descripción:**
Permite a los usuarios ver unas estadísticas mensuales
**Ruta:**
GET /api/gastos/estadisticas
Schem:
200: {
  "$id": "monthlyExpenseStatisticsResponseSchema",
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "mes": {
        "type": "string",
        "description": "Mes y año en formato 'YYYY-MM' (por ejemplo, '2023-01')."
      },
      "total_gastado": {
        "type": "number",
        "description": "Total gastado en ese mes."
      }
    },
    "required": ["mes", "total_gastado"]
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

##### 17. Crear productos
**Descripción:**
Permite a los usuarios crear productos para luego asociarlos a sus agastos
**Ruta:**
POST /api/productos
Schem:
{
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
  "required": ["nombre"]
}
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
  }
400: {
{
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

##### 18. Editar productos
**Descripción:**
Permite a los usuarios editar productos
**Ruta:**
PUT /api/productos/{producto_id}
Schem:
{
  "$id": "editProductSchema",
  "type": "object",
  "properties": {
    "nombre": {
      "type": "string",
      "description": "Nuevo nombre del producto."
    },
    "descripcion": {
      "type": "string",
      "description": "Nueva descripción del producto."
    }
  },
"required": ["nombre", "descripcion"],
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
{
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

##### 19. Eliminar productos
**Descripción:**
Permite a los usuarios eliminar productos
**Ruta:**
DELETE /api/productos/{producto_id}
Schem:
200: {
  "$id": "productDeletedResponseSchema",
  "type": "object",
  "properties": {
    "mensaje": {
      "type": "string",
      "description": "Mensaje de éxito."
    }
  }
}
400: {
  "$id": "errorResponseSchema",
  "type": "object",
  "properties": {
    "error": {
      "type": "string",
      "description": "Mensaje de error que indica la razón del error en la solicitud."
    }
  }
}

##### 20. Asociar gasto a producto
**Descripción:**
Permite a los usuarios editar productos
**Ruta:**
POST /api/gastos/{gasto_id}/asociar-producto
Schem:
{
  "$id": "associateProductToExpenseSchema",
  "type": "object",
  "properties": {
    "producto_id": {
      "type": "integer",
      "description": "ID del producto a asociar al gasto."
    }
  },
  "required": ["producto_id"]
}
"response": {
{
  "$id": "productAssociatedToExpenseResponseSchema",
  "type": "object",
  "properties": {
    "mensaje": {
      "type": "string",
      "description": "Mensaje de éxito."
      }
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
