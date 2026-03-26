import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiMapPin, FiClock } from 'react-icons/fi';
import { useMagneticTilt } from '../../../hooks/useMagneticTilt';
import '../../../styles/cards.css';

const JobCard = ({ title, location, type, experience, delay = 0 }) => {
  const { tiltStyles, onMouseMove, handleMouseLeave } = useMagneticTilt(5);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      onMouseMove={onMouseMove}
      onMouseLeave={handleMouseLeave}
      className="premium-card-base job-card p-8"
      style={tiltStyles}
    >
      <div className="shine-sweep"></div>
      <div className="border-glow"></div>
      
      <div className="job-card-header flex justify-between items-start mb-6">
        <div className="job-badge-glass">
          <FiBriefcase className="mr-2" /> {type}
        </div>
        <div className="job-exp text-accent font-bold text-xs uppercase tracking-widest">
          {experience}
        </div>
      </div>
      
      <h4 className="text-2xl font-bold text-nav-heading mb-4">{title}</h4>
      
      <div className="job-meta flex items-center gap-6 text-sm text-muted mb-8">
        <div className="flex items-center gap-2"><FiMapPin /> {location}</div>
        <div className="flex items-center gap-2"><FiClock /> Full Time</div>
      </div>
      
      <button className="btn-premium-pilled w-full">Apply Now</button>
    </motion.div>
  );
};

export default JobCard;
