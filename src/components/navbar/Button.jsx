import React from "react";


const Button = () => {
  const handleNavigate = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };
  return (

    
    <button
   
    onClick={() => handleNavigate("https://t.me/Expelee")}
      style={{ marginTop: "-5px", fontWeight: "bold",   }}
      className="bg-primary text-white  px-6 p-4 mr-5  "
    >
      Request Services
    </button>

  );
};

export default Button;
