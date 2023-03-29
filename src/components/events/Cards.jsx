// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import { CardActionArea } from "@mui/material";

// export default function ActionAreaCard() {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           height="140"
//           image="/static/images/cards/contemplative-reptile.jpg"
//           alt="green iguana"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             Lizard
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             Lizards are a widespread group of squamate reptiles, with over 6,000
//             species, ranging across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   );
// }

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useStyles } from "./ActionAreaCardStyles.js";

export default function ActionAreaCard({ events }) {
  const classes = useStyles();
  const [show, setShow] = React.useState(false);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setShow(true);
      }
    });
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.25,
    });
    observer.observe(document.querySelector(`.${classes.card}`));
    return () => {
      observer.disconnect();
    };
  }, [classes.card]);

  const handleNavigate = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <Card
      sx={{ background: "black", color: "white", width: "320px" }}
      className={`${classes.card} ${show ? classes.show : ""}`}
      //   sx={classes.card}
    >
      <CardActionArea onClick={() => handleNavigate(events.link)}>
        <CardMedia
          className={classes.media}
          component="img"
          image={events?.img}
          alt="green iguana"
        />
        <CardContent className={classes.content}>
          <Typography
            sx={{ color: "green", fontWeight: "bold" }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {events?.name}
          </Typography>
          <Typography
            sx={{ color: "white" }}
            variant="body2"
            color="text.secondary"
          >
            {events?.description?.split("\n")?.map((el) => (
              <div className={classes.lists}>
                <p>{el}</p>
              </div>
            ))}
          </Typography>
          <hr style={{ marginTop: "1em", marginBottom: "1em" }} />
          <Typography
            sx={{ color: "grey", fontWeight: "bold" }}
            variant="body2"
            color="text.secondary"
          >
            {events?.date}
          </Typography>
          <Typography
            sx={{ color: "white", fontWeight: "bold" }}
            variant="body2"
          >
            {events?.city}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
