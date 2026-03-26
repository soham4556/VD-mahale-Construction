import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'var(--bg-dark-navy)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999
      }}
    >
      <div style={{ marginBottom: '30px' }}>
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           style={{
             fontSize: '32px',
             fontWeight: '800',
             color: 'white',
             letterSpacing: '2px'
           }}
        >
          VD MAHALE
        </motion.div>
      </div>

      <div style={{ 
        width: '200px', 
        height: '3px', 
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: '10px',
        overflow: 'hidden',
        position: 'relative'
      }}>
        <motion.div 
          initial={{ left: '-100%' }}
          animate={{ left: '100%' }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          style={{
            position: 'absolute',
            top: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, var(--accent-orange), transparent)'
          }}
        />
      </div>
      
      <motion.p 
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{ color: 'white', marginTop: '15px', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase' }}
      >
        Loading...
      </motion.p>
    </motion.div>
  );
};

export default Loader;
