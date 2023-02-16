import React from 'react'
import hedgepay from "../../assets/hedge-pay.png";
import hamiNetwork from "../../assets/hami.png";
import gemped from "../../assets/gempad.png";
import lbank from "../../assets/lbank.png";
import luxpad from "../../assets/luxpad.png";
import newToken from "../../assets/newtokenlogo.png";
import pandasale from "../../assets/pandasale.png";
import phoenix from "../../assets/phoenix.png";
import probit from "../../assets/probit.png";
import presale from "../../assets/presaleworld.png";
import bitcourier from "../../assets/bitcourierNew.png";
import tokenworld from "../../assets/tokenworlds.png";
import eightbit from "../../assets/8bit.png";
import styles from "./tryourServices.module.css";
import AliceCarousel from 'react-alice-carousel';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function PartnerAliceCarousel() {
  
  const handleNavigate = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };
    const item=[{img:hedgepay,link:"https://hedgepay.org/"},{img:hamiNetwork,link:"https://hami.network/"},{img:gemped,link:"https://gempad.app/presales"},{img:lbank,link:"https://www.lbank.info/"},{img:luxpad,link:"https://luxpad.io/"},{img:newToken,link:"https://newtokenmarket.com/"},{img:pandasale,link:"https://pandasale.finance/"},{img:phoenix,link:"https://t.me/phoenixholdings"},{img:probit,link:"https://www.probit.com/en-us/"},{img:presale,link:"https://presale.world/"},{img:bitcourier,link:"https://bitcourier.co.uk/news/expelee-interview"},{img:tokenworld,link:"https://token-world.co/"},{img:eightbit,link:"https://www.8bitearn.com/"}]
  
    const responsive = {
      0: {
        item: 2,
      },
      512: {
        item: 3,
      },
      1024: {
        items: 3
    }
    };
    const items=item.map((el)=>{
return(
<div
style={{cursor:"pointer",marginRight:"2em"}}
onClick={()=>handleNavigate(el.link)}
     >
     <img
       src={el.img}
       alt={el}
      //  height="80"
      //  style={{ marginBottom: 10 }}
     />
 
   </div>
)
    })
    
    return (
    <div style={{width:"85%",margin:"auto",marginTop:"4em"}}>
 <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
      />
    </div>


  )
}

export default PartnerAliceCarousel