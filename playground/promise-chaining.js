require('../src/db/mongoose')
const User = require('../src/models/user')

// 5d20003f591decede168a88d

User.findByIdAndUpdate('5d23f02994b33e7f359ea2f8', { age: 1 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age:1})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})