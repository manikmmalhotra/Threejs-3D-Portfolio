import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Edges, MeshPortalMaterial, CameraControls, Environment, PivotControls, Detailed } from '@react-three/drei'
import Github from './Github';
import Linkedin from './Linkedin';
import Playstore from './Playstore';
import Twitter from './Twitter';
import Resume from './Resume';
import * as THREE from "three";


const MagicBox = (mousePosition) => {

  const side = useRef()
  
 useFrame(() => { // Assuming you have mouseX and mouseY defined globally
  moveJoint(mousePosition.mousePosition.mousePosition, side.current, 100);
  //moveJoint(mouseCoordinates, nodes.Neck, 65);
});

function moveJoint(mouse, joint, degreeLimit) {
  let degrees = getMouseDegrees(mouse.x, mouse.y, degreeLimit);
  joint.rotation.y = THREE.MathUtils.degToRad(degrees.x);
    joint.rotation.x = THREE.MathUtils.degToRad(degrees.y);
}


function getMouseDegrees(x, y, degreeLimit) {
  let dx = 0,
    dy = 0,
    xdiff,
    xPercentage,
    ydiff,
    yPercentage;

  let w = { x: window.innerWidth, y: window.innerHeight };

  // Left (Rotates neck left between 0 and -degreeLimit)
  // 1. If cursor is in the left half of screen
  if (x <= w.x / 2) {
    // 2. Get the difference between middle of screen and cursor position
    xdiff = w.x / 2 - x;
    // 3. Find the percentage of that difference (percentage toward edge of screen)
    xPercentage = (xdiff / (w.x / 2)) * 100;
    // 4. Convert that to a percentage of the maximum rotation we allow for the neck
    dx = ((degreeLimit * xPercentage) / 100) * -1;
  }

  // Right (Rotates neck right between 0 and degreeLimit)
  if (x >= w.x / 2) {
    xdiff = x - w.x / 2;
    xPercentage = (xdiff / (w.x / 2)) * 100;
    dx = (degreeLimit * xPercentage) / 100;
  }
  // Up (Rotates neck up between 0 and -degreeLimit)
  if (y <= w.y / 2) {
    ydiff = w.y / 2 - y;
    yPercentage = (ydiff / (w.y / 2)) * 100;
    // Note that I cut degreeLimit in half when she looks up
    dy = ((degreeLimit * 1 * yPercentage) / 100) * -1;
  }
  // Down (Rotates neck down between 0 and degreeLimit)
  if (y >= w.y / 2) {
    ydiff = y - w.y / 2;
    yPercentage = (ydiff / (w.y / 2)) * 100;
    dy = (degreeLimit * yPercentage) / 100;
  }
  return { x: dx, y: dy };
}


  function Side({ rotation = [0, 0, 0], bg = '#f0f0f0', children, index }) {
    const mesh = useRef()
    const { nodes } = useGLTF('/aobox-transformed.glb')
    return (
      <MeshPortalMaterial attach={`material-${index}`}>
        {/** Everything in here is inside the portal and isolated from the canvas */}
        <ambientLight intensity={1} />
        <Environment preset="city" />
        {/** A box with baked AO */}
        <mesh  rotation={rotation} geometry={nodes.Cube.geometry}>
          <meshStandardMaterial aoMapIntensity={1} aoMap={nodes.Cube.material.aoMap} color={bg} />
          <spotLight  color={bg} intensity={1} position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-normalBias={0.05} shadow-bias={0.0001} />
          <spotLight  color={bg} intensity={1} position={[-10, -10, -10]} angle={0.15} penumbra={1} shadow-normalBias={0.05} shadow-bias={0.0001} />
        </mesh>
        {/** The shape */}
        <mesh ref={mesh}>
          {children}
          <meshLambertMaterial color={bg} />
        </mesh>
      </MeshPortalMaterial>
    )
  }

  const handleClick=()=> {
    window.location='https://drive.google.com/file/d/1hD3T8NvYfdHyQeg5ebOmnTgpbp7Wu3Bf/view?usp=sharing'
  }
  
    
    return (
     
     <mesh ref={side} onClick={handleClick} >
            <boxGeometry args={[2, 2, 2]} />
            <Edges />
            <Side rotation={[0, 0, 0]} bg="lightblue" index={0}>
            <Github rotation-z={1.6} scale={50} rotation-x={1.6} />
            </Side>
            <Side rotation={[0, Math.PI, 0]} bg="lightpink" index={1}>
            <Linkedin rotation-z={1.6}  rotation-x={1.6} scale={1.8} />
            </Side>
            <Side rotation={[0, Math.PI / 2, Math.PI / 2]} bg="lightgreen" index={2}>
            <Playstore scale={25} />
            </Side>
            <Side rotation={[0, Math.PI / 2, -Math.PI / 2]} bg="aquamarine" index={3}>
            <Twitter scale={2} />
            </Side>
            <Side  rotation={[0, -Math.PI / 2, 0]} bg="lightyellow" index={4}>
            <Resume rotation-x={1.6} scale={1.8} />
            </Side>
            <Side rotation={[0, Math.PI / 2, 0]} bg="black" index={5}>
            </Side>
        </mesh>
        
    );
};

export default MagicBox;