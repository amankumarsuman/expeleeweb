import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { SimpleButton } from "../../services/tokenGeneration/CustomButton";
import styles from "./audit.module.css";
import auditMainImage from "../../../assets/auditbg.png";

import certificate from "../../../assets/certificate.png";
import doge from "../../../assets/doge.gif";
import CustomizedAccordions from "../../../customComponents/accordian/AuditAccordian";
// import PaperComponent from "../../dashboard/PaperComponents";
import Partner from "../../dashboard/Partner";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

import AnimatedButton from "../../../customComponents/animatedButton/AnimatedButton";
import { Link } from "react-router-dom";
import { UseDocumentTitle } from "../../../customComponents/useTitle/UseDocumentTitle";
import fomolab from "../../../assets/fomolab.png";
import blocvault from "../../../assets/blocvault.png";
import qroniswap from "../../../assets/qroniswap.png";
import AllAuditCard from "./AllAuditCard";
import auditProcess from "../../../assets/AuditNew.png";
import AboutAudit from "./aboutaudit/AboutAudit";
import { fontWeight } from "@mui/system";
import PaperComponent from "./PaperComponent";
import GoToTop from "../../../coreComponents/GoToTop";
// import { MdOutlineSchedule } from 'react-icons';
function AuditPage() {
  const data = [
    {
      title: "Fomo Lab",
      description:
        "Fomo Lab, the leading intellectual property specialist guides Web2 / traditional brands as they pursue their NFT & Metaverse activations to become part of the Web3 revolution. Fomo Lab are bringing an entire DeFi product ecosystem to the market which will be powered with the $FOMO token.",
      image: fomolab,
      audit:"https://github.com/expelee-co/Smart-Contract-Audit/tree/main/FOMO%20lab%20Audit%20Details",
      nft:"https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/114259081114982429576146150684774591540994320681143592246875756388686709653505",
      contract:"https://etherscan.io/address/0xb0cfb062de74f0410430a37305b878b7ad65903b",
      date:"27 Sept 2022"
    },
    {
      title: "Qroniswap",
      description:
        "Qroniswap is a DeFi protocol and ecosystem covering cross-chain crypto trading and swapping, NFT ticketings, and fiat on-ramp payments. Qroniswap’s robust ecosystem is such that allows for deep liquidity and seamless crypto transactions, all spiced up with incentivized earning models.",
      image: qroniswap,
      contract:"https://bscscan.com/address/0x78e893603c7c481263c7a0cfd5fb49936576c9c1",
      audit:"https://github.com/expelee-co/Smart-Contract-Audit/tree/main/Qroniswap%20Staking%20Audit%20Details",
      nft:"https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/114259081114982429576146150684774591540994320681143592246875756374393058492417",
      date:"24 Sept 2022"
    },
    {
      title: "Bloc Vault",
      description:
        "The BlocVault ecosystem is a suite of modules that will bring together all you need to trade and access your tokens online. Our products can be accessed online here or in your hand through the BlocVault App on the go. Our advanced architecture will set the bar for ecosystems of the future.",
      image: blocvault,
      contract:"https://bscscan.com/address/0x592032513b329a0956b3f14d661119880f2361a6#writeContract",
      audit:"https://github.com/expelee-co/Smart-Contract-Audit/tree/main/Block%20Vest%20Audit%20Details",
      nft:"https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/114259081114982429576146150684774591540994320681143592246875756387587198025729",
      date:"26 Sept 2022"
    },
  ];
  //dynamic title show
  UseDocumentTitle("Expelee-Audit");
  return (
    <>
      <Grid
        sx={{
          paddingTop: "2em",
          // marginRight: "125.1px",
          // maarginRight: "50%",

          width: "85%",
          margin: "auto",
        }}
        container
        spacing={2}
      >
        <Grid sx={{ marginTop: "2em", display: { md: "none" } }} xs={12} md={4}>
          <img src={auditMainImage} alt="auditMainImage" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            sx={{
              // fontFamily: "poppins"
              fontWeight: "bold",
              fontSize: "3.2em",
            }}
            className={styles.textGradient}
            variant="h6"
          >
            Expelee Audits
          </Typography>
          <Typography
            sx={{
              // fontFamily: "open-sans",
              fontSize: "1.2em",
            }}
            className={styles.para}
          >
            By thoroughly analyzing your system's architecture & smart contract
            codebase, We assure the legitimacy of your smart contract.
          </Typography>
          {/* <Grid sx={{ border: "1px solid red" }} container spacing={2}> */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              // width: "50%",
              marginTop: "2em",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                {/* <div style={{ paddingTop: "3em" }}> */}
                <AnimatedButton text={"Request Demo"} />
                {/* </div> */}
              </Grid>
            </Grid>
          </div>
        </Grid>

        <Grid sx={{ display: { xs: "none", md: "flex" } }} item xs={12} md={6}>
          <img src={auditMainImage} width="100%" />
        </Grid>

        <Grid item xs={12} md={12}>
          {/* <CustomizedAccordions
            title="ABOUT EXPELEE AUDIT"
            heading="Why Choose Us ?"
            alt="whyAudit"
            image={whyAuditPic}
            summary1="Our team of experts does a thorough analysis of smart contracts in multiple steps and informs the team of any potential issues with their code. This assists developers in improving and securing their code."
            summary2="- We have an extensive Audit report covering manual+ automatic vulnerabilities and explain everyting in a simple yet detailed manner."
            summary3="- Our audit reports also include advice for fixing issues and reducing risks, and our audit certificate is accepted by most CEX and top-tier launchpads/VCs"
            icon1={scheduleIcon}
            icon1Heading="Rapid Delivery"
            icon2={peace}
            icon2Heading="High Success Rate"
          /> */}
          <AboutAudit />
        </Grid>

        <Paper className={styles.paperDiv2} elevation={5}>
          <Typography
            variant="h4"
            sx={{ textAlign: "center", color: "#3d75ed", fontWeight: "bold" }}
          >
            Audit Process
          </Typography>
        </Paper>
        <img src={auditProcess} alt="auditprocess" />
        {/* <Grid item md={12}> */}
        <PaperComponent
          count1="100"
          name1="PROJECT AUDITED"
          count2="100"
          name2="MILLION DOLLARS SAVED"
          count3="1000"
          name3="VULNERABILITIES FIXED"
          count4="10"
          name4="LAUNCHPADS"
        />
        {/* </Grid> */}
        <Grid item xs={12} md={12}>
          <CustomizedAccordions
            title="Additional benefits along with Audit"
            heading="Audit Certificate"
            alt="certificate"
            image={certificate}
            summary1="We provide Audit certificate to every project which signifies that it has successfully completed it's Audit from us."
            summary2=""
            summary3=""
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <CustomizedAccordions
            title="Additional benefits along with Audit"
            heading="Audit NFT"
            alt="doge"
            image={doge}
            summary1="We also create a Audit NFT for the project as a token of goodwill for it's success."
            summary2=""
            summary3=""
          />
        </Grid>
        <Grid item xs={12} md={12}>
          {/* <Paper className={styles.panel}>
                <Typography  variant='h3' className={styles.textGradient}>Our Clients and Partners</Typography>
            </Paper> */}
          <Partner />
        </Grid>

        <Grid xs={12} md={12}>
          <Paper
            elevation={10}
            sx={{ marginTop: "5em" }}
            className={styles.panel}
          >
            <Typography
              className={styles.textGradient2}
              sx={{
                // fontFamily: "poppins",
                color: "white",
                fontWeight: "bold",
                fontSize: "2em",
              }}
            >
              Smart Contract Auditing Report
            </Typography>
          </Paper>
        </Grid>
        {/* <Paper className={styles.mainPaper}> */}

        <Grid sx={{ width: "100%", margin: "auto" }} container spacing={2}>
          {/* <Grid item xs={12} md={12}>
    <Paper className={styles.allauditCardBackground} sx={{padding:"2em",color:"white"}}>

    
    
    </Paper>
</Grid> */}
          {data?.map((el) => (
            <Grid item xs={12} key={el.title} md={4}>
              <AllAuditCard
                title={el.title}
                image={el.image}
                description={el.description}
                contract={el.contract}
                nft={el.nft}
                audit={el.audit}
                date={el.date}
              />
            </Grid>
          ))}
        </Grid>
        <Grid sx={{ textAlign: "center", marginTop: "2em" }} xs={12} md={12}>
          <Link to="/audit/all-audit">
            <SimpleButton
              // onClick={() => handleNavigate("https://t.me/Ritz_Expelee")}
              sx={{
                width: "50% !important",
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
              See All Audit
            </SimpleButton>
          </Link>
        </Grid>
        {/* </Paper> */}
        <Grid sx={{ marginTop: "3em" }} item xs={12} md={12}>
          <Paper className={styles.panel}>
            <Typography
              variant="h6"
              fontWeight="bold"
              // fontFamily="poppins"
              className={styles.auditDone}
            >
              Want to get your Audit Done?{" "}
            </Typography>
            <Typography
              sx={{
                width: "12%",
                margin: "auto",
                display: { xs: "none", md: "flex" },
              }}
            >
              <AnimatedButton text={"Contact Us"} />
            </Typography>
            <Typography
              sx={{ marginLeft: "2em", width: "12%", display: { md: "none" } }}
            >
              <AnimatedButton text={"Contact Us"} />
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <GoToTop />
    </>
  );
}

export default AuditPage;
