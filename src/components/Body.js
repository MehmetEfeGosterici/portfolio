import React from 'react'
import Landing from './Landing'
import About from "./About"
import Projects from "./Projects"
import Footer from "./Footer"
import Contact from "./Contact"
import "../styles/Body.css"

function Body() {
    return (
        <div className="Body">
            <Landing/>
            <About/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Body
