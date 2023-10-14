import expenseSchemas from "./expenses.js";
import incomeSchema from "./incomes.js";
import userSchema from "./user.js";
import productSchema from "./products.js";

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

const errorResponseSchema = {
    "$id": "errorResponseSchema",
    "type": "object",
    "properties": {
      "error": {
        "type": "string",
        "description": "Mensaje de error."
      }
    }
  };

// Quede en la 5 como ejemplo, cuando esten corregidos seguir agregando

const schemas = {
    genericLinkSchema,
    generic204ResponseSchema,
    generic404ResponseSchema,
    errorResponseSchema,
    ...expenseSchemas,
    ...incomeSchema,
    ...userSchema,
    ...productSchema
}
export default schemas; 