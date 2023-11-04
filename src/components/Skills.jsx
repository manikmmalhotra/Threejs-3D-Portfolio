import React, { useEffect, useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import PortalComponent from "./canvas/PortalComponent";


const Skills = () => {

  return (
    <>
    <div >
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Social Box.</h2>
      </motion.div>
      <div className="edge-text-container">
        <a href="https://twitter.com/ManikMmalhotra">
      <div className="text-white text-[18px] font-bold top-text">Twitter</div></a>
      <a href="https://play.google.com/store/apps/developer?id=Manik+Malhotra">
      <div className="text-white text-[18px] font-bold bottom-text">Play Store</div></a>
      <div style={{ width: "40vw", height: "60vh",alignItems:"center",justifyContent:"center",display:"flex" }}>
          <PortalComponent />
      </div>
      <a href="https://github.com/manikmmalhotra">
      <div className="text-white text-[18px] font-bold left-text">Github</div></a>
      <a href="https://www.linkedin.com/in/minks23/">
      <div className="text-white text-[18px] font-bold right-text">Linkedin</div></a>
    </div>
    </div>
    </>
  );
};

export default Skills;
