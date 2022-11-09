import React, { useState } from "react";
import Login from "./components/Auth/Login";
import Logout from "./components/Auth/Logout";

function App() {
  const [auth, setAuth] = useState(false)

  const authHandler = () => {
    setAuth(prevAuth => !prevAuth)
  }

  return (
    <React.Fragment>
      {!auth ? <Login onLogin={authHandler} /> : <Logout onLogout={authHandler} />}
    </React.Fragment>
  );
}

export default App;
