import React from 'react';

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Discovery',
      desc: 'We analyze your business goals and identify the perfect tech solution.'
    },
    {
      number: '02',
      title: 'Design',
      desc: 'Creating high-fidelity wireframes and premium UI/UX interfaces.'
    },
    {
      number: '03',
      title: 'Development',
      desc: 'Writing clean, scalable code using the latest frameworks and tools.'
    },
    {
      number: '04',
      title: 'Deployment',
      desc: 'Launching your product to the cloud with continuous monitoring.'
    }
  ];

  return (
    <section className="u-section" id="process">
      <div className="u-container">
        <div className="u-header">
          <h2 className="u-title">Our <span className="shimmer-text">Workflow</span></h2>
          <p className="u-subtitle">A streamlined process to turn your vision into a digital masterpiece.</p>
        </div>

        <div className="u-grid">
          {steps.map((step, index) => (
            <div className="u-card workflow-card" key={index}>
              <div className="workflow-number">{step.number}</div>
              <div className="u-content">
                <h3 className="u-card-title">{step.title}</h3>
                <p className="u-card-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
