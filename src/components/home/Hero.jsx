import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero-premium-simple">
      
      <div className="hero-content-v2">
        <h1 className="hero-headline-v2">
          Mastering the <span className="shimmer-text">Digital</span> <br />
          Experience for <span className="gradient-text-v2">Brands</span>
        </h1>
        
        <p className="hero-subtext-v2">
          We combine high-end engineering with strategic marketing to build 
          digital solutions that aren't just seen—they're remembered.
        </p>
        
        <div className="hero-cta-v2">
          <Link to="/contact" className="btn-v2-primary">Start a Project</Link>
          <a href="#products" className="btn-v2-secondary">Explore Products</a>
        </div>

      </div>

      <div className="floating-visual-v2">
        <div className="glass-card-premium">
          <div className="glass-header">
            <div className="g-dot"></div>
            <div className="g-line"></div>
          </div>
          <div className="glass-content">
            <div className="g-bar-group">
              <div className="g-bar" style={{ height: '40%' }}></div>
              <div className="g-bar" style={{ height: '70%' }}></div>
              <div className="g-bar" style={{ height: '50%' }}></div>
              <div className="g-bar" style={{ height: '90%' }}></div>
              <div className="g-bar" style={{ height: '60%' }}></div>
            </div>
            <div className="g-value">+145% Growth</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
