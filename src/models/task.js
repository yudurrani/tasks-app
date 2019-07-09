const mongoose = require('mongoose')




const Task = mongoose.model('Tasks', {
    description:{
        type: String,
        required: true,
        trim : true,
        
    },
    completed:{
        type:Boolean,
        default: false
    }
})

module.exports = Task

// const first = new Tasks({
//     discription:'Cleaning my room',
    
// })


// first.save().then(() => {
//    console.log(first)
// }).catch((error) => {
//     console.log('Error!' , error)
// })
