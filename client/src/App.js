import React from "react";
import { Canvas} from "@react-three/fiber"
import "./App.css"
import Header from "./components/Header";
import Body from "./components/Body";
import Background from "./components/Background.js";
import Sphere from "./components/Sphere";
import { Suspense } from "react";

function App() {

  return <>
      <Header/>
      <Body/>
    <Suspense fallback={""}>
      <Canvas style={{position:"fixed"}}  >
        <Background />
      </Canvas>
      <Canvas style={{ position:"relative", minHeight:"310%"}} orthographic  >
        <ambientLight/>
        <Sphere x={400} y={800} size={-200} rotspeed={0.004} map="moon.jpg"/>
      </Canvas> 
      <Canvas style={{ height:"100%" }} orthographic  >
        <ambientLight/>
        <Sphere x={-750} y={-200} size={-350} rotspeed={0.002} map="2k_jupiter.jpg"/>
      </Canvas> 
    </Suspense>
    

    

  </>
}


export default App;
