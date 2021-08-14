import React from 'react'
import "../styles/Footer.css"

function Footer() {
    return (
        <div className="Footer">
            <div className="Footer-container">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <ul>
                    <li><a href="https://www.instagram.com/mehmetefegost/">Instagram</a></li>
                    <li><a href="https://www.linkedin.com/in/mehmet-efe-g%C3%B6sterici-5b15a8173/">Linkedin</a></li>
                    <li><a href="https://github.com/MehmetEfeGosterici">Github</a></li>
                    <li><a href="mailto:m.efegost558@gmail.com">m.efegost558@gmail.com</a></li>
                </ul>
            </div>
            <small>&copy; Copyright {new Date().getFullYear()}, Example Corporation</small>
        </div>
    )
}

export default Footer
