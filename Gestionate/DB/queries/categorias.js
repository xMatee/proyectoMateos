export const getAllCategoriasQuery = `
  SELECT * FROM categorias;
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
  DELETE FROM categorias
  WHERE id = $1
  RETURNING *;
`;

export const getAllSubcategoriasQuery = `
  SELECT * FROM subcategorias;
`;

export const getSubcategoriaByIdQuery = `
  SELECT * FROM subcategorias WHERE id = $1;
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
  DELETE FROM subcategorias
  WHERE id = $1
  RETURNING *;
`;
