import React from 'react';
import Link from 'next/link'; // Import Link from next/link
import styles from '../styles/About.module.css';

function About() {
  return (
    <div className={styles.about}>
      <h1>About Us</h1>
      <p>Recoverynet is dedicated to providing the best recovery products and services.</p>
      <div className={styles.mission}>
        <h2>Our Mission</h2>
        <p>To empower individuals on their recovery journey.</p>
      </div>
      <div className={styles.values}>
        <h2>Our Values</h2>
        <p>Integrity, Compassion, and Excellence.</p>
      </div>
      <ul>
        <li>
          <Link href="/contact" className="text-white hover:text-yellow-300 transition duration-300">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default About;