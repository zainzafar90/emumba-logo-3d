"use client";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Environment } from "@react-three/drei";

export default function Index() {
  return (
    <Canvas style={{ background: "#111" }}>
      <Model />
      <directionalLight intensity={2} position={[0, 1, 2]} />
      <Environment preset="dawn" />
    </Canvas>
  );
}
