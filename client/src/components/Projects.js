 import React, { useState ,useEffect} from 'react'
 import "../styles/Projects.css"
 import Project from "./Project"
 import axios from "axios"
 
 function Projects() {

    const [data,setData] = useState([])

    useEffect(() => {
        axios.get("/api/projects")
        .then(res=>{
            const response = res.data
            setData(response)
            
        })
    }, [])

    useEffect(()=>{
        console.log(data)
    },[data])


     return (
         <div className="Projects">
             <h2 className="Projects-text">PROJECTS</h2>
             <div className="Project-container">
                {data ? data.map(item=>{
                    return <>
                        <Project 
                        title={item.title} 
                        desc={item.description} 
                        link={item.link} 
                        link2={item.link2}
                        />
                    </>
                }): "Please refresh the page..."}
             </div>
         </div>
     )
 }
 
 export default Projects
 