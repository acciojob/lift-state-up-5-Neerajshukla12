
import React, { useState } from "react";
import './../styles/App.css';
import Login from "./Login";

const App = () => {
  const [isLoggedIn,setisLoggedIn]=useState(false);
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        {isLoggedIn ? (
        <h2> User is Logged In</h2>
      ) : (
        <Login setisLoggedIn={setisLoggedIn}/>
      )}
    </div>
  )
}

export default App
