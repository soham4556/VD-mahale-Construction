import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight, FiHome } from 'react-icons/fi';

const Breadcrumb = ({ items }) => {
  return (
    <nav className="breadcrumb" style={{ marginBottom: '20px' }}>
      <ul style={{ 
        display: 'flex', 
        listStyle: 'none', 
        alignItems: 'center', 
        gap: '10px',
        fontSize: '13px',
        color: 'rgba(255,255,255,0.85)'

      }}>
        <li style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'inherit' }}>
            <FiHome size={14} /> Home
          </Link>
        </li>
        
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <li><FiChevronRight size={12} /></li>
            <li>
              {index === items.length - 1 ? (
                <span style={{ color: 'var(--accent-orange)', fontWeight: '600' }}>{item.label}</span>
              ) : (
                <Link to={item.path} style={{ color: 'inherit' }}>{item.label}</Link>
              )}
            </li>
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
