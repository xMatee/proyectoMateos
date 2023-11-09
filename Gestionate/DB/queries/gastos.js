export const getAllGastosQuery = `
  SELECT * FROM gastos WHERE usuario_id = $1;
`;

export const getGastoByIdQuery = `
  SELECT * FROM gastos WHERE usuario_id = $1 AND id = $2;
`;

export const insertGastoQuery = `
  INSERT INTO gastos (cantidad, fecha, descripcion, categoria_id, subcategoria_id, usuario_id)
  VALUES ($1, $2, $3, $4, $5, $6)
  RETURNING *;
`;

export const updateGastoQuery = `
  UPDATE gastos
  SET cantidad = $1, fecha = $2, descripcion = $3, categoria_id = $4, subcategoria_id = $5, usuario_id = $6
  WHERE id = $7
  RETURNING *;
`;

export const deleteGastoQuery = `
  DELETE FROM gastos
  WHERE usuario_id = $1 AND id = $2
  RETURNING *;
`;
export const getGastosByCategoriaQuery = `
  SELECT * FROM gastos
  WHERE usuario_id = $1 AND categoria_id = $2;
`;



