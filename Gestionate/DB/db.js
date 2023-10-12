import pg from 'pg';
const { Pool } = pg;

export const PGOPTIONS = {
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DATABASE,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT
    // user: 'postgres',
    // host: 'localhost',
    // database: 'ProyectoDesa',
    // password: 'mateolomas123',
    // port: 5432
}
export const pool = new Pool(PGOPTIONS);
export const query = async (text, params) => {
    const res = await pool.query(text, params)
    return res
}
