require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndUpdate('5d2001f16e51f2f599f88097' , { completed : true}).then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false})
//     }).then((result) =>{
//         console.log(result)
//     }).catch((e) => {
//         console.log(e)
//     })


// Task.findByIdAndDelete('5d23f00794b33e7f359ea2f7').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false})
//     }).then((result) =>{
//         console.log(result)
//     }).catch((e) => {
//         console.log(e)
//     })

const deleteTaskAndCount = async(id) =>{
    const task  = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount('5d24f9c5b3957bb08a93cb92').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})