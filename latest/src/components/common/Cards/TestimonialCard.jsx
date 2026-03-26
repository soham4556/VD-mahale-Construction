import React from 'react';
import { motion } from 'framer-motion';
import { FiMessageSquare } from 'react-icons/fi';
import { useMagneticTilt } from '../../../hooks/useMagneticTilt';
import '../../../styles/cards.css';

const TestimonialCard = ({ content, author, role, company, image, delay = 0 }) => {
  const { tiltStyles, onMouseMove, handleMouseLeave } = useMagneticTilt(2);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      onMouseMove={onMouseMove}
      onMouseLeave={handleMouseLeave}
      className="premium-card-base testimonial-card p-10"
      style={tiltStyles}
    >
      <div className="shine-sweep"></div>
      <div className="quote-icon-glass">
        <FiMessageSquare />
      </div>

      <div className="testimonial-body mb-8">
        <p className="text-lg italic text-secondary leading-relaxed">
          "{content}"
        </p>
      </div>
      
      <div className="testimonial-footer flex items-center gap-4">
        <div className="author-img-glass">
          <img src={image || 'https://via.placeholder.com/80'} alt={author} />
        </div>
        <div className="author-info">
          <h5 className="font-bold text-nav-heading">{author}</h5>
          <p className="text-xs text-muted font-medium">{role}, {company}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
