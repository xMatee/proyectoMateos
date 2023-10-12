**Documentación de la Base de Datos:**

1. Tabla: Usuarios
Descripción:
Esta tabla almacena información sobre los usuarios registrados en el sistema
Campos:
id (integer): Identificador único del usuario (PK)
nombre (string): Nombre del usuario
email (string): Correo electrónico del usuario
contrasena (string): Contraseña del usuario (encriptada

3. Tabla: Categorías
Descripción:
Almacena las categorías en las que se pueden clasificar los gastos
Campos:
id (integer): Identificador único de la categoría (PK)
nombre (string): Nombre de la categoría

3. Tabla: Subcategorías
Descripción:
Contiene subcategorías relacionadas a las categorías principales para una clasificación más detallada de los gastos
Campos:
id (integer): Identificador único de la subcategoría (PK)
nombre (string): Nombre de la subcategoría
categoria_id (integer): ID de la categoría principal a la que pertenece esta subcategoría (FK a Categorías)

4. Tabla: Productos
Descripción:
Almacena información sobre productos asociados a los gastos
Campos:
id (integer): Identificador único del producto (PK)
nombre (string): Nombre del producto

5. Tabla: Gastos
Descripción:
Registra los gastos realizados por los usuarios
Campos:
id (integer): Identificador único del gasto (PK)
cantidad (numeric): Cantidad gastada
fecha (date): Fecha del gasto
descripcion (string, opcional): Descripción adicional del gasto
categoria_id (integer): ID de la categoría a la que pertenece este gasto (FK a Categorías)
subcategoria_id (integer, opcional): ID de la subcategoría a la que pertenece este gasto (FK a Subcategorías)
usuario_id (integer): ID del usuario al que pertenece este gasto (FK a Usuarios)

6. Tabla: Ingresos
Descripción:
Registra los ingresos realizados por los usuarios.
Campos:
id (integer): Identificador único del ingreso (PK
cantidad (numeric): Cantidad ingresada
fecha (date): Fecha del ingreso
descripcion (string, opcional): Descripción adicional del ingreso
usuario_id (integer): ID del usuario al que pertenece este ingreso (FK a Usuarios)

7. Tabla: Gastos_Productos (Para asociar gastos a productos)
Descripción:
Permite asociar productos a gastos para un registro detallado de las compras
Campos:
id (integer): Identificador único de la asociación (PK)
gasto_id (integer): ID del gasto asociado (FK a Gastos)
producto_id (integer): ID del producto asociado (FK a Productos)
