import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import Model from "../Model";


const Me = () => {
  return (
    <Canvas
         camera={{ position: [2, 0, 12.25], fov: 15 }}
      >
         <ambientLight intensity={0.5} />
         <directionalLight intensity={0.2} />
         <Suspense fallback={<CanvasLoader />}>
            <Model scale={1.2} position={[0.025, -0.6, 0]} />
         </Suspense>
         <OrbitControls />
         
      </Canvas>
  );
};

export default Me;
