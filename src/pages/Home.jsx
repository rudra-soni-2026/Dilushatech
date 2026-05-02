import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/home/Hero';
import TechStack from '../components/home/TechStack';
import Background from '../components/Background';
import Footer from '../components/layout/Footer';

// Lazy load below-the-fold components
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
      <Helmet>
        <title>DilushaTech - Web & App Development Company in India</title>
        <meta name="description" content="DilushaTech is the leading web development company in India specializing in React, Node.js, and mobile app development services." />
        <link rel="canonical" href="https://dilushatech.in/" />
      </Helmet>
      
      <Background />
      <Navbar />
      
      <Suspense fallback={null}>
        <WhatsAppWidget />
      </Suspense>

      <main>
        <Hero />
        <TechStack />
        
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

      <Footer />
    </div>
  );
};

export default Home;

