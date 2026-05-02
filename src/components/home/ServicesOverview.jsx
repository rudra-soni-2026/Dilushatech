import React from 'react';

const ServicesOverview = () => {
  const services = [
    {
      title: 'Custom Development',
      description: 'Web, App, and Software solutions built with cutting-edge tech like Next.js and Flutter.',
      icon: '💻',
      category: 'Dev'
    },
    {
      title: 'Digital Marketing',
      description: 'SEO, Google Ads, and Social Media strategies to skyrocket your brand visibility.',
      icon: '📈',
      category: 'Marketing'
    },
    {
      title: 'SaaS & Products',
      description: 'Ready-to-use software like our GST Billing System to automate your business.',
      icon: '🚀',
      category: 'Software'
    },
    {
      title: 'Branding & UI/UX',
      description: 'Creating premium identities and user experiences that captivate your customers.',
      icon: '✨',
      category: 'Design'
    },
  ];

  return (
    <section className="u-section" id="services">
      <div className="u-container">
        <div className="u-header">
          <h2 className="u-title">Our <span className="shimmer-text">Services</span></h2>
          <p className="u-subtitle">Comprehensive digital solutions for your business growth.</p>
        </div>

        <div className="u-grid">
          {services.map((service, index) => (
            <div className="u-card" key={index}>
              <div className="u-content">
                <span className="u-card-cat">{service.category}</span>
                <h3 className="u-card-title">{service.title}</h3>
                <p className="u-card-desc">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
