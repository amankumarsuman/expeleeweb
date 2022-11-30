import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { FormMainHeadingContainer } from "../../../coreComponents/FormMainHeadingContainer";
import kyc from "../../../assets/KYCNew.png";
import styles from "./expeKyc.module.css";
import kycbg from "../../../assets/kycbg.png";
import { SimpleButton } from "../../services/tokenGeneration/CustomButton";
function ExpeKyc() {
  const handleNavigate = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <FormMainHeadingContainer headingText="Expe KYC">
        <Grid sx={{marginTop:"2em"}} container>
          <Grid item xs={12} md={6}>
            <img style={{ marginTop: "1em" }} src={kyc} alt="vetting pic" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              sx={{ marginTop: "1em" }}
              className={styles.partnerPaperDiv}
              elavation={10}
            >
              <Typography
                variant="h4"
                textAlign="center"
              
                className={styles.textGradient}
              >
                KYC & Certification
              </Typography>
              <Typography
               
                fontSize="1.1em"
                color="grey"
                sx={{ marginTop: "2em", marginBottom: "2em" }}
              >
                We give project owners and teams access to our "Anonymous KYC
                Service." The names and details of the project owners are
                disclosed to us. Except in cases of fraud or sleight of hand,
                this information is not given to anyone or any institution.
              </Typography>
              <Typography
                color="grey"
                fontSize="1.1em"
                sx={{ marginTop: "2em", marginBottom: "2em" }}
              >
                We put a "KYC Verification" post on our website once an
                individual has successfully completed our KYC process.
              </Typography>
              <Typography
                color="grey"
                fontSize="1.1em"
                sx={{ marginTop: "2em", marginBottom: "2em" }}
              >
                The project owners and teams maintain their anonymity and
                inspire investor confidence in this way.
              </Typography>
            </Paper>
          </Grid>
          {/* <Grid md={6}></Grid> */}
          <Grid item xs={12} md={12}>
            <Paper
              sx={{ marginTop: "3em" }}
              className={styles.partnerPaperDiv}
              elavation={10}
            >
              <Typography
                variant="h4"
                textAlign="center"
                className={styles.textGradient}
              >
                What is KYC in Crypto?
              </Typography>
              <Typography
                color="grey"
                fontSize="1.1em"
                sx={{ marginTop: "2em", marginBottom: "2em" }}
              >
                In cryptosphere, privacy holds a special place. The most
                significant illustration of this is Satoshi. For a variety of
                reasons, some people may not want to expose their identity.
              </Typography>
              <Typography
                color="grey"
                fontSize="1.1em"
                sx={{ marginTop: "2em", marginBottom: "2em" }}
              >
                Regrettably, we frequently encounter scam-rug pulls in new
                ventures in the cryptocurrency realm. This is bad news for the
                cryptocurrency industry as a whole and for all investors.
              </Typography>
              <Typography
                color="grey"
                fontSize="1.1em"
                sx={{ marginTop: "2em", marginBottom: "2em" }}
              >
                The KYC process is used to establish confidence with investors
                as well as to protect the identity of the project owners.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={12}>
            <Paper className={styles.partnerPaperDiv} elavation={10}>
              <Typography
                variant="h4"
                textAlign="center"
                className={styles.textGradient}
              >
                How does our KYC work?
              </Typography>

              <Typography
                color="grey"
                fontSize="1.1em"
                sx={{ marginTop: "2em", marginBottom: "2em" }}
              >
                Our KYC service entails the following steps:
              </Typography>
              <Typography
                color="grey"
                fontSize="1.1em"
                sx={{ marginTop: "2em", marginBottom: "2em" }}
              >
                <li>
                  All core team members have their identities verified using a
                  passport, id card, or drivers licence.
                </li>
              </Typography>
              <Typography
                color="grey"
                fontSize="1.1em"
                sx={{ marginTop: "2em", marginBottom: "2em" }}
              >
                <li>
                  The founder must confirm his address over the phone and with
                  further documentation.
                </li>
              </Typography>
              <Typography
                color="grey"
                fontSize="1.1em"
                sx={{ marginTop: "2em", marginBottom: "2em" }}
              >
                <li>
                  The entire project is also examined against a list of internal
                  risks.
                </li>
              </Typography>
            </Paper>
            <Paper className={styles.partnerPaperDiv} elavation={10}>
              <Typography
                variant="h4"
                textAlign="center"
                className={styles.textGradient}
              >
                KYC Process
              </Typography>
            </Paper>
          </Grid>
          <Grid sx={{ textAlign: "center" }} item xs={12} md={12}>
            <img src={kycbg} alt="vettingprocess" />
          </Grid>
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
            GET YOUR KYC
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
            Get Your KYC
          </SimpleButton>
        </Grid>
      </FormMainHeadingContainer>
    </>
  );
}

export default ExpeKyc;
