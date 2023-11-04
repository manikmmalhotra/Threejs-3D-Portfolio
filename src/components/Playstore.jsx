import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Playstore(props) {
  const { nodes, materials } = useGLTF("/playstore.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[0.022, -0.001, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve014.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve014_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve014_2.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve014_3.geometry}
          material={materials["Material.002"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/playstore.glb");
