--
-- PostgreSQL database dump
--

-- Dumped from database version 15.4
-- Dumped by pg_dump version 15.4

-- Started on 2023-10-23 03:00:14

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
-- TOC entry 214 (class 1259 OID 25115)
-- Name: categorias; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categorias (
    id integer NOT NULL,
    nombre character varying(255),
    estado integer DEFAULT 1 NOT NULL
);


ALTER TABLE public.categorias OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 25118)
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
-- Dependencies: 215
-- Name: categorias_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.categorias_id_seq OWNED BY public.categorias.id;


--
-- TOC entry 216 (class 1259 OID 25119)
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
-- TOC entry 217 (class 1259 OID 25124)
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
-- Dependencies: 217
-- Name: gastos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.gastos_id_seq OWNED BY public.gastos.id;


--
-- TOC entry 218 (class 1259 OID 25125)
-- Name: gastos_productos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.gastos_productos (
    id integer NOT NULL,
    gasto_id integer,
    producto_id integer
);


ALTER TABLE public.gastos_productos OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 25128)
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
-- Dependencies: 219
-- Name: gastos_productos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.gastos_productos_id_seq OWNED BY public.gastos_productos.id;


--
-- TOC entry 220 (class 1259 OID 25129)
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
-- TOC entry 221 (class 1259 OID 25134)
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
-- Dependencies: 221
-- Name: ingresos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.ingresos_id_seq OWNED BY public.ingresos.id;


--
-- TOC entry 222 (class 1259 OID 25135)
-- Name: productos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.productos (
    id integer NOT NULL,
    nombre character varying(255)
);


ALTER TABLE public.productos OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 25138)
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
-- Dependencies: 223
-- Name: productos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.productos_id_seq OWNED BY public.productos.id;


--
-- TOC entry 224 (class 1259 OID 25139)
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
-- TOC entry 225 (class 1259 OID 25142)
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
-- Dependencies: 225
-- Name: subcategorias_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.subcategorias_id_seq OWNED BY public.subcategorias.id;


--
-- TOC entry 226 (class 1259 OID 25143)
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
-- TOC entry 227 (class 1259 OID 25148)
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
-- Dependencies: 227
-- Name: usuarios_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.usuarios_id_seq OWNED BY public.usuarios.id;


--
-- TOC entry 3203 (class 2604 OID 25149)
-- Name: categorias id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categorias ALTER COLUMN id SET DEFAULT nextval('public.categorias_id_seq'::regclass);


--
-- TOC entry 3205 (class 2604 OID 25150)
-- Name: gastos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gastos ALTER COLUMN id SET DEFAULT nextval('public.gastos_id_seq'::regclass);


--
-- TOC entry 3206 (class 2604 OID 25151)
-- Name: gastos_productos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gastos_productos ALTER COLUMN id SET DEFAULT nextval('public.gastos_productos_id_seq'::regclass);


--
-- TOC entry 3207 (class 2604 OID 25152)
-- Name: ingresos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ingresos ALTER COLUMN id SET DEFAULT nextval('public.ingresos_id_seq'::regclass);


--
-- TOC entry 3208 (class 2604 OID 25153)
-- Name: productos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.productos ALTER COLUMN id SET DEFAULT nextval('public.productos_id_seq'::regclass);


--
-- TOC entry 3209 (class 2604 OID 25154)
-- Name: subcategorias id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subcategorias ALTER COLUMN id SET DEFAULT nextval('public.subcategorias_id_seq'::regclass);


--
-- TOC entry 3211 (class 2604 OID 25155)
-- Name: usuarios id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios ALTER COLUMN id SET DEFAULT nextval('public.usuarios_id_seq'::regclass);


--
-- TOC entry 3376 (class 0 OID 25115)
-- Dependencies: 214
-- Data for Name: categorias; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.categorias (id, nombre, estado) FROM stdin;
61	Ropa	1
25	Dispositivos Electrónicos	1
27	Tarifas	1
29	Muebles	1
30	Muebles	1
63	Muebles	1
64	Muebles	1
65	Muebles	1
66	Muebles	1
67	Muebles	1
68	Muebles	1
69	Muebles	1
70	Muebles	1
71	Muebles	1
72	Muebles	1
73	Muebles	1
74	Muebles	1
75	Muebles	1
76	Muebles	1
77	Muebles	1
78	Muebles	1
79	Muebles	1
80	Muebles	1
81	Muebles	1
82	Muebles	1
60	Alimentos	-1
\.


