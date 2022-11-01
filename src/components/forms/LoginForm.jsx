import { React, useState } from "react";
import SubmitButton from "../buttons/SubmitButton";

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    mail: "",
    pass: "",
  });

  const updateMail = (value) => {
    setLoginData(previousState => {
      return { ...previousState, mail: {value} }
    });
  }

  const updatePass = (value) => {
    setLoginData(previousState => {
      return { ...previousState, pass: {value} }
    });
  }


  return (
    <div>
      <form>
        <div className="mb-3 mt-2">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => updateMail(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => updatePass(e.target.value)}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
      </form>

      <SubmitButton data={loginData} name="Login"/>
    
    </div>
  );
};

export default LoginForm;
