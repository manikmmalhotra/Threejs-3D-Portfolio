
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Twitter(props) {
  const { nodes, materials } = useGLTF("/twitter.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        material={materials["Material.005"]}
        position={[-0.002, 0.001, -0.029]}
        scale={10.36}
      />
    </group>
  );
}

useGLTF.preload("/twitter.glb");
