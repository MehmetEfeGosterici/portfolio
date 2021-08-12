import React, { useEffect, useState } from 'react'
import { Collapse } from '@material-ui/core'
import Typewriter from "typewriter-effect"
import "../styles/Landing.css"

function About() {
    const[collapse,setCollapse] = useState(false);
    useEffect(()=>{
        setTimeout(1000)
        setCollapse(true);
    },[])
    return (
        <div className="Landing-Container">       
            <div className="Landing-text" >
                <h3 className="Landing-h3">
                    <Typewriter
                        options={{ delay:50, cursor:"" }}
                        onInit={(typewriter)=>{
                            typewriter
                            .start()
                            .typeString("Hello,")
                            .pauseFor(300)
                            .typeString("I am Efe")
                            
                        }}
                    />
                </h3>
                <p className="Landing-p">
                    <Typewriter
                        
                        options={{ delay:50, cursor:"" }}
                        onInit={(typewriter)=> {
                            typewriter
                            .pauseFor(2000)
                            .changeDelay(25)
                            .typeString("Computer Engineering student from Turkey, striving to be the next big thing. Interested in everything thats tech&science. Hungry to learn and achieve.")
                            .start()
                        }}
                    />
                </p>
            </div>
        </div>
    )
}

export default About
