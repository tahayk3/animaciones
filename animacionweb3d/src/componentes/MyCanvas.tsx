import { Canvas } from "@react-three/fiber";
import React from "react";
import { Drone } from "./Robert";
import { ContactShadows, Environment, Float, OrbitControls } from "@react-three/drei";

export const MyCanvas = () =>{
    return(
        <Canvas shadows camera={{position: [5.9099136497504, 5.198230225266069, -2.993475110578021]}}>
            <OrbitControls/>
            <ambientLight />
            <Float
            speed={5} // Animation speed, defaults to 1
            rotationIntensity={9} // XYZ rotation intensity, defaults to 1
            floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[1, 3]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
            >
                <Drone/>
            </Float>
            <ContactShadows position={[0,-0.8, 0]} opacity={1} blur={0.5} />
            <Environment preset="sunset" blur={1}  />
        </Canvas>
    )
}