import React from 'react';
import { Link } from 'react-router-dom';
import { FiLock, FiArrowRight, FiInfo } from 'react-icons/fi';
import '../components/auth/ERPLogin.css';

const ERPLogin = () => {
  return (
    <div className="erp-login-page">
      <div className="erp-container">
        <div className="erp-card shadow-2xl">
          <div className="erp-header">
            <div className="erp-icon"><FiLock /></div>
            <h2>Internal ERP Access</h2>
            <p>Employees & Partner Login for VD Mahale Infra System</p>
          </div>
          
          <form className="erp-form">
            <div className="input-group">
              <label>Employee ID / Username</label>
              <input type="text" placeholder="Enter your ID" required />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input type="password" placeholder="••••••••" required />
            </div>
            
            <div className="form-utils">
              <label className="checkbox-container">
                <input type="checkbox" />
                <span className="checkmark"></span>
                Remember Me
              </label>
              <a href="#reset" className="forgot-link">Forgot Password?</a>
            </div>
            
            <button type="submit" className="btn btn-primary w-full">Security Login <FiArrowRight /></button>
          </form>
          
          <div className="erp-notice">
            <FiInfo />
            <span>Authorized Personnel Only. Access is Monitored.</span>
          </div>
        </div>
        
        <div className="back-to-site">
          <Link to="/">← Back to Corporate Website</Link>
        </div>
      </div>
      
      <style>{`
        .w-full { width: 100%; }
        .shadow-2xl { box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); }
      `}</style>
    </div>
  );
};

export default ERPLogin;
