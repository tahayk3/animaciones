import { useState, useRef, useEffect } from "react";
import { useFrame, Canvas } from "@react-three/fiber";
import {
  Text,
  useGLTF,
  useAnimations,
  OrbitControls,
} from "@react-three/drei";

const Model = ({ playAnimation }: { playAnimation: boolean }) => {
  const { scene, animations } = useGLTF("/keyboard1.glb");
  const modelRef = useRef<any>(null);
  const { actions } = useAnimations(animations, modelRef);

  useEffect(() => {
    if (actions && actions["Open"]) {
      if (playAnimation) {
        actions["Open"].play(); // Reemplaza "AnimationName" con el nombre de tu animación
      } else {
        actions["Open"].stop(); // Detiene la animación
      }
    }
  }, [playAnimation, actions]);

  return <primitive ref={modelRef} object={scene} scale={15} />;
};

const MovingObject = ({ scrollY }: { scrollY: number }) => {
  const [playAnimation, setPlayAnimation] = useState(false);
  const ref = useRef<any>();

  useFrame(() => {
    if (ref.current) {
      const initialX = -15; // Posición inicial fuera de la pantalla (a la izquierda)
      const finalX = 0.5; // Posición final dentro de la pantalla (a la derecha)
      const positionX = initialX + scrollY * 0.01; // Ajusta la velocidad de desplazamiento
      const opacity = Math.min(scrollY * 0.0005, 1); // Controla la opacidad

      if (positionX <= finalX) {
        ref.current.position.set(positionX, 0, 0);
      }

      ref.current.material.opacity = opacity;

      // Activar animación cuando el objeto esté en la vista
      if (positionX > -2 && positionX < 4) {
        setPlayAnimation(true);
      } else {
        setPlayAnimation(false);
      }
    }
  });

  return (
    <mesh ref={ref}>
      <Model playAnimation={playAnimation} />
    </mesh>
  );
};

const Scene3DScroll = ({ scrollY }: { scrollY: number }) => {
  return (
    <Canvas camera={{ position: [-5, 10, 10], fov: 75 }}>
      <ambientLight intensity={0.9} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls enableZoom={false}  />
      {/* El modelo a la izquierda */}
      <MovingObject scrollY={scrollY} />

      {/* El texto a la derecha */}
      {scrollY > 1350 && (
        <Text
          position={[25, 0, 1]} // Posición del texto a la derecha
          fontSize={3}
          color="white"
          rotation={[-0.8, -0.5, -0.5]} // Rotación si el texto necesita alinearse con la vista
        >
          Full stack
        </Text>
      )}
    </Canvas>
  );
};
export default Scene3DScroll;
