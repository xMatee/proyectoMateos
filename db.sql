-- Crear la tabla de Usuarios
CREATE TABLE Usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255),
    email VARCHAR(255),
    contrasena VARCHAR(255)
);

-- Crear la tabla de Categorías
CREATE TABLE Categorias (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255)
);

-- Crear la tabla de Subcategorías
CREATE TABLE Subcategorias (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255),
    categoria_id INTEGER REFERENCES Categorias(id)
);

-- Crear la tabla de Productos
CREATE TABLE Productos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255)
);

-- Crear la tabla de Gastos
CREATE TABLE Gastos (
    id SERIAL PRIMARY KEY,
    cantidad NUMERIC,
    fecha DATE,
    descripcion TEXT,
    categoria_id INTEGER REFERENCES Categorias(id),
    subcategoria_id INTEGER REFERENCES Subcategorias(id),
    usuario_id INTEGER REFERENCES Usuarios(id)
);

-- Crear la tabla de Ingresos
CREATE TABLE Ingresos (
    id SERIAL PRIMARY KEY,
    cantidad NUMERIC,
    fecha DATE,
    descripcion TEXT,
    usuario_id INTEGER REFERENCES Usuarios(id)
);

-- Crear la tabla de Gastos_Productos (para asociar gastos a productos)
CREATE TABLE Gastos_Productos (
    id SERIAL PRIMARY KEY,
    gasto_id INTEGER REFERENCES Gastos(id),
    producto_id INTEGER REFERENCES Productos(id)
);
