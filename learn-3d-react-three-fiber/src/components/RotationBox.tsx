import { useFrame  } from "@react-three/fiber";
import {
  Box,
} from "@react-three/drei";

import { useRef } from "react";

// Componente para una caja en rotación
export const RotatingBox = () =>{
    const ref = useRef(null);

    useFrame(() => {
      if (ref.current) {
        // Asegúrate de que ref.current sea un objeto 3D válido
        ref.current.rotation.y += 0.01;
      }
    });
  
    return (
      <group ref={ref}>
        <Box position={[-5, 0, 0]}>
          <meshStandardMaterial attach="material" color="cyan" />
        </Box>
      </group>
    );
}