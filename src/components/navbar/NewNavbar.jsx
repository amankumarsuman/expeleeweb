import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/ExpeleeLogoLight.png";
import { ScrollToChangeNavbarColor } from "../coreComponents/themeStyle";
import Button from "./Button";
import NavLinks from "./NavLinks";
import HomeIcon from '@mui/icons-material/Home';
const NewNavbar = ({shows,setShows}) => {
  const [open, setOpen] = useState(false);
//  const [shows,setShows]=useState(true)
console.log(shows,"shows")
  return (
    <ScrollToChangeNavbarColor>
      <nav className="bg-black text-white w-full sticky top-0 z-50 flex justify-between ">
        <div className="flex items-center   w-full font-small justify-between">
          <div className="z-50    md:w-3/12 w-full flex justify-between">
            <div
              className="text-3xl md:hidden mr-20"
             
              onClick={() => {
                setOpen(!open)
              setShows(true)
              }}
            >
              <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
            </div>
            <div className="md:hidden sm:block">

            {/* <Link to="/" >
                Home
              </Link> */}
            </div>
            <Link
              style={{
                marginLeft: "3em",
              }}
              to="/"
            >
           
              <img
                src={Logo}
                width="45%"
                alt="logo"
                className="md:cursor-pointer sm:cursor-pointer"
              />
            </Link>
           
          </div>
          <ul className="md:flex hidden   items-center gap-5 mr-10 font-[Poppins]">
            <li>
              <Link to="/" className="py-7 px-3 inline-block text-white ">
                Home
              </Link>
            </li>

            <NavLinks setOpen={open} />
          </ul>
          <div className="md:block hidden">
          <Button />
        </div>
      
          {/* Mobile nav */}
          {/* <Button variant="contained">Request Service</Button> */}
          <ul
         
            className={`
        md:hidden bg-gradient-to-r from-black-500 to-grey-500 text-white fixed w-full top-0 overflow-y-auto bottom-0 py-12 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
          >
            {/* <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li> */}
          {shows?<div
              style={{
                width: "70%",
                // background:
                //   "linear-gradient(to right bottom,#1e1e1e,black,#2E2A34, black,#1e1e1e)",
                background:"#17121F"
               
              }}
              className="sticky top-0 z-50"
            >
              <div style={{paddingLeft:"15px",paddingTop:"15px"}}>
              <Link onClick={()=>setOpen(false)} style={{padding:"2em !important",width:"100%"}} to="/">
<div style={{width:"50px"}}></div>
                Home
              </Link>
              </div>

     
             <NavLinks shows={shows} setShows={setShows} setOpen={setOpen} />
            </div>:null}
            
          </ul>
        </div>
      </nav>
    </ScrollToChangeNavbarColor>
  );
};

export default NewNavbar;
