import React from "react";
import Card from "../products/Card/Card";
import { properties } from "../products/constants/data";
import audit from "../../assets/audit.png";
import kyc from "../../assets/aml-kyc.png";
import webDevelopment from "../../assets/web_develop.png";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import ExpeProductSwiper from "../../customComponents/swiperCard/SwiperCard";
import styles from "./dashboard.module.css";
import { Grid } from "@mui/material";
import SwiperCard from "../../customComponents/swiperCard/SwiperCard";
function ExpeleeProducts() {
  return (
    <>
      <Grid  container spacing={2}>
        <Grid item xs={12} md={12}>
          <div
            style={{
              width: "30vu",
              margin: "auto",

              marginTop: "5em",
            }}
          >
            <h1
              style={{
                color: "white",
                textAlign: "center",
                // fontFamily: "poppins",
                fontSize: "2.5em",
              }}
              className={styles.textGradient}
            >
              Expelee's Products
            </h1>
            <p
              style={{
                textAlign: "center",
                color: "grey",
                // fontFamily: "open-sans",
                fontSize: "1.3em",
                marginBottom: "3em",
              }}
            >
              Our Products that will help in the Development, Marketing,
              Promotion, Incubation, and even Security of your Web3 project.
            </p>
          </div>
        </Grid>
        <Grid
          item
          sx={{ display: { xs: "none", sm: "block" } }}
          xs={12}
          md={12}
        >
          {/* <ExpeProductSwiper slideperpage={3} /> */}
          <SwiperCard/>
        </Grid>
        <Grid
          item
          sx={{ display: { md: "none", xs: "block" } }}
          xs={12}
          md={12}
        >
          {/* <ExpeProductSwiper slideperpage={1} /> */}
          <SwiperCard/>

        </Grid>
      </Grid>
    </>
  );
}

export default ExpeleeProducts;
