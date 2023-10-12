
export const getUsersQuery = `
  SELECT * FROM public.usuarios;
`;

export const getUserByIdQuery = `
  SELECT * FROM public.usuarios WHERE id = $1;
`;

export const createUserQuery = `
  INSERT INTO public.usuarios (nombre, email, contrasena)
  VALUES ($1, $2, $3)
  RETURNING *;
`;

export const updateUserQuery = `
  UPDATE public.usuarios
  SET nombre = $1, email = $2, contrasena = $3
  WHERE id = $4
  RETURNING *;
`;

export const deleteUserQuery = `
  DELETE FROM public.usuarios WHERE id = $1;
`;
