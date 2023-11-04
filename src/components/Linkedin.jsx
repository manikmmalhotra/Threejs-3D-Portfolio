import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Linkedin(props) {
  const { nodes, materials } = useGLTF("/linkedin.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        material={materials["SVGMat.007"]}
        position={[0.025, 0, -0.007]}
        scale={13.561}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve001.geometry}
        material={materials["SVGMat.006"]}
        position={[-0.006, -0.03, 0.007]}
        scale={13.561}
      />
    </group>
  );
}

useGLTF.preload("/linkedin.glb");