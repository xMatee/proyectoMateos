export const getSubcategoriasPorCategoriaQuery = `
SELECT * FROM Subcategorias WHERE categoria_id = $1;
`;

export const getSubcategoriaPorIdYCategoriaQuery = `
SELECT * FROM Subcategorias WHERE id = $1 AND categoria_id = $2;
`;

export const crearSubcategoriaQuery = `
INSERT INTO Subcategorias (nombre, categoria_id) VALUES ($1, $2) RETURNING *;
`;

export const editarSubcategoriaQuery = `
UPDATE Subcategorias SET nombre = $1 WHERE id = $2 AND categoria_id = $3 RETURNING *;
`;

export const eliminarSubcategoriaQuery = `
DELETE FROM Subcategorias WHERE id = $1 AND categoria_id = $2 RETURNING *;
`;


