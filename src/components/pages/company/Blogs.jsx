import React from "react";
import BlogsCard from "./BlogsCard";
import nft from "../../assets/nft.png";
import merge from "../../assets/merge.png";
import blockchainblog from "../../assets/blockchainblog.jpg";
import brain from "../../assets/brain.png";
import blockchainblog2 from "../../assets/blockchain2.jpg";
import { Grid } from "@mui/material";
import GoToTop from "../../coreComponents/GoToTop";
import BlogsBanner from "./BlogsHeader";
function Blogs() {
  return (
    <>
    
        <BlogsBanner/>
      <Grid sx={{ width: "90%" }} margin="auto" container spacing={3}>
        <Grid item xs={12} md={3}>
          <BlogsCard
            image={nft}
            heading="What Is NFT all about?"
            description="NFT or Non-fungible token is a digital asset that portrays real-world objects such as videos, music, art, in-game items, and even memes. You can buy and sell NFTs online more often with cryptocurrency. Furthermore, the same underlying software used in crypto encodes them."
            link="https://medium.com/@expelee/what-is-nft-all-about-4c103aa7763a"
            padding={2}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <BlogsCard
            image={merge}
            heading="The Historic Ethereum Merge is finally completed"
            description="The most awaited Ethereum Merge is finally Completed and Ethereum Blockchain made its historic shift from Proof-of-Work to Proof-to-Stake Consensus Mechanism. In this Blog we list some points to know more about Merge."
            link="https://medium.com/@expelee/the-historic-ethereum-merge-is-finally-completed-8c3981b7a8dd"
            padding={1.2}


          />
        </Grid>
     
        <Grid item xs={12} md={3}>
          <BlogsCard
            image={blockchainblog}
            heading="Breaking into the Blockchain Space"
            description="The financial and social globe has evolved in a very unique way in the past decade, making data the most precious asset one possesses. Data has become one of the sole reasons for a company’s growth and success. It helps one predict trends, identify opportunities and stay ahead in the competition by providing insights on customer behavior and market situations before they actually happen."
            link="https://medium.com/@expelee/breaking-into-the-blockchain-space-246e3940401d"
            center={true}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <BlogsCard
            image={blockchainblog2}
            heading="What is a Consortium Blockchain?"
            description="Blockchain is the latest and one of the most in-demand developments of the 21st century. Cryptocurrencies and bitcoins have become popular medium of exchange in the trading world today. Blockchain is a ledger and chain system-based network used for its application."
            link="https://medium.com/the-capital/what-is-a-consortium-blockchain-c336f011c781"
            padding={4}
          
          />
        </Grid>
      </Grid>
      <GoToTop />
    </>
  );
}

export default Blogs;
