import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

export const FloatingText3D = ({
  text,
  position,
}: {
  text: string;
  position: [number, number, number];
}) => {
  const textRef = useRef<THREE.Mesh>(null);
  const planeRef = useRef<THREE.Mesh>(null);
  const [randomOffset] = useState(
    () =>
      new THREE.Vector3(
        (Math.random() - 0.5) * 0.3,
        (Math.random() - 0.5) * 0.3,
        (Math.random() - 0.5) * 0.3
      )
  );

  useFrame(({ clock }) => {
    if (textRef.current && planeRef.current) {
      const t = clock.getElapsedTime();
      textRef.current.position.x = position[0] + randomOffset.x + Math.sin(t) * 0.5;
      textRef.current.position.y = position[1] + randomOffset.y + Math.cos(t) * 0.5;
      textRef.current.position.z = position[2] + randomOffset.z + Math.sin(t) * 0.5;

      planeRef.current.position.copy(textRef.current.position);
    }
  });

  return (
    <>
      {/* Fondo del texto */}
      <mesh
        ref={planeRef}
        position={[0, 0, 5]} // Ajusta la posición del plano para que esté detrás del texto
      >
        <boxGeometry args={[1, 0.5, 0]} /> {/* Ajusta el tamaño del fondo */}
        <meshBasicMaterial color="green" opacity={0.3} transparent={true} />
      </mesh>
      
      {/* Texto 3D */}
      <Text
        ref={textRef}
        position={[0, 0, 0]}
        fontSize={0.3}
        color="#000"
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </>
  );
};
