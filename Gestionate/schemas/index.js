import expenseSchemas from "./expenses.js";
import incomeSchema from "./incomes.js";
import userSchema from "./user.js";
import productSchemas from "./products.js";

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

const generic400ResponseSchema = {
    $id: "generic400ResponseSchema",
    "description": "Hubo un error",
    type: "null",
}


const schemas = {
    genericLinkSchema,
    generic204ResponseSchema,
    generic404ResponseSchema,
    generic400ResponseSchema,
    ...expenseSchemas,
    ...incomeSchema,
    ...userSchema,
    ...productSchemas
}
export default schemas; 