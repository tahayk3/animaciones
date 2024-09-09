import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  PerspectiveCamera,
} from "@react-three/drei";
import { useRef } from "react";

const Model = () => {
  const { scene } = useGLTF("/tren_001.glb");
  const modelRef = useRef<any>(null);

  //ciclo para animar el modelo
  useFrame(({ clock }) => {
    if (modelRef.current) {
      modelRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.2;
    }
  });

  return <primitive ref={modelRef} object={scene} scale={1} />;
};

export const PruebaModeloPropio = () => {
  return (
    <Canvas className="canvas-container">
      {/* Configuración de la cámara */}
      <PerspectiveCamera
        makeDefault
        position={[3, 4, 7]} // Ajusta la posición de la cámara
        rotation={[-0.5, 5, 0]} // Ajusta la rotación para obtener el ángulo deseado
        fov={70} // Campo de visión (opcional)
      />
      <OrbitControls enablePan={false} enableZoom={false} />
      <directionalLight
        castShadow
        position={[5, 5, 5]}
        intensity={0}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <ambientLight intensity={5} />
      <Model />

    </Canvas>
  );
};
