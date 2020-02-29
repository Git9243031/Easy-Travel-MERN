import React from "react";
import { ThemeProvider } from "styled-components";
import dark from "./dark";
import light from "./light";

const theme = localStorage.theme !== "dark" ? dark : light;

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
