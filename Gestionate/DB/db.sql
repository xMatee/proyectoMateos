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

-- Insertar Datos en Usuarios
INSERT INTO Usuarios (nombre, email, contrasena)
VALUES ('Usuario 1', 'usuario1@example.com', 'contrasena1'),
       ('Usuario 2', 'usuario2@example.com', 'contrasena2');

-- Insertar Datos en Categorías
INSERT INTO Categorias (nombre)
VALUES ('Categoría A'),
       ('Categoría B');

-- Insertar Datos en Subcategorías
INSERT INTO Subcategorias (nombre, categoria_id)
VALUES ('Subcategoría 1', 1),
       ('Subcategoría 2', 1),
       ('Subcategoría 3', 2);

-- Insertar Datos en Productos
INSERT INTO Productos (nombre)
VALUES ('Producto 1'),
       ('Producto 2');

-- Insertar Datos en Gastos
INSERT INTO Gastos (cantidad, fecha, descripcion, categoria_id, subcategoria_id, usuario_id)
VALUES (100.50, '2023-08-15', 'Gasto 1', 1, 1, 1),
       (75.20, '2023-08-16', 'Gasto 2', 2, 3, 2);

-- Insertar Datos en Ingresos
INSERT INTO Ingresos (cantidad, fecha, descripcion, usuario_id)
VALUES (500.00, '2023-08-10', 'Ingreso 1', 1),
       (800.00, '2023-08-18', 'Ingreso 2', 2);

-- Insertar Datos en Gastos_Productos (Asociar Gastos a Productos)
INSERT INTO Gastos_Productos (gasto_id, producto_id)
VALUES (1, 1), -- Asocia Producto 1 al Gasto 1
       (2, 2); -- Asocia Producto 2 al Gasto 2;
