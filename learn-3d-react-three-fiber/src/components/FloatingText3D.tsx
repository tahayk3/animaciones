import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";
import { FontLoader } from 'three/addons/loaders/FontLoader.js';

export const FloatingText3D = ({
  text,
  position,
}: {
  text: string;
  position: [number, number, number];
}) => {
  const ref = useRef<THREE.Mesh>(null);
  const [randomOffset] = useState(
    () =>
      new THREE.Vector3(
        (Math.random() - 0.5) * 0.3,
        (Math.random() - 0.5) * 0.3,
        (Math.random() - 0.5) * 0.3
      )
  );

  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.getElapsedTime();
      ref.current.position.x = position[0] + randomOffset.x + Math.sin(t) * 0.5;
      ref.current.position.y = position[1] + randomOffset.y + Math.cos(t) * 0.5;
      ref.current.position.z = position[2] + randomOffset.z + Math.sin(t) * 0.5;
    }
  });

  return (
    <Text
      ref={ref}
      position={[0, 0, 0]}
      fontSize={0.3}
      color="#FFD700"
      anchorX="center"
      anchorY="middle"
    >
      {text}
    </Text>
  );
};
