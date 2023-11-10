export const getAllCategoriasByUserQuery = `
SELECT * FROM categorias WHERE estado = 1 AND usuario_id = $1;
`;

export const getCategoriaByIdAndUserQuery = `
SELECT * FROM categorias WHERE id = $1 AND usuario_id = $2;
`;

export const insertCategoriaForUserQuery = `
INSERT INTO categorias (nombre, usuario_id, tipo)
VALUES ($1, $2, $3)
RETURNING *;
`;


export const updateCategoriaForUserQuery = `
UPDATE categorias
SET nombre = $2
WHERE id = $1 AND usuario_id = $3
RETURNING *;
`;

export const deleteCategoriaForUserQuery = `
UPDATE categorias SET estado = -1
WHERE id = $1 AND usuario_id = $2;
`;


//pa que no haya error luego borrar
export const getAllCategoriasQuery = `
SELECT * FROM categorias WHERE estado = 1;
`;

export const getCategoriaByIdQuery = `
  SELECT * FROM categorias WHERE id = $1;
`;

export const insertCategoriaQuery = `
  INSERT INTO categorias (nombre)
  VALUES ($1)
  RETURNING *;
`;

export const updateCategoriaQuery = `
  UPDATE categorias
  SET nombre = $2
  WHERE id = $1
  RETURNING *;
`;

export const deleteCategoriaQuery = `
UPDATE categorias SET estado = -1 WHERE id = $1;

`;

export const getAllSubcategoriasQuery = `
  SELECT * FROM subcategorias;
`;

export const getSubcategoriaByIdQuery = `
  SELECT * FROM subcategorias WHERE estado = 1;
`;

export const insertSubcategoriaQuery = `
  INSERT INTO subcategorias (nombre, categoria_id)
  VALUES ($1, $2)
  RETURNING *;
`;

export const updateSubcategoriaQuery = `
  UPDATE subcategorias
  SET nombre = $2, categoria_id = $3
  WHERE id = $1
  RETURNING *;
`;

export const deleteSubcategoriaQuery = `
  UPDATE subcategorias SET estado = -1
`;