function Contact(){
    return(
        <div id="contacts">
            <div className="contact-content">
                <section className="contact-info">
                    <h2>Contact Us</h2>
                    <p>We would love to hear from you! Reach out to us via the following contact details or use the form to send us a message.</p>
                    <ul>
                        <li><strong>Email:</strong> info@homenestdevelopments.com</li>
                        <li><strong>Phone:</strong> +27 11 123 4567</li>
                        <li><strong>Address:</strong> 123 HomeNest Street, Johannesburg, South Africa</li>
                    </ul>
                </section>
    
                <section className="contact-form">
                    <h3>Send Us a Message</h3>
                    <form id="contactForm">
                        <div className="input-group">
                            <label htmlFor="name">Your Name</label>
                            <input type="text" id="name" name="name" required=""/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">Your Email</label>
                            <input type="email" id="email" name="email" required=""/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="message">Your Message</label>
                            <textarea id="message" name="message" rows="5" required=""></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </section>
            </div>
        </div>
    )
}
export default Contact;