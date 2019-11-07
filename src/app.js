const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
var cors = require('cors')

const app = express()
const surveyRouter = require('./routers/survey')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(userRouter)
app.use(taskRouter)
app.use(surveyRouter)


module.exports = app