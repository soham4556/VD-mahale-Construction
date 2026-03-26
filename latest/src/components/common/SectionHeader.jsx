import React from 'react';
import './SectionHeader.css';

const SectionHeader = ({ 
  label, 
  title, 
  subtitle, 
  align = 'center', 
  theme = 'light',
  className = '' 
}) => {
  return (
    <div className={`section-header section-header--${align} section-header--${theme} ${className} is-visible`}>
      {label && <span className="section-header__label">{label}</span>}
      <h2 className="section-header__title">{title}</h2>
      {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
