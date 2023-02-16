import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import AnimatedButton from "../../customComponents/animatedButton/AnimatedButton";
import AutoGridCard from "./Card";
import startIcon from "../../assets/star.png";
import blockIcon from "../../assets/blockgif1.gif";
import expeDevIcon from "../../assets/expeDev.png";
import shieldDoneIcon from "../../assets/Shield.png";
import styles from "./dashboard.module.css";
import dev from "../../assets/web-development-gif.gif";
import deal from "../../assets/dealani-unscreen.gif";
// import deal from "../../assets/Data-report-4.gif";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import GoToTop from "../../coreComponents/GoToTop";

function AboutExpelee() {
  const handleNavigate = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };
  return (
    <div>
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
            sx={{
              background:
                "linear-gradient(to right bottom,#1e1e1e,black,#2E2A34, black,#1e1e1e)",
              padding: "5em",
            }}
            // elevation={12}
          >
            <Typography
              sx={{
                color: "white",
                // fontFamily: "Sono",
                fontSize: "3em",
                // width: "65%",
                // textAlign: "center",
              }}
              className={styles.textGradient}
              variant="h3"
            >
              About Expelee 
            </Typography>
            <Typography
              sx={{
                color: "grey",
                fontFamily: "Centra,sans-serif !important",

                // fontFamily: "open-sans",
                marginBottom: "2em",
                fontSize: "1.2em",
                marginTop: "2em",
              }}
            >
             We offer a comprehensive suite of blockchain services designed to meet the diverse needs of businesses and individuals. Whether you're looking to get your Smart Contract audited, or a want decentralized application, we've got you covered. Our experienced team of blockchain experts work closely with you to understand your unique requirements and provide tailored solutions that drive innovation and growth. This Product Brochure will give you brief summary of various Services we offer.
            </Typography>

            <div style={{ textAlign: "center" }}>
              <AnimatedButton text={"Get Started"} />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <AutoGridCard
                img={blockIcon}
                h1={"Expe Blockchain"}
                message={
                  "Developing our own commercial and sustainable blockchain for the upcoming era of Web3 and decentralization."
                }
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <AutoGridCard
                img={dev}
                message={
                  "Developing a specific area that will house Web3 developers and allow them to develop, learn, & even work together."
                }
                h1="Expe Dev"
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <AutoGridCard
                img={deal}
                h1="Expe Deal"
                message="Creating a smart contract based on total anonymity for different transactions happening in this space and to help sustain its growth by providing them with a platform.
"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <GoToTop />
    </div>
  );
}

export default AboutExpelee;
