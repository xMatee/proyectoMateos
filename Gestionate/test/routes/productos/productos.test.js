import { test } from 'tap'
import { build } from '../../helper.js'
import { query } from '../../../DB/db.js';

query(`INSERT INTO Productos (id, nombre) VALUES (81, 'Camisa de jean');`);

test('get all products', async (t) => {
    const app = await build(t);
    t.teardown(() => app.close());
    const res = await app.inject({
        method: 'GET',
        url: '/productos'
    });

    t.equal(res.statusCode, 200, 'El código de respuesta es 200 (OK)');
});

test('get product by id', async (t) => {
    const app = await build(t);
    t.teardown(() => app.close());
    const res = await app.inject({
        method: 'GET',
        url: '/productos/81'
    });
    const payload = JSON.parse(res.payload);
    t.equal(res.statusCode, 200, 'El código de respuesta es 200 (OK)');
    t.ok(payload, {
        id: 81,
        nombre: 'Camisa de jean'
    });
});

test('create product', async (t) => {
    const app = await build(t);
    t.teardown(() => app.close());
    const res = await app.inject({
        method: 'POST',
        url: '/productos',
        payload: {
            nombre: 'Pantalón deportivo color negro - Puma'
        }
    });
    t.equal(res.statusCode, 201, 'El código de respuesta es 201 (Created)');
});

test('update product', async (t) => {
    const app = await build(t);
    t.teardown(() => app.close());
    const res = await app.inject({
        method: 'PUT',
        url: '/productos/81',
        payload: {
            nombre: 'Camisa de jean negra'
        }
    });
    const payload = JSON.parse(res.payload);
    t.equal(res.statusCode, 200, 'El código de respuesta es 200 (OK)');
    t.ok(payload, {
        id: 81,
        nombre: 'Camisa de jean negra'
    });
});

test('delete product', async (t) => {
    const app = await build(t);
    t.teardown(() => app.close());
    const res = await app.inject({
        method: 'DELETE',
        url: '/productos/81'
    });
    t.equal(res.statusCode, 204, 'El código de respuesta es 204 (No Content)');
})
