import React from 'react';
import styles from '../styles/Contact.module.css';

function Contact() {
  return (
    <div className={styles.contact}>
      <h1>Contact Us</h1>
      <form className={styles.contactForm}> {/* Updated class name */}
        <label>Name</label>
        <input type="text" placeholder="Your Name" required />
        <label>Email</label>
        <input type="email" placeholder="Your Email" required />
        <label>Message</label>
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;