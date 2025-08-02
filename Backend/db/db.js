// here will connect the db 
const mongoose = require('mongoose')
// now connct to db
function  connectToDb()
{
    // connect to db
    mongoose.connect(process.env.DB_CONNECT ,  // so  we will get the database url from the env varaible so go the env file and update the url
        ).then(()=>
        {
            console.log("connceted to db")
        })
        .catch(err =>console.log(err))
}
// export the function
module.exports = connectToDb;