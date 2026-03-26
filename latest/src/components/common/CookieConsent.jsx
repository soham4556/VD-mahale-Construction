import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiShield, FiX } from 'react-icons/fi';
import './CookieConsent.css';

const CookieConsent = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="cookie-consent-wrapper"
        >
          <div className="cookie-glass-card">
            <div className="cookie-icon">
              <FiShield />
            </div>
            <div className="cookie-content">
              <h4>Privacy & Excellence</h4>
              <p>We use premium cookies to enhance your experience and analyze our traffic in accordance with our luxury standards.</p>
            </div>
            <div className="cookie-actions">
              <button onClick={acceptCookies} className="btn-premium-pilled">Accept All</button>
              <button onClick={() => setShow(false)} className="cookie-close"><FiX /></button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
