import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { teamData } from '../../data/teamData';
import './ChairmanMessage.css';

const ChairmanMessage = () => {
  const chairman = teamData[0];

  return (
    <section className="chairman-section">
      <div className="container">
        <div className="chairman-grid">
          <div className="chairman-img-box" data-aos="fade-right">
            <img src={chairman.photo} alt={chairman.name} />
            <div className="experience-sticker">
              <strong>30+</strong>
              <span>Years of Legacy</span>
            </div>
          </div>
          
          <div className="chairman-text" data-aos="fade-left">
            <SectionHeader 
              align="left"
              label="Leadership Message"
              title="From the Desk of Our Chairman"
            />
            <div className="message-body">
              <p>
                "At VD Mahale Infra, our journey has always been about more than just construction. 
                It's about laying the foundations for India's tomorrow. We started with a vision to 
                deliver quality that stands the test of time, and today, that vision resonates in 
                every highway, bridge, and canal we build."
              </p>
              <p>
                Our strength lies in our self-reliance. By owning our production plants and equipment fleet, 
                we ensure that every cubic meter of concrete and every ton of asphalt meets our 
                uncompromising standards.
              </p>
              <p>
                As we look ahead, we remain committed to innovation, sustainability, and the trust 
                that our clients and the nation have placed in us.
              </p>
            </div>
            
            <div className="chairman-sign">
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Signature_of_Abraham_Lincoln.svg" alt="Signature" />
              <div className="sign-info">
                <h4>{chairman.name}</h4>
                <p>{chairman.designation}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChairmanMessage;
