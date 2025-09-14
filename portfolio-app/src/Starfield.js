// Starfield.js
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

function RotatingStars() {
  const group = useRef();
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.0005;
    }
  });

  return (
    <group ref={group}>
      <Stars
        radius={100}   
        depth={50}    
        count={10000}   
        factor={6}   
        saturation={0}
        fade
      />
    </group>
  );
}

export default function Starfield() {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
      }}
      camera={{ position: [0, 0, 50], fov: 75 }}
    >
      <color attach="background" args={["black"]} />
      <RotatingStars />
    </Canvas>
  );
}
