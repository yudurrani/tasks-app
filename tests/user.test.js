const request = require('supertest')
const app = require('../src/app')

test('Should signup a new user', async() => {
    await request(app).post('/users').send({
        name: 'Durrani',
        email: 'yudurrani52525@gmail.com',
        password: '1durrani2'
    }).expect(201)
})