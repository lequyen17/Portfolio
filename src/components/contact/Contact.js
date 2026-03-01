import React from 'react'
import { ContactForm } from '..'
import './contact.css'

function Contact() {
    return (
        <div className='contact-wrapper section-margin' id='contact'>
            <h1 className='gradient-text'>Contact</h1>
            <div className='contact'>
                <div className='contact-heading'>
                    <h2>Message</h2>
                </div>
                <ContactForm />
            </div>
        </div>
    )
}

export default Contact
