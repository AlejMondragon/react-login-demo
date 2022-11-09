import React, { useState } from "react";
import Login from "./components/Auth/Login";
import Logout from "./components/Auth/Logout";

function App() {
  const [isAuth, setIsAuth] = useState(false)

  const authHandler = () => {
    setIsAuth(prevAuth => !prevAuth)
  }

  return (
    <React.Fragment>
      {!isAuth ? <Login onLogin={authHandler} /> : <Logout onLogout={authHandler} />}
    </React.Fragment>
  );
}

export default App;
