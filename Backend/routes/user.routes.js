// here we will create the routes
// require express
// -------------------------requirement-----------------
const express = require('express');
// call the express rouiter
const router = express.Router(); 
// require the express validator
const {body} =require('express-validator')

// require the controller
const usercontroller = require('../controllers/user.controller')

// -----------------here we can create the route-----------

//==============================register route========================
// now we will create the register route
// registere route
router.post('/register' , // now in the param we will send an array to check all these 
    [
        body('email').isEmail().withMessage('Invalid Email') , 
        body('fullname.firstname').isLength({min : 3}).withMessage("First name must be at least 3 charecters in long"),
        body('password').isLength({min : 6}).withMessage("Password must be 6 charecterrs long"),


    ] , 
    // now  will passs the regiter use
    usercontroller.registeruser
)




// -------------------------Login route-------------------
//=============================step 1=========================
// login route
router.post('/login' , [
    // here we will check the email and password
    body('email').isEmail().withMessage('Invalid Email'), // emali check
    body('password').isLength({min : 6}).withMessage("Password must be 6 charecters long") //password check
] , 
    // now we need a copntroller to handle the login
    usercontroller.loginuser)




// =========================step 3==========================
// profile route
// get request to get the profile of the user
// require the auth middleware
const authmiddleware = require('../middlewares/auth.middleware');

router.get('/profile' , 
    
    // use the authmiddleware to check if the user is authenticated or not
    authmiddleware.authuser,
    // now we will get the profile of the user
    usercontroller.getprofile
    // now we will create the get userprofile controller in the user.controller.js file
)




// =========================step 9==========================
// loout route
router.get('/logout' , 
    // use the authmiddleware to check if the user is authenticated or not
    authmiddleware.authuser,
    // now we will create the logout controller in the user.controller.js file
    usercontroller.logoutuser
)
// export the router
module.exports = router;