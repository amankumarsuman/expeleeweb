import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import hedgepay from "../../assets/hedgepay.png";
import hamiNetwork from "../../assets/hami.png";
import gemped from "../../assets/pinksale.png";
import lbank from "../../assets/lbank.png";
import luxpad from "../../assets/luxpad.png";
import newToken from "../../assets/newtokenlogo.png";
import pandasale from "../../assets/pandasale.png";
import phoenix from "../../assets/phoenix.png";
import probit from "../../assets/probit.png";
import presale from "../../assets/presale.png";
import bitcourier from "../../assets/bitcourierNew.png";
import tokenworld from "../../assets/tokenworld.png";
import eightbit from "../../assets/8bit.png";
import styles from "./tryourServices.module.css";
import GoToTop from "../../coreComponents/GoToTop";
function Partner() {
  const handleNavigate = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };
  return (
    <Grid sx={{ width: "85%", margin: "auto" }} container spacing={2}>
      <Paper className={styles.partnerPaperDiv} elevation={5}>
        <Grid sx={{ width: "30vu", margin: "auto" }} container spacing={2}>
          <Grid item xs={12} md={12}>
            <h1
              style={{
                color: "white",

                // fontFamily: "poppins"
              }}
              className={styles.textGradient}
            >
              Our Partners
            </h1>
          </Grid>
        </Grid>
      </Paper>
      <Grid container sx={{ width: "85%", margin: "auto" }} spacing={2}>
        <Grid
          sx={{ cursor: "pointer" }}
          onClick={() =>
            handleNavigate("https://www.pinksale.finance/?chain=Arbitrum")
          }
          item
          xs={6}
          md={3}
        >
          <img src={gemped} alt="pinksale logo" />
        </Grid>
        <Grid
          sx={{ cursor: "pointer" }}
          onClick={() => handleNavigate("https://hedgepay.org/")}
          item
          xs={12}
          md={3}
        >
          <img src={hedgepay} alt="hedpay logo" />
        </Grid>
        <Grid
          sx={{ cursor: "pointer", marginTop: "0.7em" }}
          onClick={() => handleNavigate("https://presale.world/")}
          item
          md={3}
        >
          <img src={presale} width="70%" alt="presale logo" />
        </Grid>
        <Grid
          sx={{ cursor: "pointer" }}
          onClick={() => handleNavigate("https://www.lbank.info/")}
          item
          xs={12}
          md={3}
        >
          <img src={lbank} alt="lbank logo" />
        </Grid>
        <Grid
          sx={{ cursor: "pointer" }}
          onClick={() => handleNavigate("https://luxpad.io/")}
          item
          xs={12}
          md={3}
        >
          <img src={luxpad} alt="luxpad logo" />
        </Grid>
        <Grid
          sx={{ cursor: "pointer" }}
          onClick={() => handleNavigate("https://newtokenmarket.com/")}
          item
          xs={12}
          md={3}
        >
          <img src={newToken} alt="new token logo" />
        </Grid>
        <Grid
          sx={{ cursor: "pointer" }}
          onClick={() => handleNavigate("https://pandasale.finance/")}
          item
          xs={12}
          md={3}
        >
          <img src={pandasale} alt="panda sale logo" />
        </Grid>

        <Grid
          sx={{ cursor: "pointer" }}
          onClick={() =>
            handleNavigate("https://bitcourier.co.uk/news/expelee-interview")
          }
          item
          md={3}
        >
          <img src={bitcourier} width="70%" alt="bit courier logo" />
        </Grid>

        {/* <Grid item md={2}></Grid> */}
        <Grid
          item
          md={3}
          xs={12}
          sx={{ cursor: "pointer" }}
          onClick={() => handleNavigate("https://www.probit.com/en-us/")}
        >
          <img src={probit} alt="probit logo" />
        </Grid>
        <Grid
          sx={{ cursor: "pointer" }}
          onClick={() => handleNavigate("https://hami.network/")}
          item
          xs={12}
          md={3}
        >
          <img src={hamiNetwork} alt="hami network logo" />
        </Grid>

        <Grid
          sx={{ cursor: "pointer" }}
          onClick={() => handleNavigate("https://t.me/phoenixholdings")}
          item
          xs={12}
          md={3}
        >
          <img src={phoenix} alt="phoenix logo" />
        </Grid>
        <Grid
          sx={{ cursor: "pointer" }}
          onClick={() => handleNavigate("https://token-world.co/")}
          item
          xs={12}
          md={3}
        >
          <img src={tokenworld} alt="tokenworld logo" width="50%" />
        </Grid>
        <Grid item xs={12} md={3}></Grid>
        <Grid item xs={12} md={1}></Grid>
        <Grid
          sx={{ cursor: "pointer" }}
          onClick={() => handleNavigate("https://www.8bitearn.com/")}
          item
          xs={12}
          md={3}
        >
          <img src={eightbit} alt="eightbit logo" width="90%" />
        </Grid>
        {/* <Grid item xs={12} md={3}>
      </Grid>
      <Grid item md={3}></Grid> */}
      </Grid>
      <GoToTop />
    </Grid>
  );
}

export default Partner;
