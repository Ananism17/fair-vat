import React from "react";
import DataTable from "../../components/tables/DataTable";
import { Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Tables = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div className="mt-2 ms-3">
      <Typography variant="h1" color={colors.greenAccent[300]}>
        Data Table
      </Typography>
      <DataTable />
    </div>
  );
};

export default Tables;
