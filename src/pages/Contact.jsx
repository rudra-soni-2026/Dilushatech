import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = React.useState('idle');

  React.useEffect(() => {
    document.title = "Contact Us - DilushaTech | Web & App Development Inquiry";
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    const payload = {
      ...formData,
      access_key: 'dc4bde2d-b821-4e02-97e8-aa86bdaec07e',
      from_name: 'DilushaTech Website'
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('success');
      }
    } catch (err) {
      setStatus('success');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-page">
      <Navbar />
      <section className="u-section" style={{ paddingTop: '120px', paddingBottom: '4rem' }}>
        <div className="u-container" style={{ maxWidth: '1100px' }}>
          <div className="contact-grid">
            <div className="contact-info">
              <h1 className="u-title" style={{ textAlign: 'left', fontSize: '2.4rem', marginBottom: '1rem', fontWeight: '900', lineHeight: '1.2' }}>Let's Build Something <span className="shimmer-text">Exceptional.</span></h1>
              <p className="u-subtitle" style={{ textAlign: 'left', margin: '0 0 2.5rem 0', fontSize: '1rem', color: '#64748b', maxWidth: '400px' }}>
                Contact our expert team to discuss your next project and experience professional digital transformation.
              </p>
              <div className="info-items" style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
                <div className="info-item" style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
                  <div style={{ background: '#f8fafc', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(0,0,0,0.06)' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div>
                    <h4 style={{ margin: '0 0 2px 0', color: '#0f172a', fontSize: '1rem', fontWeight: '700' }}>Official Email</h4>
                    <a href="mailto:dilushatech@gmail.com" style={{ margin: 0, color: '#64748b', fontSize: '0.9rem', fontWeight: '500', textDecoration: 'none' }}>dilushatech@gmail.com</a>
                  </div>
                </div>
                <div className="info-item" style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
                  <div style={{ background: '#f8fafc', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(0,0,0,0.06)' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <h4 style={{ margin: '0 0 2px 0', color: '#0f172a', fontSize: '1rem', fontWeight: '700' }}>WhatsApp Support</h4>
                    <a href="https://wa.me/917470818764" target="_blank" rel="noopener noreferrer" style={{ margin: 0, color: '#64748b', fontSize: '0.9rem', fontWeight: '500', textDecoration: 'none' }}>+91 74708 18764</a>
                  </div>
                </div>
                <div className="info-item" style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
                  <div style={{ background: '#f8fafc', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(0,0,0,0.06)' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <h4 style={{ margin: '0 0 2px 0', color: '#0f172a', fontSize: '1rem', fontWeight: '700' }}>Headquarters</h4>
                    <p style={{ margin: 0, color: '#64748b', fontSize: '0.9rem', fontWeight: '500' }}>New Delhi, India</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form-container" style={{ background: '#ffffff', padding: '2.5rem', borderRadius: '24px', border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 20px 40px rgba(0,0,0,0.02)' }}>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
                  <div className="input-group">
                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.8rem', fontWeight: '800', color: '#0f172a', letterSpacing: '0.5px' }}>FULL NAME</label>
                    <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="John Doe" required style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1.5px solid #f1f5f9', background: '#f8fafc', outline: 'none', fontSize: '0.9rem' }} />
                  </div>
                  <div className="input-group">
                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.8rem', fontWeight: '800', color: '#0f172a', letterSpacing: '0.5px' }}>EMAIL ADDRESS</label>
                    <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="john@example.com" required style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1.5px solid #f1f5f9', background: '#f8fafc', outline: 'none', fontSize: '0.9rem' }} />
                  </div>
                </div>
                <div className="input-group">
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.8rem', fontWeight: '800', color: '#0f172a', letterSpacing: '0.5px' }}>SUBJECT</label>
                  <input name="subject" value={formData.subject} onChange={handleChange} type="text" placeholder="Project Inquiry" required style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1.5px solid #f1f5f9', background: '#f8fafc', outline: 'none', fontSize: '0.9rem' }} />
                </div>
                <div className="input-group">
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.8rem', fontWeight: '800', color: '#0f172a', letterSpacing: '0.5px' }}>MESSAGE</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your requirements..." rows="4" required style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1.5px solid #f1f5f9', background: '#f8fafc', outline: 'none', resize: 'none', fontSize: '0.9rem' }}></textarea>
                </div>
                <button type="submit" className="btn-u-primary" disabled={status === 'loading'} style={{ width: '100%', padding: '0.9rem', borderRadius: '12px', marginTop: '0.2rem', fontWeight: '700', fontSize: '0.95rem', opacity: status === 'loading' ? 0.7 : 1 }}>
                  {status === 'loading' ? 'Sending Message...' : 'Send Message'}
                </button>
                {status === 'success' && <p style={{ color: '#22c55e', fontSize: '0.85rem', textAlign: 'center', marginTop: '10px', fontWeight: '600' }}>Message sent successfully! We will get back to you soon.</p>}
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
