--
-- PostgreSQL database dump
--

-- Dumped from database version 15.4
-- Dumped by pg_dump version 15.4

-- Started on 2023-10-14 20:23:50

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 217 (class 1259 OID 16712)
-- Name: categorias; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categorias (
    id integer NOT NULL,
    nombre character varying(255)
);


ALTER TABLE public.categorias OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 16711)
-- Name: categorias_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.categorias_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.categorias_id_seq OWNER TO postgres;

--
-- TOC entry 3392 (class 0 OID 0)
-- Dependencies: 216
-- Name: categorias_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.categorias_id_seq OWNED BY public.categorias.id;


--
-- TOC entry 223 (class 1259 OID 16738)
-- Name: gastos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.gastos (
    id integer NOT NULL,
    cantidad numeric,
    fecha date,
    descripcion text,
    categoria_id integer,
    subcategoria_id integer,
    usuario_id integer
);


ALTER TABLE public.gastos OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 16737)
-- Name: gastos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.gastos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.gastos_id_seq OWNER TO postgres;

--
-- TOC entry 3393 (class 0 OID 0)
-- Dependencies: 222
-- Name: gastos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.gastos_id_seq OWNED BY public.gastos.id;


--
-- TOC entry 227 (class 1259 OID 16776)
-- Name: gastos_productos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.gastos_productos (
    id integer NOT NULL,
    gasto_id integer,
    producto_id integer
);


ALTER TABLE public.gastos_productos OWNER TO postgres;

--
-- TOC entry 226 (class 1259 OID 16775)
-- Name: gastos_productos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.gastos_productos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.gastos_productos_id_seq OWNER TO postgres;

--
-- TOC entry 3394 (class 0 OID 0)
-- Dependencies: 226
-- Name: gastos_productos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.gastos_productos_id_seq OWNED BY public.gastos_productos.id;


--
-- TOC entry 225 (class 1259 OID 16762)
-- Name: ingresos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ingresos (
    id integer NOT NULL,
    cantidad numeric,
    fecha date,
    descripcion text,
    usuario_id integer
);


ALTER TABLE public.ingresos OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 16761)
-- Name: ingresos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.ingresos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.ingresos_id_seq OWNER TO postgres;

--
-- TOC entry 3395 (class 0 OID 0)
-- Dependencies: 224
-- Name: ingresos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.ingresos_id_seq OWNED BY public.ingresos.id;


--
-- TOC entry 221 (class 1259 OID 16731)
-- Name: productos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.productos (
    id integer NOT NULL,
    nombre character varying(255)
);


ALTER TABLE public.productos OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 16730)
-- Name: productos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.productos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.productos_id_seq OWNER TO postgres;

--
-- TOC entry 3396 (class 0 OID 0)
-- Dependencies: 220
-- Name: productos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.productos_id_seq OWNED BY public.productos.id;


--
-- TOC entry 219 (class 1259 OID 16719)
-- Name: subcategorias; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.subcategorias (
    id integer NOT NULL,
    nombre character varying(255),
    categoria_id integer
);


ALTER TABLE public.subcategorias OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 16718)
-- Name: subcategorias_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.subcategorias_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.subcategorias_id_seq OWNER TO postgres;

--
-- TOC entry 3397 (class 0 OID 0)
-- Dependencies: 218
-- Name: subcategorias_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.subcategorias_id_seq OWNED BY public.subcategorias.id;


--
-- TOC entry 215 (class 1259 OID 16703)
-- Name: usuarios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuarios (
    id integer NOT NULL,
    nombre character varying(255),
    email character varying(255),
    contrasena character varying(255)
);


ALTER TABLE public.usuarios OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 16702)
-- Name: usuarios_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.usuarios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.usuarios_id_seq OWNER TO postgres;

--
-- TOC entry 3398 (class 0 OID 0)
-- Dependencies: 214
-- Name: usuarios_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.usuarios_id_seq OWNED BY public.usuarios.id;


--
-- TOC entry 3204 (class 2604 OID 16715)
-- Name: categorias id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categorias ALTER COLUMN id SET DEFAULT nextval('public.categorias_id_seq'::regclass);


--
-- TOC entry 3207 (class 2604 OID 16741)
-- Name: gastos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gastos ALTER COLUMN id SET DEFAULT nextval('public.gastos_id_seq'::regclass);


--
-- TOC entry 3209 (class 2604 OID 16779)
-- Name: gastos_productos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gastos_productos ALTER COLUMN id SET DEFAULT nextval('public.gastos_productos_id_seq'::regclass);


