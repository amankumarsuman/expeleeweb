import React from "react";
import Feature from "./Feature";
import "./Listing.css";
import { motion } from "framer-motion";

const Listing = ({ image, title, heading, open }) => {
  return (
    <motion.div className="listing" onClick={open} whileHover={{ scale: 1.1 }}>
      <div className="listing__content">
        <div className="listing__image-container">
          <img
            className="listing__image"
            alt="real estate mansion"
            src={image}
          />
        </div>
        <div className="listing__details">
          {/* <div className="listing__type">For Sale</div> */}
          <div className="listing__row">
            <span className="listing__price">{heading}</span>
          </div>
          <div className="listing__row">
            <span className="listing__address">{title}</span>
          </div>
          <div className="listing__row">
            {/* <Feature iconName={"FaBed"} iconLabel={title} />
            <Feature iconName={"FaShower"} iconLabel={title} />
            <Feature iconName={"FaRuler"} iconLabel={title} /> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Listing;
