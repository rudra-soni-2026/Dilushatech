import React from 'react';
import { Link } from 'react-router-dom';
import tvayiImg from '../../assets/tvayi.webp';
import winxImg from '../../assets/Winx.webp';

const ProductShowcase = () => {
  const [activeApp, setActiveApp] = React.useState(0);

  const products = [
    {
      name: 'Tvayi',
      tagline: 'Jewellery Management',
      desc: 'Premium digital solutions for retail jewellery businesses.',
      color: '#6366f1',
      link: 'https://play.google.com/store/apps/details?id=com.Tvayi.app',
      image: tvayiImg,
      icon: '💎'
    },
    {
      name: 'WinX',
      tagline: 'Play & Earn Rewards',
      desc: 'A gamified platform to earn coins by playing quizzes and games.',
      color: '#a855f7',
      link: '#',
      image: winxImg,
      icon: '💰'
    }
  ];

  const [imgError, setImgError] = React.useState(false);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveApp((prev) => (prev + 1) % products.length);
      setImgError(false);
    }, 5000);
    return () => clearInterval(timer);
  }, [products.length]);

  return (
    <section className="u-section" id="products" style={{ background: '#ffffff', paddingTop: '100px', overflow: 'hidden' }}>
      <div className="u-container">
        <div className="u-header" style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
          <h2 className="u-title" style={{ color: '#0f172a', margin: '0 0 10px 0' }}>Our <span className="shimmer-text">Products</span></h2>
          <p className="u-subtitle" style={{ margin: '0 auto', opacity: 0.8 }}>Experience our enterprise-grade applications in action.</p>
        </div>

        <div className="app-hub-centered">
          <div className="phone-glow-v3" style={{ background: products[activeApp].color, opacity: 0.15 }}></div>
          
          <div className="phone-stack-v3">
            {/* Background Phone 1 */}
            <div className="phone-frame-v3 secondary-phone left">
              <div className="phone-screen-v3">
                <img src={products[activeApp].image} alt="prev" className="app-real-screenshot dimmed" key={`left-${activeApp}`} />
              </div>
            </div>

            {/* Background Phone 2 */}
            <div className="phone-frame-v3 secondary-phone right">
              <div className="phone-screen-v3">
                <img src={products[activeApp].image} alt="prev" className="app-real-screenshot dimmed" key={`right-${activeApp}`} />
              </div>
            </div>

            {/* Main Phone */}
            <div className="phone-frame-v3 main-phone">
              <div className="dynamic-island-v3"></div>
              <div className="phone-screen-v3">
                <div className="phone-reflection-v3"></div>
                {products[activeApp].image && !imgError ? (
                  <img 
                    src={products[activeApp].image} 
                    alt={products[activeApp].name} 
                    className="app-real-screenshot slide-fade"
                    loading="lazy"
                    decoding="async"
                    width="300"
                    height="600"
                    key={activeApp}
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="app-preview-v3" style={{ background: products[activeApp].color }}>
                    <div className="preview-nav-v3"><span>9:41</span></div>
                  </div>
                )}
              </div>
              <div className="phone-home-btn"></div>
            </div>
          </div>

          {/* App Switcher with Progress */}
          <div className="app-switcher-v3">
            {products.map((p, i) => (
              <button 
                key={i} 
                className={`switcher-btn ${activeApp === i ? 'active' : ''}`}
                onClick={() => {
                  setActiveApp(i);
                  setImgError(false);
                }}
              >
                {p.name}
                {activeApp === i && <div className="switcher-progress"></div>}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