--
-- TOC entry 3378 (class 0 OID 25119)
-- Dependencies: 216
-- Data for Name: gastos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.gastos (id, cantidad, fecha, descripcion, categoria_id, subcategoria_id, usuario_id) FROM stdin;
21	2400	2023-10-01	Zapatos de gala - Fino señores	61	69	27
22	200	2023-11-11	Pastel	60	70	26
23	200	2023-11-11	Pastel	60	70	26
24	200	2023-11-11	Pastel	60	70	26
25	200	2023-11-11	Pastel	60	70	26
28	2400	2023-10-21	Gorro con vicera	61	69	51
101	600	2023-08-31	Camisa de jean	61	71	51
29	200	2023-11-11	Pastel	60	70	51
30	200	2023-11-11	Pastel	60	70	51
31	200	2023-11-11	Pastel	60	70	51
32	200	2023-11-11	Pastel	60	70	51
33	200	2023-11-11	Pastel	60	70	51
34	200	2023-11-11	Pastel	60	70	51
35	200	2023-11-11	Pastel	60	70	51
36	200	2023-11-11	Pastel	60	70	51
37	200	2023-11-11	Pastel	60	70	51
38	200	2023-11-11	Pastel	60	70	51
39	200	2023-11-11	Pastel	60	70	51
40	200	2023-11-11	Pastel	60	70	51
\.


--
-- TOC entry 3380 (class 0 OID 25125)
-- Dependencies: 218
-- Data for Name: gastos_productos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.gastos_productos (id, gasto_id, producto_id) FROM stdin;
\.


--
-- TOC entry 3382 (class 0 OID 25129)
-- Dependencies: 220
-- Data for Name: ingresos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ingresos (id, cantidad, fecha, descripcion, usuario_id) FROM stdin;
10	3400	2023-10-22	Cobro de una comisión	50
121	1200	2023-08-31	Venta de una camisa color negro	51
11	1000	2023-08-31	Ganancia de una apuesta clandestina	50
12	1000	2023-08-31	Ganancia de una apuesta clandestina	50
13	1000	2023-08-31	Ganancia de una apuesta clandestina	50
14	1000	2023-08-31	Ganancia de una apuesta clandestina	50
\.


--
-- TOC entry 3384 (class 0 OID 25135)
-- Dependencies: 222
-- Data for Name: productos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.productos (id, nombre) FROM stdin;
80	Chivito
19	Pantalón deportivo color negro - Puma
20	Pantalón deportivo color negro - Puma
21	Pantalón deportivo color negro - Puma
22	Pantalón deportivo color negro - Puma
23	Pantalón deportivo color negro - Puma
24	Pantalón deportivo color negro - Puma
25	Pantalón deportivo color negro - Puma
26	Gorra Nike con vicera, color negro y con estilo de camionero - naaasheee
27	Pantalón deportivo color negro - Puma
28	Pantalón deportivo color negro - Puma
29	Pantalón deportivo color negro - Puma
30	Pantalón deportivo color negro - Puma
31	Pantalón deportivo color negro - Puma
32	Pantalón deportivo color negro - Puma
33	Pantalón deportivo color negro - Puma
34	Pantalón deportivo color negro - Puma
35	Pantalón deportivo color negro - Puma
36	Pantalón deportivo color negro - Puma
37	Pantalón deportivo color negro - Puma
38	Pantalón deportivo color negro - Puma
\.


--
-- TOC entry 3386 (class 0 OID 25139)
-- Dependencies: 224
-- Data for Name: subcategorias; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.subcategorias (id, nombre, categoria_id, estado) FROM stdin;
71	Camisas	61	1
36	Sin glúten	60	1
69	Calzados	61	1
72	Sin glúten	60	1
73	Sin glúten	60	1
74	Sin glúten	60	1
75	Sin glúten	60	1
76	Sin glúten	60	1
77	Sin glúten	60	1
78	Sin glúten	60	1
79	Sin glúten	60	1
80	Sin glúten	60	1
81	Sin glúten	60	1
82	Sin glúten	60	1
83	Sin glúten	60	1
84	Sin glúten	60	1
85	Sin glúten	60	1
86	Sin glúten	60	1
87	Sin glúten	60	1
88	Sin glúten	60	1
89	Sin glúten	60	1
70	Sin azucares procesados	60	1
\.


--
-- TOC entry 3388 (class 0 OID 25143)
-- Dependencies: 226
-- Data for Name: usuarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usuarios (id, nombre, email, contrasena, estado) FROM stdin;
26	Juanito	juanito777@gmail.com	juanito123	1
27	Juanseto01	juanseto01@gmail.com	juanseto0123	1
51	Don Jose	jose@hotmail.com	\N	1
34	Armando	armando@outlook.com	123456	1
35	Armando	armando@outlook.com	123456	1
36	Armando	armando@outlook.com	123456	1
37	Armando	armando@outlook.com	123456	1
38	Armando	armando@outlook.com	123456	1
39	Armando	armando@outlook.com	123456	1
40	Armando	armando@outlook.com	123456	1
41	Armando	armando@outlook.com	123456	1
42	Armando	armando@outlook.com	123456	1
43	Armando	armando@outlook.com	123456	1
44	Armando	armando@outlook.com	123456	1
45	Armando	armando@outlook.com	123456	1
50	Armando Paredes	armando@outlook.com	123456789	-1
\.


