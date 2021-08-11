import React from 'react'
import "../styles/Header.css"
import logo from "../styles/M.E.G.jpg"

function Header() {
    return (
        <div className="header">
            <div className="Container">
                <div className="Container-header">
                    <img src={logo} />
                </div>
                <div className="Container-items">
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </div>
            </div>
        </div>
    )
}

export default Header
