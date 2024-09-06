import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div className="about">
      <h1>About Recoverynet</h1>
      <section className="mission">
        <h2>Our Mission</h2>
        <p>Recoverynet is dedicated to empowering individuals on their recovery journey by providing meaningful products and fostering a supportive community.</p>
      </section>
      <section className="values">
        <h2>Our Values</h2>
        <ul>
          <li>Empowerment</li>
          <li>Community</li>
          <li>Resilience</li>
          <li>Hope</li>
        </ul>
      </section>
      <section className="story">
        <h2>Our Story</h2>
        <p>Founded in 2024, Recoverynet was born from a desire to create a space where individuals in recovery could find products that resonate with their journey and connect with others who understand their experiences.</p>
      </section>
    </div>
  );
}

export default About;