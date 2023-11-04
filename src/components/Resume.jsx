import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Resume(props) {
  const { nodes, materials } = useGLTF("/resume.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve007.geometry}
        material={materials["SVGMat.011"]}
        position={[-0.003, -0.014, 0.003]}
        scale={3.538}
      />
    </group>
  );
}

useGLTF.preload("/resume.glb");