--
-- TOC entry 3208 (class 2604 OID 16765)
-- Name: ingresos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ingresos ALTER COLUMN id SET DEFAULT nextval('public.ingresos_id_seq'::regclass);


--
-- TOC entry 3206 (class 2604 OID 16734)
-- Name: productos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.productos ALTER COLUMN id SET DEFAULT nextval('public.productos_id_seq'::regclass);


--
-- TOC entry 3205 (class 2604 OID 16722)
-- Name: subcategorias id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subcategorias ALTER COLUMN id SET DEFAULT nextval('public.subcategorias_id_seq'::regclass);


--
-- TOC entry 3203 (class 2604 OID 16706)
-- Name: usuarios id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios ALTER COLUMN id SET DEFAULT nextval('public.usuarios_id_seq'::regclass);


--
-- TOC entry 3376 (class 0 OID 16712)
-- Dependencies: 217
-- Data for Name: categorias; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.categorias (id, nombre) FROM stdin;
1	Nombre de la categoría
22	Nombre de la cataaaaegoría
\.


--
-- TOC entry 3382 (class 0 OID 16738)
-- Dependencies: 223
-- Data for Name: gastos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.gastos (id, cantidad, fecha, descripcion, categoria_id, subcategoria_id, usuario_id) FROM stdin;
19	100	2023-08-31	Descripción del gasto	1	1	3
\.


--
-- TOC entry 3386 (class 0 OID 16776)
-- Dependencies: 227
-- Data for Name: gastos_productos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.gastos_productos (id, gasto_id, producto_id) FROM stdin;
\.


--
-- TOC entry 3384 (class 0 OID 16762)
-- Dependencies: 225
-- Data for Name: ingresos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ingresos (id, cantidad, fecha, descripcion, usuario_id) FROM stdin;
\.


--
-- TOC entry 3380 (class 0 OID 16731)
-- Dependencies: 221
-- Data for Name: productos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.productos (id, nombre) FROM stdin;
17	Nuevo Producto
\.


--
-- TOC entry 3378 (class 0 OID 16719)
-- Dependencies: 219
-- Data for Name: subcategorias; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.subcategorias (id, nombre, categoria_id) FROM stdin;
1	Nombre de la subcategoría	1
32	Nombre de la subcateaaaagoría	22
\.


--
-- TOC entry 3374 (class 0 OID 16703)
-- Dependencies: 215
-- Data for Name: usuarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usuarios (id, nombre, email, contrasena) FROM stdin;
3	Nuevo Nombre del Usuario	nuevomail	nuevacontra
\.


--
-- TOC entry 3399 (class 0 OID 0)
-- Dependencies: 216
-- Name: categorias_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.categorias_id_seq', 22, true);


--
-- TOC entry 3400 (class 0 OID 0)
-- Dependencies: 222
-- Name: gastos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.gastos_id_seq', 19, true);


--
-- TOC entry 3401 (class 0 OID 0)
-- Dependencies: 226
-- Name: gastos_productos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.gastos_productos_id_seq', 4, true);


--
-- TOC entry 3402 (class 0 OID 0)
-- Dependencies: 224
-- Name: ingresos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.ingresos_id_seq', 8, true);


--
-- TOC entry 3403 (class 0 OID 0)
-- Dependencies: 220
-- Name: productos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.productos_id_seq', 17, true);


--
-- TOC entry 3404 (class 0 OID 0)
-- Dependencies: 218
-- Name: subcategorias_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.subcategorias_id_seq', 32, true);


--
-- TOC entry 3405 (class 0 OID 0)
-- Dependencies: 214
-- Name: usuarios_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.usuarios_id_seq', 23, true);


--
-- TOC entry 3213 (class 2606 OID 16717)
-- Name: categorias categorias_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categorias
    ADD CONSTRAINT categorias_pkey PRIMARY KEY (id);


--
-- TOC entry 3219 (class 2606 OID 16745)
-- Name: gastos gastos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gastos
    ADD CONSTRAINT gastos_pkey PRIMARY KEY (id);


--
-- TOC entry 3223 (class 2606 OID 16781)
-- Name: gastos_productos gastos_productos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gastos_productos
    ADD CONSTRAINT gastos_productos_pkey PRIMARY KEY (id);


--
-- TOC entry 3221 (class 2606 OID 16769)
-- Name: ingresos ingresos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ingresos
    ADD CONSTRAINT ingresos_pkey PRIMARY KEY (id);


--
-- TOC entry 3217 (class 2606 OID 16736)
-- Name: productos productos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.productos
    ADD CONSTRAINT productos_pkey PRIMARY KEY (id);


