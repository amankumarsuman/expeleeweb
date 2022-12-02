import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import web3 from "../../assets/quarterPlan.png";
import quarterPlanCard from "../../assets/q22.png";
import talent from "../../assets/threeYearPlan.png";
import threeYearPlanCard from "../../assets/q33.png";
import blockchain from "../../assets/q11.png";
import yearCardHeading from "../../assets/yearPlanHeader.png";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters={true} elevation={0} square {...props} />
))(({ theme }) => ({
  "& .css-v84d5j-MuiSvgIcon-root":{
    display:"none"
      },
  // root: {
  //   "&$expanded": {
  //     margin: "auto"
  //   }
  // },
  // expanded: {},
  // border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
  disableGutters
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  top:30,
  left:3,
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    // marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  // padding: theme.spacing(2),
  

  padding:"16px",
  // borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function PlanAccordian() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div 
    style={{
        position: "relative",
        // top: 120,
        // left: -220,
       
      }}
    >
      <Accordion disableGutters sx={{backgroundColor:"transparent",  position: "absolute",
                top: -60,
                left: 30,
              
        }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
        <AccordionSummary disableGutters aria-controls="panel1d-content" id="panel1d-header">
          <Typography>
          <img
              src={yearCardHeading}
            //   style={{
            //     position: "absolute",
            //     top: 120,
            //     left: -220,
            //   }}
          
              alt="yearheading"
            />
          </Typography>
        </AccordionSummary>
        <AccordionDetails disableGutters>
          {/* <Typography> */}
        <img 
              style={{position:"relative",left:8,borderRadius:"0 10px 20px 20px"}}
              width="98% !important"

        src={blockchain}/>
          {/* </Typography> */}
        </AccordionDetails>
      </Accordion>
      <Accordion disableGutters sx={{backgroundColor:"transparent",
       position: "relative",
        //    top: 120,
           left:-280,
    }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary disableGutters aria-controls="panel2d-content" id="panel2d-header">
          <Typography>
          <img
          className='z-10'
              src={web3}
            //   style={{
            //     position: "absolute",
            //     top: 120,
            //     left: -220,
            //   }}
              alt="web3"
            />
          </Typography>
        </AccordionSummary>
        <AccordionDetails disableGutters>
          <Typography>
          <img 
             style={{position:"relative",left:8,borderRadius:"0 0 20px 20px"}}
             width="91% !important"
          
          src={quarterPlanCard}/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disableGutters sx={{backgroundColor:"transparent",
       position: "relative",
           top: 70,
        //    left: 50,
        left: -280,
        // left:250,
        z:-50,

    
    }}  expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary disableGutters aria-controls="panel3d-content" id="panel3d-header">
          <Typography>  <img
              src={talent}
            //   style={{
            //     position: "absolute",
            //     top: 250,
            //     left: -180,
            //   }}
              alt="talent"/></Typography>
        </AccordionSummary>
        <AccordionDetails disableGutters>
          <Typography>
          <img
              style={{position:"relative",left:8,borderRadius:"0 0px 20px 20px"}}
              width="98% !important"
          
          src={threeYearPlanCard} />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
