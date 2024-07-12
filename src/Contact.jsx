import React from 'react'
import './Contact.css';
import ContactForm from './ContactForm';

function Contact() {
    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            <p>Thank you for your interest in reaching out! Whether you have a project in mind, a collaboration opportunity, or simply want to connect, I’d love to hear from you. Please feel free to use any of the following methods to get in touch:</p>

            <div className="contact-methods">
                <div>
                    <h3>Email</h3>
                    <p>You can reach me directly via email at <a href="mailto:shaahid2453@gmail.com">shaahid2453@gmail.com</a>. I strive to respond to all inquiries promptly, so please don’t hesitate to drop me a message with your questions or project details.</p>
                </div>

                <div>
                    <h3>Social Media</h3>
                    <p>Connect with me on social media platforms to stay updated on my latest projects and insights:</p>
                    <ul className="social-links">
                        <li><a href="https://www.linkedin.com/in/shaah1d/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li><a href="https://github.com/shaah1d" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        {/* Add more social media links as needed */}
                    </ul>
                </div>

                <div>
                    <h3>Phone</h3>
                    <p>If you prefer a more direct conversation, you can reach me via phone at <strong>+1 (XXX) XXX-XXXX</strong>. Please note my availability during business hours, and feel free to leave a message if I'm unable to answer your call.</p>
                </div>

                <div>
                    <h3>Location</h3>
                    <p>I am based in Pune, India, and am available for remote work opportunities worldwide. If you’re in the area and would like to meet in person, please reach out to schedule a meeting.</p>
                </div>
            </div>

            {/* <div className="form-container">
                <h3>Contact Form</h3>
             <ContactForm />
            </div> */}
        </div>
    );
}


export default Contact