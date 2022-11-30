import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { FormMainHeadingContainer } from "../../../coreComponents/FormMainHeadingContainer";
import design from "../../../assets/design.png";
import styles from "./expeDesign.module.css";
import { SimpleButton } from "../../services/tokenGeneration/CustomButton";

function ExpeDesign() {
  const handleNavigate = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <FormMainHeadingContainer headingText="Expe Design">
        <Grid sx={{marginTop:"2em"}} container spacing={2}>
          <Grid item xs={12} md={6}>
            <img src={design} alt="design pic" />
          </Grid>
          <Grid item xs={12} md={6}>
            {/* <Paper className={styles.partnerPaperDiv} elavation={10}> */}
            <Typography
              variant="h4"
              textAlign="center"
              fontWeight="bold"
              className={styles.textGradient}
            >
              Smart Contract Token Creation
            </Typography>
            <Typography
              fontSize="1.1em"
              color="grey"
              sx={{ marginTop: "2em", marginBottom: "2em" }}
            >
              A Strong, Simple, and Reliable Method for Creating and Managing
              Tokens
            </Typography>
            <Typography
              fontSize="1.1em"
              color="grey"
              sx={{ marginTop: "2em", marginBottom: "2em" }}
            >
              Utilizing our features, create your own token smart contract while
              comprehending the underlying principles of token specifications
              and the significant variations across token types.
            </Typography>
            <Typography
              fontSize="1.1em"
              color="grey"
              sx={{ marginTop: "2em", marginBottom: "2em" }}
            >
              Create and implement ERC20 and ERC721 token contracts. The Token
              Factory offers complete flexibility in setting up the
              functionalities of the tokens.
            </Typography>
            <Typography
              variant="h4"
              textAlign="center"
              fontWeight="bold"
              className={styles.textGradient}
            >
              How it works?
            </Typography>
            <Typography
              fontSize="1.1em"
              color="grey"
              sx={{ marginTop: "2em", marginBottom: "2em" }}
            >
              Expelee's adaptable, simple, and scalable architecture is brought
              to tokens by Token Factory.
            </Typography>
            <Typography
              fontSize="1.1em"
              color="grey"
              sx={{ marginTop: "2em", marginBottom: "2em" }}
            >
              Enterprise On the blockchain, tokens serve as a representation of
              physical or digital assets. Tokens, which can be characterized as
              either fungible or non-fungible, offer a means of conducting safe
              digital transactions without the need for middlemen and
              third-party trust organizations. Enterprises can use tokens to
              improve processes related to asset trading transactions and
              provide a reliable framework for asset tracking, settlement, and
              custody.
            </Typography>
            {/* </Paper> */}
          </Grid>
          {/* <Grid md={6}>

          </Grid>
          <Grid item xs={12} md={6}>
            <Paper className={styles.partnerPaperDiv} elavation={10}>
              <Typography
                variant='h4'
                textAlign="center"
                className={styles.textGradient}
              >
             How it works?

              </Typography>
              <Typography
           
              fontSize="1.6em"
              sx={{marginTop:"2em",marginBottom:"2em"}}
              >
                Expelee's adaptable, simple, and scalable architecture is brought to tokens by Token Factory.
</Typography>
              <Typography
           
              fontSize="1.6em"

              sx={{marginTop:"2em",marginBottom:"2em"}}
              >
Enterprise On the blockchain, tokens serve as a representation of physical or digital assets. Tokens, which can be characterized as either fungible or non-fungible, offer a means of conducting safe digital transactions without the need for middlemen and third-party trust organizations. Enterprises can use tokens to improve processes related to asset trading transactions and provide a reliable framework for asset tracking, settlement, and custody.            
           
        </Typography>
            </Paper>
          </Grid> */}
          <Grid item xs={12} md={12}>
            {/* <Paper className={styles.partnerPaperDiv} elavation={10}> */}
            <Typography
              variant="h4"
              textAlign="center"
              fontWeight="bold"
              className={styles.textGradient}
            >
              Token Development
            </Typography>
            <Typography
              fontSize="1.1em"
              color="grey"
              sx={{ marginTop: "2em", marginBottom: "2em" }}
            >
              Utilizing our service, create your own token smart contract while
              comprehending the underlying principles of token specifications
              and the significant variations across token types.
            </Typography>
            <Typography
              fontSize="1.1em"
              color="grey"
              sx={{ marginTop: "2em", marginBottom: "2em" }}
            >
              Looking for customized and complex token types? Using the
              wonderful code building blocks in Expelee, you can also deploy
              ERC-compliant coins directly. Then use the REST API Gateway to
              deploy them or communicate with them. You can keep using Expelee's
              additional token features, including Token Explorer and Token
              Swaps, as long as they extend the basic ERC20 and ERC721 standard
              interfaces.
            </Typography>

            {/* </Paper> */}
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
    </>
  );
}

export default ExpeDesign;
