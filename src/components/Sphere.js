import React, {useRef} from 'react'
import { useFrame, useLoader } from "@react-three/fiber"
import {TextureLoader} from "three";

function Sphere({x,y,size,rotspeed,map}){
    const texture = useLoader(TextureLoader, map)
    const mesh = useRef();
  
    useFrame(()=>{
      mesh.current.rotation.x =0.5;
      mesh.current.rotation.y +=rotspeed;
    })
    
    return(
      <mesh ref={mesh} position={[x,y,-100]}>
        <sphereBufferGeometry  args={[size, 40, 40]} attach="geometry" />
        <meshStandardMaterial  map={texture}/>
      </mesh>
    );
  }

export default Sphere
