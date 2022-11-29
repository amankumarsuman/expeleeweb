import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/bundle";
import "./styles.css";

// import required modules
import { Autoplay, Navigation, EffectCoverflow, Pagination } from "swiper";
import Card from "../../pages/products/Card/Card";
import kyc from "../../assets/aml-kyc.png";
import ProductCard from "./ProductCard";
import audit from "../../assets/Auditp.jpg";
import coinLevel from "../../assets/coinp.jpg";
import expeDesign from "../../assets/Designp.jpg";

import webDevelopment from "../../assets/web_develop.png";
import { Grid } from "@mui/material";
export default function ExpeProductSwiper({ slideperpage }) {
  const [swiperRef, setSwiperRef] = useState(null);

  // effect={"coverflow"}
  // grabCursor={true}
  // centeredSlides={true}
  // slidesPerView={"auto"}
  // coverflowEffect={{
  //   rotate: 50,
  //   stretch: 0,
  //   depth: 100,
  //   modifier: 1,
  //   slideShadows: true,
  // }}
  // pagination={true}
  // modules={[EffectCoverflow, Pagination]}
  return (
    <>
     {/* <ProductCard
            title="Expe Diligence (KYC)"
            description="Our KYC and Certification system is keen to assist you with your KYC certification and open new doors to trade in the coruscating world of the crypto market."
            image={kyc}
            alt="kyc"
            buttonText="Know Details"
          /> */}
      {/* <Swiper
      style={{display:"flex"}}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onSwiper={setSwiperRef}
        slidesPerView={slideperpage}
        className="mySwiper"
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      > */}
        {/* <SwiperSlide> */}

        <Grid sx={{width:"85%",margin:"auto"}} container spacing={2}>
<Grid item xs={12} md={3}>
<ProductCard
            title="Expe Diligence (KYC)"
            description="Our KYC and Certification system is keen to assist you with your KYC certification and open new doors to trade in the coruscating world of the crypto market."
            image={kyc}
            alt="kyc"
            buttonText="Know Details"
            
          />
</Grid>
<Grid item xs={12} md={3}>
<ProductCard
            title="Expe Web Development"
            description="If you want to launch your project and need a website for it then Expelee's Web Development Team will help in creating your desired website."
            image={webDevelopment}
            alt="webDevelopment"
            buttonText="Know Details"
          />
</Grid>
<Grid item xs={12} md={3}>
<ProductCard
            title="Expelee Audits"
            description="By thoroughly analyzing your system's architecture and smart contract codebase, our Blockchain Security Audit platform assures the legitimacy of your smart contract."
            image={audit}
            alt="audit"
            buttonText="Know Details"
   marginbelow={true}
   marginIn={4}

   
   />
</Grid>
<Grid item xs={12} md={3}>
<ProductCard
            title="Coin Level"
            description="Promote your newly launched token with Expe Crypto Voting and get the balls of investors onto your project."
            image={coinLevel}
            alt="coinLevel"
            marginIn={7}

            buttonText="Know Details"
          />
</Grid>
{/* <Grid item xs={12} md={3}>
<ProductCard
            title="Expe Design"
            description="Get your Smart Contacts designed vicariously to automate decisions in your chain and make them more feasible."
            image={expeDesign}
            alt="expeDesign"
            buttonText="Know Details"
          />
</Grid> */}
{/* <Grid item xs={12} md={3}>
<ProductCard
            title="Expe Web Development"
            description="If you want to launch your project and need a website for it then Expelee's Web Development Team will help in creating your desired website."
            image={webDevelopment}
            alt="webDevelopment"
            buttonText="Know Details"
          />
</Grid> */}

        </Grid>
          {/* <ProductCard
            title="Expe Diligence (KYC)"
            description="Our KYC and Certification system is keen to assist you with your KYC certification and open new doors to trade in the coruscating world of the crypto market."
            image={kyc}
            alt="kyc"
            buttonText="Know Details"
          /> */}
        {/* </SwiperSlide> */}
        {/* <SwiperSlide> */}
          {/* <ProductCard
            title="Expelee Audits"
            description="By thoroughly analyzing your system's architecture and smart contract codebase, our Blockchain Security Audit platform assures the legitimacy of your smart contract."
            image={audit}
            alt="audit"
            buttonText="Know Details"
          /> */}
        {/* </SwiperSlide> */}
        {/* <SwiperSlide> */}
          {/* <ProductCard
            title="Expe Web Development"
            description="If you want to launch your project and need a website for it then Expelee's Web Development Team will help in creating your desired website."
            image={webDevelopment}
            alt="webDevelopment"
            buttonText="Know Details"
          /> */}
        {/* </SwiperSlide> */}
        {/* <SwiperSlide> */}
          {/* <ProductCard
            title="Coin Level"
            description="Promote your newly launched token with Expe Crypto Voting and get the balls of investors onto your project."
            image={coinLevel}
            alt="coinLevel"
            buttonText="Know Details"
          /> */}
        {/* </SwiperSlide> */}
        {/* <SwiperSlide> */}
          {/* <ProductCard
            title="Expe Design"
            description="Get your Smart Contacts designed vicariously to automate decisions in your chain and make them more feasible."
            image={expeDesign}
            alt="expeDesign"
            buttonText="Know Details"
          /> */}
        {/* </SwiperSlide> */}
        {/* <SwiperSlide> */}
          {/* <ProductCard
            title="Expe Web Development"
            description="If you want to launch your project and need a website for it then Expelee's Web Development Team will help in creating your desired website."
            image={webDevelopment}
            alt="webDevelopment"
            buttonText="Know Details"
          /> */}
        {/* </SwiperSlide> */}
        {/* <SwiperSlide> */}
          {/* <ProductCard
            title="Expe Design"
            description="Get your Smart Contacts designed vicariously to automate decisions in your chain and make them more feasible."
            image={expeDesign}
            alt="expeDesign"
            buttonText="Know Details"
          /> */}
        {/* </SwiperSlide> */}
        {/* <SwiperSlide> */}
          {/* <ProductCard
            title="Expelee Audits"
            description="By thoroughly analyzing your system's architecture and smart contract codebase, our Blockchain Security Audit platform assures the legitimacy of your smart contract."
            image={audit}
            alt="audit"
            buttonText="Know Details"
          /> */}
        {/* </SwiperSlide> */}
      {/* </Swiper> */}
    </>
  );
}
