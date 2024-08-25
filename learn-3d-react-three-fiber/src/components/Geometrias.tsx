import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Box,
  Sphere,
  Cylinder,
  Cone,
  Torus,
} from "@react-three/drei";
import { Materiales } from "./Materiales";
import { RotatingBox } from "./RotationBox";

const Geometrias = () => {
  return (
    //Componente para manejar el renderizado de la escena 3D
    //Proporciona un contexto en el que puedes colocar todos los elementos 3D y controlar la vista, la iluminación y otros aspectos de la escena
    <Canvas>
      {/* de luz en Three.js que ilumina todas las superficies igualmente, sin considerar la dirección */}
      <ambientLight />
      {/* Una luz puntual que emite luz en todas direcciones desde una posición específica. */}
      <pointLight position={[10, 10, 10]} />
      {/* permite la interacción con la escena 3D usando el mouse. Puedes rotar, hacer zoom y desplazar la vista. */}
      <OrbitControls />

      {/* GEOMETRIAS */}
      <Box position={[-5, 0, 0]}>
        {/* material estándar de Three.js que aplica un color y una serie de propiedades físicas al cubo. */}
        {/* attach="material" se usa para conectar el material con el mesh que lo rodea */}
        <meshStandardMaterial attach="material" color="blue" />
      </Box>

      <Sphere position={[-3, 0, 0]} args={[1, 32, 32]}>
        <meshStandardMaterial attach="material" color="blue" />
      </Sphere>

      <Cylinder position={[0, 0, 0]} args={[1, 1, 2, 32]}>
        <meshStandardMaterial attach="material" color="green" />
      </Cylinder>

      <Cone position={[3, 0, 0]} args={[1, 2, 32]}>
        <meshStandardMaterial attach="material" color="red" />
      </Cone>

      <Torus position={[6, 0, 0]} args={[1, 0.5, 16, 100]}>
        <meshStandardMaterial attach="material" color="purple" />
      </Torus>

      <Materiales/>
      <RotatingBox />
    </Canvas>
  );
};

export default Geometrias;
