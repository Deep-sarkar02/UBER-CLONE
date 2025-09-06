// step : 26
import React,{useState} from "react";
import { Link } from "react-router-dom";
const UserLogin = () => {

  // now we will use the 2 way binding to get the value of the input
  const[email , setEmail] = useState(''); // initially empty
  
  // for password
  const[password , setPassword] = useState(''); // initially empty
  
  // for the user loginf data
  const[userData , setUserData] = useState({}); // initially empty object

  // now create a submit handler function
  const submithandler = (e) =>{
    e.preventDefault(); // to prevent the default behaviour of the form
    
    // now we will set the user data
    setUserData({
      email : email, // key and value are same so we can write only once
      password : password
    })
    console.log(userData);

    setEmail(''); // to clear the input field
    setPassword(''); // to clear the input field
  }

  return (
    // Wrap everything in a single root element
    <div>
      <div className="p-7 h-screen flex flex-col justify-between">
        <img
          className=" w-16 mb-10 "
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        {/**====================step: -31======================= */}
        {/* User Login Page */}
        <form action=""  onSubmit={(e) =>{submithandler(e)}} >
          <h3 className="text-lg font-medium mb-2">What's your email?</h3>

          <input
            required
            // Added value attribute for two-way binding
            value={email}
            
            onChange={(e) =>{ 
                    //console.log(e.target.value);
                     setEmail(e.target.value);
              }}


            // Corrected placeholder class and placeholder text
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
          />

          <h3 className="text-lg font-medium mb-2">Enter Password</h3>

          <input
            required
            // Corrected placeholder class
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            value={password}
            
            onChange={(e) =>{ 
                    //console.log(e.target.value);
                     setPassword(e.target.value);
              }}
            type="password"
            placeholder="password"
          />

          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base">
            Login
          </button>


          
        
          </form>
           {/**link from the react router dom  */}
          <p className="text-center">New Here ?  <Link to='/signup' className ="text-blue-600" > Create A New Account </Link></p>
          <div>
          <Link to='/captain-login' className="bg-[#10b461]  flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base" >Sign in as Captian</Link>
          </div>
        </div>
      </div>
     
  );
};
export default UserLogin;