--
-- PostgreSQL database dump
--

-- Dumped from database version 15.4
-- Dumped by pg_dump version 15.4

-- Started on 2023-11-17 15:12:57

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
    nombre character varying(255),
    estado integer DEFAULT 1 NOT NULL,
    usuario_id integer,
    tipo integer,
    imagen text
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
-- TOC entry 3395 (class 0 OID 0)
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
    cantidad integer,
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
-- TOC entry 3396 (class 0 OID 0)
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
-- TOC entry 3397 (class 0 OID 0)
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
    fecha date,
    descripcion text,
    usuario_id integer,
    categoria_id integer,
    subcategoria_id integer,
    cantidad integer
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
-- TOC entry 3398 (class 0 OID 0)
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
-- TOC entry 3399 (class 0 OID 0)
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
    categoria_id integer,
    estado integer DEFAULT 1 NOT NULL
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
-- TOC entry 3400 (class 0 OID 0)
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
    contrasena character varying(255),
    estado integer DEFAULT 1 NOT NULL
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
-- TOC entry 3401 (class 0 OID 0)
-- Dependencies: 214
-- Name: usuarios_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.usuarios_id_seq OWNED BY public.usuarios.id;


--
-- TOC entry 3205 (class 2604 OID 16715)
-- Name: categorias id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categorias ALTER COLUMN id SET DEFAULT nextval('public.categorias_id_seq'::regclass);


--
-- TOC entry 3210 (class 2604 OID 16741)
-- Name: gastos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gastos ALTER COLUMN id SET DEFAULT nextval('public.gastos_id_seq'::regclass);


--
-- TOC entry 3212 (class 2604 OID 16779)
-- Name: gastos_productos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gastos_productos ALTER COLUMN id SET DEFAULT nextval('public.gastos_productos_id_seq'::regclass);


--
-- TOC entry 3211 (class 2604 OID 16765)
-- Name: ingresos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ingresos ALTER COLUMN id SET DEFAULT nextval('public.ingresos_id_seq'::regclass);


--
-- TOC entry 3209 (class 2604 OID 16734)
-- Name: productos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.productos ALTER COLUMN id SET DEFAULT nextval('public.productos_id_seq'::regclass);


--
-- TOC entry 3207 (class 2604 OID 16722)
-- Name: subcategorias id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subcategorias ALTER COLUMN id SET DEFAULT nextval('public.subcategorias_id_seq'::regclass);


--
-- TOC entry 3203 (class 2604 OID 16706)
-- Name: usuarios id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios ALTER COLUMN id SET DEFAULT nextval('public.usuarios_id_seq'::regclass);


--
-- TOC entry 3379 (class 0 OID 16712)
-- Dependencies: 217
-- Data for Name: categorias; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.categorias (id, nombre, estado, usuario_id, tipo, imagen) FROM stdin;
1	Nombre de la categoría	1	\N	\N	\N
22	Nombre de la cataaaaegoría	1	\N	\N	\N
23	Muebles	1	\N	\N	\N
61	Ropa	1	\N	\N	\N
24	Muebles	1	\N	\N	\N
25	Muebles	1	\N	\N	\N
26	Muebles	1	\N	\N	\N
27	Muebles	1	\N	\N	\N
28	Muebles	1	\N	\N	\N
29	Muebles	1	\N	\N	\N
30	Muebles	1	\N	\N	\N
60	Alimentos	1	\N	\N	\N
32	Comida	-1	3	\N	\N
31	Comida	-1	3	\N	\N
34	Salud	-1	3	\N	\N
35	Salud	-1	3	0	\N
36	Baile	-1	3	0	\N
37	Sueldo	-1	3	1	\N
40	Comida	1	3	0	https://e7.pngegg.com/pngimages/80/950/png-clipart-computer-icons-foodie-blog-categories-miscellaneous-food.png
41	Salud	1	3	0	data:image/png;base64,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
39	Comision	1	3	1	data:image/png;base64,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
44	test	-1	3	1	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNgdwzP-aWmxGXyZUOY_XYfeYSbhFI2uh-kamlIFL6rw&s
45	aaaa	-1	3	1	https://c0.klipartz.com/pngpicture/703/66/gratis-png-iconos-de-computadora-factura-gasto-gasto-thumbnail.png
43	catingresoooo	1	3	1	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgJQKKXBYMp5kLMdl7iY4YwKRL-aPSoPP4iueej3g94Q&s
42	aaaaaaaaaaaa	-1	3	0	https://png.pngtree.com/png-clipart/20220124/ourmid/pngtree-beautiful-puppy-free-elements-png-image_4255768.png
38	Sueldoooo	1	3	1	https://cdn-icons-png.flaticon.com/512/477/477833.png
\.


