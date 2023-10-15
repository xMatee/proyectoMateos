export const getAllProductosQuery = `
  SELECT * FROM productos;
`;

export const getProductoByIdQuery = `
  SELECT * FROM productos WHERE id = $1;
`;

export const insertProductoQuery = `
  INSERT INTO productos (nombre) VALUES ($1) RETURNING *;
`;

export const updateProductoQuery = `
  UPDATE productos SET nombre = $1 WHERE id = $2 RETURNING *;
`;

export const deleteProductoQuery = `
  DELETE FROM productos WHERE id = $1 RETURNING *;
`;

export const associateProductoToGastoQuery = `
INSERT INTO gastos_productos (gasto_id, producto_id) VALUES ($1, $2) RETURNING *;
`;

export const disassociateProductoFromGastoQuery = `
DELETE FROM gastos_productos WHERE gasto_id = $1 AND producto_id = $2 RETURNING *;
`;