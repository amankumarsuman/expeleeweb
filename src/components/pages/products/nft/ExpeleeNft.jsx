import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { FormMainHeadingContainer } from "../../../coreComponents/FormMainHeadingContainer";
import nft from "../../../assets/nft2.png";
import styles from "./expeNft.module.css";
import { SimpleButton } from "../../services/tokenGeneration/CustomButton";
import GoToTop from "../../../coreComponents/GoToTop";

function ExpeNft() {
  const handleNavigate = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <FormMainHeadingContainer headingText="Expe NFT">
        <Grid sx={{ marginTop: "2em" }} container spacing={2}>
          <Grid item xs={12} md={6}>
            <img src={nft} alt="design pic" />
          </Grid>
          <Grid item xs={12} md={6}>
            {/* <Paper className={styles.partnerPaperDiv} elavation={10}> */}
            <Typography
              variant="h4"
              textAlign="center"
              className={styles.textGradient}
            >
              NFT Development
            </Typography>
            <Typography
              fontSize="1.1em"
              color="grey"
              sx={{ marginTop: "2em", marginBottom: "2em" }}
            >
              The world of digital art and collectibles is currently awash in
              NFTs. Huge sales to a new crypto-audience are changing the lives
              of digital artists. As they recognize a fresh opportunity to
              communicate with audiences, celebrities are now jumping in. The
              use of NFTs is not limited to digital art, though. Actually, they
              can be used to symbolize ownership of any special asset, such as a
              deed for a product in the actual or digital world.
            </Typography>
            {/* <Typography
              
              fontSize="1.6em"
              sx={{ marginTop: "2em", marginBottom: "2em" }}
            >
              Utilizing our features, create your own token smart contract while
              comprehending the underlying principles of token specifications
              and the significant variations across token types.
            </Typography>
            <Typography
              
              fontSize="1.6em"
              sx={{ marginTop: "2em", marginBottom: "2em" }}
            >
              Create and implement ERC20 and ERC721 token contracts. The Token
              Factory offers complete flexibility in setting up the
              functionalities of the tokens.
            </Typography> */}
            <Typography
              variant="h4"
              textAlign="center"
              className={styles.textGradient}
            >
              What is a NFT?
            </Typography>
            <Typography
              fontSize="1.1em"
              color="grey"
              sx={{ marginTop: "2em", marginBottom: "2em" }}
            >
              NFTs are tokens that can be used to signify ownership of certain
              goods. We can tokenize items like works of art, valuables, and
              even real estate thanks to them. They are protected by the
              Ethereum blockchain and can only have one legitimate owner at a
              time; nobody can change the ownership record or create a new NFT
              by copying and pasting an existing one.
            </Typography>
            <Typography
              variant="h4"
              textAlign="center"
              className={styles.textGradient}
            >
              Our Ground-Breaking Approach to NFT Development
            </Typography>
            <Typography
              fontSize="1.1em"
              color="grey"
              sx={{ marginTop: "2em", marginBottom: "2em" }}
            >
              Expelee development teams use agile and scrum development
              processes, which are guaranteed to provide the desired results in
              a timely manner and offer our clients cheap services, to acquire
              the outcomes you want and that we want to give.
            </Typography>
            {/* <Typography
              
              fontSize="1.6em"
              sx={{ marginTop: "2em", marginBottom: "2em" }}
            >
              Enterprise On the blockchain, tokens serve as a representation of
              physical or digital assets. Tokens, which can be characterized as
              either fungible or non-fungible, offer a means of conducting safe
              digital transactions without the need for middlemen and
              third-party trust organizations. Enterprises can use tokens to
              improve processes related to asset trading transactions and
              provide a reliable framework for asset tracking, settlement, and
              custody.
            </Typography> */}
            {/* </Paper> */}
          </Grid>
          {/* <Grid md={6}>

          </Grid>
          <Grid item xs={12} md={6}>
            <Paper className={styles.partnerPaperDiv} elavation={10}>
              <Typography
                variant='h4'
                textAlign="center"
                className={styles.textGradient}
              >
             How it works?

              </Typography>
              <Typography
              
              fontSize="1.6em"
              sx={{marginTop:"2em",marginBottom:"2em"}}
              >
                Expelee's adaptable, simple, and scalable architecture is brought to tokens by Token Factory.
</Typography>
              <Typography
              
              fontSize="1.6em"

              sx={{marginTop:"2em",marginBottom:"2em"}}
              >
Enterprise On the blockchain, tokens serve as a representation of physical or digital assets. Tokens, which can be characterized as either fungible or non-fungible, offer a means of conducting safe digital transactions without the need for middlemen and third-party trust organizations. Enterprises can use tokens to improve processes related to asset trading transactions and provide a reliable framework for asset tracking, settlement, and custody.            
           
        </Typography>
            </Paper>
          </Grid> */}
          <Grid item xs={12} md={12}>
            {/* <Paper className={styles.partnerPaperDiv} elavation={10}> */}
            <Typography
              variant="h4"
              textAlign="center"
              className={styles.textGradient}
            >
              Steps for our NFT development process
            </Typography>
            <Typography
              variant="h4"
              fontSize="1.3em"
              color="#3d75ed"
              fontWeight="bold"
              sx={{ marginTop: "2em", marginBottom: "2em" }}
            >
              1 Conceptualization and Advice
            </Typography>
            <Typography
              fontSize="1.1em"
              color="grey"
              sx={{ marginTop: "2em", marginBottom: "2em" }}
            >
              Together, we discuss your needs, your business, and potential
              growth areas (albeit, with a cup of coffee). Here, we determine
              how we can improve your company's value.
            </Typography>
            <Typography
              variant="h4"
              fontSize="1.3em"
              color="#3d75ed"
              fontWeight="bold"
              sx={{ marginTop: "2em", marginBottom: "2em" }}
            >
              2 Making the Framework
            </Typography>
            <Typography
              fontSize="1.1em"
              color="grey"
              sx={{ marginTop: "2em", marginBottom: "2em" }}
            >
              We choose the tools and technology needed to construct your
              solution at this point. To create high-fidelity prototypes of the
              final product, which are essential to get a real-life-like
              experience without coding, our designers unleash their creative
              energies.
            </Typography>
            <Typography
              variant="h4"
              fontSize="1.3em"
              color="#3d75ed"
              fontWeight="bold"
              sx={{ marginTop: "2em", marginBottom: "2em" }}
            >
              3 Design and Construction
            </Typography>
            <Typography
              fontSize="1.1em"
              color="grey"
              sx={{ marginTop: "2em", marginBottom: "2em" }}
            >
              Here, our programmers get to work and begin writing the answer
              while also developing a methodical architecture on which it will
              function. To ensure your solution runs continuously, they develop
              it using the best technology available and build an integrated
              network of solutions.
            </Typography>
            <Typography
              variant="h4"
              fontSize="1.3em"
              color="#3d75ed"
              fontWeight="bold"
              sx={{ marginTop: "2em", marginBottom: "2em" }}
            >
              4 Deployment
            </Typography>
            <Typography
              fontSize="1.1em"
              color="grey"
              sx={{ marginTop: "2em", marginBottom: "2em" }}
            >
              The solution undergoes testing after the development process is
              over, followed by deployment on the required platforms and
              devices. We also take care of the requirements particular to the
              industry, platform-specific details, and device-specific rules
              while accomplishing this.
            </Typography>

            {/* </Paper> */}
          </Grid>

          <Grid
            marginTop="2em"
            paddingBottom="2em"
            textAlign="center"
            xs={12}
            md={12}
          >
            {/* <SimpleButton
              onClick={() => handleNavigate("https://t.me/Ritz_Expelee")}
              sx={{
                width: "35vw",
                padding: "1em",
                borderRadius: "15vu",
                fontSize: "20vu",
                fontWeight: "bold",
              }}
              variant="contained"
            >
              CONTACT US
            </SimpleButton> */}

            <SimpleButton
              onClick={() => handleNavigate("https://t.me/Ritz_Expelee")}
              sx={{
                width: "250px",
                padding: "1.5em",
                // fontFamily: "poppins",
                color: "white",
                // fontSize: "15px",
                fontSize: "1em",
                fontWeight: "bold",
                background: "#3d75ed",
              }}
              variant="contained"
            >
              Contact Us
            </SimpleButton>
          </Grid>
        </Grid>
      </FormMainHeadingContainer>
      <GoToTop />
    </>
  );
}

export default ExpeNft;
