import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import './CTASection.css';

const CTASection = ({ 
  title = "Ready to Build Your Vision?", 
  subtitle = "Contact us today for a professional consultation and high-quality infrastructure solutions.",
  buttonText = "Get a Quote Now",
  buttonLink = "/contact",
  showForm = false
}) => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content" data-aos="zoom-in">
          <h2 className="cta-title">{title}</h2>
          <p className="cta-subtitle">{subtitle}</p>
          
          {showForm ? (
            <form className="cta-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <select required>
                <option value="">Project Type</option>
                <option value="highways">Highways</option>
                <option value="bridges">Bridges</option>
                <option value="rmc">RMC Supply</option>
                <option value="other">Other</option>
              </select>
              <button type="submit" className="btn btn-primary">Submit Inquiry <FiArrowRight /></button>
            </form>
          ) : (
            <Link to={buttonLink} className="btn btn-primary btn-lg">
              {buttonText} <FiArrowRight />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
