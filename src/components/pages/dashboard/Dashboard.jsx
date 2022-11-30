import { LineAxisOutlined } from "@mui/icons-material";
import { Button, Grid, Paper, Typography, useTheme } from "@mui/material";
import React from "react";
import blockchain from "../../assets/blockchainFrame.png";
import web3 from "../../assets/web3.png";
import talent from "../../assets/talent.png";
import AnimatedButton from "../../customComponents/animatedButton/AnimatedButton";
import ExpeProductSwiper from "../../customComponents/swiperCard/SwiperCard";
// import SwiperCard from "../../customComponents/swiperCard/SwiperCard";
import {
  ColorButton,
  SimpleButton,
} from "../services/tokenGeneration/CustomButton";
import AboutExpelee from "./AboutExpelee";
import styles from "./dashboard.module.css";
import ExpeleeProducts from "./ExpeleeProducts";
import ExpeleeServices from "./ExpeleeServices";
import PaperComponent from "./PaperComponents";
import Partner from "./Partner";
import RoadMap from "./RoadMap";
import TryOurServices from "./TryOurServices";
import AnimatedLetsTalkButton from "../../customComponents/animatedButton/AnimatedLetsTalkButton";
import AnimatedDashboard from "./AnimatedDashBoard";
import { UseDocumentTitle } from "../../customComponents/useTitle/UseDocumentTitle";
import SmallHeading from "../../coreComponents/SmallHeading";
// import business from "./components/assets/marketing.mp4"
import styled from "styled-components";
import { tokens } from "../../../theme";
import { Animator, ScrollPage } from "react-scroll-motion";
import { ScrollContainer, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import AliceCarousel from "react-alice-carousel";
import PartnerAliceCarousel from "./PartnerAliceCarousel";
import dashboardPic from "../../assets/bg.png"

function Dashboard() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());

  const theme = useTheme();
  // const theme = useTheme();
  const colors = tokens(theme.palette.mode);
 const handleNavigate = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };
  //dynamic title show
  UseDocumentTitle("Expelee-Home");
  return (
    <>
    {/* <ScrollPage>
<Animator  animation={batch(Fade(), Sticky(), MoveOut(0, -200))}> */}

 
    {/* <MainAreaStyled>
    <video src={business} muted playsInline autoPlay loop></video> */}

      <Grid
        sx={{
          paddingTop: "150px",
          // marginRight: "125.1px",
          // maarginRight: "50%",
          // border: "1px solid red",
          width: "85%",
          margin: "auto",
        }}
        container
        spacing={2}
      >
        <Grid  item xs={12} md={8}>
       
          <Typography
            sx={{
              // color: colors.greenAccent[600],
              color:"white",
fontWeight:"bold",
              fontSize: "3.2em",
           
            }}
            variant="h6"
          >
            Building the Futuristic
          </Typography>
          <Typography
            sx={{ 
              
           
              
              fontSize: "3.3em" }}
            className={styles.textGradient}
            variant="h3"
          >
            Blockchain Ecosystem
          </Typography>
          <Typography
            sx={{ 
              fontFamily:"Centra,sans-serif !important",
              // fontFamily: "open-sans", 
              fontSize: "1.5em" }}
              className={styles.para}
              color={colors.grey[800]}
          >
            On the way to build numerous products that will empower Blockchain
            Industry in upcoming years
          </Typography>
          
          {/* <Grid sx={{ border: "1px solid red" }} container spacing={2}> */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "50%",
              marginTop: "2vh",
            }}
          >
            <Grid container spacing={2}>
              {/* <Grid item xs={12} md={6}>
                <SimpleButton
                  sx={{
                    width: "14vu",
                    padding: "1.5em",
                    // fontFamily: "poppins",
                    color:"white",
                    // fontSize: "15px",
    fontSize: "1em",

                    background:"#3d75ed"
                  }}
                  variant="contained"
                >
                  Get Started
                </SimpleButton>
              </Grid> */}
              <Grid item xs={12} md={6}>

              <SimpleButton
              onClick={() => handleNavigate("https://t.me/Expelee")}
                  sx={{
                    width: "14vu",
                    padding: "1.5em",
                    // fontFamily: "poppins",
                    color:"white",
                    // fontSize: "15px",
    fontSize: "1em",

                    background:"#3d75ed"
                  }}
                  variant="contained"
                >
                  Let's Talk
                </SimpleButton>
                {/* <ColorButton
                  // sx={{ width: "12em", padding: "1em" }}
                  variant="contained"
                >
                  Let's Talk
                </ColorButton> */}
                {/* <AnimatedLetsTalkButton /> */}
                {/* <div style={{ textAlign: "center" }}>
              <AnimatedButton text={"LET'S TALK"} />
            </div> */}
                {/* <SimpleButton
                  sx={{
                    width: "14vu",
                    padding: "1.5em",
                    fontFamily: "poppins",
                    fontSize: "15px",
                  }}
                  variant="contained"
                >
                  LET'S TALK
                </SimpleButton> */}
              </Grid>
            </Grid>
          </div>

          <Grid xs={12} sm={6}></Grid>
        </Grid>

        {/* <AnimatedDashboard /> */}

       <Grid sx={{marginTop:"2em"}} xs={12} md={4}>
<img src={dashboardPic} alt="dashboardpic"/>
       </Grid>
      </Grid>
    {/* </MainAreaStyled> */}
     {/* <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
      /> */}
      <PartnerAliceCarousel/>
      <PaperComponent />
      <AboutExpelee />
      <ExpeleeProducts />

      <ExpeleeServices />
      <TryOurServices />
      <Partner />
      <RoadMap />
        
{/* </Animator>
      </ScrollPage> */}
    </>
  );
}
const MainAreaStyled = styled.header`
    width: 100%;
    height: 85vh;
    position: relative;
    overflow: hidden;
    .overlay{
        width: 100%;
        height: 100%;
        position: absolute;
        right: -400px;
        top: -300px;
        
    }
    video{
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.7;
    }
`;

export default Dashboard;
