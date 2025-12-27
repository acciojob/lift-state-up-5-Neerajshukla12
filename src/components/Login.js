import React, { useState } from 'react'

const Login = ({ setisLoggedIn }) => {

    const [user, setUser] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setisLoggedIn(true);

    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Login Form</h1>
            <input
                type="text"
                placeholder="Enter username"
                value={user}
                onChange={(e) => setUser(e.target.value)}
            />
            <br />
            <input
                type='password'
                placeholder='Enter your Password'
            />
            <br />


            <button type="submit">Login</button>
        </form>
    )
}

export default Login