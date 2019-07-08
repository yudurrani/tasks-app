const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    userNewUrlParser: true,
    useCreateIndex: true
})


 const Tasks = mongoose.model('Tasks', {
     discription:{
         type: String,
         required: true,
         trim : true,
         
     },
     completed:{
         type:Boolean,
         default: false
     }
 })

//  const first = new Tasks({
//      discription:'Cleaning my room',
     
//  })


//  first.save().then(() => {
//     console.log(first)
//  }).catch((error) => {
//      console.log('Error!' , error)
//  })
