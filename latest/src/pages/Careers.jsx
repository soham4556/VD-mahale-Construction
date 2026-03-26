import React, { useState } from 'react';
import PageHero from '../components/common/PageHero';
import { jobsData } from '../data/jobsData';
import { FiBriefcase, FiMapPin, FiClock, FiArrowRight, FiCheck } from 'react-icons/fi';
import CTASection from '../components/common/CTASection';
import '../components/careers/Careers.css';

const Careers = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);

  const handleApply = (jobId) => {
    if (appliedJobs.includes(jobId)) return;
    setAppliedJobs(prev => [...prev, jobId]);
    alert('Thank you for applying! Our HR team will review your profile.');
  };
  const breadcrumbItems = [{ label: 'Careers', path: '/careers' }];

  return (
    <div className="careers-page">
      <PageHero 
        title="Build Your Future With Us"
        subtitle="Join a team of visionaries reshaping India's infrastructure landscape."
        backgroundImage="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1600"
        breadcrumbItems={breadcrumbItems}
      />

      <section className="careers-intro">
        <div className="container">
          <div className="careers-text">
            <h2>Why Work at VD Mahale Infra?</h2>
            <p>
              We offer more than just a job; we offer a platform to lead challenging projects, 
              access to state-of-the-art machinery, and a culture of engineering excellence.
            </p>
          </div>
          
          <div className="perks-grid">
            <div className="perk-card">
              <span>🚀</span>
              <h4>Rapid Growth</h4>
              <p>Promotions and responsibilities based strictly on project performance.</p>
            </div>
            <div className="perk-card">
              <span>🏗️</span>
              <h4>Latest Tech</h4>
              <p>Work with the most advanced sensing and batching equipment in India.</p>
            </div>
            <div className="perk-card">
              <span>🌳</span>
              <h4>Eco-Safety</h4>
              <p>Training in sustainable construction and environmental protection.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="open-positions bg-light">
        <div className="container">
          <div className="positions-header">
            <h3>Current Openings</h3>
            <p>Start your journey toward engineering leadership today.</p>
          </div>
          
          <div className="jobs-list">
            {jobsData.map((job) => (
              <div key={job.id} className="job-card" data-aos="fade-up">
                <div className="job-main">
                  <div className="job-title-box">
                    <FiBriefcase className="job-icon" />
                    <div>
                      <h4>{job.title}</h4>
                      <span>{job.department}</span>
                    </div>
                  </div>
                  <div className="job-meta-box">
                    <span><FiMapPin /> {job.location}</span>
                    <span><FiClock /> {job.type}</span>
                  </div>
                </div>
                <div className="job-actions">
                  <span className="job-exp">Exp: {job.experience}</span>
                  <button 
                    className={`btn btn-sm ${appliedJobs.includes(job.id) ? 'btn-success' : 'btn-primary'}`}
                    onClick={() => handleApply(job.id)}
                    disabled={appliedJobs.includes(job.id)}
                  >
                    {appliedJobs.includes(job.id) ? <><FiCheck /> Applied</> : <>Apply Now <FiArrowRight /></>}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Don't See a Fitting Role?"
        subtitle="Send your CV anyway, and our HR team will reach out if a new project matches your profile."
        buttonText="Drop Resume"
      />
    </div>
  );
};

export default Careers;
