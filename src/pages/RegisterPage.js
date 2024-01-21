import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = ({ users, setUsers, errors, setErrors, setRegisterInn }) => {
  const usernameRef = useRef();
  const passwordOneRef = useRef();
  const passwordTwoRef = useRef();

  const nav = useNavigate();

  const containsNumber = (input) => {
    return /\d/.test(input);
  };

  function clearForm() {
    usernameRef.current.value = "";
    passwordOneRef.current.value = "";
    passwordTwoRef.current.value = "";
  }

  function isFormValid() {
    let noErrors = true;

    setErrors((e) => []);
    usernameRef.current.style.borderColor = null;
    usernameRef.current.style.backgroundColor = null;

    passwordOneRef.current.style.borderColor = null;
    passwordOneRef.current.style.backgroundColor = null;

    passwordTwoRef.current.style.borderColor = null;
    passwordTwoRef.current.style.backgroundColor = null;

    if (
      usernameRef.current.value.length < 3 ||
      usernameRef.current.value.length > 20
    ) {
      setErrors((currentValue) => [
        ...currentValue,
        "Username should be 3-20 characters!",
      ]);
      usernameRef.current.style.borderColor = "red";
      noErrors = false;
    }

    if (
      passwordOneRef.current.value.length < 4 ||
      passwordOneRef.current.value.length > 20 ||
      !containsNumber(passwordOneRef.current.value)
    ) {
      setErrors((currentValue) => [
        ...currentValue,
        "Password should be 4-20 characters characters and include 1 number!",
      ]);
      passwordOneRef.current.style.borderColor = "red";
    }

    if (passwordOneRef.current.value !== passwordTwoRef.current.value) {
      setErrors((currentValue) => [...currentValue, "Password should match!"]);
      passwordOneRef.current.style.borderColor = "red";
      passwordTwoRef.current.style.borderColor = "red";
    }
    return noErrors;
  }

  function registerInn(user) {
    console.log("All users:", users);
    let registeredUser;
    if(user?.username) {
        registeredUser = user;
        setRegisterInn(user)
    } else {
        registeredUser = users.find(user => usernameRef.current.value === user.username && passwordOneRef.current.value === user.password && passwordTwoRef.current.value === user.password);
        setRegisterInn(registeredUser)
    }

    registeredUser && nav('/login')
    // const registerUser = users.find(user => usernameRef.current.value === user.username && passwordOneRef.current.value === user.password)
    
    
   
  }

  function submit() {
    if (!isFormValid()) return;
    setUsers((current) => [
      ...current,
      {
        username: usernameRef.current.value,
        password: passwordOneRef.current.value,
      },
    ]);
    registerInn()
    // clearForm();
  }

  

  return (
    <div className="register">
      <div className="inputs">
        <input ref={usernameRef} type="text" placeholder="USERNAME" id="username"/>
        <input ref={passwordOneRef} type="text" placeholder="PASSWORD" id="password" />
        <input ref={passwordTwoRef} type="text" placeholder="CONFIRM PASSWORD" id="password" />
        <button className="register-button" onClick={submit}>REGISTER</button>
        <div className="errors">
          {errors && errors.map((x, i) => <div key={i}>{x}</div>)}
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
