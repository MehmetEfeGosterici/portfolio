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
        axios.post("http://localhost:5000/api/email",{
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
                        <GitHubIcon className="Contact-form-icon" fontSize="large" />
                        <LinkedInIcon className="Contact-form-icon" fontSize="large"/>
                        <InstagramIcon className="Contact-form-icon" fontSize="large"/>
                        <MailOutlineIcon className="Contact-form-icon" fontSize="large"/>
                    </div>
                    <form onSubmit={sendEmail} className="Contact-form" >
                        <label>Name:</label>
                        <input onChange={setname} value={name} size="50" />
                        <br/>
                        <label>E-mail:</label>
                        <input onChange={setemail} value={email}/>
                        <br/>
                        <label>Your message:</label>
                        <textarea onChange={setmessage} value={message} rows="7"/>
                        <input type="submit" value="Send"/>
                    </form>
                </div>

            </div>
            
        </div>
    )
}

export default Contact
