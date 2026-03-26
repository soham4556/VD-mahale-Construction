import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { useMagneticTilt } from '../../../hooks/useMagneticTilt';
import '../../../styles/cards.css';

const ServiceCard = ({ icon: Icon, title, description, slug, delay = 0 }) => {
  const { tiltStyles, onMouseMove, handleMouseLeave } = useMagneticTilt(5);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      onMouseMove={onMouseMove}
      onMouseLeave={handleMouseLeave}
      className="premium-card-base service-card"
      style={tiltStyles}
    >
      <div className="shine-sweep"></div>
      <div className="border-glow"></div>
      <div className="inner-shine"></div>
      
      <div className="service-card-content p-8">
        <div className="service-icon-wrapper mb-6">
          <div className="icon-glass">
            <Icon size={32} />
          </div>
        </div>
        
        <h3 className="text-2xl font-bold mb-4 text-nav-heading">{title}</h3>
        <p className="text-secondary mb-8 line-clamp-3">{description}</p>
        
        <a href={`/services/${slug}`} className="btn-glass-sm group/link">
          Learn More 
          <FiArrowRight className="ml-2 transition-transform group-hover/link:translate-x-2" />
        </a>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
