import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiCheckCircle, FiUsers } from 'react-icons/fi';
import './HeroStats.css';

const HeroStats = () => {
  const stats = [
    { icon: FiAward, label: 'Years of Excellence', value: '25+', color: '#F57C20' },
    { icon: FiCheckCircle, label: 'Projects Completed', value: '500+', color: '#003366' },
    { icon: FiUsers, label: 'Satisfied Clients', value: '1000+', color: '#25D366' }
  ];

  return (
    <div className="hero-stats-floating">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 + index * 0.2, duration: 0.8 }}
          className="hero-stat-pill"
        >
          <div className="stat-icon-glass" style={{ color: stat.color }}>
            <stat.icon />
          </div>
          <div className="stat-info">
            <span className="stat-val-small">{stat.value}</span>
            <span className="stat-lbl-small">{stat.label}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default HeroStats;
