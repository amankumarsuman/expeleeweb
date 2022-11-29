import React, { useState } from "react";
import Listing from "./Listing";
import Overlay from "./Overlay";
import Modal from "./Modal";
import { AnimatePresence } from "framer-motion";

const Card = ({ image, heading, title }) => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <Listing image={image} heading={heading} title={title} open={openModal} />
      <AnimatePresence>
        {open && (
          <Overlay close={closeModal}>
            <Modal
              image={image}
              heading={heading}
              title={title}
              close={closeModal}
            />
          </Overlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default Card;
