import React from 'react';
import { FiPhone, FiMail, FiMapPin, FiLock } from 'react-icons/fi';
import { FaLinkedinIn, FaFacebookF, FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <div className="top-bar hide-mobile" style={{
      height: '44px',
      backgroundColor: 'white',
      borderBottom: '1px solid var(--border-light)',
      fontSize: '13px',
      color: 'var(--text-light)',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <div style={{ display: 'flex', gap: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FiPhone className="text-orange" size={14} />
            <span>+91-20-4123-4567</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FiMail className="text-orange" size={14} />
            <span>info@vdmahaleinfra.com</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FiMapPin className="text-orange" size={14} />
            <span>Pune, Maharashtra</span>
          </div>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
          <div style={{ display: 'flex', gap: '15px' }}>
            <a href="#" className="social-link"><FaLinkedinIn /></a>
            <a href="#" className="social-link"><FaFacebookF /></a>
            <a href="#" className="social-link"><FaTwitter /></a>
            <a href="#" className="social-link"><FaInstagram /></a>
          </div>
          <Link to="/erp-login" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '6px', 
            fontWeight: '600',
            color: 'var(--primary-blue)'
          }}>
            <FiLock size={14} />
            <span>ERP Login →</span>
          </Link>
        </div>
      </div>
      
      <style>{`
        .social-link { transition: var(--transition-fast); color: var(--text-muted); }
        .social-link:hover { color: var(--accent-orange); }
      `}</style>
    </div>
  );
};

export default TopBar;
