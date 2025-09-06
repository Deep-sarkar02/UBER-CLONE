// step : 26 
import React, { useState } from "react";
import { Link } from "react-router-dom";
const UserSignup = () => {
  
  
  //perform two way data binding
  const[password,setPassword] = useState("");
  const[firstname,setfirstName] = useState("");
  const [email,setEmail] = useState("");
  const[lastname,setlastName] = useState("");
  const[userdata , setUserdata] = useState({});

  const submithandler = (e) =>{
    e.preventDefault(); //stop the reload
    console.log(name,email);
    // store the data in the object
    const data = {
      fullName :
      {
        firstname : firstname,
        lastname : lastname

      },
      email: email,
      password: password
    }
    console.log(data);
    // set the data to the userdata
    setUserdata(data);
    // now again reset the values
    setfirstName("");
    setlastName("");
    setEmail("");
    setPassword("");

  }



  // return body
  return (
    <div>
      {/**step: -33 copy all the details from the userlogin page */}
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

           <h3 className="text-base font-medium mb-2">What's your name ?</h3>
            
           <div className="flex gap-4 mb-6" >
                  <input
                  required
                  


                  // Corrected placeholder class and placeholder text
                  className="bg-[#eeeeee]  w-1/2  rounded px-4 py-2 border  text-lg placeholder:text-base"
                  type="text"
                  placeholder="First name"
                  value={firstname}
                  //when on chnage then the value will be set to the firstname
                  onChange={(e) =>{setfirstName(e.target.value)}}
                 />


                 <input
                  required
                  


                  // Corrected placeholder class and placeholder text
                  className="w-1/2 bg-[#eeeeee]  rounded px-4 py-2 border  text-lg placeholder:text-base"
                  type="text"
                  placeholder="Last name"
                  value={lastname}
                  onChange={(e) =>{setlastName(e.target.value)}}
                 />

                 
           </div>


          <h3 className="text-base font-medium mb-2">What's your email?</h3>

          <input
            required
            


            // Corrected placeholder class and placeholder text
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) =>{setEmail(e.target.value)}}
          />

          <h3 className="text-base font-medium mb-2">Enter Password</h3>

          <input
            required
            // Corrected placeholder class
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) =>{setPassword(e.target.value)}}
          />

          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base">
            Login
          </button>


          
        
          </form>
          <p className="text-center">Already have a account  ?  <Link to='/login' className ="text-blue-600" >Login here </Link></p>
          <div>
          
          <p className="text-[10px] leading-tight" >
            By proceeding, you agree to Uber's <span className="text-blue-600" >Terms of Service</span> and acknowledge that you have read the <span className="text-blue-600" >Privacy Policy</span>, including Cookie Use. </p>
          
          </div>
        </div>
      </div>
     
    </div>
  );
}
export default UserSignup;