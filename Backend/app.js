const express = require("express")
const app = express();

// require the env
const dotenv = require("dotenv")
// now config the file
dotenv.config();
// set up the corse
const cors = require("cors")
// app.use 
app.use(cors())






// ------------------------Routes section------------------------------
// create the route
app.get("/" , (req ,res)=>
{
    res.send("hello world");
})

// export the app
module.exports =app;
// now create the  server file

