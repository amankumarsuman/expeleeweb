import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar, Button, CardActionArea, CardActions } from "@mui/material";
import AnimatedButton from "../animatedButton/AnimatedButton";
import styles from "./card.module.css";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import kyc from "../../assets/aml-kyc.png";
import { SimpleButton } from "../../pages/services/tokenGeneration/CustomButton";
import { Link } from "react-router-dom";

export default function ProductCard({
  title,
  description,
  buttonText,
  image,
  alt,
  margintop,
  marginIn,
  link,
  descMargin
}) {
  return (
    <>
  <div  className={styles.card}>
    
    {margintop?<div className={styles.imgbox2}>
<img className={styles.img} src={image} alt="kyc"   />
</div>:<div className={styles.imgbox}>
<img className={styles.img}  src={image} alt="kyc"  />
</div>}
{/* <div className={styles.imgbox}>
<img src={image} alt="kyc"  />
</div> */}
<div className={styles.content}>
  <h1 className={styles.h1}>
{title}
  </h1>
  {descMargin? <h5 style={{marginTop:`${descMargin}em`}} className={styles.h5}>
 {description}
  </h5>: <h5 className={styles.h5}>
 {description}
  </h5>}
 
  <Link to={link}>
  {marginIn? 
 <SimpleButton
                  sx={{
                    width: "10vu",
                    padding: "1em",
                    // fontFamily: "poppins",
                    color:"white",
                    // fontSize: "15px",
    fontSize: "1em",
    marginTop:`${marginIn}em`,

                    background:"#3d75ed"
                  }}
                  variant="contained"
                >
                 {buttonText}
                </SimpleButton>: <SimpleButton
                  sx={{
                    width: "10vu",
                    padding: "1em",
                    // fontFamily: "poppins",
                    color:"white",
                    // fontSize: "15px",
    fontSize: "1em",

                    background:"#3d75ed"
                  }}
                  variant="contained"
                >
                 {buttonText}
                </SimpleButton>}
 </Link> 
  
 
</div>
  </div>
    
    </>
  );
}

  // <Card 
  //   className={styles.card}
  //   sx={{ maxWidth: 445,position:"relative" }}
  //   >
  //     <CardActionArea>
   
  //       <CardMedia component="img" height="140" image={image} alt={alt} />
  //       <CardContent>
  //         <Typography
  //           className={styles.textGradient}
  //           gutterBottom
  //           variant="h5"
  //           component="div"
  //           sx={{ 
              
      
              
  //             fontSize: "2.2em" }}
  //         >
  //           {title}
  //         </Typography>
  //         <Typography
  //           sx={{ 
              
    
              
  //             fontSize: "1.5em" }}
  //           variant="body2"
  //           color="text.primary"
  //         >
  //           {description}
  //         </Typography>
  //       </CardContent>
  //     </CardActionArea>
  //     <CardActions>
    
  //       <div style={{ padding: "2em" }}>
  //         <AnimatedButton text={buttonText} />
  //       </div>
  //     </CardActions>
  //   </Card>