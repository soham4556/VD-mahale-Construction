import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiXCircle } from 'react-icons/fi';

export const FormSuccess = ({ message }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    className="glass-card p-10 text-center border-success/30"
  >
    <div className="w-20 h-20 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto mb-6">
      <FiCheckCircle size={40} />
    </div>
    <h3 className="text-2xl font-bold mb-2">Submission Successful!</h3>
    <p className="text-secondary">{message || 'We will get back to you shortly.'}</p>
  </motion.div>
);

export const InputGroup = ({ label, children, error, icon: Icon }) => (
  <div className="mb-6 w-full group">
    <label className="block text-xs font-black uppercase tracking-[0.2em] text-muted mb-2 transition-colors group-focus-within:text-accent">
      {label}
    </label>
    <div className="relative">
      {Icon && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted group-focus-within:text-accent transition-colors">
          <Icon size={18} />
        </div>
      )}
      {children}
      <div className="absolute bottom-0 left-0 h-0.5 bg-accent w-0 transition-all duration-300 group-focus-within:w-full"></div>
    </div>
    {error && (
      <motion.span 
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-[10px] text-error font-bold mt-1 block uppercase tracking-wider"
      >
        {error}
      </motion.span>
    )}
  </div>
);
