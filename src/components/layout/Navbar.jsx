import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import mainLogo from '../../assets/main logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isOpen ? 'nav-open' : ''}`}>
      <div className="nav-overlay" onClick={() => setIsOpen(false)}></div>
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={() => setIsOpen(false)}>
          <img src={mainLogo} alt="DilushaTech" className="nav-logo-img" />
        </Link>
        
        <button className="nav-mobile-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
          <a href="#services" className="nav-link" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#products" className="nav-link" onClick={() => setIsOpen(false)}>Products</a>
          <a href="#testimonials" className="nav-link" onClick={() => setIsOpen(false)}>Testimonials</a>
          <a href="#faq" className="nav-link" onClick={() => setIsOpen(false)}>FAQ</a>
          <Link to="/contact" className="nav-link nav-cta" onClick={() => setIsOpen(false)}>Get Started</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
