import React from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import useStyles from "./styles";

export const FormMainHeadingContainer = ({
  children,
  headingText,
  headingIcon,
  offBackGroundChildCss = false,
  subTable = false,
}) => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.container}>
      <div className={classes.mainDiv} elevation={10}>
        <div className={classes.headingDiv}>
          <div className={classes.headingDivChild}>
            <span>{headingIcon}</span>
            <h1 className={classes.headingText}>{headingText}</h1>
          </div>
        </div>
   
        <div className={classes.formBackgroundParent}>
          <div
          style={{color:"white"}}
            // className={
            //   offBackGroundChildCss ? null : classes.formBackgroundChild
            // }
          >
            {children}
          </div>
          {/* <div >{children}</div> */}
        </div>
      </div>
    </Container>
  );
};
