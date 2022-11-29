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
import audit from "../../assets/audit.png";
import coinLevel from "../../assets/coinLevel.png";
import expeDesign from "../../assets/contractDesign.png";
import blockChain from "../../assets/bblock.png";
import hyperledger from "../../assets/hyper.png";
import blog from "../../assets/blog.png";
import scam from "../../assets/images.jfif";
import chart from "../../assets/chart.jpg";

import webDevelopment from "../../assets/web_develop.png";
import { Grid } from "@mui/material";
export default function ExpeServicesSwiper({ slideperpage }) {
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <>
      {/* <Swiper
        effect={"coverflow"}
 
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
      >
        <SwiperSlide>
          <ProductCard
            title="Blockchain Development"
            description="Devising blockchain technology for one’s reputable blockchain business."
            image={blockChain}
            alt="blockchain"
            buttonText="Know Details"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            title="Live Chart"
            description="Comprehensive and handy cryptocurrency chart to assist in tracking of movements of the multiple cryptocurrencies."
            image={audit}
            alt="audit"
            buttonText="Know Details"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            title="Scam Page"
            description="Curated list of scams in the crypto market, to secure you from the frauds out there."
            image={scam}
            alt="scam"
            buttonText="Know Details"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            title="Informational Content"
            description="Various blogs to help you learn more about the Web3 and Blockchain Space."
            image={blog}
            alt="blog"
            buttonText="Know Details"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            title="Hyperledger Development"
            description="Develop high-performance blockchain solutions with hyper ledger technology."
            image={hyperledger}
            alt="hyperledger"
            buttonText="Know Details"
          />
        </SwiperSlide>
      </Swiper> */}

      <Grid sx={{ width: "85%", margin: "auto" }} container spacing={2}>
        <Grid item xs={12} md={3}>
          <ProductCard
            title="Blockchain Development"
            description="Devising blockchain technology for one’s reputable blockchain business."
            image={blockChain}
            alt="blockchain"
            buttonText="Know Details"
            margintop="5"
            marginIn={5}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <ProductCard
            title="Live Chart"
            description="Comprehensive and handy cryptocurrency chart to assist in tracking of movements of the multiple cryptocurrencies."
            image={chart}
            alt="chart"
            buttonText="Know Details"
            marginIn={5.3}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <ProductCard
            title="Scam Page"
            description="Curated list of scams in the crypto market, to secure you from the frauds out there."
            image={scam}
            alt="scam"
            buttonText="Know Details"
            // margintop={true}
            marginIn={8}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <ProductCard
            title="Informational Content"
            description="Various blogs to help you learn more about the Web3 and Blockchain Space."
            image={blog}
            alt="blog"
            buttonText="Know Details"
            marginIn={5.2}
          />
        </Grid>
        {/* <Grid item xs={12} md={3}>
<ProductCard
            title="Hyperledger Development"
            description="Develop high-performance blockchain solutions with hyper ledger technology."
            image={hyperledger}
            alt="hyperledger"
            buttonText="Know Details"
          />
</Grid> */}
      </Grid>
    </>
  );
}
