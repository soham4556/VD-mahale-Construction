import React from 'react';
import PageHero from '../components/common/PageHero';
import '../components/legal/PrivacyPolicy.css';

const PrivacyPolicy = () => {
  const breadcrumbItems = [{ label: 'Privacy Policy', path: '/privacy' }];

  return (
    <div className="privacy-page">
      <PageHero 
        title="Privacy Policy"
        subtitle="Your data security and trust are paramount to us."
        breadcrumbItems={breadcrumbItems}
        backgroundImage="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1600"
      />

      <section className="privacy-content container">
        <div className="policy-block">
          <h2>1. Introduction</h2>
          <p>
            At VD Mahale Infra Pvt. Ltd., we respect your privacy and are committed to protecting 
            your personal data. This policy outlines how we handle information collected via our website.
          </p>
        </div>

        <div className="policy-block">
          <h2>2. Data We Collect</h2>
          <p>
            We collect information that you voluntarily provide when you submit a contact form or 
            job application. This includes your name, email, phone number, and professional history.
          </p>
        </div>

        <div className="policy-block">
          <h2>3. Cookies</h2>
          <p>
            Our website uses cookies to enhance user experience and analyze site traffic. You can 
            manage your cookie preferences via the banner provided on the homepage.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
