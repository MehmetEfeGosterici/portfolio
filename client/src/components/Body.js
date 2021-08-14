import React from 'react'
import Landing from './Landing'
import About from "./About"
import Projects from "./Projects"
import Footer from "./Footer"
import Contact from "./Contact"
import "../styles/Body.css"

function Body() {
    return (
        <div className="Body" id="home">
            <Landing />
            <section id="about">
                <About/>
            </section>
            <section id="projects">
                <Projects />
            </section>
            <section id="contact">
                <Contact />
            </section>
            <Footer/>
        </div>
    )
}

export default Body
