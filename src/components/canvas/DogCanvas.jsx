import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import Dog from "../Dog";
import MagicBox from "../MagicBox";


const DogCanvas = () => {
  return (
    <Canvas
    shadows
    frameloop='demand'
    dpr={[1, 2]}
    gl={{ preserveDrawingBuffer: true }} camera={{ near: 0.1,
        far: 200, position: [2, 0, 12.25], fov: 18 }}
      >
         <ambientLight intensity={0.8} />
         <directionalLight intensity={0.5} />
         <Suspense fallback={<CanvasLoader />}>
            <Dog scale={0.4} zoom={0} position={[-0, -0.5, 0]} />
         </Suspense>
         <OrbitControls  autoRotate enableZoom={false} />
         
      </Canvas>
  );
};

export default DogCanvas;
