import React from "react";
import { ThemeProvider } from "styled-components";
import dark from "./dark";
import light from "./light";

import { useSelector } from "react-redux";

const Theme = ({ children }) => {
  const theme = useSelector(state => state.theme);

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      {children}
    </ThemeProvider>
  );
};
export default Theme;
