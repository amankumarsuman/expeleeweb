import React from "react";
import { Divider, Grid, Paper, Typography, useTheme } from "@mui/material";
import styles from "./dashboard.module.css";
import CountUp from "react-countup";
import { tokens } from "../../../theme";
function PaperComponent({count1="10",name1="Products",count2="2000",name2="Community Members",count3="10",name3="Partners",count4="100",name4="Happy Clients"}) {
 
  const theme = useTheme();
  // const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Paper  className={styles.paperDiv} sx={{borderRadius:"15px", }} elevation={5}>
      <Grid sx={{ width: "100%", margin: "auto" }} container spacing={2}>
        {/* <Grid item md={1}>

        </Grid> */}
        <Grid  item xs={12} md={2}>
          <Typography
            style={{
              color: "white",
              textAlign: "center",
              // fontFamily: "poppins",
              fontSize: "1.5em",
              fontWeight:"bold"
            }}
            variant="h5"
          >
            <CountUp end={count1} duration={2} />
            {`+ `}
            </Typography>
            <Typography
            variant="h5"
            style={{
              textAlign: "center",
              fontWeight:"bold"

            }}
            >
            <span className={styles.productsBanner}>{name1}</span>
          </Typography>
        </Grid>
          <Divider orientation="vertical" variant="middle" flexItem sx={{borderColor:"white"}}/>
        
        {/* <Divider orientation="vertical" variant="middle" /> */}
        <Grid item xs={12} md={3}>
          <Typography
            style={{
              color: "white",
              textAlign: "center",
              // fontFamily: "poppins",
              fontSize: "1.5em",
              fontWeight:"bold"

            }}
            variant="h5"
          >
            <CountUp end={count2} duration={5} />
            {`+ `}
            </Typography>
            <Typography
            variant="h5"
            style={{
              textAlign: "center",
              fontWeight:"bold"

            }}
            >
            <span className={styles.productsBanner}>{name2}</span>
          </Typography>
        </Grid>
        <Divider orientation="vertical" variant="middle" sx={{borderColor:"white",marginLeft:"2em"}}flexItem />

        {/* <Divider orientation="vertical" variant="middle" /> */}
        <Grid item xs={12} md={3}>
          <Typography
            style={{
              color: "white",
              textAlign: "center",
              // fontFamily: "poppins",
              fontSize: "1.5em",
              fontWeight:"bold"

            }}
            variant="h5"
          >
            <CountUp end={count3} duration={4} />
            {`+ `}
            </Typography>
            <Typography
            variant="h5"
            style={{
              textAlign: "center",
              fontWeight:"bold"

            }}
            >
             <span className={styles.productsBanner}>{name3}</span>
          </Typography>
        </Grid>
        <Divider orientation="vertical" variant="middle" sx={{borderColor:"white"}} flexItem />

        {/* <Divider orientation="vertical" variant="middle" /> */}
        <Grid item md={1}>

        </Grid>
        <Grid  item xs={12} md={2}>
          <Typography
            style={{
              color: "white",
              textAlign: "center",
              // fontFamily: "poppins",
              fontSize: "1.5em",
              fontWeight:"bold"

            }}
            variant="h5"
          >
            <CountUp end={count4} duration={5} />
            {`+ `}
            </Typography>
            <Typography
            variant="h5"
            style={{
              textAlign: "center",
              fontWeight:"bold"


            }}
            >
             <span className={styles.productsBanner}>{name4}</span>
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default PaperComponent;
