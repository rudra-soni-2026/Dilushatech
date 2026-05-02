import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { SpeedInsights } from "@vercel/speed-insights/react";
import Home from './pages/Home';
import ComingSoon from './pages/ComingSoon';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import Contact from './pages/Contact';
import favIcon from './assets/fav.png';

function App() {
  React.useEffect(() => {
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = favIcon;
    document.getElementsByTagName('head')[0].appendChild(link);
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          {/* Add the card structure for services, stats, and process here */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
      <SpeedInsights />
    </HelmetProvider>
  );
}

export default App;
