require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndUpdate('5d2001f16e51f2f599f88097' , { completed : true}).then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false})
    }).then((result) =>{
        console.log(result)
    }).catch((e) => {
        console.log(e)
    })

// console.log(user)
// return User.countDocuments({ age:1})
// }).then((result) => {
// console.log(result)
// }).catch((e) => {
// console.log(e)
// })