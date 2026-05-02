import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import mainLogo from '../../assets/main logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src={mainLogo} alt="DilushaTech" className="nav-logo-img" style={{ height: '150px', width: 'auto' }} />
        </Link>
        
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <a href="#services" className="nav-link">Services</a>
          <a href="#products" className="nav-link">Products</a>
          <a href="#process" className="nav-link">Workflow</a>
          <Link to="/contact" className="nav-link nav-cta">Get Started</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
