import React, { useState,useRef,useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from '@react-three/fiber'

export default function Manik(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/mani.glb");
  const { actions } = useAnimations(animations, group);
   const [randomText, setRandomText] = useState("waving");
 

    const [mouseCoordinates, setMouseCoordinates] = useState({x:0, y:0});
    const texts = ["waving", "twerk",  "hiphop2", "hiphop", "dodging right","jabs"];
   

    const pickRandomText = () => {
      actions[randomText].stop();
      const randomIndex = Math.floor(Math.random() * texts.length);
      const selectedText = texts[randomIndex];
      setRandomText(selectedText);
      console.log("click",randomText);
    };

	 useEffect(() => {
      actions[randomText].play();
   },);


   const mouseMoveHandler = (event) => {
     setMouseCoordinates({
         x:event.clientX,
         y:event.clientY
     });
   }
     
   useEffect(()=>{
     window.addEventListener('mousemove', mouseMoveHandler);
     return(()=>{
         window.removeEventListener('mousemove', mouseMoveHandler);
     })
   }, [])


  useFrame(() => { // Assuming you have mouseX and mouseY defined globally
   
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
      dy = ((degreeLimit * 0.5 * yPercentage) / 100) * -1;
    }
    // Down (Rotates neck down between 0 and degreeLimit)
    if (y >= w.y / 2) {
      ydiff = y - w.y / 2;
      yPercentage = (ydiff / (w.y / 2)) * 100;
      dy = (degreeLimit * yPercentage) / 100;
    }
    return { x: dx, y: dy };
  }

  return (
    <group ref={group} {...props} dispose={null} onClick={()=>{pickRandomText()}} >
      <group name="Scene">
        <group name="Armature001">
          <group name="EyeLeft001" />
          <skinnedMesh
            name="EyeLeft009"
            geometry={nodes.EyeLeft009.geometry}
            material={materials["Wolf3D_Eye.009"]}
            skeleton={nodes.EyeLeft009.skeleton}
            morphTargetDictionary={nodes.EyeLeft009.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeLeft009.morphTargetInfluences}
          />
          <group name="EyeRight001" />
          <skinnedMesh
            name="EyeRight009"
            geometry={nodes.EyeRight009.geometry}
            material={materials["Wolf3D_Eye.009"]}
            skeleton={nodes.EyeRight009.skeleton}
            morphTargetDictionary={nodes.EyeRight009.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeRight009.morphTargetInfluences}
          />
          <group name="Wolf3D_Body001" />
          <skinnedMesh
            name="Wolf3D_Body009"
            geometry={nodes.Wolf3D_Body009.geometry}
            material={materials["Wolf3D_Body.009"]}
            skeleton={nodes.Wolf3D_Body009.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Body009.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Body009.morphTargetInfluences}
          />
          <group name="Wolf3D_Hair001" />
          <skinnedMesh
            name="Wolf3D_Hair009"
            geometry={nodes.Wolf3D_Hair009.geometry}
            material={materials["Wolf3D_Hair.009"]}
            skeleton={nodes.Wolf3D_Hair009.skeleton}
          />
          <group name="Wolf3D_Head001" />
          <skinnedMesh
            name="Wolf3D_Head009"
            geometry={nodes.Wolf3D_Head009.geometry}
            material={materials["Wolf3D_Skin.009"]}
            skeleton={nodes.Wolf3D_Head009.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Head009.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Head009.morphTargetInfluences}
          />
          <group name="Wolf3D_Outfit_Bottom001" />
          <skinnedMesh
            name="Wolf3D_Outfit_Bottom009"
            geometry={nodes.Wolf3D_Outfit_Bottom009.geometry}
            material={materials["Wolf3D_Outfit_Bottom.009"]}
            skeleton={nodes.Wolf3D_Outfit_Bottom009.skeleton}
            morphTargetDictionary={
              nodes.Wolf3D_Outfit_Bottom009.morphTargetDictionary
            }
            morphTargetInfluences={
              nodes.Wolf3D_Outfit_Bottom009.morphTargetInfluences
            }
          />
          <group name="Wolf3D_Outfit_Footwear001" />
          <skinnedMesh
            name="Wolf3D_Outfit_Footwear009"
            geometry={nodes.Wolf3D_Outfit_Footwear009.geometry}
            material={materials["Wolf3D_Outfit_Footwear.009"]}
            skeleton={nodes.Wolf3D_Outfit_Footwear009.skeleton}
            morphTargetDictionary={
              nodes.Wolf3D_Outfit_Footwear009.morphTargetDictionary
            }
            morphTargetInfluences={
              nodes.Wolf3D_Outfit_Footwear009.morphTargetInfluences
            }
          />
          <group name="Wolf3D_Outfit_Top001" />
          <skinnedMesh
            name="Wolf3D_Outfit_Top009"
            geometry={nodes.Wolf3D_Outfit_Top009.geometry}
            material={materials["Wolf3D_Outfit_Top.009"]}
            skeleton={nodes.Wolf3D_Outfit_Top009.skeleton}
            morphTargetDictionary={
              nodes.Wolf3D_Outfit_Top009.morphTargetDictionary
            }
            morphTargetInfluences={
              nodes.Wolf3D_Outfit_Top009.morphTargetInfluences
            }
          />
          <group name="Wolf3D_Teeth001" />
          <skinnedMesh
            name="Wolf3D_Teeth009"
            geometry={nodes.Wolf3D_Teeth009.geometry}
            material={materials["Wolf3D_Teeth.009"]}
            skeleton={nodes.Wolf3D_Teeth009.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Teeth009.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Teeth009.morphTargetInfluences}
          />
          <primitive object={nodes.Hips} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/mani.glb");
