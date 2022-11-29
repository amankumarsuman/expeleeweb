import { GradientTwoTone } from "@mui/icons-material";
import { createTheme } from "@mui/material";
import { blue, grey, green, red, yellow } from "@mui/material/colors";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import React from "react";
export const theme = createTheme({
  palette: {
    primary: {
      main: grey[50],
      light: red[500],
      dark: blue[700],
    },
    secondary: {
      main: grey[50],
      main: blue[50],
    },
    navbar: {
      main: GradientTwoTone,
    },
  },
});

const ScrollHandler = (props) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: props.window ? window() : undefined,
  });

  return React.cloneElement(props.children, {
    // linear-gradient(to right bottom,#1e1e1e,black,#2E2A34, black,#1e1e1e)
    style: {
      background: trigger ? "#17121F" : "transparent",
      color: trigger ? "black !important" : "white",
      transition: trigger ? "0.3s" : "0.5s",
      boxShadow: "none",
      padding: "5px 0px",
      zIndex: 99,
    },
  });
};
export const ScrollToChangeNavbarColor = (props) => {
  return <ScrollHandler {...props}>{props.children}</ScrollHandler>;
};
