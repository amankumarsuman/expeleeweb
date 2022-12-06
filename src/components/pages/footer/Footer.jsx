import { Grid, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import logo from "../../assets/ExpeleeLogoLight.png";
import styles from "./footer.module.css";
import { Avatar, Divider, ListItemAvatar } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailIcon from "@mui/icons-material/Mail";

import TelegramIcon from "@mui/icons-material/Telegram";
import { Link, useNavigate } from "react-router-dom";
import CircleDiv from "./CircleDiv";
import mediumLogo from "../../assets/mediumLogoW.png";
const CustomizedListText = styled(ListItemText)`
  color: white;
  
// font-weight:bold;
  // :hover {
  //   color: rgb(173, 181, 189);
  // }
   & .MuiListItemText-secondary {
                color: rgb(173, 181, 189);
                
              },
`;
const CustomizedListTextSecondary = styled(ListItemText)`
  color: white;
// font-weight:bold;
  // :hover {
  //   color: #2e8b57;
  // }
   & .MuiListItemText-secondary {
                color: white;
              },
`;

function Footer() {
  const navigate = useNavigate();

  const handleNavigate = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <Grid
        sx={{
          backgroundColor: "#0B0A0C",
          marginTop: "14em",
          paddingTop: "5em",
          paddingLeft: "5em",
          paddingBottom: "2em",
        }}
        container
        spacing={3}
      >
        {/* <div style={{ width: "90%", margin: "auto", marginTop: "5em" }}> */}
        <Grid item xs={12} md={4}>
          <img src={logo} alt="logo" width="30%" />
          <Typography
            sx={{
              color: "grey",
              fontFamily: "poppins",
              fontSize: "1em",
              width: "80%",
            }}
          >
            Expelee is a product-based aspirational Web3 Start-up. Coping up
            with numerous solutions for blockchain Security, constructing a Web3
            Ecosystem and its own blockchain.
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography
            sx={{
              color: "white",
              marginBottom: "0.4em",
              fontFamily: "poppins",
            }}
            variant="h5"
            className={styles.textGradient}
          >
            Products
          </Typography>
          <Link to="/audit" style={{cursor:"pointer"}}>

          <Typography
            sx={{ color: "grey", fontFamily: "poppins", fontSize: "1" }}
          >
            Expelee Audits
          </Typography>
          </Link>
          <Link to="/expe-vetting" style={{cursor:"pointer"}}>

          <Typography
            sx={{ color: "grey", fontFamily: "poppins", fontSize: "1" }}
          >
            Expelee Vetting
          </Typography>
          </Link>

          <Link to="/expe-diligence">

          <Typography
            sx={{ color: "grey", fontFamily: "poppins", fontSize: "1" }}
          >
            Expe Diligence (KYC)
          </Typography>
          </Link>
          <Link to="/design">
         
          <Typography
            sx={{ color: "grey", fontFamily: "poppins", fontSize: "1" }}
          >
            Contract Design
          </Typography>
          </Link>
          <Link to="/expe-creator">
         
          <Typography
            sx={{ color: "grey", fontFamily: "poppins", fontSize: "1" }}
          >
            Expe dApp Creator
          </Typography>
          </Link>
          
          <Typography
          style={{cursor:"pointer"}}
          onClick={()=>handleNavigate("https://metanmore.com/")}
            sx={{ color: "grey", fontFamily: "poppins", fontSize: "1" }}
          >
           Expe Marketing
          </Typography>
          <Link to="nft">
          
         
          <Typography
            sx={{ color: "grey", fontFamily: "poppins", fontSize: "1" }}
          >
            Expe NFT
          </Typography>
          </Link>
          <Link to="scanner">
          <Typography
            sx={{ color: "grey", fontFamily: "poppins", fontSize: "1" }}
          >
            Expelee Scanner
          </Typography>
          </Link>
         
          {/* <Typography
                    style={{cursor:"pointer"}}
                    onClick={()=>handleNavigate("https://metanmore.com/")}
            sx={{ color: "grey", fontFamily: "poppins", fontSize: "1" }}
          >
            Expelee Consultors
          </Typography> */}
          
        </Grid>
        <Grid item xs={12} md={2}>
          <Typography
            sx={{
              color: "white",
              marginBottom: "0.4em",
              fontFamily: "poppins",
            }}
            variant="h5"
            className={styles.textGradient}
          >
            Services
          </Typography>

          <Link to="/coinLevel">
          
          <Typography
            sx={{ color: "grey", fontFamily: "poppins", fontSize: "1" }}
          >
            Coin Level
          </Typography>
          </Link>

          <Link to="/blockChainDevelopment">
          
          
          <Typography
            sx={{ color: "grey", fontFamily: "poppins", fontSize: "1" }}
          >
            Blockchain Development
          </Typography>
          </Link>
          <Link to="/live-chart">
          
          <Typography
            sx={{ color: "grey", fontFamily: "poppins", fontSize: "1" }}
          >
           Expe Crypto Hunter
          </Typography>
          </Link>
          <Link to="/scam">
          
          <Typography
            sx={{ color: "grey", fontFamily: "poppins", fontSize: "1" }}
          >
            Expe Scam Hunter
          </Typography>
          </Link>
          <Link to="/blogs">


          <Typography
            sx={{ color: "grey", fontFamily: "poppins", fontSize: "1" }}
          >
            Expe Blogs
          </Typography>
          </Link>
          <Link to="/hyperledger">
          
          <Typography
            sx={{ color: "grey", fontFamily: "poppins", fontSize: "1" }}
          >
            HyperLedger Development
          </Typography>
          </Link>
          <Typography
            sx={{
              color: "white",
              marginTop: "1em",
              marginBottom: "0.4em",
              fontFamily: "poppins",
            }}
            className={styles.textGradient}
            variant="h5"
          >
            Company
          </Typography>
          <Link to="/team">
          
          <Typography
            sx={{ color: "grey", fontFamily: "poppins", fontSize: "1" }}
          >
            Team
          </Typography>
          </Link>
        </Grid>

        <Grid item xs={12} md={2}>
          <div
            style={{
              // backgroundColor: "#090e49",
              color: "white",
              // padding: "2em",
              height: "100vu",
            }}
            className={styles.secondaryText}
          >
            <Typography
              sx={{ fontFamily: "poppins" }}
              className={styles.textGradient}
              variant="h5"
            >
              Connect With Us
            </Typography>
            <ListItem>
              <ListItemAvatar>
                <span style={{cursor:"pointer"}}>

                <Avatar
                onClick={() => window.location = 'mailto:business@expelee.com'}
                // href="mailto:business@expelee.com"
                  sx={{
                    border: "1.5px dotted white",
                    backgroundColor: "#3d75ed",
                  }}
                >
                  <MailIcon  />
                </Avatar>
                </span>
              </ListItemAvatar>
              <CustomizedListText
                primary="EMAIL"
                secondary="business@expelee.com"
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar
                  sx={{
                    border: "1.5px dotted white",
                    backgroundColor: "#3d75ed",
                  }}
                >
                  <NotificationsNoneIcon />
                </Avatar>
              </ListItemAvatar>

              <CustomizedListText
                primary="SOCIAL MEDIA"
                secondary={
                  <>
                    <div style={{ marginTop: "5%", display:"flex"}}>
                      <span
                      style={{marginRight:"7px"}}
                        className={styles.linkDecoration}
                        onClick={() => handleNavigate("https://t.me/Ritz_Expelee")}
                      >
                        {/* <CircleDiv icon={<TelegramIcon />} name="telegram" /> */}
                        <Avatar
                         sx={{border: "1.5px dotted white",
                         backgroundColor: "#3d75ed",}}
                        >
                        <TelegramIcon />
                        </Avatar>
                      </span>

                      <span
                        className={styles.linkDecoration}
                        style={{marginRight:"7px"}}
                        onClick={() =>
                          handleNavigate("https://twitter.com/expeleeofficial")
                        }
                      >
                        {/* <CircleDiv icon={<TwitterIcon />} name="twitter" /> */}
                        <Avatar
                         sx={{border: "1.5px dotted white",
                         backgroundColor: "#3d75ed",}}
                        >
                        <TwitterIcon />
                        </Avatar>
                      </span>

                      <span
                        className={styles.linkDecoration}
                        onClick={() =>
                          handleNavigate("https://github.com/expelee-co")
                        }
                      >
                        {/* <CircleDiv icon={<GitHubIcon />} name="github" /> */}
                        <Avatar
                         sx={{border: "1.5px dotted white",
                         backgroundColor: "#3d75ed",}}
                        >
                        <GitHubIcon />
                        </Avatar>
                      </span>
                    </div>

                    <div style={{ marginTop: "3%",display:"flex" }}>
                      <span
                      style={{marginRight:"7px"}}
                        className={styles.linkDecoration}
                        onClick={() =>
                          handleNavigate(
                            "https://www.instagram.com/expeleeofficial/"
                          )
                        }
                      >
                        {/* <CircleDiv icon={<InstagramIcon />} name="insta" /> */}
                        <Avatar
                        sx={{border: "1.5px dotted white",
                        backgroundColor: "#3d75ed",}}
                        >
<InstagramIcon />
                        </Avatar>
                      </span>
                      {/* <span
                      style={{border:"1px solid red"}}
                        className={styles.linkDecoration}
                        onClick={() =>
                          handleNavigate("https://medium.com/@expelee")
                        }
                      >
                        <CircleDiv
                          sx={{ marginTop: "-5px !important" }}
                          icon={<img src={mediumLogo} width="5%" />}
                          name="medium"
                        > 
                       <img src={mediumLogo} width="5%" />
                      </CircleDiv>
                      </span> */}

                        <span
                      style={{marginRight:"7px"}}
                        className={styles.linkDecoration}
                        onClick={() =>
                          handleNavigate("https://medium.com/@expelee")
                        }
                      >
 <Avatar
 sx={{border: "1.5px dotted white",
 backgroundColor: "#3d75ed",}}
 >
                       {/* <img src={mediumLogo} width="5%" /> */}
                       <img src={mediumLogo} width="60%" />


                      </Avatar>
                      </span>
                      <span
                      style={{marginRight:"5px"}}
                        className={styles.linkDecoration}
                        onClick={() =>
                          handleNavigate(
                            "https://www.linkedin.com/company/expelee/"
                          )
                        }
                        name="linkedin"
                      >
                        {/* <CircleDiv icon={<LinkedInIcon />} /> */}
                        <Avatar
                        sx={{border: "1.5px dotted white",
                        backgroundColor: "#3d75ed",}}
                        >

<LinkedInIcon />
                        </Avatar>
                      </span>
                      {/* <span
                        className={styles.linkDecoration}
                        onClick={() =>
                          handleNavigate(
                            "https://www.linkedin.com/company/expelee/"
                          )
                        }
                        name="linkedin"
                      > */}
                       {/* <CircleDiv
                          sx={{ marginTop: "-5px !important" }}
                          icon={<img src={mediumLogo} width="5%" />}
                          name="medium"
                        > 
                       <img src={mediumLogo} width="5%" />
                      </CircleDiv> */}
                      {/* <Avatar>
                       <img src={mediumLogo} width="5%" />

                      </Avatar> */}
                      {/* </span> */}
                      {/* <span
                        className={styles.linkDecoration}
                        onClick={() =>
                          handleNavigate("https://medium.com/@expelee")
                        }
                      >
                        
                        <CircleDiv
                          sx={{ marginTop: "-5px !important" }}
                          icon={<img src={mediumLogo} width="5%" />}
                          name="medium"
                        />
                      </span> */}
                    </div>
                  </>
                }
              ></CustomizedListText>
            </ListItem>
          </div>
        </Grid>
      </Grid>
      <Divider sx={{ backgroundColor: "grey" }} />
      <div
        style={{
          backgroundColor: "#0B0A0C",
          color: "white",
          padding: "2%",
          paddingTop: "2em",
        }}
      >
        <Grid container sx={{ width: "95%", margin: "auto" }}>
          <Grid item xs={10} md={6}>
            <div>
              <span
                style={{
                  color: "#adb5bd",
                  marginRight: "0.5em",
                  fontFamily: "poppins",
                  fontSize: "1",
                }}
              >
                Copyright 2022
              </span>
              <a
                style={{ fontFamily: "poppins", fontSize: "1.3em" }}
                className={styles.linkDecoration}
                href="https://expelee.com/"
              >
                Expelee
              </a>
              <span
                style={{
                  color: "#adb5bd",
                  marginLeft: "0.5em",
                  fontFamily: "poppins",
                  fontSize: "1",
                }}
              >
                {" "}
                All Rights Reserved
              </span>
            </div>
          </Grid>
          <Grid
            item
            xs={2}
            md={6}
            sx={{ textAlign: "end", fontFamily: "poppins", fontSize: "1" }}
          >
            <div>Support</div>
          </Grid>
        </Grid>
      </div>
    </>
    // </Grid>
  );
}

export default Footer;
