export const getSubcategoriasPorCategoriaQuery = `
SELECT * FROM subcategorias WHERE categoria_id = $1 AND estado = 1;
`;

export const getSubcategoriaPorIdYCategoriaQuery = `
SELECT * FROM subcategorias WHERE id = $1 AND categoria_id = $2 AND estado = 1;
`;

export const crearSubcategoriaQuery = `
INSERT INTO subcategorias (nombre, categoria_id, estado) VALUES ($1, $2, 1) RETURNING *;
`;

export const editarSubcategoriaQuery = `
UPDATE subcategorias SET nombre = $1, estado = 1 WHERE id = $2 AND categoria_id = $3 AND estado = 1 RETURNING *;
`;

export const eliminarSubcategoriaQuery = `
UPDATE subcategorias SET estado = -1 WHERE id = $1 AND categoria_id = $2 AND estado = 1 RETURNING *;
`;
