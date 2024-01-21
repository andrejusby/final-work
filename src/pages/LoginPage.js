import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({users, setUserLoggedIn, setLoginError, loginError}) => {
  const usernameRef = useRef();
  const passwordOneRef = useRef();

  const nav = useNavigate()

  function login(user) {
    console.log(user);
    let loggedUser;
    if(user?.username) {
        loggedUser = user
        setUserLoggedIn(user);
    } else {
        loggedUser = users.find(user => usernameRef.current.value === user.username && passwordOneRef.current.value === user.password)
        setUserLoggedIn(loggedUser)
        setLoginError(loggedUser ? '' : 'Incorrect username or password.')
        usernameRef.current.style.borderColor = "red";
        passwordOneRef.current.style.borderColor = "red";
    }
    loggedUser && nav("/main")
  }



  return (
    <div>
      <div className="inputs">
        <input ref={usernameRef} type="text" placeholder="USERNAME" id="username" defaultValue={"Max"}/>
        <input ref={passwordOneRef} type="text" placeholder="PASSWORD" id="password" defaultValue={"max1"}/>
        <button className="register-button" onClick={login}>LOGIN</button>
        <div className="errors">{loginError}</div>
      </div>
    </div>
  );
};

export default LoginPage;
