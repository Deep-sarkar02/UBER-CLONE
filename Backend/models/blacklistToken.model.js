// ===================step -7===================
// requirement
const mongoose = require('mongoose');

// create a schema for the blacklist token
// this schema will store the token and the createdAt time
// and also we will set the expire time for the token
// so that it will be deleted after 24 hours
// we will store the token in the database which is blacklisted
// blacklisted means theat the user has logged out and the token is no longer valid
// so we will store the token in the database and set the expire time for the token
const blacklistTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 86400 // it is in sec 86400 sec = 24 hours
    }
});
module.exports = mongoose.model('BlacklistToken', blacklistTokenSchema);
// now in the next step wwe will also chnage in the usermodel.js file
// in the jwt token generation we will also add the feature of expire time
// so that the token will expire after 24 hours