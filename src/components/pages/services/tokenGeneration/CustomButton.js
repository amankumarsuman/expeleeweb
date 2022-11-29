import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";
export const ColorButton = styled(Button)(({ theme }) => ({
  //   color: theme.palette.getContrastText(white),
  // color: "black",
  padding: "0.5em",
  borderRadius: "10px",
  marginTop: "2.2em",
  width: "12em",
  fontWeight: "bold",
  backgroundImage:
    "linear-gradient(to right,white, #00F6FF,#5CE1E6,#DEF9FA,#00F6FF)",
  "&:hover": {
    backgroundColor: "theme.primary",
    color: "white",
  },
}));
export const SimpleButton = styled(Button)(
  ({ theme, variant = "outlined" }) => ({
    //   color: theme.palette.getContrastText(white),
    // color: "black",
    // variant: { variant },
    // padding: "0.8em",
    // border:"1px solid red",
    borderRadius: "10px",
    marginTop: "2.2em",
    width: "12em",
    color: "#5CE1E6",
    fontWeight: "bold",
  textTransform: 'none',
  transition: "background 1s, color 1s",
  
  "&:hover": {
    backgroundColor: "white",
    // backgroundImage: "linear-gradient(to right, #00F6FF,#5CE1E6,#DEF9FA,#FFFFFF)",
      color: "black",
    },
  })
);
export const ConnectWalletBtn = styled(Button)(({ theme }) => ({
  //   color: theme.palette.getContrastText(white),
  color: "black",
  padding: "1%",
  borderRadius: "15px",
  //   marginTop: "2em",
  backgroundColor: "theme.primary",
  "&:hover": {
    backgroundColor: "theme.primary",
    color: "white",
  },
}));
