import React from "react";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import SubmitButton from "../../components/buttons/SubmitButton";
import { Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Buttons = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div className="mt-2 ms-3 me-3">
      <Typography variant="h1" color={colors.greenAccent[300]}>
        Buttons
      </Typography>
      <PrimaryButton />
      <SubmitButton />
    </div>
  );
};

export default Buttons;
