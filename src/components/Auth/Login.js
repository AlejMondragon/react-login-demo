import React, { useEffect, useState, useRef } from "react"
import Button from "../UI/Button"
import Card from "../UI/Card"
import classes from "./Login.module.css"

// ** FOR STYLING PURPOSES ONLY **
const spanEmailStyling = (
  <>
    <span style={{transitionDelay: "0.1s"}}>E</span>
    <span style={{transitionDelay: "0.15s"}}>m</span>
    <span style={{transitionDelay: "0.2s"}}>a</span>
    <span style={{transitionDelay: "0.25s"}}>i</span>
    <span style={{transitionDelay: "0.3s"}}>l</span>
  </>
)

// ** FOR STYLING PURPOSES ONLY **
const spanPswStyling = (
  <>
    <span style={{transitionDelay: "0.1s"}}>P</span>
    <span style={{transitionDelay: "0.15s"}}>a</span>
    <span style={{transitionDelay: "0.2s"}}>s</span>
    <span style={{transitionDelay: "0.25s"}}>s</span>
    <span style={{transitionDelay: "0.3s"}}>w</span>
    <span style={{transitionDelay: "0.35s"}}>o</span>
    <span style={{transitionDelay: "0.4s"}}>r</span>
    <span style={{transitionDelay: "0.45s"}}>d</span>
  </>
)

const Login = props => {
  // ** FOR STYLING PURPOSES ONLY **
  const emailInputRef = useRef(null)
  const passwordInputRef = useRef(null)
  
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(null)
  const [passworIsValid, setPasswordIsValid] = useState(null)

  useEffect(() => {
    if(emailInput.trim().length > 0) {
      const timer = setTimeout(() => {
        console.log("Validating email...");
          setEmailIsValid(emailInput.includes('@') && emailInput.includes('.'))
      }, 1000);

      // return a function in useEffect, it will run before the rest of the code
      return () => {
        console.log("Clear email validation...");
        clearTimeout(timer)
      }
    } else {
      setEmailIsValid(null)
    }
  }, [emailInput])

  useEffect(() => {
    if(passwordInput.trim().length > 0) {
      const timer = setTimeout(() => {
        console.log("Validating password...");
        setPasswordIsValid(passwordInput.trim().length > 5);
      }, 500);

      // return a function in useEffect, it will run before the rest of the code
      return () => {
        console.log("Clear pasword validation...");
        clearTimeout(timer)
      }
    } else {
      setPasswordIsValid(null)
    }
  }, [passwordInput])

  const emailInputHandler = event => {
    setEmailInput(event.target.value)
  }

  const passwordInputHandler = event => {
    setPasswordInput(event.target.value)
  }

  // ** FOR STYLING PURPOSES ONLY **
  const emailInputFocusHandler = () => {
    emailInputRef.current.focus()
  }
  // ** FOR STYLING PURPOSES ONLY **
  const passwordInputFocusHandler = () => {
    passwordInputRef.current.focus()
  }

  const submitHandler = event => {
    event.preventDefault()
    console.log(emailIsValid && passworIsValid);
    if(emailIsValid && passworIsValid) {
      props.onLogin()
    }
  }

  return (
    <Card>
        <h1>Log In</h1>
        <form onSubmit={submitHandler}>
          <div className={`${classes["input-component"]} ${emailIsValid === false ? classes["invalid"] : "" }`}>
            <input 
              type="text" 
              ref={emailInputRef}
              onChange={emailInputHandler}
              required
            />
            <label onClick={emailInputFocusHandler}>{spanEmailStyling}</label>
            {emailIsValid === false && <p className={classes["validation-message"]}>Please enter a valid Email.</p>}
          </div>
          <div className={`${classes["input-component"]} ${passworIsValid === false ? classes["invalid"] : "" }`}>
            <input 
            type="password" 
            ref={passwordInputRef}
            onChange={passwordInputHandler}
            required
            />
            <label onClick={passwordInputFocusHandler}>{spanPswStyling}</label>
            {passworIsValid === false && <p className={classes["validation-message"]}>Password must be {">"} 5.</p>}
          </div>
          <Button type={"submit"}>Log In</Button>
        </form>
    </Card>
  )
}

export default Login