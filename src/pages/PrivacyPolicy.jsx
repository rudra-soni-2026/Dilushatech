import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="policy-page">
      <Navbar />
      <section className="u-section" style={{ paddingTop: '150px' }}>
        <div className="u-container" style={{ maxWidth: '800px' }}>
          <h1 className="u-title" style={{ textAlign: 'left', fontSize: '2.5rem' }}>Privacy <span className="shimmer-text">Policy</span></h1>
          <p className="u-subtitle" style={{ margin: '1rem 0 3rem' }}>Last updated: April 30, 2026</p>
          
          <div className="policy-content" style={{ color: '#475569', lineHeight: '1.8' }}>
            <p>At DilushaTech, we prioritize your privacy. This policy outlines how we collect, use, and protect your personal information across our website and applications (including Tvayi and WinX).</p>
            
            <h2 style={{ color: '#0f172a', marginTop: '2rem' }}>1. Information We Collect</h2>
            <p>We may collect personal information such as your name, email address, and phone number when you register for our services or contact us. We also collect usage data through our apps to improve user experience.</p>
            
            <h2 style={{ color: '#0f172a', marginTop: '2rem' }}>2. How We Use Information</h2>
            <p>Your information is used to provide and maintain our services, notify you about changes, and provide customer support. We do not sell your personal data to third parties.</p>
            
            <h2 style={{ color: '#0f172a', marginTop: '2rem' }}>3. Data Security</h2>
            <p>We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure.</p>
            
            <h2 style={{ color: '#0f172a', marginTop: '2rem' }}>4. Changes to This Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>
            
            <h2 style={{ color: '#0f172a', marginTop: '2rem' }}>5. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at support@dilushatech.com.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
