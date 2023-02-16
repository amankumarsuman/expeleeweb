import {
  Avatar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./MyLink";
import styles from "./navbar.module.css";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import { styled } from "@mui/material/styles";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { useEffect } from "react";
const NavLinks = ({ setOpen,shows,setShows }) => {
  const CustomizedListText = styled(ListItemText)`
  color: black;
  fontSize:"2em"
font-weight:bold;
  :hover {
    color: rgb(173, 181, 189);
  }
   & .MuiListItemText-secondary {
                color: rgb(173, 181, 189);
                
              },
`;
  const CustomizedListTextMobile = styled(ListItemText)`
  color: white;
  fontSize:"2em"
font-weight:bold;
  :hover {
    color: rgb(173, 181, 189);
  }
   & .MuiListItemText-secondary {
                color: rgb(173, 181, 189);
                
              },
`;
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const handleNavigate = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

 const [show,setShow]=useState(true)
//  useEffect(()=>{
// setShow(true)
//  },[Link])

const handleClick=()=>{
  setShows(false)
  setOpen(false)
}
  return (
    <>
      {links.map((link) => (
        <div>
          <div  onMouseEnter={() => setShow(true)} className="px-3 text-left md:cursor-pointer group">
            <h1
              // className={styles.textGradient}
              style={{fontSize:"1em"}}
              className="py-7  flex justify-between items-center md:pr-0 pr-5 group"
              onMouseEnter={() => setShow(true)}
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="text-xl md:hidden inline">
                <ion-icon
                  name={`${
                    heading === link.name ? "chevron-up" : "chevron-down"
                  }`}
                ></ion-icon>
              </span>
              <span  onMouseEnter={() => setShow(true)} className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>
            {link.submenu && (
              <div >
                {show?<div 
                 
                  // onMouseLeave={() => setIsShown(false)}
                className="absolute top-20 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-3 absolute 
                    mt-1  bg-white rotate-45"
                    ></div>
                  </div>
                 {link.name ==="Products"? <div
                  style={{width:"35rem"}}
                 
    //                 className="text-white bg-white w-80
    // p-5 grid grid-cols-3 gap-10"
    //               >
                    className="text-white bg-white 
    p-5 grid grid-cols-3 gap-10"
                  >
                    {link.sublinks.map((mysublinks) => (
                      <div className="w-80" style={{ fontSize: "10px", }}>
                        <h1  className=" white font-semibold">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink) => (
                          // <li style={{fontSize:"25px"}} className="text-sm  mt-12 white w-full text-center text-gray-600 my-2.5">
                          //   <Link
                          //     to={slink.link}
                          //     className=" text-black w-full hover:text-primary"
                          //   >
                          //     {slink.name}
                          //   </Link>
                          // </li>
                          <List>
                            <ListItem disablePadding>
                              {slink.link === "https://metanmore.expelee.com/" ? (
                                <ListItemButton
                                
                                  onClick={() => handleNavigate(slink.link)}
                                >
                                  <ListItemIcon>
                                    {/* <VerifiedUserIcon /> */}
                                    {slink.logo}
                                  </ListItemIcon>
                                  {/* <Link to={slink.link}> */}
                                  <CustomizedListText primary={slink.name} />
                                  {/* </Link> */}
                                </ListItemButton>
                              ) : slink.link === "https://t.me/Ritz_Expelee" ? (
                                <ListItemButton
                                  onClick={() =>
                                    handleNavigate("https://t.me/Ritz_Expelee")
                                  }
                                >
                                  <ListItemIcon>
                                    {/* <VerifiedUserIcon /> */}
                                    {slink.logo}
                                  </ListItemIcon>
                                  {/* <Link to={slink.link}> */}
                                    <CustomizedListText primary={slink.name} />
                                  {/* </Link> */}
                                </ListItemButton>
                              ) : slink.link ===
                                "https://twitter.com/expeleeofficial" ? (
                                <ListItemButton
                                  onClick={() =>
                                    handleNavigate(
                                      "https://twitter.com/expeleeofficial"
                                    )
                                  }
                                >
                                  <ListItemIcon>
                                    {/* <VerifiedUserIcon /> */}
                                    {slink.logo}
                                  </ListItemIcon>
                                  {/* <Link to={slink.link}> */}
                                    <CustomizedListText primary={slink.name} />
                                  {/* </Link> */}
                                </ListItemButton>
                              ) : slink.link ===
                                "https://www.linkedin.com/company/expelee/" ? (
                                <ListItemButton
                                  onClick={() =>
                                    handleNavigate(
                                      "https://www.linkedin.com/company/expelee/"
                                    )
                                  }
                                >
                                  <ListItemIcon>
                                    {/* <VerifiedUserIcon /> */}
                                    {slink.logo}
                                  </ListItemIcon>
                                  {/* <Link to={slink.link}> */}
                                    <CustomizedListText primary={slink.name} />
                                  {/* </Link> */}
                                </ListItemButton>
                              ) : slink.link ===
                                "https://www.instagram.com/expeleeofficial/" ? (
                                <ListItemButton
                                  onClick={() =>
                                    handleNavigate(
                                      "https://www.instagram.com/expeleeofficial/"
                                    )
                                  }
                                >
                                  <ListItemIcon>
                                    {/* <VerifiedUserIcon /> */}
                                    {slink.logo}
                                  </ListItemIcon>
                                  {/* <Link to={slink.link}> */}
                                    <CustomizedListText primary={slink.name} />
                                  {/* </Link> */}
                                </ListItemButton>
                              ) : slink.link ===
                                "https://github.com/expelee-co" ? (
                                <ListItemButton
                                  onClick={() =>
                                    handleNavigate(
                                      "https://github.com/expelee-co"
                                    )
                                  }
                                >
                                  <ListItemIcon>
                                    {/* <VerifiedUserIcon /> */}
                                    {slink.logo}
                                  </ListItemIcon>
                                  {/* <Link to={slink.link}> */}
                                    <CustomizedListText primary={slink.name} />
                                  {/* </Link> */}
                                </ListItemButton>
                              ) : 
                              slink.link ===
                                "https://medium.com/@expelee" ? (
                                <ListItemButton
                                  onClick={() =>
                                    handleNavigate(
                                      "https://medium.com/@expelee"
                                    )
                                  }
                                >
                                  <ListItemIcon 
                                  sx={{background:"transparent"}}
                                  
                                  >
                                   
                                    <Avatar
                                  sx={{background:"grey",marginLeft:-1,color:"grey"}}
                                    
                                    >

                                    {slink.logo}
                                    </Avatar>
                                  </ListItemIcon>
                                  {/* <Link to={slink.link}> */}
                                    <CustomizedListText primary={slink.name} />
                                  {/* </Link> */}
                                </ListItemButton>
                              ): slink.link==="https://discord.gg/pApdJyrjMg"?  <ListItemButton
                              onClick={() =>
                                handleNavigate(
                                  "https://discord.gg/pApdJyrjMg"
                                )
                              }
                              >
                              <ListItemIcon
                                  sx={{color:"white"}}
                              
                              >
                                {/* <VerifiedUserIcon /> */}
                                {slink.logo}
                              </ListItemIcon>
                              {/* <Link to={slink.link}> */}
                                <CustomizedListTextMobile primary={slink.name} />
                              {/* </Link> */}
                              </ListItemButton> : (
                                <ListItemButton>
                                  <ListItemIcon>
                                    {/* <VerifiedUserIcon /> */}
                                    {slink.logo}
                                  </ListItemIcon>
                                  <Link onClick={()=>setShow(false)} to={slink.link}>
                                    <CustomizedListText primary={slink.name} />
                                  </Link>
                                </ListItemButton>
                              )}
                            </ListItem>
                          </List>
                        ))}
                      </div>
                    ))}
                  </div>: <div
                  // style={{width:"35rem"}}
                 onClick={()=>setShow(false)}
                    className="text-white bg-white w-80
    p-5 grid grid-cols-3 gap-10"
                  >
                    {/* className="text-white bg-white 
    p-5 grid grid-cols-3 gap-10"
                  > */}
                    {link.sublinks.map((mysublinks) => (
                      <div className="w-80" style={{ fontSize: "10px", }}>
                        <h1  className=" white font-semibold">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink) => (
                          // <li style={{fontSize:"25px"}} className="text-sm  mt-12 white w-full text-center text-gray-600 my-2.5">
                          //   <Link
                          //     to={slink.link}
                          //     className=" text-black w-full hover:text-primary"
                          //   >
                          //     {slink.name}
                          //   </Link>
                          // </li>
                          <List>
                            <ListItem disablePadding>
                              {slink.link === "https://metanmore.expelee.com/" ? (
                                <ListItemButton
                                
                                  onClick={() => handleNavigate(slink.link)}
                                >
                                  <ListItemIcon>
                                    {/* <VerifiedUserIcon /> */}
                                    {slink.logo}
                                  </ListItemIcon>
                                  {/* <Link to={slink.link}> */}
                                  <CustomizedListText primary={slink.name} />
                                  {/* </Link> */}
                                </ListItemButton>
                              ) : slink.link === "https://t.me/Expelee" ? (
                                <ListItemButton
                                  onClick={() =>
                                    handleNavigate("https://t.me/Expelee")
                                  }
                                >
                                  <ListItemIcon>
                                    {/* <VerifiedUserIcon /> */}
                                    {slink.logo}
                                  </ListItemIcon>
                                  {/* <Link to={slink.link}> */}
                                    <CustomizedListText primary={slink.name} />
                                  {/* </Link> */}
                                </ListItemButton>
                              ) : slink.link ===
                                "https://twitter.com/expeleeofficial" ? (
                                <ListItemButton
                                  onClick={() =>
                                    handleNavigate(
                                      "https://twitter.com/expeleeofficial"
                                    )
                                  }
                                >
                                  <ListItemIcon>
                                    {/* <VerifiedUserIcon /> */}
                                    {slink.logo}
                                  </ListItemIcon>
                                  {/* <Link to={slink.link}> */}
                                    <CustomizedListText primary={slink.name} />
                                  {/* </Link> */}
                                </ListItemButton>
                              ) : slink.link ===
                                "https://www.linkedin.com/company/expelee/" ? (
                                <ListItemButton
                                  onClick={() =>
                                    handleNavigate(
                                      "https://www.linkedin.com/company/expelee/"
                                    )
                                  }
                                >
                                  <ListItemIcon>
                                    {/* <VerifiedUserIcon /> */}
                                    {slink.logo}
                                  </ListItemIcon>
                                  {/* <Link to={slink.link}> */}
                                    <CustomizedListText primary={slink.name} />
                                  {/* </Link> */}
                                </ListItemButton>
                              ) : slink.link ===
                                "https://www.instagram.com/expeleeofficial/" ? (
                                <ListItemButton
                                  onClick={() =>
                                    handleNavigate(
                                      "https://www.instagram.com/expeleeofficial/"
                                    )
                                  }
                                >
                                  <ListItemIcon>
                                    {/* <VerifiedUserIcon /> */}
                                    {slink.logo}
                                  </ListItemIcon>
                                  {/* <Link to={slink.link}> */}
                                    <CustomizedListText primary={slink.name} />
                                  {/* </Link> */}
                                </ListItemButton>
                              ) : slink.link ===
                                "https://github.com/expelee-co" ? (
                                <ListItemButton
                                  onClick={() =>
                                    handleNavigate(
                                      "https://github.com/expelee-co"
                                    )
                                  }
                                >
                                  <ListItemIcon>
                                    {/* <VerifiedUserIcon /> */}
                                    {slink.logo}
                                  </ListItemIcon>
                                  {/* <Link to={slink.link}> */}
                                    <CustomizedListText primary={slink.name} />
                                  {/* </Link> */}
                                </ListItemButton>
                              ) : slink.link ===
                                "https://medium.com/@expelee" ? (
                                <ListItemButton
                                  onClick={() =>
                                    handleNavigate(
                                      "https://medium.com/@expelee"
                                    )
                                  }
                               
                                >
                                  <ListItemIcon
                                  sx={{background:"transparent",color:"grey",}}
                                  
                                  >
                                    <Avatar
                                  sx={{background:"grey",marginLeft:-1,color:"grey",}}
                                    
                                    >

                                    {slink.logo}
                                    </Avatar>
                                    {/* <VerifiedUserIcon /> */}
                                  </ListItemIcon>
                                  {/* <Link to={slink.link}> */}
                                    <CustomizedListText primary={slink.name} />
                                  {/* </Link> */}
                                </ListItemButton>
                              ) : slink.link==="https://discord.gg/pApdJyrjMg"?  <ListItemButton
                              onClick={() =>
                                handleNavigate(
                                  "https://discord.gg/pApdJyrjMg"
                                )
                              }
                              >
                              <ListItemIcon
                              sx={{background:"transparent",color:"grey",}}

                              
                              >
                                {/* <VerifiedUserIcon /> */}
                                {slink.logo}
                              </ListItemIcon>
                              {/* <Link to={slink.link}> */}
                                <CustomizedListText primary={slink.name} />
                              {/* </Link> */}
                              </ListItemButton>:(
                                <ListItemButton>
                                  <ListItemIcon>
                                    {/* <VerifiedUserIcon /> */}
                                    {slink.logo}
                                  </ListItemIcon>
                                  <Link to={slink.link}>
                                    <CustomizedListText primary={slink.name} />
                                  </Link>
                                </ListItemButton>
                              )}
                            </ListItem>
                          </List>
                        ))}
                      </div>
                    ))}
                  </div>}
                </div>:null}
                
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
          
           
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div>
                <div>
                  <h1
                  
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    // className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center md:pr-0 pr-5"
                  >
                    {/* {slinks.Head} */}

                    {/* <span className=" md:mt-1 md:ml-2 inline">
                      <ion-icon
                        name={`${
                          subHeading === slinks.Head
                            ? "chevron-up"
                            : "chevron-down"
                        }`}
                      ></ion-icon>
                    </span> */}
                  </h1>
                   <div
                 
                    // className={`${
                    //   subHeading === slinks.Head ? "md:hidden" : "hidden"
                    // }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <List>
                        
                        <ListItem disablePadding>
                          {
                          slink.link ===
                                "https://medium.com/@expelee" ? 
                                <ListItemButton
                                  onClick={() =>
                                    handleNavigate(
                                      "https://medium.com/@expelee"
                                    )
                                  }
                               
                                >
                                  <ListItemIcon
                                  sx={{background:"transparent",color:"grey",}}
                                  
                                  >
                                    <Avatar
                                  sx={{background:"grey",marginLeft:-1,color:"grey"}}
                                    
                                    >

                                    {slink.logo}
                                    </Avatar>
                                    {/* <VerifiedUserIcon /> */}
                                  </ListItemIcon>
                                  {/* <Link to={slink.link} > */}
                                    <CustomizedListTextMobile primary={slink.name} />
                                  {/* </Link> */}
                                </ListItemButton>
                               :slink.link==="https://github.com/expelee-co"?  <ListItemButton
                              onClick={() =>
                                handleNavigate(
                                  "https://github.com/expelee-co"
                                )
                              }
                            >
                              <ListItemIcon
                                  sx={{color:"white"}}
                              
                              >
                                {/* <VerifiedUserIcon /> */}
                                {slink.logo}
                              </ListItemIcon>
                              {/* <Link to={slink.link}> */}
                                <CustomizedListTextMobile primary={slink.name} />
                              {/* </Link> */}
                            </ListItemButton>:slink.link==="https://t.me/Expelee"?  <ListItemButton
                              onClick={() =>
                                handleNavigate(
                                  "https://t.me/Expelee"
                                )
                              }
                            >
                              <ListItemIcon
                                  sx={{color:"white"}}
                              
                              >
                                {/* <VerifiedUserIcon /> */}
                                {slink.logo}
                              </ListItemIcon>
                              {/* <Link to={slink.link}> */}
                                <CustomizedListTextMobile primary={slink.name} />
                              {/* </Link> */}
                            </ListItemButton>:
                            slink.link==="https://www.instagram.com/expeleeofficial/"?  <ListItemButton
                            onClick={() =>
                              handleNavigate(
                                "https://www.instagram.com/expeleeofficial/"
                              )
                            }
                          >
                            <ListItemIcon
                                sx={{color:"white"}}
                            
                            >
                              {/* <VerifiedUserIcon /> */}
                              {slink.logo}
                            </ListItemIcon>
                            {/* <Link to={slink.link}> */}
                              <CustomizedListTextMobile primary={slink.name} />
                            {/* </Link> */}
                          </ListItemButton>:
                          slink.link==="https://www.linkedin.com/company/expelee/"?  <ListItemButton
                          onClick={() =>
                            handleNavigate(
                              "https://www.linkedin.com/company/expelee/"
                            )
                          }
                        >
                          <ListItemIcon
                              sx={{color:"white"}}
                          
                          >
                            {/* <VerifiedUserIcon /> */}
                            {slink.logo}
                          </ListItemIcon>
                          {/* <Link to={slink.link}> */}
                            <CustomizedListTextMobile primary={slink.name} />
                          {/* </Link> */}
                        </ListItemButton>:
                        slink.link==="https://twitter.com/expeleeofficial"?  <ListItemButton
                        onClick={() =>
                          handleNavigate(
                            "https://twitter.com/expeleeofficial"
                          )
                        }
                      >
                        <ListItemIcon
                            sx={{color:"white"}}
                        
                        >
                          {/* <VerifiedUserIcon /> */}
                          {slink.logo}
                        </ListItemIcon>
                        {/* <Link to={slink.link}> */}
                          <CustomizedListTextMobile primary={slink.name} />
                        {/* </Link> */}
                      </ListItemButton>:
                      slink.link==="https://metanmore.expelee.com/"?  <ListItemButton
                      onClick={() =>
                        handleNavigate(
                          "https://metanmore.expelee.com/"
                        )
                      }
                    >
                      <ListItemIcon
                          sx={{color:"white"}}
                      
                      >
                        {/* <VerifiedUserIcon /> */}
                        {slink.logo}
                      </ListItemIcon>
                      {/* <Link to={slink.link}> */}
                        <CustomizedListTextMobile primary={slink.name} />
                      {/* </Link> */}
                    </ListItemButton>:

slink.link==="https://discord.gg/pApdJyrjMg"?  <ListItemButton
onClick={() =>
  handleNavigate(
    "https://discord.gg/pApdJyrjMg"
  )
}
>
<ListItemIcon
    sx={{color:"white"}}

>
  {/* <VerifiedUserIcon /> */}
  {slink.logo}
</ListItemIcon>
{/* <Link to={slink.link}> */}
  <CustomizedListTextMobile primary={slink.name} />
{/* </Link> */}
</ListItemButton>:
                              <ListItemButton  
                          
                              // onClick={() => {
                              //   setOpen(false)
                              //   setshows(false)
                              //   }}
                              onClick={handleClick}
                                
                                >
                                <ListItemIcon sx={{ color: "white" }}>
                                  {slink.logo}
                                </ListItemIcon>
                                <Link to={slink.link}>
                                  <CustomizedListTextMobile primary={slink.name} />
                                </Link>
                              </ListItemButton>
                              }
                        
                        </ListItem>
                      </List>
                      // <li className="py-3 pl-14">
                      //   <Link to={slink.link}>{slink.name}</Link>
                      // </li>
                    ))}
                  </div>
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
