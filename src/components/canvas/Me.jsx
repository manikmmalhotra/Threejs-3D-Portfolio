import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import StarsCanvas from "./Stars";
import Model from "../model";


const Me = () => {
  return (
    <Canvas
         camera={{ position: [2, 0, 12.25], fov: 15 }}
      >
         <ambientLight intensity={0.8} />
         <directionalLight intensity={0.5} />
         <Suspense fallback={<CanvasLoader />}>
            <Model scale={1.1} zoom={0} position={[-0, -0.9, 0]} />
         </Suspense>
         <OrbitControls enableZoom={false} />
         
      </Canvas>
  );
};

export default Me;
