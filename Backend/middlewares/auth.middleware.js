//=====================step - 5========================
// requaremmnent section
const usermodel = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// create a middleware to check the user is authenticated or not
module.exports.authuser = async (req, res, next) => {
    // now we need the token 
    // token can vbe found in the header or the cookeies
    //Optional Chaining (?.): It first checks if req.headers.authorization exists. If it doesn't, the expression returns undefined instead of throwing an error
    const token = req.cookies.token || req.headers.authorization ?.split(' ')[1]; // now get the token from any one of the place
    
    // check if the token is present or not
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    
    // now we will check if the token is blacklisted or not
    // require the blacklisted model
    const isblaclisted = await usermodel.findOne({ token : token }); // check if the token is present in the blacklisted model
    // if it is bl then  send the response
    if (isblaclisted) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    
    
    
    
    // now we will decreyt the token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // verify the token with the secret key
        
        // now we will get the user from the database
        const user = await usermodel.findById(decoded._id); // we will only get the id 


       // after the user wwe have got
       // set it to req,user
       req.user = user; // now we can access the user in the next middleware or controller
       // now return the next middleware or controller
        return next();
    } 
    
    catch (error) 
    {
        return res.status(401).json({ message: 'Unauthorized' });
    }
}