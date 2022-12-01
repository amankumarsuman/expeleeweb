import { motion, useMotionValue, useTransform } from "framer-motion";
import React from "react";
import styled from "styled-components";

import peace from "../../../../assets/peace.png";
import { TeamDetails } from "./TeamCard";

const CardWrapper = styled.div`
  width: 100%;
  perspective: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardContainer = styled(motion.div)`
  width: 285px;
  height: 500px;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
  background: linear-gradient(
    to right bottom,
    #1e1e1e,
    black,
    #2e2a34,
    black,
    #1e1e1e
  );
  color: #fff;
  position: relative;
  cursor: grab;
`;

const CircleWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 77%;
  overflow: hidden;
  border-top-right-radius: 25px;
`;
const CircleWrapperResize = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
  border-top-right-radius: 25px;
`;

const CircleResize = styled.div`
  position: absolute;
  width: 338px;
  height: 266px;
  top: -5.2em;
  right: -9em;
  z-index: 5;
  background-color: #ff6900;
  border-radius: 46%;
`;
const Circle = styled.div`
  position: absolute;
  width: 350px;
  height: 350px;
  top: -4.2em;
  right: -10em;
  z-index: 5;
  background-color: #ff6900;
  border-radius: 50%;
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1.2;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  padding: 1em 15px;
`;

const BottomContainer = styled.div`
  display: flex;
  flex: 0.8;
  padding: 0 1em;
`;

const NikeText = styled.h1`
  color: #fff;
  text-transform: uppercase;
  margin: 0;
  z-index: 10;
  font-size: 76px;
  font-weight: 900;
`;

const ShoesWrapper = styled.div`
  width: 100%;
  height: 111%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ShoesWrapperResize = styled.div`
  width: 100%;
  height: 90%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Shoes = styled(motion.div)`
  width: auto;
  height: 200px;
  z-index: 99;
  user-select: none;
  // margin-right: 3em;
  // margin-left: 2em;
  // margin-top: 1em;
  z: 10000;

  img {
    width: auto;
    height: 100%;
    user-select: none;
  }
`;
const amanpics = styled(motion.div)`
  width: auto;
  height: 200px;
  z-index: 99;
  user-select: none;
  // margin-right: 3em;
  // margin-left: 2em;
  // margin-top: 1em;
  z: 10000;

  img {
    width: auto;
    height: 80%;
    user-select: none;
  }
`;
const ShoesResize = styled(motion.div)`
  width: auto;
  height: 220px;
  z-index: 99;
  user-select: none;
  // margin-right: 3em;
  // margin-left: 2em;
  // margin-top: 1em;
  z: 10000;

  img {
    width: auto;
    height: 74%;
    user-select: none;
  }
`;
const ShoesAdedo = styled(motion.div)`
  width: auto;
  height: 220px;
  z-index: 99;
  user-select: none;
  // margin-right: 3em;
  // margin-left: 2em;
  // margin-top: 1em;
  z: 10000;

  img {
    width: auto;
    height: 100%;
    user-select: none;
  }
`;
const ShoesWrapperAdedo = styled.div`
  width: 100%;
  height: 80%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function TeamCard(props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <CardWrapper>
      <CardContainer
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.16}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: "grabbing" }}
      >
        <TopContainer>
          {props.resize ? (
            <CircleWrapperResize>
              <CircleResize />
            </CircleWrapperResize>
          ) : (
            <CircleWrapper>
              <Circle />
            </CircleWrapper>
          )}
          {/* <CircleWrapper>
            <Circle />
          </CircleWrapper> */}
          {props.resize ? (
            <ShoesWrapperResize>
              <ShoesResize
                style={{
                  x,
                  y,
                  rotateX,
                  rotateY,
                  // rotate: "-25deg",
                  z: 100000,
                  borderRadius: "15px",
                }}
                drag
                dragElastic={0.12}
                whileTap={{ cursor: "grabbing" }}
              >
                <img src={props.image} />
              </ShoesResize>
            </ShoesWrapperResize>
          ) : props.height ? (
            <ShoesWrapperAdedo>
              <ShoesAdedo
                style={{
                  // x,
                  // y,
                  // rotateX,
                  // rotateY,
                  // rotate: "-25deg",
                  z: 100000,
                  borderRadius: "15px",
                }}
                drag
                dragElastic={0.12}
                whileTap={{ cursor: "grabbing" }}
              >
                <img src={props.image} />
              </ShoesAdedo>
            </ShoesWrapperAdedo>
          ) : (
            <ShoesWrapper>
              {props.width ? (
                <amanPics
                  style={{
                    // x,
                    // y,
                    // rotateX,
                    // rotateY,
                    // rotate: "-25deg",
                    z: 100000,
                    borderRadius: "15px",
                  }}
                  drag
                  dragElastic={0.12}
                  whileTap={{ cursor: "grabbing" }}
                >
                  <img src={props.image} />
                </amanPics>
              ) : (
                <Shoes
                  style={{
                    // x,
                    // y,
                    // rotateX,
                    // rotateY,
                    // rotate: "-25deg",
                    z: 100000,
                    borderRadius: "15px",
                  }}
                  drag
                  dragElastic={0.12}
                  whileTap={{ cursor: "grabbing" }}
                >
                  <img src={props.image} />
                </Shoes>
              )}
            </ShoesWrapper>
          )}
          {/* <NikeText>EXPELEE TEAM</NikeText> */}
        </TopContainer>
        <BottomContainer>
          <TeamDetails
            name={props.name}
            image={props.image}
            desg={props.desg}
            linkedLink={props.linkedLink}
            telegramLink={props.telegramLink}
            resize={props.resize}
          />
        </BottomContainer>
      </CardContainer>
    </CardWrapper>
  );
}
