import React from "react";
import SubmitButton from "../buttons/SubmitButton";

const RegistrationForm = () => {
  return (
    <div className="mt-2">
      <h1>Registration Form</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            // onChange={(e) => updateMail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            // onChange={(e) => updatePass(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword2" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
            // onChange={(e) => updatePass(e.target.value)}
          />
        </div>
      </form>

      <SubmitButton name="Register"/>
    </div>
  );
};

export default RegistrationForm;
