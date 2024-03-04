import React, { useRef } from "react";
import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { Mesh } from "three";

export default function Model() {
  const emumbaLogo = useRef<Mesh>(null);
  const { nodes } = useGLTF("/medias/emumba-logo.glb");
  const { viewport } = useThree();

  useFrame(() => {
    if (emumbaLogo.current) {
      emumbaLogo.current.rotation.y += 0.001;
      // emumbaLogo.current.rotation.x += 0.005;
      // emumbaLogo.current.rotation.z += 0.005;
    }
  });

  const materialProps = useControls({
    thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0, min: 0, max: 1, step: 0.1 },
    transmission: { value: 1, min: 0, max: 1, step: 0.1 },
    ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.02, min: 0, max: 1 },
    backside: { value: true },
  });

  return (
    <group scale={viewport.width / 5}>
      <Text
        font={"/fonts/PPNeueMontreal-Bold.otf"}
        position={[0, 0, -1]}
        fontSize={1}
        color="#00A599"
        anchorX="center"
        anchorY="middle"
        scale={viewport.width / 10}
      >
        EMUMBA
      </Text>

      <mesh
        ref={emumbaLogo}
        {...nodes.logo}
        scale={viewport.width / 10000}
        position={[0, 1.25, 0]}
      >
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
}
