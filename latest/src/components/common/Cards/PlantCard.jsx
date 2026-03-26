import React from 'react';
import { motion } from 'framer-motion';
import { FiSettings, FiActivity } from 'react-icons/fi';
import { useMagneticTilt } from '../../../hooks/useMagneticTilt';
import '../../../styles/cards.css';

const PlantCard = ({ name, type, location, capacity, image, delay = 0 }) => {
  const { tiltStyles, onMouseMove, handleMouseLeave } = useMagneticTilt(4);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      onMouseMove={onMouseMove}
      onMouseLeave={handleMouseLeave}
      className="premium-card-base plant-card"
      style={tiltStyles}
    >
      <div className="shine-sweep"></div>
      <div className="border-glow"></div>
      
      <div className="card-image-wrapper plant-img-h">
        <img src={image} alt={name} />
        <div className="card-image-overlay"></div>
        <div className="plant-tech-badge">
          <FiSettings className="animate-spin-slow" /> Advanced Tech
        </div>
      </div>
      
      <div className="plant-content p-6">
        <div className="flex justify-between items-end mb-4">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-accent mb-1 inline-block">{type}</span>
            <h4 className="text-xl font-bold text-nav-heading">{name}</h4>
          </div>
          <div className="plant-cap-bubble glass-card px-3 py-1 text-[10px] font-bold">
            {capacity}
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-muted mb-6">
          <FiActivity /> {location}
        </div>
        
        <button className="btn-glass-sm w-full">View Specifications</button>
      </div>
    </motion.div>
  );
};

export default PlantCard;
