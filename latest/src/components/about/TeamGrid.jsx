import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { teamData } from '../../data/teamData';
import { FaLinkedinIn } from 'react-icons/fa';
import './TeamGrid.css';

const TeamGrid = () => {
  return (
    <section className="team-section">
      <div className="container">
        <SectionHeader 
          label="Our Team"
          title="The Visionary Leadership"
          subtitle="Guided by experience and driven by innovation, our leadership team steer the company toward engineering excellence."
        />

        <div className="team-grid">
          {teamData.map((member, idx) => (
            <div 
              key={member.id} 
              className="team-card-v2"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="team-img">
                <img src={member.photo} alt={member.name} />
                <div className="team-social">
                  <a href={member.linkedin} className="social-link"><FaLinkedinIn /></a>
                </div>
              </div>
              <div className="team-info">
                <h4>{member.name}</h4>
                <p className="team-role">{member.designation}</p>
                {member.bio && <p className="team-bio">{member.bio}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGrid;
