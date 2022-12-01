import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import AnimatedButton from "../../customComponents/animatedButton/AnimatedButton";
import styles from "./dashboard.module.css";
import blockchain from "../../assets/yearPlan.png";
import web3 from "../../assets/quarterPlan.png";
import talent from "../../assets/threeYearPlan.png";
import PlanAccordian from "../../customComponents/accordian/PlanAccordian";
import CustomizedAccordions from "./RoadMapMobile";
import GoToTop from "../../coreComponents/GoToTop";
function RoadMap() {
  const handleNavigate = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };
  return (
    <div style={{ marginTop: "5em" }}>
      <Grid
        sx={{
          width: "85%",
          margin: "auto",
        }}
        container
        spacing={2}
      >
        <Grid item xs={12} md={6}>
          <div
            style={{
              background: "transparent",
              padding: "5vu",
            }}
            // elevation={12}
          >
            <Typography
              className={styles.textGradient}
              sx={{
                color: "white",
                // fontFamily: "poppins"
              }}
              variant="h3"
            >
              Road Map
            </Typography>
            <Typography
              sx={{
                color: "grey",
                // fontFamily: "open-sans",
                fontSize: "1.5em",
              }}
            >
              On the way to develop our Blockchain Ecosystem, this is the
              roadmap we will be following in our journey.
            </Typography>
            <AnimatedButton
              onClick={() => handleNavigate("https://t.me/Expelee")}
              text={"Get Started"}
            />
          </div>
        </Grid>
        {/* <Grid item xs={12} md={6}> */}
        {/* <Grid container spacing={2}> */}
        {/* <Grid item xs={12} md={12}>
              <AutoGridCard
                img={startIcon}
                h1={"Expe Blockchain"}
                message={
                  "Developing our own commercial and sustainable blockchain for the upcoming era of Web3 and decentralization."
                }
              />
            </Grid> */}
        {/* <Grid item xs={12} md={12}>
              <AutoGridCard
                img={expeDevIcon}
                message={
                  "Developing a specific area that will house Web3 developers and allow them to develop, learn, & even work together."
                }
                h1="Expe Dev"
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <AutoGridCard
                img={shieldDoneIcon}
                h1="Expe Deal"
                message="Creating a smart contract based on total anonymity for different transactions happening in this space and to help sustain its growth by providing them with a platform.
"
              />
            </Grid>
          </Grid> */}
        {/* </Grid> */}
        <Grid item xs={12} md={2}></Grid>
        <Grid
          className={styles.blockchain}
          item
          xs={12}
          md={4}
          // marginRight: "125.1px",
          sx={{
            // border: "1px solid red",
            textAlign: "end",
            padding: "10em",
            marginTop: "2em",
            //   marginRight: "1em",
            display: {
              xs: "none",
              md: "flex",
              // justifyContent: "space-between",
              // border: "1px solid red",

              // marginLeft: "18em",
            },
          }}
        >
          <div
            className={styles.smallEclipse}
            sx={
              {
                // backgroundColor: "transparent",
              }
            }
          >
            {/* <img
              src={blockchain}
              style={{
                position: "absolute",
                top: -120,
                left: 150,
              }}
              alt="blockchain frame" */}
            {/* /> */}
            {/* <img
              src={web3}
              style={{
                position: "absolute",
                top: 120,
                left: -220,
              }}
              alt="web3"
            /> */}
            <PlanAccordian />
            {/* <img
              src={talent}
              style={{
                position: "absolute",
                top: 250,
                left: -180,
              }}
              alt="talent"
            /> */}
            {/* <Paper elevation={5}></Paper> */}
          </div>
        </Grid>
      </Grid>
      <div className="md:hidden">
        <CustomizedAccordions />
      </div>
      <GoToTop />
    </div>
  );
}

export default RoadMap;
