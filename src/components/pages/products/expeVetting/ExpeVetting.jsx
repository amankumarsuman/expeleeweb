import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { FormMainHeadingContainer } from "../../../coreComponents/FormMainHeadingContainer";
import vet from "../../../assets/vet.png";
import styles from "./expeVetting.module.css";
import vettingProcess from "../../../assets/VettingNew.png";
import { SimpleButton } from "../../services/tokenGeneration/CustomButton";
import GoToTop from "../../../coreComponents/GoToTop";
function ExpeVetting() {
  const handleNavigate = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <FormMainHeadingContainer headingText="Expe Vetting">
        <Grid sx={{ marginTop: "2em" }} container spacing={2}>
          <Grid item xs={12} md={6}>
            <img src={vet} alt="vetting pic" />
          </Grid>
          <Grid item xs={12} md={6}>
            {/* <Paper className={styles.partnerPaperDiv} elavation={10}> */}
            <Typography
              variant="h4"
              textAlign="center"
              style={{ fontWeight: "bold" }}
              className={styles.textGradient}
            >
              Vetting & Certification
            </Typography>
            <Typography
              color="grey"
              fontSize="1.1em"
              sx={{ marginTop: "1.1em", marginBottom: "2em" }}
            >
              The certification from Expelee serving as proof of its rigorous
              verification process helps to establish its reputation. We
              thoroughly review each and every project detail with an
              appropriate analysis before moving on to the verification.
            </Typography>
            <Typography
              color="grey"
              fontSize="1.1em"
              sx={{ marginTop: "2em", marginBottom: "2em" }}
            >
              Every part of your project will be examined by us, including the
              Team, Community, Code, Wallets, etc.
            </Typography>
            <Typography
              color="grey"
              fontSize="1.1em"
              sx={{ marginTop: "2em", marginBottom: "2em" }}
            >
              We put a "Vetted" post with Vetted NFT on our website once an
              individual has successfully completed our Vetting process.
            </Typography>

            <Typography
              variant="h4"
              textAlign="center"
              sx={{ fontWeight: "bold" }}
              className={styles.textGradient}
            >
              What is Expe Vetting ?
            </Typography>
            <Typography
              color="grey"
              fontSize="1.1em"
              sx={{ marginTop: "2em", marginBottom: "2em" }}
            >
              We firmly believe that it is Expelee's responsibility as a company
              to do everything in our power to protect the investors in this
              field from scammers.{" "}
            </Typography>
            <Typography
              color="grey"
              fontSize="1.1em"
              sx={{ marginTop: "2em", marginBottom: "2em" }}
            >
              Vetting is something that goes above and beyond the requirements
              of KYC & Audits and challenges the team in every manner to assess
              the importance of the project and provide a thorough overview of
              it. from the project's community to its code to its original idea.{" "}
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
                What is Expe Vetting ?
              </Typography>
              <Typography
              color="grey"
              fontSize="1.3em"
              sx={{marginTop:"2em",marginBottom:"2em"}}
              >
We firmly believe that it is Expelee's responsibility as a company to do everything in our power to protect the investors in this field from scammers.              </Typography>
              <Typography
              color="grey"
              fontSize="1.3em"

              sx={{marginTop:"2em",marginBottom:"2em"}}
              >
Vetting is something that goes above and beyond the requirements of KYC & Audits and challenges the team in every manner to assess the importance of the project and provide a thorough overview of it. from the project's community to its code to its original idea.              </Typography>
             */}
          {/* </Paper> */}
          {/* </Grid> */}
          <Grid item xs={12} md={12}>
            {/* <Paper className={styles.partnerPaperDiv} elavation={10}> */}
            <Typography
              variant="h4"
              textAlign="center"
              sx={{ fontWeight: "bold" }}
              className={styles.textGradient}
            >
              Benefits of Being Vetted
            </Typography>
            <Typography
              fontSize="1.1em"
              sx={{ marginTop: "2em", marginBottom: "2em" }}
            >
              <li>
                Get Vetted NFT from Expelee fulfilling the objective of being
                distinctive and credible to display you been vetted by us.
              </li>
            </Typography>
            <Typography
              fontSize="1.1em"
              sx={{ marginTop: "1.5em", marginBottom: "2em" }}
            >
              <li>
                Through the "Expelee Network," get cross-community networking,
                and marketing push from metanmore.com
              </li>
            </Typography>
            <Typography
              fontSize="1.1em"
              sx={{ marginTop: "1.5em", marginBottom: "2em" }}
            >
              <li>
                Get the "Expelee Vetted" badge and also get added to the Vetted
                circle.
              </li>
            </Typography>

            {/* </Paper> */}
            <Paper className={styles.partnerPaperDiv} elavation={10}>
              <Typography
                variant="h4"
                textAlign="center"
                fontWeight="bold"
                className={styles.textGradient}
              >
                Vetting Process
              </Typography>
            </Paper>
          </Grid>
          <Grid sx={{ textAlign: "center" }} item xs={12} md={12}>
            <img src={vettingProcess} alt="vettingprocess" />
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
              GET VETTED
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
              Get Vetted
            </SimpleButton>
          </Grid>
        </Grid>
      </FormMainHeadingContainer>
      <GoToTop />
    </>
  );
}

export default ExpeVetting;
