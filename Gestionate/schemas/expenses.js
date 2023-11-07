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

const createExpenseCategorySchema = {
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

    "required": ["nombre", "usuario_id"]
}

const createExpenseSubcategorySchema = {
    "$id": "createExpenseSubcategorySchema",
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

const addExpenseToCategorySchema = {
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
    "required": ["categoria_id", "gasto_id", "usuario_id"],
    "response": {
        201: {
            "$id": "expenseAddedToCategoryResponseSchema",
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

const addExpenseToSubategorySchema = {
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
    "required": ["categoria_id", "subcategoria_id", "gasto_id", "usuario_id"],
  
    "response": {
        201: {
            "$id": "expenseAddedToSubcategoryResponseSchema",
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

// Esquema para Obtener historial de gastos
const expenseListResponseSchema = {
    "$id": "expenseListResponseSchema",
    "type": "array",
    "items": {
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
        }
      },
      "required": ["cantidad", "fecha", "categoria_id", "usuario_id"]
    }
  };
  
  // Esquema para Obtener gráfico de gastos por categoría
  const expenseGraphicResponseSchema = {
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
      "required": ["categoria_id", "total_gastado"]
    }
  };
  
  // Esquema para Búsqueda de gastos entre 2 fechas
  const expenseSearchResponseSchema = {
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
  };

  const editExpenseSchema = {
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
    "required": ["cantidad", "fecha", "categoria_id", "usuario_id"],

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

const expenseDeletedResponseSchema = {
    "$id": "expenseDeletedResponseSchema",
    "type": "object",
    "properties": {
      "mensaje": {
        "type": "string",
        "description": "Mensaje de éxito."
        }
    }
}

const monthlyExpenseStatisticsResponseSchema = {
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

const productAssociatedToExpenseResponseSchema = {
    "$id": "associateProductToExpenseSchema",
    "type": "object",
    "properties": {
      "producto_id": {
        "type": "integer",
        "description": "ID del producto a asociar al gasto."
      }
    },
    "required": ["producto_id"],
    "response": {
    200: {
        "$id": "productAssociatedToExpenseResponseSchema",
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

const expenseSchemas = {
    createExpenseSchema,
    editExpenseSchema,
    expenseDeletedResponseSchema,
    expenseSearchResponseSchema,
    monthlyExpenseStatisticsResponseSchema,
    productAssociatedToExpenseResponseSchema,
    expenseGraphicResponseSchema,
    expenseListResponseSchema,
    addExpenseToSubategorySchema,
    addExpenseToCategorySchema,
    createExpenseSubcategorySchema,
    createExpenseCategorySchema
}

export default expenseSchemas;