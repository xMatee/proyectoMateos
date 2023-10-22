import { test } from 'tap'
import { build } from '../../helper.js'

test('get all expenses', async (t) => {
    const app = await build(t);
    t.teardown(() => app.close());
    const res = await app.inject({
        method: 'GET',
        url: '/usuarios/51/gastos'
    });

    t.equal(res.statusCode, 200, 'El código de respuesta es 200 (OK)');
});

test('get expense by id', async (t) => {
    const app = await build(t);
    t.teardown(() => app.close());
    const res = await app.inject({
        method: 'GET',
        url: '/usuarios/51/gastos/101'
    });
    const payload = JSON.parse(res.payload);
    t.equal(res.statusCode, 200, 'El código de respuesta es 200 (OK)');
    t.ok(payload, {
        id: 101,
        cantidad: 600,
        fecha: '2023-08-31',
        descripcion: 'Camisa de jean',
        categoria_id: 61,
        subcategoria_id: 71,
        usuario_id: 51
    });
});

test('create expense', async (t) => {
    const app = await build(t);
    t.teardown(() => app.close());
    const res = await app.inject({
        method: 'POST',
        url: '/usuarios/51/gastos',
        payload: {
            cantidad: 200,
            fecha: '2023-11-11',
            descripcion: 'Pastel',
            categoria_id: 60,
            subcategoria_id: 70,
            usuario_id: 26
        }
    });
    t.equal(res.statusCode, 201, 'El código de respuesta es 201 (Created)');
});

test('update expense', async (t) => {
    const app = await build(t);
    t.teardown(() => app.close());
    const res = await app.inject({
        method: 'PUT',
        url: '/usuarios/51/gastos/121',
        payload: {
            cantidad: 700,
            fecha: '2023-11-11',
            descripcion: 'Venta de una camisa de jean',
            categoria_id: 60,
            subcategoria_id: 70,
            usuario_id: 26
        }
    });
    t.equal(res.statusCode, 200, 'El código de respuesta es 200 (OK)');
});

test('delete expense', async (t) => {
    const app = await build(t);
    t.teardown(() => app.close());
    const res = await app.inject({
        method: 'DELETE',
        url: '/usuarios/50/gastos/120'
    });
    t.equal(res.statusCode, 204, 'El código de respuesta es 204 (No Content)');
})

test('Associate expense to product', async (t) => {
    const app = await build(t);
    t.teardown(() => app.close());
    const res = await app.inject({
        method: 'POST',
        url: '/usuarios/51/gastos/101/productos/81',
    });
    t.equal(res.statusCode, 201, 'El código de respuesta es 201 (OK)');
});

test('disassociate expense of product', async (t) => {
    const app = await build(t);
    t.teardown(() => app.close());
    const res = await app.inject({
        method: 'DELETE',
        url: '/usuarios/51/gastos/101/productos/81',
    });
    t.equal(res.statusCode, 204, 'El código de respuesta es 204 (No Content)');
});


