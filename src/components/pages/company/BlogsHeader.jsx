import { Container, Typography } from "@material-ui/core";
import { createStyles, makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) =>createStyles ({
//   banner: {
//     backgroundImage: "url(./banner2.jpg)",
//   },
  bannerContent: {
    height: 100,
    display: "flex",
    flexDirection: "column",
    // paddingTop: 5,
    justifyContent: "space-around",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  carousel: {
    height: "50%",
    display: "flex",
    border:"1px solid red",
    alignItems: "center",
  },
}));

function BlogsBanner() {
  const classes = useStyles();

  return (
    // <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              color:"#3d75ed",
              marginBottom: 15,
              // fontFamily: "Montserrat",
            }}
          >
           Expe Blogs
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              // textTransform: "capitalize",
              // fontFamily: "Montserrat",
            }}
          >
            {/* Some of Our Blog */}
          </Typography>
        </div>
          
       
      </Container>
    // </div>
  );
}

export default BlogsBanner;
