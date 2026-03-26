import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHome, FiLayers, FiBriefcase, FiMail, FiSearch } from 'react-icons/fi';
import './BottomBar.css';

const BottomBar = () => {
  const tabs = [
    { icon: FiHome, label: 'Home', path: '/' },
    { icon: FiLayers, label: 'Services', path: '/services' },
    { icon: FiBriefcase, label: 'Projects', path: '/projects' },
    { icon: FiMail, label: 'Contact', path: '/contact' }
  ];

  return (
    <div className="bottom-bar-wrapper hide-desktop">
      <nav className="bottom-bar-glass">
        {tabs.map((tab) => (
          <NavLink 
            key={tab.path} 
            to={tab.path} 
            className={({ isActive }) => `bottom-tab ${isActive ? 'active' : ''}`}
            aria-label={`Navigate to ${tab.label}`}
          >
            <div className="tab-icon">
              <tab.icon />
            </div>
            <span className="tab-label">{tab.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default BottomBar;
