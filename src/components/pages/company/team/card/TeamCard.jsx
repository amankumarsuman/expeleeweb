import React from "react";
import styled from "styled-components";
import { Marginer } from "../marginer";
import TelegramIcon from "@mui/icons-material/Telegram";
import peace from "../../../../assets/peace.png";
import { Link } from "react-router-dom";
import exlogo from "../../../../assets/faviconCopy.png";
import styles from "./index.module.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const DetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.5em 6px 0 6px;
  line-height: 1.4;
`;

const MediumText = styled.span`
  font-size: 0.8em;
  color: #fff;
  font-weight: 800;
  text-transform: uppercase;
`;

const SmallText = styled.span`
  font-size: 11px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  color: #ff6900;
`;

const SpacedHorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BuyButton = styled.button`
  padding: 10px 16px;
  background-color: #ff6900;
  color: #000;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  border: 3px solid transparent;
  outline: none;
  cursor: pointer;
  transition: all 290ms ease-in-out;
  border-radius: 8px;

  &:hover {
    background-color: transparent;
    color: #fff;
    border: 3px solid #ff6900;
  }
`;

const NikeLogo = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: auto;
    height: 43px;
  }
`;

export function TeamDetails(props) {
  const handleNavigate = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };
  console.log(props, "props");
  return (
    <DetailsContainer>
      <SmallText>EXPELEE TEAM</SmallText>
      <SpacedHorizontalContainer>
        {/* <MediumText className={styles.textGradient}>{props.name}</MediumText> */}
        {/* <MediumText>¥856</MediumText> */}

        <MediumText className={styles.textGradient}>{props.name}</MediumText>
      </SpacedHorizontalContainer>
      <Marginer direction="vertical" margin="1.2em" />
      <SpacedHorizontalContainer>
        <MediumText>{props.desg}</MediumText>
      </SpacedHorizontalContainer>
      <SpacedHorizontalContainer>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "60%",
            margin: "auto",
            paddingBottom: "2em",
          }}
        >
          <BuyButton onClick={() => handleNavigate(props.linkedLink)}>
            <LinkedInIcon />
          </BuyButton>
          <BuyButton onClick={() => handleNavigate(props.telegramLink)}>
            <TelegramIcon />
          </BuyButton>
        </div>
      </SpacedHorizontalContainer>
      {/* <NikeLogo>
        <img src={exlogo} />
      </NikeLogo> */}
    </DetailsContainer>
  );
}
