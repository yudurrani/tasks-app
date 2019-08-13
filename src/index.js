const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000
const surveyRouter = require('./routers/survey')


const multer = require('multer')
const upload = multer({
    dest: 'images'
})
app.post('/upload',upload.single('upload'), (req, res) =>{
    res.send()
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(userRouter)
app.use(taskRouter)
app.use(surveyRouter)


app.listen(port, () => {
    console.log('Server is up on port' + port)
})

const Task = require('./models/task')
const User = require('./models/user')


const main = async() => {
 

}

main()

