import { Avatar, Grid, Paper, Typography } from "@mui/material";
import React from "react";
// import hedgepay from "../../assets/hedgepay.png";
// import hamiNetwork from "../../assets/hami.png";
// import gemped from "../../assets/gempad.png";
// import lbank from "../../assets/lbank.png";
// import luxpad from "../../assets/luxpad.png";
// import newToken from "../../assets/newtokenlogo.png";
// import pandasale from "../../assets/pandasale.png";
// import phoenix from "../../assets/phoenix.png";
// import probit from "../../assets/probit.png";
// import presale from "../../assets/presale.png";
import whyAuditPic from "../../../../assets/auditbg3.png";
import styles from "./aboutAudit.module.css";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import schedule from "../../../../assets/schedule.png";
import victory from "../../../../assets/letter-v.png";

function AboutAudit() {
  return (
    <Grid sx={{ width: "88vu", margin: "auto" }} container spacing={2}>
      <Paper className={styles.partnerPaperDiv} elevation={5}>
        <Grid sx={{ width: "30vu", margin: "auto" }} container spacing={2}>
          <Grid item xs={12} md={12}>
            <h1
              style={{
                color: "white",
                fontWeight:"bold"
                // fontFamily: "poppins"
              }}
              className={styles.textGradient}
            >
              About Expelee Audit
            </h1>
          </Grid>
        </Grid>
      </Paper>
      <Grid item xs={12} md={6}>
        <img src={whyAuditPic} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography style={{fontSize:"1.5em"}} className={styles.textGradient}>Why Choose Us ?</Typography>
        <Typography className={styles.para}>
          Our team of experts does a thorough analysis of smart contracts in
          multiple steps and informs the team of any potential issues with their
          code. This assists developers in improving and securing their code.
        </Typography>
        <Typography className={styles.para}>
          - We have an extensive Audit report covering manual+ automatic
          vulnerabilities and explain everyting in a simple yet detailed manner.
        </Typography>
        <Typography className={styles.para}>
          Our audit reports also include advice for fixing issues and reducing
          risks, and our audit certificate is accepted by most CEX and top-tier
          launchpads/VCs
        </Typography>
        <div
          style={{
            display: "flex",
            color: "white",
            justifyContent: "space-between",
            width: "35%",
            marginTop: "1em",
          }}
        >
          <Avatar sx={{background:"#3d75ed",border:"1.5px dotted grey"}}>
          <img src={schedule} alt="schedule" width="50%" />

          </Avatar>
          <Typography variant="h5">Rapid Delivery</Typography>
        </div>
        <div
          style={{
            display: "flex",
            color: "white",
            justifyContent: "space-between",
            width: "43%",
            marginTop: "1em",
          }}
        >
          <Avatar sx={{background:"#3d75ed",border:"1.5px dotted grey"}}>
          {/* <img src={schedule} alt="schedule" width="50%" /> */}

          <img src={victory} alt="victory" width="50%" />
          </Avatar>
          <Typography variant="h5">High Success Rate</Typography>
        </div>
      </Grid>
      {/* <Grid item xs={6} md={3}>
        <img src={gemped} alt="gemped logo" />
      </Grid>
      <Grid item xs={12} md={3}>
        <img src={hedgepay} alt="hedpay logo" />
      </Grid>
      <Grid item xs={12} md={3}>
        <img src={hamiNetwork} alt="hami network logo" />
      </Grid>
      <Grid item xs={12} md={3}>
        <img src={lbank} alt="hedpay logo" />
      </Grid>
      <Grid item xs={12} md={3}>
        <img src={luxpad} alt="hedpay logo" />
      </Grid>
      <Grid item xs={12} md={3}>
        <img src={newToken} alt="hedpay logo" />
      </Grid>
      <Grid item xs={12} md={3}>
        <img src={pandasale} alt="hedpay logo" />
      </Grid>
      <Grid item xs={12} md={3}>
        <img src={phoenix} alt="hedpay logo" />
      </Grid>
      <Grid item md={3} xs={12}></Grid>
      <Grid item md={3}>
        <img src={presale} width="70%" alt="hedpay logo" />
      </Grid>
      <Grid item md={3}>
        <img src={probit} alt="hedpay logo" />
      </Grid>
      <Grid item xs={12} md={3}></Grid>
      <Grid item md={3}></Grid> */}
    </Grid>
  );
}

export default AboutAudit;
