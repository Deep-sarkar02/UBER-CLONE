// -----------------------rerquirement-----------------
const usermodel = require("../models/user.model");

// function to create the user 
// so we will need the email , passs and  first name
module.exports.createuser = async({
    firstname , lastname , email , password // this  will be as an object form
})=>
{
    // now check the following
    if(!firstname || !email || !password)
    {
        throw new Error("All the fields are requiredd");
    }
    // else case create a new user
    const user =  usermodel.create(
        {
            fullname :{firstname , lastname},
            email ,
            password
        }
    )
    // return the user
    return user;
}