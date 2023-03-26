import React, { useState, lazy } from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import styles from "./app.module.css";
import Dashboard from "./components/pages/dashboard/Dashboard.jsx";
import Footer from "./components/pages/footer/Footer.jsx";
import NewNavbar from "./components/navbar/NewNavbar.jsx";
import Header from "./components/navbar/components/partials/Header.jsx";
import AuditPage from "./components/pages/products/audit/AuditPage.jsx";
import DrawerAppBar from "./components/navbar/ResponsiveNavbar.jsx";
import { Route, Routes, useParams } from "react-router-dom";
import AllAudit from "./components/pages/products/audit/AllAudit.jsx";
import Scanner from "./components/pages/products/scanner/Scanner.jsx";
import ExpeVetting from "./components/pages/products/expeVetting/ExpeVetting.jsx";
import ExpeKyc from "./components/pages/products/kyc/ExpeKyc.jsx";
import ExpeDesign from "./components/pages/products/design/ExpeDesign.jsx";
import ExpeNft from "./components/pages/products/nft/ExpeleeNft.jsx";
import ExpeCoin from "./components/pages/products/coin/ExpeCoin.jsx";
import BlockchainDevelopment from "./components/pages/services/blockchain/BlockChainDevelopment.jsx";
import ExpeHyperLedger from "./components/pages/services/hyperLedgerPage/HyperLedgerComponent.jsx";
import { ColorModeContext, useMode } from "./theme.js";
import { ThemeProvider } from "styled-components";
import { createTheme, CssBaseline } from "@mui/material";
import Blogs from "./components/pages/company/Blogs.jsx";
import AboutExpelee from "./components/pages/dashboard/AboutExpelee.jsx";
import RoadMap from "./components/pages/dashboard/RoadMap.jsx";
import Partner from "./components/pages/dashboard/Partner.jsx";
import { Team } from "./components/pages/company/team/Team.jsx";
import "./App.css";
import Homepage from "./components/cryptohunting/Pages/HomePage.js";
import CoinPage from "./components/cryptohunting/Pages/CoinPage.js";
// import Homepage from "./components/trading/Pages/HomePage.js";
// import CoinPage from "./components/trading/Pages/CoinPage.js";
import useStyle from "./components/cryptohunting/components/style";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";
import ResponsiveAppBar from "./components/navbar/NavbarResponsive.jsx";
import NavbarResponsive from "./components/navbar/NavbarResponsive.jsx";
import ExpeDapp from "./components/pages/products/dapp/DappCreator.jsx";
import ScamCard from "./components/pages/services/scam/ScamCard.jsx";
import Scam from "./components/pages/services/scam/Scam.jsx";
import GenerateToken from "./components/pages/services/tokenGeneration/TokenGeneration.jsx";
import ScannerComponent from "./components/pages/products/scanner/ScannerComponent.jsx";
import AuditReport from "./components/pages/auditReport/AuditReport.jsx";
import EventList from "./components/events/Events.jsx";
import ActionAreaCard from "./components/events/Cards.jsx";
import img1 from "./components/assets/event1.avif";
import img2 from "./components/assets/img2.avif";
import event3 from "./components/assets/event3.avif";
import EventTable from "./components/events/EventTable.jsx";
import EventsAttended from "./components/events/EventHeaders.jsx";
function App() {
 
  let { id } = useParams();
  console.log(id);
  const [theme, colorMode] = useMode("dark");
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const classes = useStyle();
  const [shows, setShows] = useState(true);
  return (
    <>
      <ScrollContainer>
        {/* <ColorModeContext.Provider value={colorMode}> */}
        {/* <ThemeProvider theme={darkTheme}> */}
        {/* <CssBaseline /> */}
        {/* <div className={styles.mainDiv}> */}
        {/* <section
      className="h-screen 
      font-[Poppins] md:bg-top bg-center"
    > */}
        <NewNavbar shows={shows} setShows={setShows} />
        {/* <NavbarResponsive /> */}
        {/* <ResponsiveAppBar /> */}

        {/* <Navbar /> */}
        {/* <DrawerAppBar /> */}
        {/* <Header /> */}
        {/* <Dashboard /> */}
        {/* <AuditPage/> */}

        {/* </section> */}
        <div className="gradient-bg-welcome">
          {/* <AuditReport/> */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="audit" element={<AuditPage />} />
            <Route path="scam" element={<Scam />} />
            <Route path="token" element={<GenerateToken />} />

            <Route path="audit/all-audit" element={<AllAudit />} />
            <Route path="scanner" element={<ScannerComponent />} />
            <Route path="expe-vetting" element={<ExpeVetting />} />
            <Route path="expe-diligence" element={<ExpeKyc />} />
            <Route path="/design" element={<ExpeDesign />} />
            <Route path="/nft" element={<ExpeNft />} />
            <Route path="/coinLevel" element={<ExpeCoin />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/about-us" element={<AboutExpelee />} />
            <Route path="/roadmap" element={<RoadMap />} />
            <Route path="/partners" element={<Partner />} />
            <Route path="/team" element={<Team />} />
            <Route path="/hyperledger" element={<ExpeHyperLedger />} />

            <Route path="/live-chart" element={<Homepage />} />
            <Route path="/expe-creator" element={<ExpeDapp />} />
            {/* <Route path="/events" element={<EventList events={events} />} /> */}
            <Route path="/events" element={<EventsAttended  />} />

            <Route
              path="/blockChainDevelopment"
              element={<BlockchainDevelopment />}
            />
            <Route path="/coins/:id" element={<CoinPage />} exact />
          </Routes>
          {/* <CoinPage/> */}
          {/* <EventList events={events} /> */}
          {/* <ActionAreaCard /> */}
          <Footer />
          {/* </div> */}
          {/* <AnimatedDashboard /> */}
          {/* </ThemeProvider> */}
          {/* </ColorModeContext.Provider> */}
        </div>
      </ScrollContainer>
    </>
  );
}

export default App;
