import React from 'react';
import PageHero from '../components/common/PageHero';
import InfrastructureSection from '../components/home/InfrastructureSection';
import CTASection from '../components/common/CTASection';
import { infrastructureData } from '../data/infrastructureData';
import { FiSettings, FiCheckCircle } from 'react-icons/fi';
import '../components/infrastructure/Infrastructure.css';

const Infrastructure = () => {
  const breadcrumbItems = [{ label: 'Infrastructure', path: '/infrastructure' }];

  return (
    <div className="infrastructure-page">
      <PageHero 
        title="Engineering Might"
        subtitle="Exploring the production units and machinery that power our quality promise."
        backgroundImage="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1600"
        breadcrumbItems={breadcrumbItems}
      />

      <section className="infra-detail-intro">
        <div className="container">
          <div className="discovery-intro">
            <h2>Self-Reliance through Asset Ownership</h2>
            <p>
              Unlike most contractors, VD Mahale Infra owns and operates high-capacity material 
              production units. This vertical integration allows us to control the chemistry of 
              our roads and the strength of our bridges from the raw material stage.
            </p>
          </div>
        </div>
      </section>

      <InfrastructureSection />

      <section className="fleet-capabilities">
        <div className="container">
          <div className="fleet-header">
            <h3>Machine Power & Technology</h3>
            <p>Our fleet consists of the latest sensors-based pavers, robotic batching plants, and heavy earthmovers.</p>
          </div>
          
          <div className="fleet-extended-grid">
            {infrastructureData.fleet.map((item, idx) => (
              <div key={idx} className="extend-fleet-card" data-aos="fade-up">
                <FiSettings />
                <div>
                  <h4>{item.type}</h4>
                  <p>{item.models}</p>
                  <span className="fleet-qty">{item.count} Units Active</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Infrastructure;
