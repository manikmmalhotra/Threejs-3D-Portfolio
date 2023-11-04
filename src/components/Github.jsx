
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Github(props) {
  const { nodes, materials } = useGLTF("/github1.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        material={materials["SVGMat.005"]}
      />
    </group>
  );
}

useGLTF.preload("/github1.glb");