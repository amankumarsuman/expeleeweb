import React from "react";
import Card from "../products/Card/Card";
import { properties } from "../products/constants/data";
import blockChain from "../../assets/block.png";
import kyc from "../../assets/aml-kyc.png";
import webDevelopment from "../../assets/web_develop.png";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import ExpeServicesSwiper from "../../customComponents/swiperCard/ServiceCard";
import styles from "./dashboard.module.css";
import { Grid } from "@mui/material";
function ExpeleeServices() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <div
            style={{
              width: "30vu",
              margin: "auto",

              marginTop: "5em",
            }}
          >
            <h1
              className={styles.textGradient}
              style={{
                color: "white",
                textAlign: "center",
                // fontFamily: "poppins",
              }}
            >
              Our Services
            </h1>
            <p
              style={{
                textAlign: "center",
                color: "grey",
                // fontFamily: "open-sans",
                fontSize: "1.5em",
                marginBottom: "3em",
              }}
            >
              Work smarter with our powerful Services developed for you.
            </p>
          </div>
        </Grid>
        <Grid
          item
          sx={{ display: { xs: "none", sm: "block" } }}
          xs={12}
          md={12}
        >
          <ExpeServicesSwiper slideperpage={3} />
        </Grid>
        <Grid
          item
          sx={{ display: { md: "none", xs: "block" } }}
          xs={12}
          md={12}
        >
          <ExpeServicesSwiper slideperpage={1} />
        </Grid>
      </Grid>
    </>
  );
}

export default ExpeleeServices;