--
-- TOC entry 3402 (class 0 OID 0)
-- Dependencies: 215
-- Name: categorias_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.categorias_id_seq', 82, true);


--
-- TOC entry 3403 (class 0 OID 0)
-- Dependencies: 217
-- Name: gastos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.gastos_id_seq', 40, true);


--
-- TOC entry 3404 (class 0 OID 0)
-- Dependencies: 219
-- Name: gastos_productos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.gastos_productos_id_seq', 16, true);


--
-- TOC entry 3405 (class 0 OID 0)
-- Dependencies: 221
-- Name: ingresos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.ingresos_id_seq', 14, true);


--
-- TOC entry 3406 (class 0 OID 0)
-- Dependencies: 223
-- Name: productos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.productos_id_seq', 38, true);


--
-- TOC entry 3407 (class 0 OID 0)
-- Dependencies: 225
-- Name: subcategorias_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.subcategorias_id_seq', 89, true);


--
-- TOC entry 3408 (class 0 OID 0)
-- Dependencies: 227
-- Name: usuarios_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.usuarios_id_seq', 45, true);


--
-- TOC entry 3214 (class 2606 OID 25157)
-- Name: categorias categorias_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categorias
    ADD CONSTRAINT categorias_pkey PRIMARY KEY (id);


--
-- TOC entry 3216 (class 2606 OID 25159)
-- Name: gastos gastos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gastos
    ADD CONSTRAINT gastos_pkey PRIMARY KEY (id);


--
-- TOC entry 3218 (class 2606 OID 25161)
-- Name: gastos_productos gastos_productos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gastos_productos
    ADD CONSTRAINT gastos_productos_pkey PRIMARY KEY (id);


--
-- TOC entry 3220 (class 2606 OID 25163)
-- Name: ingresos ingresos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ingresos
    ADD CONSTRAINT ingresos_pkey PRIMARY KEY (id);


--
-- TOC entry 3222 (class 2606 OID 25165)
-- Name: productos productos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.productos
    ADD CONSTRAINT productos_pkey PRIMARY KEY (id);


--
-- TOC entry 3224 (class 2606 OID 25167)
-- Name: subcategorias subcategorias_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subcategorias
    ADD CONSTRAINT subcategorias_pkey PRIMARY KEY (id);


--
-- TOC entry 3226 (class 2606 OID 25169)
-- Name: usuarios usuarios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id);


--
-- TOC entry 3227 (class 2606 OID 25170)
-- Name: gastos gastos_categoria_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gastos
    ADD CONSTRAINT gastos_categoria_id_fkey FOREIGN KEY (categoria_id) REFERENCES public.categorias(id);


--
-- TOC entry 3230 (class 2606 OID 25175)
-- Name: gastos_productos gastos_productos_gasto_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gastos_productos
    ADD CONSTRAINT gastos_productos_gasto_id_fkey FOREIGN KEY (gasto_id) REFERENCES public.gastos(id);


--
-- TOC entry 3231 (class 2606 OID 25180)
-- Name: gastos_productos gastos_productos_producto_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gastos_productos
    ADD CONSTRAINT gastos_productos_producto_id_fkey FOREIGN KEY (producto_id) REFERENCES public.productos(id);


--
-- TOC entry 3228 (class 2606 OID 25185)
-- Name: gastos gastos_subcategoria_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gastos
    ADD CONSTRAINT gastos_subcategoria_id_fkey FOREIGN KEY (subcategoria_id) REFERENCES public.subcategorias(id);


--
-- TOC entry 3229 (class 2606 OID 25190)
-- Name: gastos gastos_usuario_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gastos
    ADD CONSTRAINT gastos_usuario_id_fkey FOREIGN KEY (usuario_id) REFERENCES public.usuarios(id);


--
-- TOC entry 3232 (class 2606 OID 25195)
-- Name: ingresos ingresos_usuario_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ingresos
    ADD CONSTRAINT ingresos_usuario_id_fkey FOREIGN KEY (usuario_id) REFERENCES public.usuarios(id);


--
-- TOC entry 3233 (class 2606 OID 25200)
-- Name: subcategorias subcategorias_categoria_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subcategorias
    ADD CONSTRAINT subcategorias_categoria_id_fkey FOREIGN KEY (categoria_id) REFERENCES public.categorias(id);


-- Completed on 2023-10-23 03:00:15

--
-- PostgreSQL database dump complete
--

