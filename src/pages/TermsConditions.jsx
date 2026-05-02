import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const TermsConditions = () => {
  return (
    <div className="policy-page">
      <Navbar />
      <section className="u-section" style={{ paddingTop: '150px' }}>
        <div className="u-container" style={{ maxWidth: '800px' }}>
          <h1 className="u-title" style={{ textAlign: 'left', fontSize: '2.5rem' }}>Terms & <span className="shimmer-text">Conditions</span></h1>
          <p className="u-subtitle" style={{ margin: '1rem 0 3rem' }}>Last updated: April 30, 2026</p>
          
          <div className="policy-content" style={{ color: '#475569', lineHeight: '1.8' }}>
            <p>Welcome to DilushaTech. By accessing our website and using our applications, you agree to comply with and be bound by the following terms and conditions.</p>
            
            <h2 style={{ color: '#0f172a', marginTop: '2rem' }}>1. Acceptance of Terms</h2>
            <p>By using DilushaTech services, you acknowledge that you have read, understood, and agree to be bound by these terms. If you do not agree, please refrain from using our services.</p>
            
            <h2 style={{ color: '#0f172a', marginTop: '2rem' }}>2. Use of Services</h2>
            <p>You agree to use our services only for lawful purposes. You are responsible for maintaining the confidentiality of your account credentials.</p>
            
            <h2 style={{ color: '#0f172a', marginTop: '2rem' }}>3. Intellectual Property</h2>
            <p>All content on this website, including text, graphics, logos, and software, is the property of DilushaTech and is protected by international copyright laws.</p>
            
            <h2 style={{ color: '#0f172a', marginTop: '2rem' }}>4. Limitation of Liability</h2>
            <p>DilushaTech shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our services.</p>
            
            <h2 style={{ color: '#0f172a', marginTop: '2rem' }}>5. Governing Law</h2>
            <p>These terms are governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in [Your City].</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TermsConditions;