--
-- TOC entry 3385 (class 0 OID 16738)
-- Dependencies: 223
-- Data for Name: gastos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.gastos (id, cantidad, fecha, descripcion, categoria_id, subcategoria_id, usuario_id) FROM stdin;
101	600	2023-08-31	Camisa de jean oscura con botones metalicos - Jack and Jones	61	71	51
46	500	2023-11-15	Pizzeria	40	\N	3
47	50	2023-11-15	leche	40	\N	3
49	250	2023-11-15	perifar	41	\N	3
\.


--
-- TOC entry 3389 (class 0 OID 16776)
-- Dependencies: 227
-- Data for Name: gastos_productos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.gastos_productos (id, gasto_id, producto_id) FROM stdin;
91	101	81
\.


--
-- TOC entry 3387 (class 0 OID 16762)
-- Dependencies: 225
-- Data for Name: ingresos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ingresos (id, fecha, descripcion, usuario_id, categoria_id, subcategoria_id, cantidad) FROM stdin;
120	2023-08-31	Venta de una licuadora	50	\N	\N	1000
121	2023-08-31	Venta de una camisa	51	\N	\N	1200
20	2023-11-15	Salario noviembre	3	38	\N	25000
21	2023-11-15	Salario Diciembre	3	38	\N	25000
22	2023-11-15	Comision 1	3	39	\N	500
24	2023-11-15	Comision 2	3	39	\N	500
29	4567-03-12	Comision 32	3	39	\N	500
\.


--
-- TOC entry 3383 (class 0 OID 16731)
-- Dependencies: 221
-- Data for Name: productos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.productos (id, nombre) FROM stdin;
17	Nuevo Producto
18	Pantalón deportivo color negro - Puma
80	Chivito
19	Pantalón deportivo color negro - Puma
20	Pantalón deportivo color negro - Puma
21	Pantalón deportivo color negro - Puma
22	Pantalón deportivo color negro - Puma
23	Pantalón deportivo color negro - Puma
24	Pantalón deportivo color negro - Puma
25	Pantalón deportivo color negro - Puma
81	Camisa de jean negra
\.


--
-- TOC entry 3381 (class 0 OID 16719)
-- Dependencies: 219
-- Data for Name: subcategorias; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.subcategorias (id, nombre, categoria_id, estado) FROM stdin;
1	Nombre de la subcategoría	1	1
32	Nombre de la subcateaaaagoría	22	1
71	Camisas	61	1
34	Sin glúten	60	1
35	Sin glúten	60	1
36	Sin glúten	60	1
37	Sin glúten	60	1
38	Sin glúten	60	1
39	Sin glúten	60	1
40	Sin glúten	60	1
\.


--
-- TOC entry 3377 (class 0 OID 16703)
-- Dependencies: 215
-- Data for Name: usuarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usuarios (id, nombre, email, contrasena, estado) FROM stdin;
3	Nuevo Nombre del Usuario	nuevomail	nuevacontra	1
24	Armando	armando@outlook.com	123456	1
51	Don Jose	jose@hotmail.com	123456	1
25	Armando	armando@outlook.com	123456	1
26	Armando	armando@outlook.com	123456	1
27	NombreUsuar1111io	nombreusuario@example.com	contraseñase	-1
28	Armando	armando@outlook.com	123456	1
29	Armando	armando@outlook.com	123456	1
30	Armando	armando@outlook.com	123456	1
31	Armando	armando@outlook.com	123456	1
32	Armando	armando@outlook.com	123456	1
50	Armando Paredes	armando@outlook.com	123456789	-1
\.


--
-- TOC entry 3402 (class 0 OID 0)
-- Dependencies: 216
-- Name: categorias_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.categorias_id_seq', 45, true);


