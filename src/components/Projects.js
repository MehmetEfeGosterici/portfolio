 import React from 'react'
 import "../styles/Projects.css"
 import logo from "../styles/M.E.G.jpg"
 import Project from "./Project"
 
 function Projects() {
     return (
         <div className="Projects">
             <div className="Project-container">
                <Project/>
                <Project/>
                <Project/>
             </div>
         </div>
     )
 }
 
 export default Projects
 