import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "CEO, RetailHub",
      content: "DilushaTech transformed our manual billing process into a seamless digital experience. Their attention to detail and technical expertise is unmatched.",
      rating: 5
    },
    {
      name: "Priya Verma",
      role: "Marketing Director, BloomSoft",
      content: "The digital marketing strategies implemented by DilushaTech helped us achieve a 200% increase in lead generation within just 3 months.",
      rating: 5
    },
    {
      name: "Ankit Gupta",
      role: "Founder, TechStart",
      content: "Building our mobile app with DilushaTech was the best decision. They are professional, responsive, and truly understand modern user needs.",
      rating: 5
    }
  ];

  return (
    <section className="u-section testimonials-section" id="testimonials">
      <div className="u-container">
        <div className="u-header">
          <h2 className="u-title">What Our <span className="shimmer-text">Clients Say</span></h2>
          <p className="u-subtitle">Hear from the businesses we've helped succeed in the digital world.</p>
        </div>

        <div className="u-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {testimonials.map((t, index) => (
            <div key={index} className="u-card" style={{ padding: '2.5rem' }}>
              <div style={{ display: 'flex', gap: '4px', marginBottom: '1.5rem' }}>
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} style={{ color: '#fbbf24' }}>★</span>
                ))}
              </div>
              <p style={{ color: '#475569', fontSize: '1rem', lineHeight: '1.7', fontStyle: 'italic', marginBottom: '2rem' }}>
                "{t.content}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #2563eb, #0891b2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold' }}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h3 style={{ margin: 0, color: '#0f172a', fontSize: '1rem', fontWeight: '700' }}>{t.name}</h3>
                  <p style={{ margin: 0, color: '#64748b', fontSize: '0.8rem' }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
