import React from 'react';
import { FiAward, FiShield, FiClock, FiSettings } from 'react-icons/fi';
import SectionHeader from '../common/SectionHeader';
import './WhyChooseUs.css';

const reasons = [
  {
    icon: <FiAward />,
    title: "Class A Contractor",
    desc: "Highest tier government registration reflecting our proven track record and financial stability."
  },
  {
    icon: <FiSettings />,
    title: "Self-Reliance",
    desc: "Owning critical production units (Hotmix, RMC, Crushers) gives us unmatched quality control."
  },
  {
    icon: <FiClock />,
    title: "Timely Delivery",
    desc: "We strictly adhere to project milestones, often completing critical phases ahead of schedule."
  },
  {
    icon: <FiShield />,
    title: "Safety & Compliance",
    desc: "Uncompromising focus on workplace safety and environmental management standards."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="why-section">
      <div className="container">
        <div className="why-grid">
          <div className="why-text" data-aos="fade-up">
            <SectionHeader 
              align="left"
              label="Our Edge"
              title="Why Partner With VD Mahale Infra?"
              subtitle="With over 25 years in the field, we combine traditional expertise with modern engineering technology."
            />
            
            <div className="reasons-list">
              {reasons.map((reason, idx) => (
                <div key={idx} className="reason-item" data-aos="fade-up" data-aos-delay={idx * 100}>
                  <div className="reason-icon">{reason.icon}</div>
                  <div className="reason-info">
                    <h4>{reason.title}</h4>
                    <p>{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="why-image" data-aos="fade-left">
            <div className="experience-badge">
              <span>25+</span>
              <p>Years in Service</p>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1503387762-592be5a52680?auto=format&fit=crop&q=80&w=800" 
              alt="Project Site" 
              className="img-main-why" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
