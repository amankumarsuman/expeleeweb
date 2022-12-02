import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import styles from "./blogsCard.module.css";
import { SimpleButton } from "../services/tokenGeneration/CustomButton";
export default function BlogsCard({ image, heading, description, link,padding,center }) {
  const handleNavigate = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <Card
      className={styles.blogsCardBackground}
      sx={{ maxWidth: 345, borderRadius: "15px",height:"570px" }}
    >
      <CardActionArea>
        <CardMedia  component="img" height="140" image={image} alt={heading} />
        <CardContent>
          <Typography
            className={styles.textGradient}
            gutterBottom
            variant="h5"
            component="div"
          >
            {heading}
          </Typography>
          <Typography
            className={styles.desc}
            variant="body2"
            // color="text.primary"
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>

      {/* <SimpleButton
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
            Get Your KYC
          </SimpleButton> */}
        {padding ? <CardActions sx={{marginTop:`${padding}em`,display:"flex",justifyContent:"center",}}>
        <SimpleButton
        
          onClick={() => handleNavigate(link)}
          // size="small"
          // color="primary"
          // variant="contained"
          sx={{background:"#3d75ed",
          padding: "1.2em",
          color: "white",
          fontWeight: "bold",
        
        }}
        >
          Read More
        </SimpleButton>
      </CardActions>: <CardActions sx={{display:"flex",justifyContent:"center"}} >
        <SimpleButton
        
          onClick={() => handleNavigate(link)}
          // size="small"
          // color="primary"
          // variant="contained"
          sx={{background:"#3d75ed",display:"flex",justifyContent:"center",
          padding: "1.2em",
          color: "white",
          fontWeight: "bold",
        
        }}

        >
          Read More
        </SimpleButton>
      </CardActions>
      
      }
        {/* {padding? <CardActions sx={{marginTop:`${padding}em`,textAlign:"center"}}>
        <Button
        
          onClick={() => handleNavigate(link)}
          size="small"
          color="primary"
          variant="contained"
          sx={{background:"#3d75ed"}}
        >
          READ MORE
        </Button>
      </CardActions>: <CardActions >
        <Button
        
          onClick={() => handleNavigate(link)}
          size="small"
          color="primary"
          variant="contained"
          sx={{background:"#3d75ed",textAlign:"center"}}

        >
          READ MORE
        </Button>
      </CardActions>
      
      } */}
  
    </Card>
  );
}
