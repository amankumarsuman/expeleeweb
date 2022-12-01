import React from "react";
import hedgepay from "../../assets/hedge-pay.png";
import hamiNetwork from "../../assets/hami.png";
import gemped from "../../assets/gempad.png";
import lbank from "../../assets/lbank.png";
import luxpad from "../../assets/luxpad.png";
import newToken from "../../assets/newtokenlogo.png";
import pandasale from "../../assets/pandasale.png";
import phoenix from "../../assets/phoenix.png";
import probit from "../../assets/probit.png";
import presale from "../../assets/presaleworld.png";
import bitcourier from "../../assets/bitcourierNew.png";
import audit from "../../assets/audit.png";
import coinLevel from "../../assets/coinp.jpg";
import AliceCarousel from "react-alice-carousel";
import kyc from "../../assets/aml-kyc.png";
import webDevelopment from "../../assets/web_develop.png";
import expeDesign from "../../assets/design.jpg";
import metanmore from "../../assets/metanmorenew.jpg";
import consulting from "../../assets/consulting.png";
import launchpad from "../../assets/launchpad.png";
import vettingpic from "../../assets/vettingpic.jpg";
import blockChain from "../../assets/blockchaindev.jpg";
import scam from "../../assets/scamn.jpg";
import information from "../../assets/blog.jpg";
import hyperledgerN from "../../assets/hyperledgern.jpg";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ProductCard from "./ProductCard";
// import { margin } from '@mui/system';
import chart from "../../assets/cryptohunter.jpg";
import ServiceCard from "./ServiceCards";

function SwiperCard() {
  const handleNavigate = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };
  const item = [
    {
      title: "Blockchain Development",
      description:
        "Devising blockchain technology for one’s reputable blockchain business.",
      image: blockChain,
      alt: "blockchain",
      buttonText: "Know Details",
      margintop: 5,
      marginIn: 7,
      link:"blockChainDevelopment"
    },
    {
      title: "Coin Level",
      description:
        "Promote your newly launched token with Expe Crypto Voting and get the balls of investors onto your project.",
      image: coinLevel,
      alt: "coinLevel",
      buttonText: "Know Details",
      // marginbelow:true,
      marginIn: 7,
      link:"coinLevel"
    },
    {
      title: "Expe Crypto Hunter",
      description:
        "Comprehensive and handy cryptocurrency chart to assist in tracking of movements of the multiple cryptocurrencies.",
      image: chart,
      alt: "chart",
      buttonText: "Know Details",
      marginIn: 5.3,
      link:"live-chart"
    },
    {
      title: "Expe Scam Hunter",
      description:
        "Curated list of scams in the crypto market, to secure you from the frauds out there.",
      image: scam,
      alt: "scam",
      buttonText: "Know Details",
      marginbelow: true,
      marginIn: 9,
      link:"scam"
    },
    {
      title: "Expe Blogs",
      description:
        "Various blogs to help you learn more about the Web3 and Blockchain Space.",
      image: information,
      alt: "information",
      buttonText: "Know Details",
      // marginbelow:true,
      marginIn: 7,
      link:"blogs"
    },
    {
      title: "Hyperledger Development",
      description:
        "Develop high-performance blockchain solutions with hyper ledger technology.",
      image: hyperledgerN,
      alt: "hyperledger",
      buttonText: "Know Details",
      // marginbelow:true,
      marginIn: 7,
      link:"hyperledger"
    },
  ];

  const responsive = {
    0: {
      item: 2,
    },
    512: {
      item: 3,
    },
    1024: {
      items: 3,
    },
  };
  const items = item.map((el) => {
    return (
      <div>
        <ServiceCard
          title={el.title}
          description={el.description}
          image={el.image}
          alt={el.alt}
          buttonText={el.buttonText}
          marginIn={el?.marginIn}
          link={el?.link}
        />
      </div>
    );
  });

  return (
    <div style={{ width: "85%", margin: "auto", marginTop: "4em" }}>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
      />
    </div>
  );
}

export default SwiperCard;
