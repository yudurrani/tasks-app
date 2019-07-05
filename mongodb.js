// CRUD create read update delete


const{MongoClient, ObjectID} = require('mongodb')

const connectionURL ='mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id.id.length)
console.log(id.toHexString().length)


MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if(error){
        return console.log('Unable to connect to database!')
    }
    
   const db = client.db(databaseName)

//    db.collection('users').insertOne({
//        _id: id,
//        name: 'Durrani',
//        age: 31
//     }, (error, result)=> {
//      if(error){
//            return console.log('Unable to insert user')
//        }

//        console.log(result.ops)
   
//    })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Aizah',
    //         age: 4
    //     }, {
    //         name: 'Safia',
    //         age:25
    //     }
    // ], (error, result)=>{
    //     if(error){
    //         return console.log('Unable to insert documents')
    //     }
    //     console.log(result.ops)

    // })

    // db.collection('tasks').insertMany([
    //     {
    //         Description: 'Document 1',
    //         Completed: true
    //     }, {
    //         Description: 'document 2',
    //         Completed: false
    //     },
    //     {
    //         Description: 'Document 3',
    //         Completed:true
    //     }
    // ], (error, result)=>{
    //     if(error){
    //         return console.log('Unable to insert documents')
    //     }
    //     console.log(result.ops)
    // })    

})