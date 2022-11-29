import React from "react";
import { Divider, Grid, Paper, Typography } from "@mui/material";
import styles from "./tryourServices.module.css";
import CountUp from "react-countup";
import AnimatedButton from "../../customComponents/animatedButton/AnimatedButton";
function TryOurServices() {
  const handleNavigate = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };
  return (
    <Paper className={styles.paperDiv} elevation={5}>
      <Grid sx={{ width: "89%", margin: "auto" }} container spacing={2}>
        <Grid item xs={12} md={10}>
          <h1
            style={{ color: "white",
            //  fontFamily: "poppins"
             }}
            className={styles.textGradient}
          >
            Let's try our services now!
          </h1>
          <Typography
            sx={{ color: "grey", 
            // fontFamily: "open-sans",
             fontSize: "1.5em",marginBottom:"1em" }}
          >
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </Typography>
        </Grid>
        <Grid item xs={12} md={2}>
            
          <div 
          
          >

          <AnimatedButton text={"Get Started"} />
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TryOurServices;
