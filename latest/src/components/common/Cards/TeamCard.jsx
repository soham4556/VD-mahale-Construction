import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import { useMagneticTilt } from '../../../hooks/useMagneticTilt';
import '../../../styles/cards.css';

const TeamCard = ({ name, role, image, linkedin, twitter, email, delay = 0 }) => {
  const { tiltStyles, onMouseMove, handleMouseLeave } = useMagneticTilt(4);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.7 }}
      onMouseMove={onMouseMove}
      onMouseLeave={handleMouseLeave}
      className="premium-card-base team-card"
      style={tiltStyles}
    >
      <div className="shine-sweep"></div>
      <div className="border-glow"></div>
      
      <div className="card-image-wrapper team-img-h">
        <img src={image} alt={name} />
        <div className="card-image-overlay"></div>
        <div className="team-social-floater">
          {linkedin && <a href={linkedin} className="social-pill-glass"><FiLinkedin /></a>}
          {twitter && <a href={twitter} className="social-pill-glass"><FiTwitter /></a>}
          {email && <a href={`mailto:${email}`} className="social-pill-glass"><FiMail /></a>}
        </div>
      </div>
      
      <div className="team-content p-6 text-center">
        <h4 className="text-xl font-bold text-nav-heading mb-1">{name}</h4>
        <p className="text-accent text-sm font-bold uppercase tracking-widest">{role}</p>
      </div>
    </motion.div>
  );
};

export default TeamCard;
