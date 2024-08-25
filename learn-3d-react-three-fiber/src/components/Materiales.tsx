import { Box } from "@react-three/drei";

export const Materiales = () => {
  return (
    <>
      {/* MATERIALES: @react-three/fiber permite usar diversos materiales de Three.js */}
      <Box position={[0 - 5, 2, 0]}>
        <meshBasicMaterial attach="material" color="pink" />
      </Box>

      <Box position={[-3, 2, 0]}>
        <meshLambertMaterial attach="material" color="pink" />
      </Box>

      <Box position={[0, 2, 0]}>
        <meshStandardMaterial attach="material" color="cyan" />
      </Box>
    </>
  );
};
