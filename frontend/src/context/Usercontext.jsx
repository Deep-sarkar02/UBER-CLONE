// step 34 :- create a user context
// we will create a context to share data across the components without props drilling
// mainly used for centralised data management
// we will create a context for user data
// we will create a context provider to provide the data to the components
// we will wrap the full application by this usercontext
import React from "react";

// create a context
export const UserDataContext = React.createContext(); // create a context object

// create a context provider
const Usercontext = ({children}) =>
{
     // cretae a data
    //const user = "deep"

    // we will create a usestate to manage the user data
    const  [user , setUser] = React.useState({
        email : "",
        fullName : {firstName : "" , lastName : ""},
        
    });





    return(
        <div>
           {/*-- we will wrap the children with the context provider */}
              <UserDataContext.Provider value = {[user , setUser]} > {/** now if i want to use it to anywhere then we can use it any of the routes , means that we can use this in any of the files  --> go to app.jsx*/}
                 {children}
                </UserDataContext.Provider>
        </div>
    )
}
export default Usercontext;
// now we will wrap the full application by this usercontext