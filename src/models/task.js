const mongoose = require('mongoose')


const taskSchema = new mongoose.Schema({ 
    description:{
    type: String,
    required: true,
    trim : true,
    
},
completed:{
    type:Boolean,
    default: false
},
owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
}
},{

    timestamps: true,
})

const Task = mongoose.model('Tasks', taskSchema)

module.exports = Task

// const first = new Tasks({
//     discription:'Cleaning my room',
    
// })


// first.save().then(() => {
//    console.log(first)
// }).catch((error) => {
//     console.log('Error!' , error)
// })