--
-- TOC entry 3403 (class 0 OID 0)
-- Dependencies: 222
-- Name: gastos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.gastos_id_seq', 59, true);


--
-- TOC entry 3404 (class 0 OID 0)
-- Dependencies: 226
-- Name: gastos_productos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.gastos_productos_id_seq', 4, true);


--
-- TOC entry 3405 (class 0 OID 0)
-- Dependencies: 224
-- Name: ingresos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.ingresos_id_seq', 29, true);


--
-- TOC entry 3406 (class 0 OID 0)
-- Dependencies: 220
-- Name: productos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.productos_id_seq', 25, true);


--
-- TOC entry 3407 (class 0 OID 0)
-- Dependencies: 218
-- Name: subcategorias_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.subcategorias_id_seq', 40, true);


--
-- TOC entry 3408 (class 0 OID 0)
-- Dependencies: 214
-- Name: usuarios_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.usuarios_id_seq', 32, true);


--
-- TOC entry 3216 (class 2606 OID 16717)
-- Name: categorias categorias_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categorias
    ADD CONSTRAINT categorias_pkey PRIMARY KEY (id);


--
-- TOC entry 3222 (class 2606 OID 16745)
-- Name: gastos gastos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gastos
    ADD CONSTRAINT gastos_pkey PRIMARY KEY (id);


--
-- TOC entry 3226 (class 2606 OID 16781)
-- Name: gastos_productos gastos_productos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gastos_productos
    ADD CONSTRAINT gastos_productos_pkey PRIMARY KEY (id);


--
-- TOC entry 3224 (class 2606 OID 16769)
-- Name: ingresos ingresos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ingresos
    ADD CONSTRAINT ingresos_pkey PRIMARY KEY (id);


--
-- TOC entry 3220 (class 2606 OID 16736)
-- Name: productos productos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.productos
    ADD CONSTRAINT productos_pkey PRIMARY KEY (id);


--
-- TOC entry 3218 (class 2606 OID 16724)
-- Name: subcategorias subcategorias_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subcategorias
    ADD CONSTRAINT subcategorias_pkey PRIMARY KEY (id);


--
-- TOC entry 3214 (class 2606 OID 16710)
-- Name: usuarios usuarios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id);


--
-- TOC entry 3228 (class 2606 OID 16746)
-- Name: gastos gastos_categoria_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gastos
    ADD CONSTRAINT gastos_categoria_id_fkey FOREIGN KEY (categoria_id) REFERENCES public.categorias(id);


--
-- TOC entry 3232 (class 2606 OID 16782)
-- Name: gastos_productos gastos_productos_gasto_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gastos_productos
    ADD CONSTRAINT gastos_productos_gasto_id_fkey FOREIGN KEY (gasto_id) REFERENCES public.gastos(id);


--
-- TOC entry 3233 (class 2606 OID 16787)
-- Name: gastos_productos gastos_productos_producto_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gastos_productos
    ADD CONSTRAINT gastos_productos_producto_id_fkey FOREIGN KEY (producto_id) REFERENCES public.productos(id);


--
-- TOC entry 3229 (class 2606 OID 16751)
-- Name: gastos gastos_subcategoria_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gastos
    ADD CONSTRAINT gastos_subcategoria_id_fkey FOREIGN KEY (subcategoria_id) REFERENCES public.subcategorias(id);


--
-- TOC entry 3230 (class 2606 OID 16756)
-- Name: gastos gastos_usuario_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gastos
    ADD CONSTRAINT gastos_usuario_id_fkey FOREIGN KEY (usuario_id) REFERENCES public.usuarios(id);


--
-- TOC entry 3231 (class 2606 OID 16770)
-- Name: ingresos ingresos_usuario_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ingresos
    ADD CONSTRAINT ingresos_usuario_id_fkey FOREIGN KEY (usuario_id) REFERENCES public.usuarios(id);


--
-- TOC entry 3227 (class 2606 OID 16725)
-- Name: subcategorias subcategorias_categoria_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subcategorias
    ADD CONSTRAINT subcategorias_categoria_id_fkey FOREIGN KEY (categoria_id) REFERENCES public.categorias(id);


-- Completed on 2023-11-17 15:12:58

--
-- PostgreSQL database dump complete
--

