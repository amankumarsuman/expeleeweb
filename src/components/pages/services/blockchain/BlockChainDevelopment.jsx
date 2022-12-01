import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { FormMainHeadingContainer } from "../../../coreComponents/FormMainHeadingContainer";
import blockchain from "../../../assets/blockchain2.png";
import styles from "./blockchain.module.css";
import BlockChainAreaList from "./BlockChainAreaList";
import { SimpleButton } from "../tokenGeneration/CustomButton";
import GoToTop from "../../../coreComponents/GoToTop";

function BlockchainDevelopment() {
  const handleNavigate = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <FormMainHeadingContainer headingText="Blockchain Development">
        <Grid sx={{ marginTop: "2em" }} container spacing={2}>
          <Grid item xs={12} md={6}>
            <img src={blockchain} alt="blockchain pic" />
          </Grid>
          <Grid item xs={12} md={6}>
            {/* <Paper className={styles.partnerPaperDiv} elavation={10}> */}
            <Typography
              variant="h4"
              textAlign="center"
              className={styles.textGradient}
            >
              Blockchain Development
            </Typography>
            <Typography
              fontSize="1.1em"
              color="grey"
              sx={{ marginTop: "2em", marginBottom: "2em" }}
            >
              Whether you need a prototype or a production-ready platform, our
              engineering team’s deep experience in cryptocurrency, data
              science, and serverless computing can help you leverage the
              benefits of blockchain. We will evaluate potential blockchains for
              your project, including Ethereum, Hyperledger, EOS, NEO and choose
              the best fit, like when to use private permissioned blockchains
              such as Quorum.
            </Typography>
            <Typography
              variant="h4"
              fontWeight="bold"
              textAlign="center"
              className={styles.textGradient}
            >
              OUR SERVICES INCLUDE
            </Typography>
            <Typography
              fontSize="1.1em"
              color="grey"
              sx={{ marginTop: "2em", marginBottom: "2em" }}
            >
              <span>
                - Blockchain deployment and development with web3, solidity,
                cakeshop and truffle.
              </span>
              <br />
              <span>
                - Smart contracts and custom dapp frameworks like Open Zeppelin.
              </span>
              <br />

              <span>
                - Application and data science engineering using Python.
              </span>
              <br />

              <span>
                - Enterprise native mobile apps with Swift and Objective-C.
              </span>
              <br />

              <span>
                - Web platforms using Phoneix / Elixir and serverless
                architecture.
              </span>
            </Typography>
            {/* <Grid item xs={6} md={6}></Grid> */}
          </Grid>
          <Grid item xs={12} md={12}>
            <Paper className={styles.partnerPaperDiv} elavation={10}>
              <Typography
                variant="h4"
                textAlign="center"
                className={styles.textGradient}
              >
                Here are some of the blockchain areas we are currently working
                on
              </Typography>
              <BlockChainAreaList />
            </Paper>
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

export default BlockchainDevelopment;
