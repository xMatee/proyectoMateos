import { test } from 'tap'
import { build } from '../../helper.js'
import { query } from '../../../DB/db.js';

query(`INSERT INTO ingresos (id, cantidad, fecha, descripcion, usuario_id) VALUES (120, 1000, '2023-08-31', 'Venta de una licuadora', 50);`);

test('get all incomes', async (t) => {
    const app = await build(t);
    t.teardown(() => app.close());
    const res = await app.inject({
        method: 'GET',
        url: '/usuarios/50/ingresos'
    });

    t.equal(res.statusCode, 200, 'El código de respuesta es 200 (OK)');
});

test('get income by id', async (t) => {
    const app = await build(t);
    t.teardown(() => app.close());
    const res = await app.inject({
        method: 'GET',
        url: '/usuarios/50/ingresos/120'
    });
    const payload = JSON.parse(res.payload);
    t.equal(res.statusCode, 200, 'El código de respuesta es 200 (OK)');
    t.ok(payload, {
        id: 120,
        cantidad: 1000,
        fecha: '2023-08-31T03:00:00.000Z',
        descripcion: 'Venta de una licuadora',
        usuario_id: 50
    });
});

test('create income', async (t) => {
    const app = await build(t);
    t.teardown(() => app.close());
    const res = await app.inject({
        method: 'POST',
        url: '/usuarios/50/ingresos',
        payload: {
            cantidad: 1000,
            fecha: '2023-08-31',
            descripcion: 'Ganancia de una apuesta clandestina'
        }
    });
    t.equal(res.statusCode, 201, 'El código de respuesta es 201 (Created)');
});

test('update income', async (t) => {
    const app = await build(t);
    t.teardown(() => app.close());
    const res = await app.inject({
        method: 'PUT',
        url: '/usuarios/50/ingresos/120',
        payload: {
            cantidad: 1000,
            fecha: '2023-08-31',
            descripcion: 'Ganancia de una apuesta totalmente legal'
        }
    });
    const payload = JSON.parse(res.payload);
    t.equal(res.statusCode, 200, 'El código de respuesta es 200 (OK)');
    t.ok(payload, {
        id: 120,
        cantidad: 1000,
        fecha: '2023-08-31T03:00:00.000Z',
        descripcion: 'Ganancia de una apuesta totalmente legal',
        usuario_id: 50
    });
});

test('delete income', async (t) => {
    const app = await build(t);
    t.teardown(() => app.close());
    const res = await app.inject({
        method: 'DELETE',
        url: '/usuarios/50/ingresos/120'
    });
    t.equal(res.statusCode, 204, 'El código de respuesta es 204 (No Content)');
});
