import React from 'react';
import { motion } from 'framer-motion';
import { FiMaximize2, FiMapPin } from 'react-icons/fi';
import { useMagneticTilt } from '../../../hooks/useMagneticTilt';
import '../../../styles/cards.css';

const ProjectCard = ({ title, location, category, image, slug, delay = 0 }) => {
  const { tiltStyles, onMouseMove, handleMouseLeave } = useMagneticTilt(3);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      onMouseMove={onMouseMove}
      onMouseLeave={handleMouseLeave}
      className="premium-card-base project-card"
      style={tiltStyles}
    >
      <div className="shine-sweep"></div>
      <div className="border-glow"></div>
      
      <div className="card-image-wrapper">
        <img src={image} alt={title} />
        <div className="card-image-overlay"></div>
        <div className="project-category-chip">{category}</div>
      </div>
      
      <div className="project-content p-6">
        <div className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest mb-2">
          <FiMapPin size={14} />
          {location}
        </div>
        
        <h4 className="text-xl font-bold mb-6 text-nav-heading line-clamp-1">{title}</h4>
        
        <div className="flex justify-between items-center">
          <a href={`/projects/${slug}`} className="btn-premium-pilled-sm">
            Details
          </a>
          <button className="icon-btn-glass" title="View Gallery">
            <FiMaximize2 />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
