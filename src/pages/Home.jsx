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
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.001.332.005c.109.004.258-.041.405.314.159.386.541 1.321.588 1.417.047.095.078.207.014.332-.064.125-.12.217-.231.346-.111.13-.231.29-.332.386-.111.105-.227.219-.097.443.13.223.57.94 1.222 1.52.839.746 1.549.977 1.77 1.085.22.108.351.091.482-.059.13-.15.562-.656.713-.883.151-.227.302-.191.507-.116s1.3.613 1.525.726c.224.113.374.167.429.262.054.095.054.55-.09.955z" />
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

