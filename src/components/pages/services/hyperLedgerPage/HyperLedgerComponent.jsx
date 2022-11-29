import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { FormMainHeadingContainer } from "../../../coreComponents/FormMainHeadingContainer";
import hyperledger from "../../../assets/hyperledger.png";
import styles from "./hyperledger.module.css";
import { SimpleButton } from "../tokenGeneration/CustomButton";

function ExpeHyperLedger() {
  const handleNavigate = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <FormMainHeadingContainer headingText="HYPERLEDGER DEVELOPMENT">
        <Grid sx={{ marginTop: "2em" }} container spacing={2}>
          <Grid item xs={12} md={6}>
            <img src={hyperledger} alt="hyperledger pic" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper className={styles.partnerPaperDiv} elavation={10}>
              <Typography
                variant="h4"
                textAlign="center"
                className={styles.textGradient}
              >
                Hyperledger Blockchain Development Services
              </Typography>
            </Paper>
            <Typography
              fontSize="1.1em"
              color="grey"
              sx={{ marginTop: "2em", marginBottom: "2em" }}
            >
              Develop and deploy cross-industry Hyperledger blockchain
              applications with the expert development and orchestration
              services
            </Typography>
            <Paper className={styles.partnerPaperDiv} elavation={10}>
              <Typography
                variant="h4"
                textAlign="center"
                className={styles.textGradient}
              >
                Hyperledger Chain code Development (Smart Contracts)
              </Typography>
            </Paper>
            <Typography fontSize="1.1em"
            color="grey" sx={{ marginTop: "2em" }}>
              Currently we are working on and helping clients with the following
              Hyperledger Chain code Development (Smart Contracts)
            </Typography>
            <Typography fontSize="1.1em"
            color="grey">
              - Blockchain smart contract-powered secure payment processing
              solutions
            </Typography>
            <Typography fontSize="1.1em"
            color="grey">
              - Supply chain management solutions for industries with tracking
              and traceability
            </Typography>
            <Typography fontSize="1.1em"
            color="grey">
              - Automated invoice reconciliation, claim settlement, and more
              processes
            </Typography>
            <Typography fontSize="1.1em"
            color="grey">
              - Secure and efficient asset/ownership transfer tracking and
              management
            </Typography>
            <Typography fontSize="1.1em"
            color="grey">
              - Business solutions for verifiable digital identities,
              certificates, and more
            </Typography>
          </Grid>
          <Grid md={6}></Grid>
          <Grid item xs={12} md={12}>
            <Paper className={styles.partnerPaperDiv} elavation={10}>
              <Typography
                variant="h4"
                textAlign="center"
                className={styles.textGradient}
              >
                Hyperledger dApp (Decentralized Application) Development
              </Typography>
            </Paper>
            <Typography
              fontSize="1.1em"
              color="grey"
              sx={{ marginTop: "2em", marginBottom: "2em" }}
            >
              - PoC (Proof-of-Concept) and MVP (Minimum Viable Product)
              development
            </Typography>
            <Typography
              fontSize="1.1em"
              color="grey"
              sx={{ marginTop: "2em", marginBottom: "2em" }}
            >
              - Integration of custom business logic for complex use cases and
              concepts
            </Typography>
            <Typography
              fontSize="1.1em"
              color="grey"
              sx={{ marginTop: "2em", marginBottom: "2em" }}
            >
              - Scalable, intelligent decentralized exchange platform
              development
            </Typography>
            <Typography
              fontSize="1.1em"
              color="grey"
              sx={{ marginTop: "2em", marginBottom: "2em" }}
            >
              - Chaincode (smart contract) development for dApps and enterprises
            </Typography>
            <Typography
              fontSize="1.1em"
              color="grey"
              sx={{ marginTop: "2em", marginBottom: "2em" }}
            >
              - dApp (decentralized applications) migration and enhancements
            </Typography>
          </Grid>
          <Grid
            marginTop="2em"
            paddingBottom="2em"
            textAlign="center"
            xs={12}
            md={12}
          >
            {/* <Button
              onClick={() => handleNavigate("https://t.me/Ritz_Expelee")}
              sx={{
                width: "35vw",
                padding: "1em",
                borderRadius: "15vu",
                fontSize: "20vu",
                fontWeight: "bold",
              }}
              variant="contained"
            >
              CONTACT US
            </Button> */}
            <SimpleButton
              onClick={() => handleNavigate("https://t.me/Ritz_Expelee")}
              sx={{
                width: "35vw",
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
    </>
  );
}

export default ExpeHyperLedger;
