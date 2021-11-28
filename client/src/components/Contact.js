import React, { useState } from 'react'
import "../styles/Contact.css"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import axios from 'axios';


function Contact() {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("")

    function setname(e){
        setName(e.target.value)
    }
    function setemail(e){
        setEmail(e.target.value)
    }
    function setmessage(e){
        setMessage(e.target.value)
    }

    function sendEmail(e){
        e.preventDefault();
        axios.post( "/api/email",{
            name: name,
            email: email,
            message: message
        })
        alert("Thank you, your message has been sent")
        setName("")
        setEmail("")
        setMessage("")
    }

    return (
        <div className="Contact">
            <div className="Contact-container">
                <div className="Contact-form-container">
                    <h3>Contact Me</h3>
                    <div className="Contact-form-icons">
                        <a href="https://github.com/MehmetEfeGosterici" target="_blank">
                            <GitHubIcon className="Contact-form-icon" style={{ fontSize: 50}} />
                        </a>
                        <a href="https://www.linkedin.com/in/mehmet-efe-g%C3%B6sterici-5b15a8173/" target="_blank">
                            <LinkedInIcon className="Contact-form-icon" style={{ fontSize: 50}}/>
                        </a>
                        <a href="https://www.instagram.com/mehmetefegost/" target="_blank">
                            <InstagramIcon className="Contact-form-icon" style={{ fontSize: 50}}/>
                        </a>
                        <a href="mailto:m.efegost558@gmail.com" target="_blank">
                            <MailOutlineIcon  className="Contact-form-icon" style={{ fontSize: 50}}/>
                        </a>
                    </div>
                    <form onSubmit={sendEmail} className="Contact-form" >
                        <label>Name:</label>
                        <input onChange={setname} value={name} size="35" />
                        <br/>
                        <label>E-mail:</label>
                        <input onChange={setemail} value={email}/>
                        <br/>
                        <label>Your message:</label>
                        <textarea onChange={setmessage} value={message} rows="7"/>
                        <div >
                            <button className="Contact-form-button" type="submit">Send</button>
                        </div>
                    </form>
                </div>

            </div>
            
        </div>
    )
}

export default Contact
