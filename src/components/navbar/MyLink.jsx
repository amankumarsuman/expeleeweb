import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import TokenIcon from "@mui/icons-material/Token";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import EngineeringIcon from "@mui/icons-material/Engineering";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import PieChartIcon from "@mui/icons-material/PieChart";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import AssignmentIcon from "@mui/icons-material/Assignment";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import medium from "../assets/mediumLogoW.png";
import InfoIcon from "@mui/icons-material/Info";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import HandshakeIcon from "@mui/icons-material/Handshake";
import BookIcon from "@mui/icons-material/Book";
import ForkRightIcon from "@mui/icons-material/ForkRight";
import AddTaskIcon from '@mui/icons-material/AddTask';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AttractionsIcon from '@mui/icons-material/Attractions';
import HomeIcon from '@mui/icons-material/Home';
export const links = [
  {
    name: "Products",
    
    submenu: true,
    sublinks: [
      {
        // Head: "Product List",
        sublink: [
          
         
          {
            name: "Expelee Audits",
            link: "/audit",
            logo: <VerifiedUserIcon />,
          },
          {
            name: "Expelee Vetting",
            link: "/expe-vetting",
            logo: <HowToRegIcon />,
          },

          { name: "Contract Design", link: "/design", logo: <ArchitectureIcon /> },
          { name: "Expe NFT", link: "/nft", logo: <TokenIcon /> },
        
         
        ],
        
      },
      {
        // Head: "Product List 2",
        sublink: [
          {
            name: "Expe dApp Creator",
            link: "/expe-creator",
            logo: <AddTaskIcon />,
          },
          {
            name: "Expe Marketing",
            link: "https://metanmore.expelee.com/",
            logo: <SupportAgentIcon />,
          },
          {
            name: "Expe Diligence(KYC)",
            link: "/expe-diligence",
            logo: <EngineeringIcon />,
          },
          {
            name: "Expe Scanner",
            link: "/scanner",
            logo: <QrCodeScannerIcon />,
          },
        ],
      },
    ],

   
  },
  {
    name: "Services",
    submenu: true,
    sublinks: [
      {
        // Head: "Blockchain",
        sublink: [
          {
            name: "Blockchain Development",
            link: "/blockChainDevelopment",
            logo: <CurrencyBitcoinIcon />,
          },
          { name: "Expe Crypto Hunter", link: "/live-chart", logo: <PieChartIcon /> },
          { name: "Expe Scam Hunter", link: "/scam", logo: <NewReleasesIcon /> },
          {
            name: "Expe Blogs ",
            link: "/blogs",
            logo: <AssignmentIcon />,
          },
          {
            name: "Hyperledger Development",
            link: "/hyperledger",
            logo: <EventSeatIcon />,
          },
          { name: "Coin Level", link: "/coinLevel", logo: <LeaderboardIcon /> },
          { name: "Generate Token", link: "/token", logo: <AttractionsIcon /> },
        ],
      },
    ],
  },
  {
    name: "Social Media",
    submenu: true,
    sublinks: [
      {
        // Head: "Social Media",
        sublink: [
          {
            name: "Telegram",
            link: "https://t.me/Expelee",
            logo: <TelegramIcon />,
          },
          {
            name: "Twitter",
            link: "https://twitter.com/expeleeofficial",
            logo: <TwitterIcon />,
          },
          {
            name: "Linkedin",
            link: "https://www.linkedin.com/company/expelee/",
            logo: <LinkedInIcon />,
          },
          {
            name: "Instagram",
            link: "https://www.instagram.com/expeleeofficial/",
            logo: <InstagramIcon />,
          },
          {
            name: "Github",
            link: "https://github.com/expelee-co",
            logo: <GitHubIcon />,
          },
          { name: "Medium", link: "https://medium.com/@expelee", logo: <img src={medium} width="80%"/> },
        ],
      },
    ],
  },
  {
    name: "Company",
    submenu: true,
    sublinks: [
      {
        // Head: "company",
        sublink: [
          { name: "About Us", link: "/about-us", logo: <InfoIcon /> },
          { name: "Team", link: "/team", logo: <Diversity3Icon /> },
          {
            name: "Blogs",
            link: "/blogs",
            logo: <BookIcon />,
          },
          { name: "Partners", link: "/partners", logo: <HandshakeIcon /> },
          { name: "Roadmap", link: "/roadmap", logo: <ForkRightIcon /> },
        ],
      },
    ],
  },
];
