import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import styles from "./auditAccordian.module.css";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import { Grid } from "@mui/material";
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  "& .MuiSvgIcon-root":{

    display:"none !important"
  },
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  // backgroundColor:
  //   theme.palette.mode === "dark"
  //     ? "rgba(255, 255, 255, .05)"
  //     : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    // marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions({
  icon2,
  icon2Heading,
  title,
  heading,
  image,
  alt,
  summary1,
  summary2,
  summary3,
  icon1,
  icon1Heading,
}) {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div style={{ marginTop: "5em" }}>
      <Accordion
      
        sx={{ background: "transparent" }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          className={styles.panel}
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography
            variant="h4"
            textAlign="center"
            fontWeight="bold"
            className={styles.textGradient}
            display="flex"
            // fontFamily="poppins"
            justifyContent="space-between"
          >
            <div
              style={{ color: "white", marginTop: "-5px", marginRight: "2em" }}
            >
              <ArrowDropDownCircleIcon />
            </div>
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "90%",
            // margin: "auto",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <img alt={alt} src={image} />
            </Grid>
            <Grid item xs={12} md={6}>
              <div>
                <Typography
                  variant="h4"
                  textAlign="center"
                  marginBottom="2em"
            fontWeight="bold"

                  className={styles.textGradient}
                >
                  {heading}
                </Typography>
                <Typography
                  variant="h5"
                  marginBottom="1em"
                  marginLeft="2em"
                  color="grey"
                  //   textAlign="center"
                >
                  {summary1}
                </Typography>
                <Typography
                  variant="h5"
                  marginBottom="1em"
                  marginLeft="2em"
                  color="grey"

                  //   variant='h3'
                  //   textAlign="center"
                >
                  {summary2}
                </Typography>
                <Typography
                  variant="h5"
                  marginBottom="1em"
                  color="grey"
                  marginLeft="2em"

                  //   variant='h3'
                  //   textAlign="center"
                >
                  {summary3}
                </Typography>
                <div style={{ display: "flex", width: "40%" }}>
                  {/* <div
          
          style={{display:"flex",width:"40%",color:"white"}}
         
          > */}

                  {icon1 ? <img src={icon1} width="13%" /> : null}

                  <Typography
                    variant="h4"
                    sx={{ color: "white", marginLeft: "2em" }}
                  >
                    {icon1Heading ? icon1Heading : null}
                  </Typography>
                  {/* </div> */}
                </div>
                <div style={{ display: "flex", width: "40%" }}>
                  {/* <div
          
          style={{display:"flex",width:"40%",color:"white"}}
         
          > */}

                  {icon2 ? (
                    <img src={icon2} color="white !important" width="13%" />
                  ) : null}

                  <Typography
                    variant="h4"
                    sx={{ color: "white", marginLeft: "2em" }}
                  >
                    {icon2Heading ? icon2Heading : null}
                  </Typography>
                  {/* </div> */}
                </div>
              </div>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      {/* <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Collapsible Group Item #2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Collapsible Group Item #3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails> */}
      {/* </Accordion> */}
    </div>
  );
}
