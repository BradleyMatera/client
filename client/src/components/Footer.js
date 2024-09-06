import React from 'react';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';

function Footer() {
  return (
    <footer className={`${styles.footer} bg-primary-purple text-white`}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>About Us</h3>
          <ul>
            <li><Link href="/about">Our Story</Link></li>
            <li><Link href="/team">Our Team</Link></li>
            <li><Link href="/careers">Careers</Link></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>Support</h3>
          <ul>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>Follow Us</h3>
          <ul>
            <li><Link href="/facebook">Facebook</Link></li>
            <li><Link href="/twitter">Twitter</Link></li>
            <li><Link href="/instagram">Instagram</Link></li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Recoverynet. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;