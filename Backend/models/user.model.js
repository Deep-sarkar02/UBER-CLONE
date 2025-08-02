// now we will create the user model 
//require the mongooose
const mongoose = require("mongoose");
// require the bcrypt and the json webtoken 
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
// create the schema
const userSchema = new mongoose.Schema
(
    {
        // fullname is an object
        fullname : {
                        firstname : {type : String , required :true , minlength : [3 , "first name must be of 3 charecter"]},
                        lastname : {type : String ,  minlength : [3 , "last name must be of 3 charecter"]}
                   },
        email : {type : String , required : true , unique : true , minlength : [5 , "Email must be of 5 length"]},
        password : {type : String , required : true ,select : false},
        // here we wll use socket id
        // use this for live tracking of the rider
        socketId : {type : String}

    }
)

// now we will create a jwt token from the 
userSchema.methods.generateAuthToken = function ()
{
    // generate the token
    
    
    // step -8
    const token  = jwt.sign({_id : this._id} , process.env.JWT_SECRET , {expiresIn : '24h'}); // 24 hours
    return token;
}
// compare the password
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password ,this.password )
    
}
// now we will create a static function
userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password , 10);
}

// create the use model
const usermodel = mongoose.model("user" , userSchema);
// export it 
module.exports = usermodel;

// now we will require in the user.controller.js