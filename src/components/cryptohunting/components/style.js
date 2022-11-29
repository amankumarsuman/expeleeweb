import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
  container: {
    border: "1px solid transparent",
    width:"100%"
  },

  
  row: {
          backgroundColor: "#16171a",
          // border:"1px solid red !important",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "grey",
          },
          fontFamily: "Montserrat",
        },
        pagination: {
          "& .MuiPaginationItem-root": {
            color: "gold",
          },
        },
        title: {
            flex: 1,
            color: "gold",
            fontFamily: "Montserrat",
            fontWeight: "bold",
            cursor: "pointer",
            // border:"1px solid red"
          },

          containers: {
            width: "75%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 25,
            padding: 40,
            [theme.breakpoints.down("md")]: {
              width: "100%",
              marginTop: 0,
              padding: 20,
              paddingTop: 0,
            },
          },

          containers: {
            display: "flex",
            [theme.breakpoints.down("md")]: {
              flexDirection: "column",
              alignItems: "center",
            },
          },
          sidebars: {
            width: "30%",
            [theme.breakpoints.down("md")]: {
              width: "100%",
            },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 25,
            borderRight: "2px solid grey",
          },
          headings: {
            fontWeight: "bold",
            marginBottom: 20,
            fontFamily: "Montserrat",
            color:"#3d75ed"
          },
          descriptions: {
            width: "100%",
            fontFamily: "Montserrat",
            padding: 25,
            paddingBottom: 15,
            paddingTop: 0,
            textAlign: "justify",
            color:"white"
          },
          marketData: {
            alignSelf: "start",
            padding: 25,
            paddingTop: 10,
            width: "100%",
          
            [theme.breakpoints.down("md")]: {
              display: "flex",
              justifyContent: "space-around",
            },
            [theme.breakpoints.down("sm")]: {
              flexDirection: "column",
              alignItems: "center",
            },
            [theme.breakpoints.down("xs")]: {
              alignItems: "start",
            },
          },

          carousels: {
                height: "50%",
                display: "flex",
              // border:"1px solid red",
                alignItems: "center",
              },
              carouselItem: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
                textTransform: "uppercase",
                color: "white",
              

              },
              selectbutton: {
                border: "1px solid gold",
                borderRadius: 5,
                padding: 10,
                paddingLeft: 20,
                paddingRight: 20,
                fontFamily: "Montserrat",
                cursor: "pointer",
                backgroundColor:  "#3d75ed",
                color: "white",
                fontWeight:  700,
                "&:hover": {
                  backgroundColor: "white",
                  color: "black",
                },
                width: "22%",
                //   margin: 5,
              },
              App: {
              
                color: "white",
                minHeight: "100vh",
              },
}));
