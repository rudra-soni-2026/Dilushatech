import React from 'react';
import { Link } from 'react-router-dom';

const FinalCTA = () => {
  return (
    <section className="u-section" id="contact" style={{ background: '#ffffff', paddingBottom: '2rem' }}>
      <div className="u-container" style={{ textAlign: 'center', background: '#ffffff' }}>
        <h2 className="u-title">Ready to build something <span className="shimmer-text">Legendary?</span></h2>
        <p className="u-subtitle" style={{ maxWidth: '600px', margin: '0 auto 2.5rem' }}>
          Join 50+ businesses that trust DilushaTech for their digital growth. 
          Let's talk about your project today.
        </p>
        <div className="hero-cta-v2">
          <Link to="/contact" className="btn-v2-primary">Get a Free Consultation</Link>
          <a href="https://wa.me/917470818764" target="_blank" rel="noopener noreferrer" className="btn-v2-secondary" aria-label="Contact us via WhatsApp">WhatsApp Us</a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
