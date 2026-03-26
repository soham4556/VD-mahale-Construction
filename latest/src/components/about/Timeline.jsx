import React from 'react';
import SectionHeader from '../common/SectionHeader';
import './Timeline.css';

const milestones = [
  { year: '1999', title: 'The Inception', desc: 'VD Mahale Construction founded as a small civil works firm in Pune.' },
  { year: '2005', title: 'Class A Registration', desc: 'Achieved the highest tier government contractor registration.' },
  { year: '2012', title: 'Plant Expansion', desc: 'Inaugurated our first high-capacity RMC and Hotmix plants.' },
  { year: '2018', title: 'Major NH Project', desc: 'Awarded the multi-crore highway expansion project for NHAI.' },
  { year: '2024', title: 'Infra Excellence', desc: 'Now a leading name in Maharashtra with a fleet of 100+ machines.' }
];

const Timeline = () => {
  return (
    <section className="timeline-section bg-light">
      <div className="container">
        <SectionHeader 
          label="Our History"
          title="The Journey of Excellence"
          subtitle="From humble beginnings to a powerhouse in infrastructure development."
        />

        <div className="timeline-container">
          {milestones.map((item, idx) => (
            <div key={idx} className="timeline-item" data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-content">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
          <div className="timeline-line"></div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
