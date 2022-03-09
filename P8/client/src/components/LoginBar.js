import { Button_styled } from "./Button_styled";
import { useState } from "react";
import loginImage from './image/login.png';
import {userAuth} from './script';

function LoginBar() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false); 

// Generate JSX code for error message
const renderErrorMessage = (name) =>name === errorMessages.name && (<div className="error">{errorMessages.message}</div>);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  async function handleSubmit(event) {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userAuthentication=await userAuth(email,password) ;

    // Compare user info
     (userAuthentication!=='true')?setErrorMessages({ name: "pass", message: errors.pass }):setIsSubmitted(true);
  }
  const renderForm = (
    <div className="form">
      <img class="loginImage" src={loginImage} alt="Logo" />
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname"  onChange={e => setEmail(e.target.value)} required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass"  onChange={e => setPassword(e.target.value)} required />
          {renderErrorMessage("pass")}
          </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
  );
}
export default LoginBar;
