import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiArrowRight } from 'react-icons/fi';
import { useMagneticTilt } from '../../../hooks/useMagneticTilt';
import '../../../styles/cards.css';

const NewsCard = ({ date, category, title, excerpt, image, slug, delay = 0 }) => {
  const { tiltStyles, onMouseMove, handleMouseLeave } = useMagneticTilt(3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.7 }}
      onMouseMove={onMouseMove}
      onMouseLeave={handleMouseLeave}
      className="premium-card-base news-card"
      style={tiltStyles}
    >
      <div className="shine-sweep"></div>
      <div className="border-glow"></div>
      
      <div className="card-image-wrapper news-img-h">
        <img src={image} alt={title} />
        <div className="card-image-overlay"></div>
        <div className="news-cat-tag">{category}</div>
      </div>
      
      <div className="news-content p-6">
        <div className="flex items-center gap-2 text-muted text-xs font-bold mb-3">
          <FiCalendar />
          {date}
        </div>
        
        <h4 className="text-xl font-bold text-nav-heading mb-4 line-clamp-2">{title}</h4>
        <p className="text-secondary text-sm mb-6 line-clamp-2">{excerpt}</p>
        
        <a href={`/media/${slug}`} className="news-link-btn">
          Read More <FiArrowRight />
        </a>
      </div>
    </motion.div>
  );
};

export default NewsCard;
