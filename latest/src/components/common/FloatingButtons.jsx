import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageCircle, FiPhone, FiArrowUp } from 'react-icons/fi';
import './FloatingButtons.css';

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="floating-container">
      {/* WhatsApp Button with Radar */}
      <a 
        href="https://wa.me/919923886445" 
        target="_blank" 
        rel="noopener noreferrer"
        className="floating-btn whatsapp-radar"
        aria-label="Contact us on WhatsApp"
      >
        <div className="radar-ping"></div>
        <FiMessageCircle size={24} />
      </a>

      {/* Phone Button (Mobile Only) */}
      <a href="tel:+919923886445" className="floating-btn phone-btn hide-desktop" aria-label="Call us now">
        <FiPhone size={24} />
      </a>

      {/* Back to Top */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="floating-btn back-to-top-glass"
            aria-label="Scroll back to top"
          >
            <FiArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingButtons;
