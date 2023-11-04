import { CameraControls, OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import MagicBox from '../MagicBox'
import { CanvasLoader } from '..'

import * as THREE from "three";

const PortalComponent = () => {
//   const sides = useRef();
   



// useFrame(() => { // Assuming you have mouseX and mouseY defined globally
 
//   //moveJoint(mouseCoordinates, sides.current.object, 100);
    
// });

// function moveJoint(mouse, joint, degreeLimit) {
//   let degrees = getMouseDegrees(mouse.x, mouse.y, degreeLimit);
//   joint.rotation.y = THREE.MathUtils.degToRad(degrees.x);
//     joint.rotation.x = THREE.MathUtils.degToRad(degrees.y);
// }


// function getMouseDegrees(x, y, degreeLimit) {
//   let dx = 0,
//     dy = 0,
//     xdiff,
//     xPercentage,
//     ydiff,
//     yPercentage;

//   let w = { x: window.innerWidth, y: window.innerHeight };

//   // Left (Rotates neck left between 0 and -degreeLimit)
//   // 1. If cursor is in the left half of screen
//   if (x <= w.x / 2) {
//     // 2. Get the difference between middle of screen and cursor position
//     xdiff = w.x / 2 - x;
//     // 3. Find the percentage of that difference (percentage toward edge of screen)
//     xPercentage = (xdiff / (w.x / 2)) * 100;
//     // 4. Convert that to a percentage of the maximum rotation we allow for the neck
//     dx = ((degreeLimit * xPercentage) / 100) * -1;
//   }

//   // Right (Rotates neck right between 0 and degreeLimit)
//   if (x >= w.x / 2) {
//     xdiff = x - w.x / 2;
//     xPercentage = (xdiff / (w.x / 2)) * 100;
//     dx = (degreeLimit * xPercentage) / 100;
//   }
//   // Up (Rotates neck up between 0 and -degreeLimit)
//   if (y <= w.y / 2) {
//     ydiff = w.y / 2 - y;
//     yPercentage = (ydiff / (w.y / 2)) * 100;
//     // Note that I cut degreeLimit in half when she looks up
//     dy = ((degreeLimit * 1 * yPercentage) / 100) * -1;
//   }
//   // Down (Rotates neck down between 0 and degreeLimit)
//   if (y >= w.y / 2) {
//     ydiff = y - w.y / 2;
//     yPercentage = (ydiff / (w.y / 2)) * 100;
//     dy = (degreeLimit * yPercentage) / 100;
//   }
//   return { x: dx, y: dy };
// }

  return (
    <>
        <Canvas  camera={{ position: [0, 0.5, 4],fov: 45,
        near: 0.1,
        far: 200, }}>
           <Suspense fallback={<CanvasLoader />}>
            <MagicBox  scale={1} />
            </Suspense>
            <OrbitControls enableZoom={false} />
        </Canvas>
        </>
  )
}

export default PortalComponent