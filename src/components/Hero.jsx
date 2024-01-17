import { motion } from "framer-motion";
import { styles } from "../styles";
import Me from "./canvas/Me";
import gsap from "gsap";
import SplitTextJS from 'split-text-js';
import { useEffect } from "react";

const Hero = () => {

  
        useEffect(() => {
          const titles = gsap.utils.toArray('#mink')
          const tl = gsap.timeline()
          titles.forEach(title => {
            const splitTitle = new SplitTextJS(title);
            
            tl .from(splitTitle.chars, {
                opacity: 0,
                y: 80,
                rotateX: -90,
                stagger: .02
            }, '<')
            
            tl.to(splitTitle.chars, {
                opacity: 0,
                y: -80,
                rotateX: 90,
                stagger: .02
            }, '<1')

            .repeat(-1);
        });
        }, []);

       



  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[30px] max-w-5xl mx-auto ${styles.paddingX} flex flex-row items-start gap-3`}
      >
        <div className={` mt-20`}>
          <div className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#ff9301] text-[80px]">Manik Malhotra</span>
          </div>
          <div className="container">
        <div className="text-wrapper">
        <p id="mink" className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop
          </p>
            <p  id="mink">frontend</p>
            <p id="mink">backend</p> 
            <p id="mink">react</p> 
            <p id="mink">3d/ui/ux</p>
            <p id="mink">Click Me-{">"}</p>
        </div>
    </div>
        </div>
        <div className="w-full h-full">
          <Me />
         
        </div>

      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
