import React from 'react'
import "../styles/Contact.css"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
function Contact() {
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
                    <form className="Contact-form" >
                        <label>Name:</label>
                        <input size="50" />
                        <br/>
                        <label>E-mail:</label>
                        <input/>
                        <br/>
                        <label>Your message:</label>
                        <textarea rows="7"/>
                    </form>
                    <button>Send</button>
                </div>

            </div>
            
        </div>
    )
}

export default Contact
