import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { FormMainHeadingContainer } from "../../../coreComponents/FormMainHeadingContainer";
import coin from "../../../assets/coin.png";
import styles from "./expeCoin.module.css";
import { SimpleButton } from "../../services/tokenGeneration/CustomButton";

function ExpeCoin() {
  const handleNavigate = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <FormMainHeadingContainer headingText="Expe Coin Level">
        <Grid sx={{marginTop:"2em"}} container spacing={2}>
          <Grid item xs={12} md={6}>
            <img src={coin} alt="coin pic" />
          </Grid>
          <Grid item xs={12} md={6}>
            {/* <Paper className={styles.partnerPaperDiv} elavation={10}> */}
            <Typography
              variant="h4"
              textAlign="center"
              className={styles.textGradient}
            >
              Coin Voting
            </Typography>
            <Typography
              fontSize="1.1em"
              color="grey"
              sx={{ marginTop: "2em", marginBottom: "2em" }}
            >
              So our voting platform is a place that sorts listed
              cryptocurrencies by the number of votes. Such a simple model
              allows different counterparties to reach their goals.
              Simultaneously, projects can gain attention from the passionate
              crypto communities by adding their coins for free on these token
              voting platforms. Finally, people could detect and invest in the
              most promising cryptocurrencies before these assets appear on
              leading trackers such as{" "}
              <span
                onClick={() => handleNavigate("https://coinmarketcap.com/")}
                className={styles.textGradient2}
              >
                COIN MARKET CAP
              </span>{" "}
              and{" "}
              <span
                onClick={() => handleNavigate("https://www.coingecko.com/")}
                className={styles.textGradient2}
              >
                COINGECKO
              </span>
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

export default ExpeCoin;
