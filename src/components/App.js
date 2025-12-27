import React, { useState } from "react";
import Login from "./Login";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="parent">
      <h1>Parent Component</h1>

      {isLoggedIn ? (
        <p>You are logged in!</p>
      ) : (
        <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
};

export default App;
