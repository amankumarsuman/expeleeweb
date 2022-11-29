import { TeamCard } from "./card";
import styled from "styled-components";
import { Grid } from "@mui/material";
import anandhu from "../../../assets/anandhuNew.png";
import ritik from "../../../assets/ritikNew.png";
import anay from "../../../assets/anayNew.png";
import divyesh from "../../../assets/divyeshNew.png";
import aman from "../../../assets/aman.png";
import adedoyin from "../../../assets/adedoyin.png";
// const TeamContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

function Team() {
  return (
    <>
      {/* <TeamContainer>
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </TeamContainer> */}
      <Grid sx={{marginTop:"3em"}} container spacing={4}>
        <Grid item xs={12} md={3}>
          <TeamCard
            name="Anandhu Santhosh Kumar"
            image={anandhu}
            desg="Co-Founder - Operations Manager"
            linkedLink="https://www.linkedin.com/in/anandhu-santhosh-kumar/"
            telegramLink="https://t.me/Anan_Expelee_Audits"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TeamCard
            name="Ritik Jain"
            image={ritik}
            desg="Co-Founder - Marketing & Relations"
            linkedLink="https://www.linkedin.com/in/ritikjain-eth/"
            telegramLink="https://t.me/Ritz_Expelee"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TeamCard
            name="Anay Indani"
            image={anay}
            desg="Technical Officer"
            linkedLink="https://www.linkedin.com/in/anay-indani-b84b08197/"
            telegramLink="https://t.me/Anay_Expelee"
            resize={true}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TeamCard
            name="Divyesh Gupta"
            image={divyesh}
            desg="Designer & Digital Marketer"
            linkedLink="https://www.linkedin.com/in/divyesh16/"
            telegramLink="https://t.me/DG_Expelee"
            resize={true}
          />
        </Grid>
        <Grid sx={{marginTop:"3em"}} item xs={12} md={3}>
          <TeamCard
          width={true}
            name="Aman Kumar"
            image={aman}
            desg="Front End Developer"
            linkedLink="https://www.linkedin.com/in/divyesh16/"
            telegramLink="https://t.me/DG_Expelee"
            resize={true}
          />
        </Grid>
        <Grid sx={{marginTop:"3em"}}  item xs={12} md={3}>
          <TeamCard
            name="Temitayo Adedoyin"
            image={adedoyin}
            height={100}
            desg="Content Strategist and Technical Writer"
            linkedLink="https://www.linkedin.com/in/divyesh16/"
            telegramLink="https://t.me/DG_Expelee"
            // resize={true}
          />
        </Grid>
      </Grid>
    </>
  );
}
export { Team };
