import { test } from 'tap'
import { build } from '../../helper.js'

test('get all users', async (t) => {
    const app = await build(t);
    t.teardown(() => app.close());
    const res = await app.inject({
        method: 'GET',
        url: '/usuarios'
    })

    t.equal(res.statusCode, 200, 'El código de respuesta es 200 (OK)')
});

test('get user by id', async (t) => {
    const app = await build(t);
    t.teardown(() => app.close());
    const res = await app.inject({
        method: 'GET',
        url: '/usuarios/50'
    })
    const payload = JSON.parse(res.payload);
    t.equal(res.statusCode, 200, 'El código de respuesta es 200 (OK)')
    t.ok(payload, {
        id: 50,
        nombre: 'Don Pepito',
        email: 'pepito@outlook.com',
        contrasena: '123456'
    });
});

test('create user', async (t) => {
    const app = await build(t);
    t.teardown(() => app.close());
    const res = await app.inject({
        method: 'POST',
        url: '/usuarios',
        payload: {
            nombre: 'Armando',
            email: 'armando@outlook.com',
            contrasena: '123456'
        }
    })
    t.equal(res.statusCode, 201, 'El código de respuesta es 201 (Created)');
});

test('update user', async (t) => {
    const app = await build(t);
    t.teardown(() => app.close());
    const res = await app.inject({
        method: 'PUT',
        url: '/usuarios/50',
        payload: {
            nombre: 'Armando Paredes',
            email: 'armando@outlook.com',
            contrasena: '123456789'
        }
    })
    const payload = JSON.parse(res.payload);
    t.equal(res.statusCode, 200, 'El código de respuesta es 200 (OK)')
    t.ok(payload, {
        id: 50,
        nombre: 'Armando Paredes',
        email: 'armando@gmail.com',
        contrasena: '123456789'
    });
})

test('delete user', async (t) => {
    const app = await build(t);
    t.teardown(() => app.close());
    const res = await app.inject({
        method: 'DELETE',
        url: '/usuarios/50'
    })
    t.equal(res.statusCode, 204, 'El código de respuesta es 204 (No Content)')
})