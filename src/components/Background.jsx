import React, { useState, useEffect } from 'react';

const Background = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handleMediaQueryChange = (e) => setIsMobile(e.matches);
    
    // Initial check
    setIsMobile(mediaQuery.matches);
    
    // Modern way to add listener
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
  }, []);

  return (
    <>
      <div className="bg-gradient"></div>
      {!isMobile && (
        <div className="bg-blobs">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
        </div>
      )}
    </>
  );
};

export default Background;
