--
-- PostgreSQL database dump
--

-- Dumped from database version 15.4
-- Dumped by pg_dump version 15.4

-- Started on 2023-11-11 20:00:59

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
    tipo integer
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

COPY public.categorias (id, nombre, estado, usuario_id, tipo) FROM stdin;
1	Nombre de la categoría	1	\N	\N
22	Nombre de la cataaaaegoría	1	\N	\N
23	Muebles	1	\N	\N
61	Ropa	1	\N	\N
24	Muebles	1	\N	\N
25	Muebles	1	\N	\N
26	Muebles	1	\N	\N
27	Muebles	1	\N	\N
28	Muebles	1	\N	\N
29	Muebles	1	\N	\N
30	Muebles	1	\N	\N
60	Alimentos	1	\N	\N
32	Comida	-1	3	\N
31	Comida	-1	3	\N
34	Salud	-1	3	\N
35	Salud	-1	3	0
36	Baile	-1	3	0
37	Sueldo	-1	3	1
38	Sueldo	1	3	1
39	Comision	1	3	1
40	Comida	1	3	0
41	Salud	1	3	0
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
48	1500	2023-11-15	medico	41	\N	3
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

SELECT pg_catalog.setval('public.categorias_id_seq', 41, true);


--
-- TOC entry 3403 (class 0 OID 0)
-- Dependencies: 222
-- Name: gastos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.gastos_id_seq', 49, true);


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

SELECT pg_catalog.setval('public.ingresos_id_seq', 24, true);


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


-- Completed on 2023-11-11 20:00:59

--
-- PostgreSQL database dump complete
--
