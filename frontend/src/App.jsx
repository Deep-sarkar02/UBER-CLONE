
//=====================step-23========================
// now we will create a simple react app with a button
// that will change the text when clicked
import React, { use } from 'react';
import {Routes , Route} from 'react-router-dom';
import Home from './pages/Home';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import CaptainLogin from './pages/CaptainLogin';
import CaptainSignup from './pages/CaptainSignup';
import { useContext } from 'react';
import { UserDataContext } from './context/Usercontext';

const App = () => {
  // aftetr the usercontext.jsx file is created
  // now we will use the context in this app.jsx file
  // we will use the useContext hook to use the context
  // we will import the UserDataContext from the usercontext.jsx file
  // and then we will use the useContext hook to get the data from the context
  // and then we will display the data in the home page
  const ans = useContext(UserDataContext); // now we can use this user variable in any of the routes
  // now we will display this in the home page
  console.log(ans); // now we will see the value of the user variable in the console



  
  return (
    <div>
      {/**here we can create the routes now */}
      <Routes>
                {/**this is the home route render the Home */}
                <Route  path = '/' element = {<Home />}/>

                {/** now render the login page */}
                <Route  path = '/login' element = {<UserLogin/>}/>

                {/** now render the signup page */}
                <Route  path = '/signup' element = {<UserSignup/>}/>

                {/** now for the captain login page */}
                <Route  path = '/captain-login' element = {<CaptainLogin/>}/>

                {/** now for the captain signup page */}
                <Route  path = '/captain-signup' element = {<CaptainSignup/>}/>
      </Routes>
    </div>
      
      )
};
export default App;