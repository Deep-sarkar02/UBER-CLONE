//=======================captain service========================
//=================step 15========================
// require the captain model
const captainmodel = require('../models/captain.model');

// now we will create the service to register the captain
module.exports.createCaptain = async (
    {firstname , lastname , email , password , color , plate , capacity , type}) => 
    {
        // now we will create the captain
        // we will use the captain model to create the captain
        if(!firstname ||  !email || !password || !color || !plate || !capacity || !type) 
        {
            throw new Error("All fields are required");
        }
        // now we will create the captain
        const captain = await captainmodel.create({
            fullname : {
                firstname,
                lastname
            },
            email,
            password,
            vehicle : {
                color,
                plate,
                capacity,
                type
            }
        });
        // now we will return the captain
        return captain;
}
// now go te the controller and use this service