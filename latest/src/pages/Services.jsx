import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import PageHero from '../components/common/PageHero';
import SectionHeader from '../components/common/SectionHeader';
import CTASection from '../components/common/CTASection';
import { servicesData } from '../data/servicesData';
import '../components/services/Services.css';

const Services = () => {
  const breadcrumbItems = [{ label: 'Our Services', path: '/services' }];

  return (
    <div className="services-page">
      <PageHero 
        title="Comprehensive Infrastructure Solutions"
        subtitle="End-to-end expertise across the construction lifecycle."
        backgroundImage="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1600"
        breadcrumbItems={breadcrumbItems}
      />

      <section className="services-list-section">
        <div className="container">
          <div className="services-discovery-grid">
            {servicesData.map((service, index) => (
              <div 
                key={service.id} 
                className="service-discovery-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="service-discovery-img">
                  <img src={service.image} alt={service.title} />
                  <div className="service-discovery-num">{index + 1 < 10 ? `0${index + 1}` : index + 1}</div>
                </div>
                <div className="service-discovery-content">
                  <h3>{service.title}</h3>
                  <p>{service.fullDescription || service.shortDescription}</p>
                  
                  {service.specs && (
                    <div className="service-specs-mini">
                      {service.specs.slice(0, 2).map((spec, i) => (
                        <div key={i} className="spec-item">
                          <strong>{spec.label}:</strong> {spec.value}
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <Link to={`/services/${service.slug}`} className="btn btn-primary btn-sm mt-20">
                    Detailed Specifications <FiArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="features-strip bg-dark">
        <div className="container strip-grid">
          <div className="strip-item">
            <FiCheckCircle />
            <span>24/7 Batching Plant Support</span>
          </div>
          <div className="strip-item">
            <FiCheckCircle />
            <span>Class-A Quality Standards</span>
          </div>
          <div className="strip-item">
            <FiCheckCircle />
            <span>Timely Milestone Completion</span>
          </div>
        </div>
      </section>

      <CTASection 
        title="Need Specialized Infrastructure Support?"
        subtitle="Consult with our technical team for custom construction and material supply requirements."
        buttonText="Book a Consultation"
      />
    </div>
  );
};

export default Services;
