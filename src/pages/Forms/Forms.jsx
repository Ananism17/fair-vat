import { React, useState } from "react";
import SubmitButton from "../../components/buttons/SubmitButton";
import LoginForm from "../../components/forms/LoginForm";
import RegistrationForm from "../../components/forms/RegistrationForm";
import { Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Forms = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div className="mt-2 ms-3 me-3">
      <Typography variant="h1" color={colors.greenAccent[300]}>
        Login Form
      </Typography>
      <LoginForm />
      <Typography variant="h1" color={colors.greenAccent[300]}>
        Registration Form
      </Typography>
      <RegistrationForm />
    </div>
  );
};

export default Forms;
