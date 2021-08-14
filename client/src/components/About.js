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
                        Computer Engineering student from Turkey.
                        Fascinated by all things tech and science, passionate about the art of engineering.
                        Driven by the desire to improve each day. Always interested in a challenge. Reach out to connect!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
