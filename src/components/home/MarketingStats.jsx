import React from 'react';

const MarketingStats = () => {
  const stats = [
    { label: 'Traffic Increase', value: '90%', color: '#0e7490' },
    { label: 'Lead Conversion', value: '45%', color: '#047857' },
    { label: 'Client Retention', value: '98%', color: '#1d4ed8' },
    { label: 'Revenue Growth', value: '3X', color: '#6d28d9' }
  ];

  return (
    <section className="marketing-stats-v2">
      <div className="stats-container-v2">
        <div className="stats-header-centered">
          <h2 className="stats-title-v2">Driven by <span className="shimmer-text">Results</span></h2>
          <p className="stats-subtitle-v2">Our strategies are backed by data and proven ROI.</p>
        </div>

        <div className="u-grid">
          {stats.map((stat, index) => (
            <div className="u-card" key={index} style={{ background: `${stat.color}08` }}>
              <div className="u-content">
                <h3 className="u-card-title" style={{ color: stat.color, fontSize: '1.8rem', marginBottom: '0' }}>{stat.value}</h3>
                <p className="u-card-desc" style={{ fontWeight: '700', fontSize: '0.8rem', opacity: 0.8 }}>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketingStats;
