import React from "react";

import brain from "../../../assets/brain.png";

import { Grid } from "@mui/material";
import GoToTop from "../../../coreComponents/GoToTop";
import ScamCard from "./ScamCard";
function Scam() {
  return (
    <>
      <Grid sx={{ width: "90%" }} margin="auto" container spacing={3}>
     
     
        <Grid item xs={12} md={3}>
          <ScamCard
            image={brain}
            heading="Exposing Brain Soup Token Scam"
            description="A project that had undergone auditing and KYC procedures launched its pre-sale on PinkSale.finance and ran off with 500 BNB from investors. though how? Read the blog to know how this occurred and what can be done to prevent similar events from occurring in the future."
            // link="https://medium.com/@expelee/breaking-into-the-blockchain-space-246e3940401d"
            padding={3}
          />
        </Grid>
       
      </Grid>
      <GoToTop />
    </>
  );
}

export default Scam;
