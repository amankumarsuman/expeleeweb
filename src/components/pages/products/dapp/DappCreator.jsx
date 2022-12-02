import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { FormMainHeadingContainer } from "../../../coreComponents/FormMainHeadingContainer";
import dapp from "../../../assets/dApp.jpg";
import styles from "./dapp.module.css";
import { SimpleButton } from "../../services/tokenGeneration/CustomButton";
import GoToTop from "../../../coreComponents/GoToTop";

function ExpeDapp() {
  const handleNavigate = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <FormMainHeadingContainer headingText="dApp Creator">
        <Grid sx={{ marginTop: "2em" }} container spacing={2}>
          <Grid item xs={12} md={6}>
            <img src={dapp} alt="dapp pic" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              textAlign="center"
              fontWeight="bold"
              className={styles.textGradient}
            >
              What are dApps?
            </Typography>
            <Typography
              fontSize="1.1em"
              color="grey"
              sx={{ marginTop: "2em", marginBottom: "2em" }}
            >
              Decentralized applications (dApps) are digital programs that run on decentralized network (blockchains or other distributed ledgers) via smart contracts. They are similar to apps found on laptops and smartphones but keep users' data outside the control of the organizations behind it using blockchain technology. 
            </Typography>
            <Typography
              fontSize="1.1em"
              color="grey"
              sx={{ marginTop: "2em", marginBottom: "2em" }}
            >
              At Expelee, we deploy blockchain technology to help firms safeguard uses' data and promote efficiency using large numbers of active computers called nodes. These computers are owned by the blockchain users and not by the developers or owners of the dApp which demonstrate full decentralization and ownership. We have built DApps forgaming, fintech, supply chain and different sectors or industries.
            </Typography>
            <Grid item xs={12} md={12}>
            <Typography
              variant="h4"
              textAlign="center"
              className={styles.textGradient}
            >
              How Do We Create Successful dApps at Expelee? (Five Steps)
            </Typography>
            <Typography
              variant="h4"
              fontSize="1.3em"
              color="#3d75ed"
              fontWeight="bold"
              sx={{ marginTop: "2em", marginBottom: "2em" }}
            >
              1 We Develop Smart Contract
            </Typography>
            <Typography
              fontSize="1.1em"
              color="grey"
              sx={{ marginTop: "2em", marginBottom: "2em" }}
            >
           Smart contracts harbor the decentralized logic or the executive features of the dApp.
            </Typography>
            <Typography
              variant="h4"
              fontSize="1.3em"
              color="#3d75ed"
              fontWeight="bold"
              sx={{ marginTop: "2em", marginBottom: "2em" }}
            >
              2 We Build the Front-ends
            </Typography>
            <Typography
              fontSize="1.1em"
              color="grey"
              sx={{ marginTop: "2em", marginBottom: "2em" }}
            >
             This includes the normal web or user-facing apps similar to other popular apps in use.
            </Typography>
            <Typography
              variant="h4"
              fontSize="1.3em"
              color="#3d75ed"
              fontWeight="bold"
              sx={{ marginTop: "2em", marginBottom: "2em" }}
            >
              3 We Design a Centralized Back-end
            </Typography>
            <Typography
              fontSize="1.1em"
              color="grey"
              sx={{ marginTop: "2em", marginBottom: "2em" }}
            >
             Ethereum dApps, for instance, require large data storage. Building one may require a web solution on a private server.
            </Typography>
            <Typography
              variant="h4"
              fontSize="1.3em"
              color="#3d75ed"
              fontWeight="bold"
              sx={{ marginTop: "2em", marginBottom: "2em" }}
            >
              4 We Test-run
            </Typography>
            <Typography
              fontSize="1.1em"
              color="grey"
              sx={{ marginTop: "2em", marginBottom: "2em" }}
            >
             Early quality testing helps you to fix any issues on time. At times, it is called beta-testing
            </Typography>
            <Typography
              variant="h4"
              fontSize="1.3em"
              color="#3d75ed"
              fontWeight="bold"
              sx={{ marginTop: "2em", marginBottom: "2em" }}
            >
              5 Deploy
            </Typography>
            <Typography
              fontSize="1.1em"
              color="grey"
              sx={{ marginTop: "2em", marginBottom: "2em" }}
            >
             We upload the mobile apps to Google Play and/or the App stor, and schedule for regular maintenance.
            </Typography>

          </Grid>

          
          </Grid>
      
        

          <Grid
            marginTop="2em"
            paddingBottom="2em"
            textAlign="center"
            xs={12}
            md={12}
          >
           
            <SimpleButton
              onClick={() => handleNavigate("https://t.me/Ritz_Expelee")}
              sx={{
                width: "250px",

                padding: "1.5em",
                // fontFamily: "poppins",
                color: "white",
                // fontSize: "15px",
                fontSize: "1em",
                fontWeight: "bold",
                background: "#3d75ed",
              }}
              variant="contained"
            >
              Contact Us
            </SimpleButton>
          </Grid>
        </Grid>
      </FormMainHeadingContainer>
      <GoToTop />
    </>
  );
}

export default ExpeDapp;
