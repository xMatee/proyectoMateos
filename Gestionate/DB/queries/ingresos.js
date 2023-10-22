// Obtener todos los ingresos de un usuario
export const getAllIngresosQuery = `
SELECT * FROM Ingresos WHERE usuario_id = $1;
`;

// Obtener un ingreso de un usuario por su ID
export const getIngresoByIdQuery = `
SELECT * FROM Ingresos WHERE usuario_id = $1 AND id = $2;
`;

// Crear un nuevo ingreso para un usuario
export const insertIngresoQuery = `
INSERT INTO Ingresos (cantidad, fecha, descripcion, usuario_id) VALUES ($1, $2, $3, $4) RETURNING *;
`;

// Actualizar un ingreso de un usuario por su ID
export const updateIngresoQuery = `
UPDATE Ingresos SET cantidad = $1, fecha = $2, descripcion = $3 WHERE usuario_id = $4 AND id = $5 RETURNING *;
`;

// Eliminar un ingreso de un usuario por su ID
export const deleteIngresoQuery = `
DELETE FROM Ingresos WHERE usuario_id = $1 AND id = $2 RETURNING *;
`;
