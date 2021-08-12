import React, { useRef } from 'react'
import {Canvas, useFrame} from "@react-three/fiber";
import {Stars,Sky,Text} from "@react-three/drei";


const Landing = () => {

    const mesh = useRef();

    useFrame(()=>{
        mesh.current.rotation.x = mesh.current.rotation.y += 0.0005;
    })

    return (

            <mesh ref={mesh}  >
                <Stars />     
            </mesh>
    )
}

export default Landing
