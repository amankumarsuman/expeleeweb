import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import web3 from "../../assets/quarterPlan.png";
import quarterPlanCard from "../../assets/q11.png";
import talent from "../../assets/threeYearPlan.png";
import threeYearPlanCard from "../../assets/q33.png";
import blockchain from "../../assets/q22.png";
import yearCardHeading from "../../assets/yearPlanHeader.png";
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
//   border: `1px solid ${theme.palette.divider}`,
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
  left:-14,

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
//   padding: theme.spacing(2),
//   borderTop: '1px solid rgba(0, 0, 0, .125)',
padding:"16px",

}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');
  const [expanded2, setExpanded2] = React.useState('panel2');
  const [expanded3, setExpanded3] = React.useState('panel3');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const handleChange2 = (panel) => (event, newExpanded) => {
    setExpanded2(newExpanded ? panel : false);
  };
  const handleChange3 = (panel) => (event, newExpanded) => {
    setExpanded3(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion disableGutters sx={{backgroundColor:"transparent",  }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary disableGutters aria-controls="panel1d-content" id="panel1d-header">
          <Typography><img
              src={yearCardHeading}
            //   style={{
            //     position: "absolute",
            //     top: 120,
            //     left: -220,
            //   }}
          
              alt="yearheading"
            /></Typography>
        </AccordionSummary>
        <AccordionDetails
        disableGutters
        >
        <img 
              style={{left:10,borderRadius:"0 10px 20px 20px",marginLeft:"0.3em"}}
              width="91% !important"

        src={blockchain}/>
        </AccordionDetails>
      </Accordion>
      <Accordion  disableGutters sx={{backgroundColor:"transparent",}} expanded={expanded2 === 'panel2'} onChange={handleChange2('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>  <img
          className='z-10'
              src={web3}
            
            //   style={{
            //     position: "absolute",
            //     top: 120,
            //     left: -220,
            //   }}
            width="105%"
              alt="web3"
            /></Typography>
        </AccordionSummary>
        <AccordionDetails>
        <img 
             style={{left:8,borderRadius:"0 0 20px 20px",marginLeft:"0.3em"}}
             width="91% !important"
          
          src={quarterPlanCard}/>
        </AccordionDetails>
      </Accordion>
      <Accordion  disableGutters sx={{backgroundColor:"transparent",}} expanded={expanded3 === 'panel3'}  onChange={handleChange3('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography> <img
              src={talent}
            //   style={{
            //     position: "absolute",
            //     top: 250,
            //     left: -180,
            //   }}
              alt="talent"/></Typography>
        </AccordionSummary>
        <AccordionDetails>
        <img
              style={{borderRadius:"0 0px 20px 20px",marginLeft:"0.3em"}}
              width="91% !important"
          
          src={threeYearPlanCard} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
