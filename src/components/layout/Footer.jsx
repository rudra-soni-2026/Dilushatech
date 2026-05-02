import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer" style={{ padding: '4rem 0', background: '#ffffff', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
      <div className="u-container" style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '2rem' }}>
          <span style={{ fontSize: '1.5rem', fontWeight: '900', color: '#0f172a' }}>Dilusha<span>Tech</span></span>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
          <Link to="/privacy" style={{ color: '#64748b', fontSize: '0.9rem', textDecoration: 'none' }}>Privacy Policy</Link>
          <Link to="/terms" style={{ color: '#64748b', fontSize: '0.9rem', textDecoration: 'none' }}>Terms & Conditions</Link>
          <Link to="/contact" style={{ color: '#64748b', fontSize: '0.9rem', textDecoration: 'none' }}>Contact Us</Link>
        </div>

        <div style={{ color: '#475569', fontSize: '0.85rem' }}>
          © 2026 DilushaTech. Built for the next generation of business.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
