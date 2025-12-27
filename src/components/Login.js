import React, { useState } from 'react'

const Login = ({setisLoggedIn}) => {

    const [user,setUser]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        setisLoggedIn(true);

    }

  return (
  <form onSubmit={handleSubmit}>
      <h2>Login Form</h2>

      <input
        type="text"
        placeholder="Enter username"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />

      <br /><br />

      <button type="submit">Login</button>
    </form>
  )
}

export default Login