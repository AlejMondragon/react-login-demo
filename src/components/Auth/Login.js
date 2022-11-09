import React, { useEffect, useState, useRef } from "react"
import Button from "../UI/Button"
import Card from "../UI/Card"
import classes from "./Login.module.css"

const spanEmailStyling = (
  <>
    <span style={{transitionDelay: "0.1s"}}>E</span>
    <span style={{transitionDelay: "0.15s"}}>m</span>
    <span style={{transitionDelay: "0.2s"}}>a</span>
    <span style={{transitionDelay: "0.25s"}}>i</span>
    <span style={{transitionDelay: "0.3s"}}>l</span>
  </>
)

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
  const emailInputRef = useRef(null)
  const passwordInputRef = useRef(null)
  
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(null)
  const [passworIsValid, setPasswordIsValid] = useState(null)

  useEffect(() => {
    if(emailInput.trim().length > 0) {
      const timer = setTimeout(() => {
          setEmailIsValid(emailInput.includes('@') && emailInput.includes('.'))
      }, 1000);

      return () => {
        clearTimeout(timer)
      }
    } else {
      setEmailIsValid(null)
    }
  }, [emailInput])

  useEffect(() => {
    if(passwordInput.trim().length > 0) {
      const timer = setTimeout(() => {
        setPasswordIsValid(passwordInput.trim().length > 5);
      }, 500);

      return () => {
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

  const emailLabelFocusInputHandler = () => {
    emailInputRef.current.focus()
  }
  
  const passwordLabelFocusInputHandler = () => {
    passwordInputRef.current.focus()
  }

  const submitHandler = event => {
    event.preventDefault()

    if(emailIsValid && passworIsValid) {
      props.onLogin()
    }
  }

  return (
    <Card>
        <h1>Login</h1>
        <form onSubmit={submitHandler}>
          <div className={`${classes["input-component"]} ${emailIsValid === false ? classes["invalid"] : "" }`}>
            <input 
              type="text" 
              ref={emailInputRef}
              onChange={emailInputHandler}
              required
            />
            <label onClick={emailLabelFocusInputHandler}>{spanEmailStyling}</label>
            {emailIsValid === false && <p className={classes["validation-message"]}>Please enter a valid Email.</p>}
          </div>
          <div className={`${classes["input-component"]} ${passworIsValid === false ? classes["invalid"] : "" }`}>
            <input 
            type="password" 
            ref={passwordInputRef}
            onChange={passwordInputHandler}
            required
            />
            <label onClick={passwordLabelFocusInputHandler}>{spanPswStyling}</label>
            {passworIsValid === false && <p className={classes["validation-message"]}>Password must be {">"} 5.</p>}
          </div>
          <Button type={"submit"}>Log In</Button>
        </form>
    </Card>
  )
}

export default Login