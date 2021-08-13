import React from 'react'
import "../styles/Project-card.css"

function Project({title,desc,link,link2}) {
    return (
        <div className="Project">
            <img src='https://images.unsplash.com/photo-1613230485186-2e7e0fca1253?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400' />
            <div className="Project-text">
                <h3>{title}</h3>
                <p>{desc}</p>
                <a>{link}</a>
                <a>{link2}</a>
            </div>

        </div>
    )
}

export default Project
