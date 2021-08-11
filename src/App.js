import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import "./App.css"
import Header from "./components/Header";
import Body from "./components/Body";
import Background from "./components/Background.js";
import Sphere from "./components/Sphere";
import { LoadingManager, SphereBufferGeometry, SphereGeometry, TextureLoader } from "three";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

function App() {

  return <>
      <Header/>
      <Body/>
    <Suspense fallback={""}>
      <Canvas style={{position:"fixed" }}  >
        <Background />
      </Canvas>
      <Canvas style={{ position:"relative", minHeight:"300vh"}} orthographic  >
        <ambientLight/>
        <Sphere x={400} y={800} size={-200} rotspeed={0.004} map="moon.jpg"/>
      </Canvas> 
       {<Canvas style={{ height:"130%", overflow:"hidden" }} orthographic  >
        <ambientLight/>
        <Sphere x={-750} y={-200} size={-350} rotspeed={0.002} map="2k_jupiter.jpg"/>
      </Canvas> }
    </Suspense>
    

    

  </>
}


export default App;
