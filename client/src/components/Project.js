import React from 'react'
import "../styles/Project-card.css"

function Project({title,desc,link,link2}) {
    return (
        <div className="Project">
            <div className="Project-text">
                <h3>{title}</h3>
                <p>{desc}</p>
                <div>
                    <a href={link} target="_blank">Github&#128279;</a>
                    {link2 ? <a href={link2} target="_blank">Website&#128279;</a> : ""}
                    
                </div>
            </div>

        </div>
    )
}

export default Project
