import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  PerspectiveCamera,
  Sparkles,
} from "@react-three/drei";
import { useRef } from "react";
import { FloatingText3D } from "./FloatingText3D";

const Model = () => {
  const { scene } = useGLTF("/retro_computer.glb");
  const modelRef = useRef<any>(null);

  //ciclo para animar el modelo
  useFrame(({ clock }) => {
    if (modelRef.current) {
      modelRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.2;
    }
  });

  return <primitive ref={modelRef} object={scene} scale={7} />;
};

export const Scene3D = () => {
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
      <ambientLight intensity={0} />
      {/* añadiendo particulas */}
      <Sparkles size={6} scale={[10, 5, 10]} speed={0.5} color="white" />
      <Model />
      {/* Texto flotante alrededor del modelo */}
      <FloatingText3D text="React" position={[2, 5, 0]} />
      <FloatingText3D text="SQL" position={[3, 2, 0]} />
      <FloatingText3D text="HTML" position={[-5, 5, 0]} />
      <FloatingText3D text="CSS" position={[-4, 0, 0]} />
      <FloatingText3D text="Go" position={[-4, 2, 0]} />
      <FloatingText3D text="JS" position={[-2, -4, 0]} />
    </Canvas>
  );
};
