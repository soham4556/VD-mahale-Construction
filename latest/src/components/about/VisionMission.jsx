import React from 'react';
import { FiEye, FiTarget, FiHeart } from 'react-icons/fi';
import SectionHeader from '../common/SectionHeader';
import { companyData } from '../../data/companyData';
import './VisionMission.css';

const VisionMission = () => {
  return (
    <section className="vision-section">
      <div className="container">
        <div className="vision-grid">
          <div className="vision-card" data-aos="fade-up">
            <div className="vision-icon-box"><FiEye /></div>
            <h3>Our Vision</h3>
            <p>{companyData.vision}</p>
          </div>
          
          <div className="vision-card active" data-aos="fade-up" data-aos-delay="100">
            <div className="vision-icon-box"><FiTarget /></div>
            <h3>Our Mission</h3>
            <ul className="mission-list">
              {companyData.mission.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          
          <div className="vision-card" data-aos="fade-up" data-aos-delay="200">
            <div className="vision-icon-box"><FiHeart /></div>
            <h3>Core Values</h3>
            <div className="values-mini-grid">
              {companyData.coreValues.map((val, idx) => (
                <div key={idx} className="value-chip">
                  <strong>{val.title}</strong>
                  <span>{val.description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
