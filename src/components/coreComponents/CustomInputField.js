import * as React from "react";
import { styled } from "@mui/material/styles";

import TextField from "@mui/material/TextField";
import { Select } from "@mui/material";

export const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "blue",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "blue",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "blue",
    },
    "&:hover fieldset": {
      borderColor: "blue",
    },
    "&.Mui-focused fieldset": {
      borderColor: "blue",
    },
  },
});
export const CustomTextFieldForTable = styled(TextField)({
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiInput-underline": {
    borderBottomColor: "White",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "White",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "White",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
});

export const ScannerTextField = styled(TextField)({
  "& .MuiInputBase-root": {
    paddingRight: 0,
    borderRadius: "10px",
  },
  "& .MuiOutlinedInput-root": {
    paddingRight: 0,
  },
  "& label.Mui-focused": {
    color: "blue",
    borderRight: "none",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "blue",
    borderRight: "none",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "blue",
      borderRight: "none",
    },
    "&:hover fieldset": {
      borderColor: "blue",
    },
    "&.Mui-focused fieldset": {
      borderColor: "blue",
    },
  },
});
