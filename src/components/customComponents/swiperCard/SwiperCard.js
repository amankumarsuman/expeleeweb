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
import audit from "../../assets/Auditp.jpg";
import coinLevel from "../../assets/coinp.jpg";
import expeDesign from "../../assets/Designp.jpg";
import AliceCarousel from "react-alice-carousel";
import kyc from "../../assets/aml-kyc.png";
import webDevelopment from "../../assets/Webdevp.jpg";

import metanmore from "../../assets/Marketingp.jpg";
import dapp from "../../assets/dApp.jpg";
import launchpad from "../../assets/Launchpadp.jpg";
import vettingpic from "../../assets/Vettingp.jpg";
import scanner from "../../assets/Scannerp.jpg";
import nft from "../../assets/NFTp.jpg";

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

function SwiperCard() {
  const handleNavigate = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };
  const item = [
    {
      title: "Expe Diligence (KYC)",
      description:
        "Our KYC and Certification system is keen to assist you with your KYC certification and open new doors to trade in the coruscating world of the crypto market.",
      image: kyc,
      alt: "kyc",
      buttonText: "Know Details",
      link:"expe-diligence",
      marginIn:4,
    },
    {
      title: "Expe Web Development",
      description:
        "If you want to launch your project and need a website for it then Expelee's Web Development Team will help in creating your desired website.",
      image: webDevelopment,
      alt: "webDevelopment",
      buttonText: "Know Details",
      link:"blockChainDevelopment",
      marginIn:4,
    },
    {
      title: "Expelee Audits",
      description:
        "By thoroughly analyzing your system's architecture and smart contract codebase, our Blockchain Security Audit platform assures the legitimacy of your smart contract.",
      image: audit,
      alt: "audit",
      buttonText: "Know Details",
      marginbelow: true,
      marginIn: 6,
      link:"audit"
    },
    
    {
      title: "Expe Contract Design",
      description:
        "Get your Smart Contacts designed vicariously to automate decisions in your chain and make them more feasible.",
      image: expeDesign,
      alt: "expeDesign",
      buttonText: "Know Details",
      // marginbelow:true,
      marginIn: 7,
      link:"design"
    },
    {
      title: "Meta N More ",
      description:
        "With our team of experts marketers, get your Crypto project reached up by good investors in the market.",
      image: metanmore,
      alt: "meta",
      buttonText: "Know Details",
      // marginbelow:true,
      marginIn: 8,

    },
    {
      title: "Expe NFT",
      description:
        "Open your doors to the world of NFT, Create and manage your NFTs easily with the Expe NFT.",
      image: nft,
      alt: "nft",
      buttonText: "Know Details",
      // marginbelow:true,
      marginIn: 9,
      link:"nft"
    },
    {
      title: "Expe Scanner",
      description:
        "Get to know more about the project you are investing by scanning its Smart Contract with our token scanner and protect yourself from shady projects.",
      image: scanner,
      alt: "scanner",
      buttonText: "Know Details",
      // marginbelow:true,
      marginIn: 5,
      link:"scanner"
    },
    {
      title: "Expe dApp Creator",
      description:
        "Consult with our experts to create yourself a sheeny viable project to capture the market.",
      image: dapp,
      alt: "consulting",
      buttonText: "Know Details",
      // marginbelow:true,
      marginIn: 7,
      link:"expe-creator"
    },
    {
      title: "Expe Launchpad",
      description:
        "Our team of Developers will help you in creating your own decentralized launchpad.",
      image: launchpad,
      alt: "launchpad",
      buttonText: "Know Details",
      // marginbelow:true,
      marginIn: 9,
    },
    {
      title: "Expe Vetting",
      description:
        "Get a Vetting Report of your Smart Contract so that the investors who don’t know much technicality can easily understand your Contract.",
      image: vettingpic,
      alt: "vettingpic",
      buttonText: "Know Details",
      // marginbelow:true,
      marginIn: 7,
      link:"expe-vetting",
      descMargin:5,
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
        <ProductCard
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
