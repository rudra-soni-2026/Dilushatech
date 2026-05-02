import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "What services does DilushaTech provide?",
      answer: "We offer a full suite of digital solutions including custom web and mobile app development, digital marketing, SEO, branding, and specialized SaaS products like billing systems."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. A professional website typically takes 2-4 weeks, while complex mobile applications or enterprise software can take 2-4 months."
    },
    {
      question: "Do you provide post-launch support?",
      answer: "Yes, we offer 24/7 technical support and maintenance packages to ensure your digital products continue to perform optimally after launch."
    },
    {
      question: "Can you help with marketing my existing business?",
      answer: "Absolutely. Our digital marketing team specializes in SEO, Google Ads, and social media strategies designed to increase reach and conversion for businesses of all sizes."
    }
  ];

  const [activeIndex, setActiveIndex] = React.useState(null);

  return (
    <section className="u-section faq-section" id="faq" style={{ background: '#f8fafc' }}>
      <div className="u-container" style={{ maxWidth: '800px' }}>
        <div className="u-header">
          <h2 className="u-title">Frequently Asked <span className="shimmer-text">Questions</span></h2>
          <p className="u-subtitle">Find answers to common inquiries about our services and process.</p>
        </div>

        <div className="faq-list" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              style={{ 
                background: '#ffffff', 
                borderRadius: '16px', 
                border: '1px solid rgba(0,0,0,0.05)',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
            >
              <button 
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
                style={{ 
                  width: '100%', 
                  padding: '1.5rem', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  background: 'none', 
                  border: 'none', 
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                <span style={{ fontSize: '1.1rem', fontWeight: '700', color: '#0f172a' }}>{faq.question}</span>
                <span style={{ 
                  fontSize: '1.5rem', 
                  color: '#2563eb', 
                  transform: activeIndex === index ? 'rotate(45deg)' : 'rotate(0)',
                  transition: 'transform 0.3s ease'
                }}>+</span>
              </button>
              
              <div 
                id={`faq-answer-${index}`}
                style={{ 
                  maxHeight: activeIndex === index ? '200px' : '0', 
                opacity: activeIndex === index ? 1 : 0,
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                padding: activeIndex === index ? '0 1.5rem 1.5rem 1.5rem' : '0 1.5rem'
              }}>
                <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: '0.95rem' }}>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
