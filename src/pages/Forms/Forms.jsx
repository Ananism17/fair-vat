import { React, useState } from "react";
import SubmitButton from "../../components/buttons/SubmitButton";
import LoginForm from "../../components/forms/LoginForm";
import RegistrationForm from "../../components/forms/RegistrationForm";

const Forms = () => {
  return (
    <div className="mt-2 ms-3 me-3">
      <h1>Login Form</h1>
      <LoginForm />
      <RegistrationForm />
    </div>
  );
};

export default Forms;
