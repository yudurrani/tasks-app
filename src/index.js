const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000
const surveyRouter = require('./routers/survey')


const multer = require('multer')
const upload = multer({
    dest: 'images',
    limits:{
        fileSize: 1000000
    },
    fileFilter(req, file, cb){
        if(!file.originalname.match(/\.(doc|docx)$/)){
            return cb(new Error('Please upload a Word Document'))
        }

        cb(undefined, true)

    }
})

// const errorMiddleware = (req, res, next) => {
//     throw new Error('From my middleware ')
// }
app.post('/upload', upload.single('upload'), (req, res) =>{
    res.send()
}, (error, req, res, next) => {
    res.status(400).send({error: error.message})
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

