import React from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/home/Hero';
import ServicesOverview from '../components/home/ServicesOverview';
import TechStack from '../components/home/TechStack';
import ProductShowcase from '../components/home/ProductShowcase';
import MarketingStats from '../components/home/MarketingStats';
import Process from '../components/home/Process';
import Testimonials from '../components/home/Testimonials';
import FAQ from '../components/home/FAQ';
import FinalCTA from '../components/home/FinalCTA';
import Footer from '../components/layout/Footer';
import Background from '../components/Background';

const Home = () => {
  return (
    <div className="home-page">
      <Background />
      <Navbar />
      <a href="https://wa.me/917470818764" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <span className="wa-text">Need Help?</span>
        <svg width="38" height="38" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03c0 2.12.541 4.191 1.57 6.017L0 24l6.105-1.602a11.834 11.834 0 005.937 1.57h.005c6.637 0 12.032-5.396 12.035-12.031.003-3.213-1.252-6.234-3.53-8.513z" />
        </svg>
      </a>
      <main>
        <Hero />
        <TechStack />
        <ServicesOverview />

        {/* Trust Counter Section */}
        <section className="trust-counter-section">
          <div className="u-container">
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
        <Testimonials />
        <Process />
        <MarketingStats />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
};

export default Home;

