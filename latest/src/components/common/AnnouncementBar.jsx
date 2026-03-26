import React, { useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isDismissed = localStorage.getItem('announcement-dismissed');
    if (!isDismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('announcement-dismissed', 'true');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: '40px', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="announcement-bar-wrapper"
          style={{
            backgroundColor: 'var(--bg-dark-navy)',
            overflow: 'hidden',
            position: 'relative',
            zIndex: 'var(--z-fixed)',
          }}
        >
          <div className="container" style={{ 
            height: '100%', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            position: 'relative'
          }}>
            <p style={{ 
              color: 'white', 
              fontSize: '13px', 
              fontWeight: '500', 
              margin: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <span style={{ 
                width: '8px', 
                height: '8px', 
                backgroundColor: 'var(--accent-orange)', 
                borderRadius: '50%',
                display: 'inline-block',
                boxShadow: '0 0 10px var(--accent-orange)'
              }}></span>
              <span className="text-truncate">New Project Awarded: NH-48 Highway Widening — ₹125 Cr</span>
              <a href="/projects" style={{ color: 'var(--accent-orange)', fontWeight: '600', marginLeft: '10px' }}>Learn More →</a>
            </p>
            
            <button 
              onClick={handleDismiss}
              style={{
                position: 'absolute',
                right: '20px',
                background: 'none',
                border: 'none',
                color: 'rgba(255,255,255,0.5)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <FiX size={18} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnnouncementBar;
