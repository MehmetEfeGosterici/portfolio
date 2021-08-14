import React, { useState } from 'react'
import "../styles/Header.css"
import logo from "../styles/M.E.G.jpg"
import Hamburger from './Hamburger'

function Header() {

    const[open,setOpen] = useState(false)

    return (
        <div className="header">
            <div className="Container">
                <div className="Container-header">
                    <img src={logo} />
                </div>
                <div className={`hamburger${open ? "open" : ""}`} onClick={()=>setOpen(!open)}>
                    <Hamburger/>
                </div>
                <div className={`Container-items${open ? "burger" : "" }`}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </div>
                <div className={`Container-items-${open ? "bg" : ""}`}></div>
            </div>
        </div>

    )
}

export default Header
