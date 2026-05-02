import React, { Suspense, lazy } from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/home/Hero';

// Lazy load almost everything to minimize initial JS
const TechStack = lazy(() => import('../components/home/TechStack'));
const Background = lazy(() => import('../components/Background'));
const Footer = lazy(() => import('../components/layout/Footer'));
const WhatsAppWidget = lazy(() => import('../components/WhatsAppWidget'));
const ServicesOverview = lazy(() => import('../components/home/ServicesOverview'));
const ProductShowcase = lazy(() => import('../components/home/ProductShowcase'));
const MarketingStats = lazy(() => import('../components/home/MarketingStats'));
const Process = lazy(() => import('../components/home/Process'));
const Testimonials = lazy(() => import('../components/home/Testimonials'));
const FAQ = lazy(() => import('../components/home/FAQ'));
const FinalCTA = lazy(() => import('../components/home/FinalCTA'));

const Home = () => {
  return (
    <div className="home-page">
      <Suspense fallback={null}>
        <Background />
        <WhatsAppWidget />
      </Suspense>

      <Navbar />

      <main>
        <Hero />
        
        <Suspense fallback={null}>
          <TechStack />
        </Suspense>
        
        <Suspense fallback={<div className="u-section" style={{ height: '200px' }}></div>}>
          <ServicesOverview />
          
          <section className="trust-counter-section">
            <div className="u-container">
              <h2 className="sr-only">Our Achievement Statistics</h2>
              <div className="counter-grid">
                <div className="counter-item">
                  <h3>50+</h3>
                  <p>Projects Delivered</p>
                </div>
                <div className="counter-item">
                  <h3>24/7</h3>
                  <p>Expert Support</p>
                </div>
                <div className="counter-item">
                  <h3>95%</h3>
                  <p>Client Satisfaction</p>
                </div>
                <div className="counter-item">
                  <h3>15+</h3>
                  <p>Tech Stack Experts</p>
                </div>
              </div>
            </div>
          </section>

          <ProductShowcase />
          <Process />
          <MarketingStats />
          <FAQ />
          <Testimonials />
          <FinalCTA />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Home;
