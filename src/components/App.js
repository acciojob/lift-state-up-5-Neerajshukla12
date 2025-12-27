import React, { useState } from "react";
import Login from "./Login";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="parent">
      <h1>Parent Component</h1>

      {isLoggedIn ? (
        <h2>Login Successful</h2>
      ) : (
        <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
};

export default App;
