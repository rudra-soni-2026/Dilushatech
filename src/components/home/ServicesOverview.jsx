import React from 'react';

const ServicesOverview = () => {
  const services = [
    {
      title: 'Custom Development',
      description: 'Expert React development and custom web solutions built for high performance and scalability in India.',
      icon: '',
      category: 'React Dev'
    },
    {
      title: 'Backend & API',
      description: 'Robust Node.js backend developer services to power your mobile apps and complex business systems.',
      icon: '',
      category: 'Node.js'
    },
    {
      title: 'Digital Marketing',
      description: 'Data-driven mobile app development services and SEO strategies to skyrocket your brand visibility globally.',
      icon: '',
      category: 'Growth'
    },
    {
      title: 'SaaS & Products',
      description: 'Ready-to-use software like our GST Billing System to automate and digitize your business operations.',
      icon: '',
      category: 'Software'
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
          {services.map((service, index) => {
            const waMessage = encodeURIComponent(`Hello DilushaTech! 👋 I'm interested in your "${service.title}" services. I'd love to discuss how you can help me with this project. Please share more details!`);
            const waLink = `https://wa.me/917470818764?text=${waMessage}`;
            
            return (
              <div className="u-card" key={index}>
                <div className="u-content">
                  <div className="u-card-top">
                    <span className="u-card-cat">{service.category}</span>
                    <span className="u-card-icon">{service.icon}</span>
                  </div>
                  <h3 className="u-card-title">{service.title}</h3>
                  <p className="u-card-desc">{service.description}</p>
                  <a href={waLink} target="_blank" rel="noopener noreferrer" className="service-wa-btn">
                    Inquire on WhatsApp
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
