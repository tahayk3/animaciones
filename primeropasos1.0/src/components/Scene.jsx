import {useEffect, useRef} from "react";
import * as THREE from 'three';

//controles
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

function Scenes() {
    const mountRef = useRef(null)
    useEffect(()=>{
        const currentMount = mountRef.current

        //creacion de la escena y camara la primera vez que se monta el componente
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(
            50,
            currentMount.clientWidth / currentMount.clientHeight,
            0.1,
            1000
        )
        //moviendo la camara
        camera.position.z = 4
        

        //Renderizado, se crea un canvas(elemento para mostrar graficos introducido en html5)
        const renderer = new THREE.WebGLRenderer()
        renderer.setSize(currentMount.clientWidth , currentMount.clientHeight)
        currentMount.appendChild(renderer.domElement)

        //controles
        const controls = new OrbitControls(camera, renderer.domElement)
        //cambiando punto de ancla(0,0,0) por defecto
        controls.target = new THREE.Vector3(0,0,0)
        //evitar scroll de mas al movel el objeto
        controls.enableDamping = true


        //Agregando un cubo
        const cube = new THREE.Mesh(
            new THREE.BoxGeometry(1,1,1),
            new THREE.MeshBasicMaterial({
                color: 0x0d2afd,
                transparent: true,
                opacity:0.3,
                wireframe: false,
            })
        )

        //Agregando esfera
        const geometry = new THREE.SphereGeometry( 0.8, 32, 16 ); 
        const material = new THREE.MeshBasicMaterial({
            color: 0xfaa923
        }); 
        const sphere = new THREE.Mesh( geometry, material ); 
        scene.add( sphere );
        sphere.position.x = 2
        sphere.position.y = -0.5

        //Agregando torus
        const geometry1 = new THREE.TorusKnotGeometry( 0.3, 0.1, 100, 16 ); 
        const material1 = new THREE.MeshNormalMaterial({flatShading: true}); 
        const torusKnot = new THREE.Mesh( geometry1, material1 ); 
        scene.add( torusKnot );
        torusKnot.position.set(-2,-0.5, 0)
        torusKnot.scale.set(2,2,1)

        //agregando cubo a la escena
        scene.add(cube)


        //renderizar la escena
        const animate = () =>{
            //actualizado controles
            controls.update()
            renderer.render(scene, camera)
            //se llama asi misma, por lo que esta en un ciclo infinito
            requestAnimationFrame(animate)
        }

        animate()

        //limpiar la escena
        return () =>{
            currentMount.removeChild(renderer.domElement)
        }
    },[])
    return (
        <div 
            className="contenedor3D" 
            style={{ width: "100%", height: "100vh" }}
            ref = {mountRef}
        >
        </div>
    );
}

export default Scenes;
