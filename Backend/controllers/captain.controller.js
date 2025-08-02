//==================captain controller========================
// now we will create the captain controller
//=========================step 12=========================


const captainmodel = require('../models/captain.model');
const captainservice = require('../services/captain.service');
const { validationResult } = require('express-validator');

// now we will create the register captain function
//========================register captain controller========================
module.exports.registerCaptain = async (req, res, next) => {
    // check the validation result
    const errors = validationResult(req);
    // if there is an error then return the error
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // now we will get the data from the request body
    const { fullname, email, password, vehicle } = req.body;


    // now we will check if the email is already registered or not
    const existingCaptain = await captainmodel.findOne({ email });
    
    if( existingCaptain ) {
        return res.status(400).json({ message: 'Email already registered' });
    }


    //get the password
    const h_pass = await captainmodel.hashPassword(password);
    
    
    // now we will call the captain service to create the captain
    const captain = await captainservice.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: h_pass,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        type: vehicle.type
    });


    // now we will generate the token for the captain
    const token = captain.generateAuthToken();

    // now we will return the token and the captain
    res.status(201).json({ token, captain });
}