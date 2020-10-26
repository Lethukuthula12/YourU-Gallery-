import React from "react";
import  UseFirestore from "../hooks/useFirestore";
import {motion} from "framer-motion"


const ImageGrid = ({ setSelectedimg }) => {
  const { docs } = UseFirestore("images");
  console.log(docs);

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
           whileHover={{opacity:1}}
            className="img-wrap"
            layout
            key={docs.id}
    
            onClick={() => setSelectedimg(doc.url)}
          >
            <motion.img src={doc.url} alt="upload image"
             transition={{delay:1}}
             />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;