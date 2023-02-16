import { TeamCard } from "./card";
import { Grid } from "@mui/material";
import anandhu from "../../../assets/anandhuNew.png";
import ritik from "../../../assets/ritikNew.png";
import divyesh from "../../../assets/divyeshNew.png";
import aman from "../../../assets/aman.png";
import GoToTop from "../../../coreComponents/GoToTop";
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
      <Grid sx={{ marginTop: "3em" }} container spacing={4}>
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
            name="Divyesh Gupta"
            image={divyesh}
            desg="Co-Founder - Design & Marketing"
            linkedLink="https://www.linkedin.com/in/divyesh16/"
            telegramLink="https://t.me/DG_Expelee"
            resize={true}
            imageResize={1}
          />
        </Grid>
        <Grid  item xs={12} md={3}>
          <TeamCard
            width={true}
            name="Aman Kumar"
            image={aman}
            desg="Technical Lead"
            linkedLink="https://www.linkedin.com/in/aman-kumar-b683b614b/"
            telegramLink="https://t.me/Expe_tech"
            resize={true}
            imageResize={1}
          />
        </Grid>
  
      </Grid>
      <GoToTop />
    </>
  );
}
export { Team };
