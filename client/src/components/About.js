import React from 'react'
import "../styles/About.css"
import astronaut from "../styles/astronaut.png"
function About() {
    return (
        <div className="About-container">
            <div className="About-card">
                <img className="astro" src={astronaut} alt={"astronaut"}/>
                <div className="About-text">
                    <p>
                        Hey there, my name is Mehmet Efe Gösterici, I am a Computer Engineering student from Turkey.
                        Fascinated by all things tech and science, passionate about the art of engineering.
                        Driven by the desire to improve each day.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
