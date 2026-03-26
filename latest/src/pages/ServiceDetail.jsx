import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { FiArrowLeft, FiCheckCircle, FiInfo } from 'react-icons/fi';
import PageHero from '../components/common/PageHero';
import CTASection from '../components/common/CTASection';
import { servicesData } from '../data/servicesData';
import '../components/services/ServiceDetail.css';

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = servicesData.find(s => s.slug === slug);

  if (!service) return <Navigate to="/services" />;

  const breadcrumbItems = [
    { label: 'Our Services', path: '/services' },
    { label: service.title, path: `/services/${slug}` }
  ];

  return (
    <div className="service-detail-page">
      <PageHero 
        title={service.title}
        subtitle="High-performance infrastructure solutions engineered for reliability."
        backgroundImage={service.image}
        breadcrumbItems={breadcrumbItems}
      />

      <section className="service-detail-body">
        <div className="container">
          <div className="detail-layout">
            <div className="detail-main">
              <Link to="/services" className="back-link"><FiArrowLeft /> Back to Services</Link>
              
              <div className="content-block">
                <h2>Project Specification & Methodology</h2>
                <p>{service.fullDescription}</p>
              </div>

              {service.specs && (
                <div className="specs-grid-full">
                  {service.specs.map((spec, i) => (
                    <div key={i} className="full-spec-card">
                      <FiInfo className="text-orange" />
                      <div>
                        <h4>{spec.label}</h4>
                        <p>{spec.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="content-block">
                <h3>Our Commitment</h3>
                <p>
                  We ensure strict adherence to Indian Road Congress (IRC) standards and local municipal 
                  compliance. Every project undergoes multi-stage quality checks at our NABL certified 
                  in-house testing laboratories.
                </p>
              </div>
            </div>

            <aside className="detail-sidebar">
              <div className="sidebar-card contact-card">
                <h3>Request a Quote</h3>
                <p>Get a response within 24 hours from our technical team.</p>
                <form className="sidebar-form">
                  <input type="text" placeholder="Full Name" required />
                  <input type="email" placeholder="Email Address" required />
                  <textarea placeholder="Tell us about your project requirements..." rows="4" required></textarea>
                  <button type="submit" className="btn btn-primary w-full">Request Quote</button>
                </form>
              </div>

              <div className="sidebar-card links-card">
                <h3>Other Services</h3>
                <ul className="sidebar-links">
                  {servicesData.filter(s => s.id !== service.id).slice(0, 4).map(s => (
                    <li key={s.id}>
                      <Link to={`/services/${s.slug}`}>{s.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTASection />
      
      <style>{`
        .w-full { width: 100%; }
      `}</style>
    </div>
  );
};

export default ServiceDetail;
