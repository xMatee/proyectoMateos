export const getAllGastosQuery = `
  SELECT * FROM gastos;
`;

export const getGastoByIdQuery = `
  SELECT * FROM gastos WHERE id = $1;
`;

export const insertGastoQuery = `
  INSERT INTO gastos (cantidad, fecha, descripcion, categoria_id, subcategoria_id, usuario_id)
  VALUES ($1, $2, $3, $4, $5, $6)
  RETURNING *;
`;

export const updateGastoQuery = `
  UPDATE gastos
  SET cantidad = $2, fecha = $3, descripcion = $4, categoria_id = $5, subcategoria_id = $6, usuario_id = $7
  WHERE id = $1
  RETURNING *;
`;

export const deleteGastoQuery = `
  DELETE FROM gastos
  WHERE id = $1
  RETURNING *;
`;


