import { motion } from "framer-motion";

import { styles } from "../styles";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import Model from './Model'; /* highlight-line */
import { Suspense } from "react";
import  CanvasLoader  from "./Loader";
import { EarthCanvas } from "./canvas";
import Me from "./canvas/Me";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className={` mt-20`}>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Manik Malhotra</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className="sm:block hidden" />
            interfaces and web applications
          </p>
        </div>


        {/* <Canvas
         camera={{ position: [0, 0, 0], fov: 15 }}>
         <ambientLight intensity={1.25} />
         <ambientLight intensity={0.1} />
         <directionalLight intensity={0.4} />
         <Suspense fallback={<CanvasLoader />}>
           <OrbitControls
            enableZoom={true}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
            <Model scale={0.225} position={[0, 0,0]} />
         </Suspense>
      </Canvas> */}

      {/* <Canvas
         camera={{ position: [2, 0, 12.25], fov: 15 }}
      >
         <ambientLight intensity={1.25} />
         <ambientLight intensity={0.1} />
         <directionalLight intensity={0.4} />
         <Suspense fallback={null}>
            <Model scale={1.2} position={[0.025, -0.6, 0]} />
         </Suspense>
         <OrbitControls />
      </Canvas> */}
     
      {/* <EarthCanvas /> */}
 <Me />
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
