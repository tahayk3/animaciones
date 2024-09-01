import { useGLTF } from "@react-three/drei";
import { DroneGLTF } from "../typings";
import { useSnapshot } from "valtio";
import { store } from "../store";

export const Drone = () => {
  const { nodes, materials } = useGLTF("/robert.glb") as DroneGLTF;

  const snap = useSnapshot(store);
  return (
    <group castShadow scale={0.6}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials.DarkSilver}
        material-color={snap.items.body}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004_DarkSilver_0.geometry}
        material={materials.Dustygrey}
        material-color={snap.items.tapa}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004_Dustygrey_0.geometry}
        material={materials.DarkSilver}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004_Glowglowblue_0.geometry}
        material={materials.Glowglowblue}
        material-color={snap.items.watter}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004_Glowred_0.geometry}
        material={materials.Gold}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004_Gold_0.geometry}
        material={materials.Gold}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004_Silver_0.geometry}
        material={materials.Gold}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004_White_0.geometry}
        material={materials.Gold}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RootNode.geometry}
        material={materials.Gold}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sketchfab_Scene.geometry}
        material={materials.Gold}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sketchfab_model.geometry}
        material={materials.Gold}
      >
        <meshBasicMaterial />
      </mesh>
    </group>
  );
};
