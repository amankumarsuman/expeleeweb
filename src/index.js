import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
// import { theme } from "./components/coreComponents/themeStyle";
import { ColorModeContext, useMode } from "./theme";
import { theme } from "./components/coreComponents/themeStyle";
import CryptoContext from "./components/cryptohunting/CryptoContext";
// import CryptoContext from "./CryptoContext";
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <React.StrictMode>
    

    <ThemeProvider theme={theme}>
    <CssBaseline />

    <CryptoContext>
    <BrowserRouter>


      <App />
    </BrowserRouter>
    </CryptoContext>
    </ThemeProvider>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
