import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import styles from "./dashboard.module.css";
const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#17121F" : "#fff",
  ...theme.typography.body2,
  // padding: theme.spacing(2),
  color: "white",
  maxWidth: 600,
  // color: theme.palette.text.primary,
  ":hover": {
    // backgroundColor: theme.palette.mode === "dark" ? "#17121F" : "grey",
    background: "linear-gradient( to right bottom,#1e1e1e,black,#2E2A34, black,#1e1e1e)",

    // -webkit-background-clip: "text",
    // -webkit-text-fill-color: transparent,
    color: "black !important",
    fontWeight: "bold",
  },
}));

export default function AutoGridCard({ h1, img, message }) {
  return (
    <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3, }}>
      <StyledPaper
        sx={{
          my: 1,
          mx: "auto",
          p: 2,
          backgroundColor: "#17121F",
          // color: "white",
          borderRadius: "15px",
        }}
        elevation={8}
      >
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item xs={12} md={6}>
            {/* <Avatar sx={{ backgroundColor: "#0C352D", padding: "1.5em" }}> */}
              <img src={img} alt={h1} width="70%" />
            {/* </Avatar> */}
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                // fontFamily: "poppins",
                fontSize: "2em",
              }}
              className={styles.textGradient}
              variant="h5"
            >
              {h1}
            </Typography>
            <Typography
              sx={{
                color: "grey",
                marginTop: "1em",
                // fontFamily: "open-sans",
                fontSize: "1.2em",
              }}
            >
              {message}
            </Typography>
          </Grid>
        </Grid>
      </StyledPaper>
    </Box>
  );
}