--
-- TOC entry 3215 (class 2606 OID 16724)
-- Name: subcategorias subcategorias_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subcategorias
    ADD CONSTRAINT subcategorias_pkey PRIMARY KEY (id);


--
-- TOC entry 3211 (class 2606 OID 16710)
-- Name: usuarios usuarios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id);


--
-- TOC entry 3225 (class 2606 OID 16746)
-- Name: gastos gastos_categoria_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gastos
    ADD CONSTRAINT gastos_categoria_id_fkey FOREIGN KEY (categoria_id) REFERENCES public.categorias(id);


--
-- TOC entry 3229 (class 2606 OID 16782)
-- Name: gastos_productos gastos_productos_gasto_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gastos_productos
    ADD CONSTRAINT gastos_productos_gasto_id_fkey FOREIGN KEY (gasto_id) REFERENCES public.gastos(id);


--
-- TOC entry 3230 (class 2606 OID 16787)
-- Name: gastos_productos gastos_productos_producto_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gastos_productos
    ADD CONSTRAINT gastos_productos_producto_id_fkey FOREIGN KEY (producto_id) REFERENCES public.productos(id);


--
-- TOC entry 3226 (class 2606 OID 16751)
-- Name: gastos gastos_subcategoria_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gastos
    ADD CONSTRAINT gastos_subcategoria_id_fkey FOREIGN KEY (subcategoria_id) REFERENCES public.subcategorias(id);


--
-- TOC entry 3227 (class 2606 OID 16756)
-- Name: gastos gastos_usuario_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gastos
    ADD CONSTRAINT gastos_usuario_id_fkey FOREIGN KEY (usuario_id) REFERENCES public.usuarios(id);


--
-- TOC entry 3228 (class 2606 OID 16770)
-- Name: ingresos ingresos_usuario_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ingresos
    ADD CONSTRAINT ingresos_usuario_id_fkey FOREIGN KEY (usuario_id) REFERENCES public.usuarios(id);


--
-- TOC entry 3224 (class 2606 OID 16725)
-- Name: subcategorias subcategorias_categoria_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subcategorias
    ADD CONSTRAINT subcategorias_categoria_id_fkey FOREIGN KEY (categoria_id) REFERENCES public.categorias(id);


-- Completed on 2023-10-14 20:23:50

--
-- PostgreSQL database dump complete
--


-- Datos agregados para las pruebas:

-- Usuarios
INSERT INTO usuarios (id, nombre, email, contrasena)
VALUES (50, 'Don Pepito', 'pepito@outlook.com', '123456');
INSERT INTO usuarios (id, nombre, email, contrasena)
VALUES (51, 'Don Jose', 'jose@hotmail.com', '123456');

-- Categorias
INSERT INTO categorias (id, nombre) VALUES (60, 'Comida');
INSERT INTO categorias (id, nombre) VALUES (61, 'Ropa');

-- Subcategorias
INSERT INTO subcategorias (id, nombre, categoria_id) VALUES (70, 'Dulces', 60);
INSERT INTO subcategorias (id, nombre, categoria_id) VALUES (71 ,'Camisas', 61);

-- Productos
INSERT INTO productos (id, nombre) VALUES (80, 'Chivito');
INSERT INTO productos (id, nombre) VALUES (81, 'Camisa de jean');

-- Gastos
INSERT INTO gastos (id, cantidad, fecha, descripcion, categoria_id, subcategoria_id, usuario_id)
VALUES (100, 500, '2023-08-31', 'Chivito al plato para 1 con guarnición y postre - Pizzeria Piccola', 60, 70, 50);

INSERT INTO gastos (id, cantidad, fecha, descripcion, categoria_id, subcategoria_id, usuario_id)
VALUES (101, 600, '2023-08-31', 'Camisa de jean oscura con botones metalicos - Jack and Jones', 61, 71, 51);

-- GastosProductos
INSERT INTO gastos_productos (id, gasto_id, producto_id) VALUES (90, 100, 80);
INSERT INTO gastos_productos (id, gasto_id, producto_id) VALUES (91, 101, 81);

-- Ingresos
INSERT INTO ingresos (id, cantidad, fecha, descripcion, usuario_id) 
VALUES (120, 1000, '2023-08-31', 'Venta de una licuadora', 50);
INSERT INTO ingresos (id, cantidad, fecha, descripcion, usuario_id) 
VALUES (121, 1200, '2023-08-31', 'Venta de una camisa', 51);

--