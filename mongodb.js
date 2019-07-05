// CRUD create read update delete


const{MongoClient, ObjectID} = require('mongodb')

const connectionURL ='mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if(error){
        return console.log('Unable to connect to database!')
    }
    
   const db = client.db(databaseName)

//    db.collection('users').updateOne({
//     _id: new ObjectID("5d1e96c29b27a39ecc0e61a0")
//    },{
//        $inc: {
//            age: 10
//        }
//    }).then((result) => {
//         console.log(result)
//    }).catch((error) => {

//    })

    db.collection('tasks').updateMany({
        Completed: true
    },{
        $set: {
            Completed:false
        }
    
    }).then((result) => {
        console.log(result.modifiedCount)
    }).catch((error) => {
        console.log(error)
    })
})