"use client";

import { lightTheme } from "@/utils/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";

const MuiProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline /> {children}
    </ThemeProvider>
  );
};

export default MuiProviders;
