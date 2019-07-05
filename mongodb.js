// CRUD create read update delete


const{MongoClient, ObjectID} = require('mongodb')

const connectionURL ='mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if(error){
        return console.log('Unable to connect to database!')
    }
    
   const db = client.db(databaseName)

//    db.collection('users').findOne({ _id : new ObjectID('5d1e69e7ab2f6348b017baac')}, (error, user) => {
//        if(error){
//            return console.log('Unable to fetch')
//        }

//        console.log(user)
//    })

//     db.collection('users').find({age:32}).toArray((error, users) => {
//         console.log(users)
//      })


//    db.collection('users').find({age:32}).count((error, count) => {
//        console.log(count)
//    })

    db.collection('tasks').findOne({ _id : new ObjectID('5d1e7333b3ec6d6768bad28e')}, (error, task) => {
        if(error){
            return console.log('Unable to fetch')
        }
        console.log(task)
    })

    

    db.collection('tasks').find({Completed: true }).toArray((error, tasks) => {
        console.log(tasks)
    })

})