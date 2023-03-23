// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles((theme) => ({
//   card: {
//     backgroundColor: "#1a1a1a",
//     maxWidth: 345,
//     margin: "1rem",
//     borderRadius: "10px",
//     boxShadow: "none",
//     transition: "all 0.5s ease",
//     transform: "translateX(-50%)",
//     opacity: 0,
//   },
//   media: {
//     height: 140,
//   },
//   content: {
//     color: "#fff",
//   },
//   show: {
//     transform: "none",
//     opacity: 1,
//   },
// }));

// export { useStyles };

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: "black",
    maxWidth: 345,
    margin: "1rem",
    borderRadius: "10px",
    boxShadow: "none",
    transition: "all 0.5s ease",
    transform: "translateX(-50%)",
    opacity: 0,
    position: "relative",
    overflow: "hidden",
    border: "2px dotted red",
  },
  media: {
    height: 140,
  },
  content: {
    color: "#fff",
  },
  show: {
    transform: "none",
    opacity: 1,
  },
  "@keyframes shuffle-animation-left": {
    "0%": {
      transform: "translateX(-50%) translateY(-100%)",
      opacity: 0,
    },
    "100%": {
      transform: "translateX(-50%) translateY(0)",
      opacity: 1,
    },
  },
  "@keyframes shuffle-animation-right": {
    "0%": {
      transform: "translateX(50%) translateY(-100%)",
      opacity: 0,
    },
    "100%": {
      transform: "translateX(50%) translateY(0)",
      opacity: 1,
    },
  },
  shuffleAnimationLeft: {
    animation: "$shuffle-animation-left 0.5s ease",
    animationDelay: "0.3s",
  },
  shuffleAnimationRight: {
    animation: "$shuffle-animation-right 0.5s ease",
    animationDelay: "0.3s",
  },
}));

export { useStyles };
