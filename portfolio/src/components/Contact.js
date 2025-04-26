import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="cntsection">
      <div className="contact-content">
        <h2 className="header">Contact Me</h2>
        
        <p>Let's connect! 🌈</p>
        
        <div className="contact-links">
          <a 
            href="https://www.linkedin.com/in/hollydrazenovich" 
            target="_blank" 
            rel="noreferrer" 
            className="contact-link"
          >
            LinkedIn
          </a> 
          <a 
            href="https://github.com/HollyDraz" 
            target="_blank" 
            rel="noreferrer"
            className="contact-link"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;