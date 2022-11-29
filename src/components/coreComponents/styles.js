import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
  container: {
    border: "1px solid transparent",
    width: "80%",
  },

  mainDiv: {
    width: "90%",
    margin: "auto",
    marginTop: "1em",
    // marginBottom: "5em",
    // paddingBottom: "5em",
  },
  mainDivLocal: {
    margin: "auto",
  },
  headingDiv: {
    // height: "46px",

    // background: linear-gradient(
    //   to right,
    //   #1e1e1e,
    //   black,
    //   #1e1e1e,
    //   black,
    //   #1e1e1e,

    //   #1e1e1e

    // ) !important;
    backgroundColor: " #17121F !important",
    // background: "linear-gradient(to right bottom, #1e1e1e,black,#2E2A34,black ,#1e1e1e)",
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2em",
  },
  headingDivChild: {
    width: "fixed",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headingIcon: {
    fontSize: "30px",
  },
  headingText: {
    fontSize: "26px",
    fontWeight: "700",
    paddingBottom: "0.4rem",
    // fontFamily: "Open Sans",
    paddingLeft: "1rem",
    color: "white",
  },
  headingTextViewOnly: {
    fontSize: "10px",
    fontWeight: "500",
    marginTop: "-5px",
    color: "white",
    background: "#ff0000ad",
    height: "fit-content",
    padding: "2px 5px",
    borderRadius: "5px",
  },
  formBackgroundParent: {
    overflow: "hidden",

    color: "white !important",
  },
  formBackgroundChild: {
    margin: "auto",
    // marginLeft: "50px",
    // border:"1px solid red",
    background: "none",
    color: "white !important",
    // backgroundColor:"none",
    paddingLeft: "20px",
    marginRight: "-108px" /* Maximum width of scrollbar */,
    paddingRight: "180px" /* Maximum width of scrollbar */,
  },
}));
