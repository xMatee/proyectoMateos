import { test } from 'tap'
import { build } from '../../helper.js'

test('get all categories', async (t) => {
    const app = await build(t);
    t.teardown(() => app.close());
    const res = await app.inject({
        method: 'GET',
        url: '/categorias'
    });

    t.equal(res.statusCode, 200);
});

test('get category by id', async (t) => {
    const app = await build(t);
    t.teardown(() => app.close());
    const res = await app.inject({
        method: 'GET',
        url: '/categorias/60'
    });
    const payload = JSON.parse(res.payload);
    t.equal(res.statusCode, 200, 'El código de respuesta es 200 (OK)');
    t.ok(payload, {
        id: 60,
        nombre: 'Comida'
    });
});

test('create category', async (t) => {
    const app = await build(t);
    t.teardown(() => app.close());
    const res = await app.inject({
        method: 'POST',
        url: '/categorias',
        payload: {
            nombre: 'Muebles'
        }
    });
    t.equal(res.statusCode, 201, 'El código de respuesta es 201 (Created)');
});

test('update category', async (t) => {
    const app = await build(t);
    t.teardown(() => app.close());
    const res = await app.inject({
        method: 'PUT',
        url: '/categorias/60',
        payload: {
            nombre: 'Alimentos'
        }
    });
    const payload = JSON.parse(res.payload);
    t.equal(res.statusCode, 200, 'El código de respuesta es 200 (OK)');
    t.ok(payload, {
        id: 60,
        nombre: 'Alimentos'
    });
});

test('delete category', async (t) => {
    const app = await build(t);
    t.teardown(() => app.close());
    const res = await app.inject({
        method: 'DELETE',
        url: '/categorias/60'
    });
    t.equal(res.statusCode, 204, 'El código de respuesta es 204 (No Content)');
})

test('get all subcategories of a category', async (t) => {
    const app = await build(t);
    t.teardown(() => app.close());
    const res = await app.inject({
        method: 'GET',
        url: '/categorias/60/subcategorias'
    });
    const payload = JSON.parse(res.payload);
    t.equal(res.statusCode, 200, 'El código de respuesta es 200 (OK)');
    t.ok(payload, {
        id: 70,
        nombre: 'Dulces',
        categoria_id: 60
    });
});

test('get subcategory by id', async (t) => {
    const app = await build(t);
    t.teardown(() => app.close());
    const res = await app.inject({
        method: 'GET',
        url: '/categorias/60/subcategorias/70'
    });
    const payload = JSON.parse(res.payload);
    t.equal(res.statusCode, 200, 'El código de respuesta es 200 (OK)');
    t.ok(payload, {
        id: 70,
        nombre: 'Dulces',
        categoria_id: 60
    });
})

test('create subcategory', async (t) => {
    const app = await build(t);
    t.teardown(() => app.close());
    const res = await app.inject({
        method: 'POST',
        url: '/categorias/60/subcategorias',
        payload: {
            nombre: 'Sin glúten',
            categoria_id: 60
        }
    });
    t.equal(res.statusCode, 201, 'El código de respuesta es 201 (Created)');
});

test('update subcategory', async (t) => {
    const app = await build(t);
    t.teardown(() => app.close());
    const res = await app.inject({
        method: 'PUT',
        url: '/categorias/60/subcategorias/70',
        payload: {
            nombre: 'Sin azucares procesados'
        }
    });
    const payload = JSON.parse(res.payload);
    t.equal(res.statusCode, 200, 'El código de respuesta es 200 (OK)');
    t.ok(payload, {
        id: 70,
        nombre: 'Sin azucares procesados',
        categoria_id: 60
    });
});

test('delete subcategory', async (t) => {
    const app = await build(t);
    t.teardown(() => app.close());
    const res = await app.inject({
        method: 'DELETE',
        url: '/categorias/60/subcategorias/70'
    });
    t.equal(res.statusCode, 204, 'El código de respuesta es 204 (No Content)');
});

