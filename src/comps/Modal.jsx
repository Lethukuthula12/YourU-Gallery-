import React from "react";
import { motion } from "framer-motion";


const Modal = ({ selectedImg, setSelectedimg }) => {
  const handleClick=(e)=>{
if(e.target.classList.contains("backdrop")){
setSelectedimg(null);
}

  }
  return (
    <motion.div className="backdrop" onClick={handleClick}
    initial={{opacity:0}}
    animate={{opacity:1}}
    >
      <motion.img src={selectedImg} alt="picture" 
      initial={{y:"-100vh"}}
      animate={{y:0}}
      />
    </motion.div>
  );
};

export default Modal;