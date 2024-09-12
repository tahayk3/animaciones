import React, { useState, useEffect, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import ColorPicker from "./ColorPicker";

const Model = ({ url, color }) => {
  const { scene } = useGLTF(url);
  const { camera } = useThree();
  const modelRef = useRef();

  useEffect(() => {
    if (modelRef.current) {
      const bbox = new THREE.Box3().setFromObject(modelRef.current);
      const size = bbox.getSize(new THREE.Vector3());
      const center = bbox.getCenter(new THREE.Vector3());

      // Ajustar la cámara para centrar el modelo
      camera.position.set(center.x, center.y, size.z * 2);
      camera.lookAt(center);
      camera.updateProjectionMatrix();

      // Ajustar la posición del modelo para que esté centrado
      modelRef.current.position.set(-center.x, -center.y, -center.z); // Centrar en los ejes X, Y, Z
    }
  }, [url, camera]);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.color.set(color);
      }
    });
  }, [color, scene]);

  return <primitive ref={modelRef} object={scene} />;
};

const CameraSetup = () => {
  const { camera } = useThree();
  return null; // La cámara se ajusta en el componente Model
};

const ModelViewer = ({ modelUrl }) => {
  const [color, setColor] = useState("");

  const handleColorChange = (color) => {
    setColor(color.hex);
  };

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Canvas style={{ width: "100%", height: "100%" }}> 
        <ambientLight intensity={3} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <CameraSetup />
        <OrbitControls enableZoom={false} /> {/* Desactivar el zoom */}
        <Model url={modelUrl} color={color} />
      </Canvas>
      <div style={{ width: "5%", padding: '10px' }}> {/* ColorPicker a la derecha */}
        <ColorPicker color={color} onChange={handleColorChange} />
      </div>
    </div>
  );
};

export default ModelViewer;
