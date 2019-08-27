const request = require('supertest')
const app = require('../src/app')

beforeEach(() => {
    console.log('beforeEach')
})

afterEach(() => {
    console.log('afterEach')
})

test('Should signup a new user', async() => {
    await request(app).post('/users').send({
        name: 'Durrani',
        email: 'yudurrani52525@gmail.com',
        password: '1durrani2'
    }).expect(201)
})