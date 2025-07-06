import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="about-heading">
        Welcome to Avae Api Tahitian Dance School
      </h2>
    <div className="about-content">
        <img src="/images/about.png" alt="about-pic" className="about-img" />
    </div>
    </section>
  );
}

export default About;
