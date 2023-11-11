// Obtener todos los ingresos de un usuario
export const getAllIngresosQuery = `
SELECT * FROM ingresos WHERE usuario_id = $1;
`;

// Obtener un ingreso de un usuario por su ID
export const getIngresoByIdQuery = `
SELECT * FROM ingresos WHERE usuario_id = $1 AND id = $2;
`;
export const getIngresoByCategoriaQuery = `
  SELECT * FROM ingresos
  WHERE usuario_id = $1 AND categoria_id = $2;
`;

// Crear un nuevo ingreso para un usuario
export const insertIngresoQuery = `
  INSERT INTO ingresos (cantidad, fecha, descripcion, categoria_id, subcategoria_id, usuario_id)
  VALUES ($1, $2, $3, $4, $5, $6)
  RETURNING *;
`;

// Actualizar un ingreso de un usuario por su ID
export const updateIngresoQuery = `
UPDATE ingresos SET cantidad = $1, fecha = $2, descripcion = $3 WHERE usuario_id = $4 AND id = $5 RETURNING *;
`;

// Eliminar un ingreso de un usuario por su ID
export const deleteIngresoQuery = `
DELETE FROM ingresos WHERE usuario_id = $1 AND id = $2 RETURNING *;
`;
