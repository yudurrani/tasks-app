const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

const userOneId = new mongoose.Types.ObjectId()
const userOne = {
    _id: userOneId,
    name: 'Mike',
    email: 'mike@example.com',
    password: '1mike232',
    tokens: [{
        token: jwt.sign({_id: userOneId}, process.env.JWT_SECRET)
    }]
}

beforeEach(async() => {
    await User.deleteMany()
    await new User(userOne).save()
})

// afterEach(() => {
//     console.log('afterEach')
// })

test('Should signup a new user', async() => {
    const response = await request(app).post('/users').send({
        name: 'Durrani',
        email: 'yudurrani52525@gmail.com',
        password: '1durrani2'
    }).expect(201)

    // assert that database was changed correctly

    const user = await User.findById(response.body.user._id)
    expect(user).not.toBeNull()

    // Assertions about the response
    expect(response.body).toMatchObject({
        user: {
        name: 'Durrani',
        email:'yudurrani52525@gmail.com'
        },
        token: user.tokens[0].token
    })

    // Assertion that user password in not in plain text
    expect(user.password).not.toBe('1durrani2')

    

})


test('Should login existing user', async() => {
    const response = await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)
    
    // Assert that the token in response match users second token
    const user = await User.findById(userOneId)
    expect(response.body.token).toBe(user.tokens[1].token)
})

test('Should not login nonexistent user', async() => {
    await request(app).post('/users/login').send({
        email: 'userOne.email',
        password: 'password12345'
    }).expect(400)
})

test('Should get profile for user', async() => {
    await request(app)
    .get('/users/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200)
})


test('Should not get profile for unauthenticated user', async() => {
    await request(app)
    .get('/users/me')
   .send()
    .expect(401)
})


test('Should delete account for user', async() => {
    const response = await request(app)
    .delete('/users/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200)

    // Assert user is removed
    const user = await User.findById(userOneId)
    expect(user).toBeNull()

})

test('Should not delete account for unauth user', async() => {
    await request(app)
    .delete('/users/me')
    .send()
    .expect(401)
})

