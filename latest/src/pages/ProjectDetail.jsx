import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { FiArrowLeft, FiMapPin, FiCalendar, FiUser, FiBarChart } from 'react-icons/fi';
import PageHero from '../components/common/PageHero';
import CTASection from '../components/common/CTASection';
import { projectsData } from '../data/projectsData';
import '../components/projects/ProjectDetail.css';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projectsData.find(p => p.slug === slug);

  if (!project) return <Navigate to="/projects" />;

  const breadcrumbItems = [
    { label: 'Our Projects', path: '/projects' },
    { label: project.title, path: `/projects/${slug}` }
  ];

  return (
    <div className="project-detail-page">
      <PageHero 
        title={project.title}
        subtitle={`${project.client} | ${project.location}`}
        backgroundImage={project.image}
        breadcrumbItems={breadcrumbItems}
      />

      <section className="project-detail-body">
        <div className="container">
          <div className="project-content-grid">
            <div className="project-main-info">
              <Link to="/projects" className="back-link"><FiArrowLeft /> Back to Projects</Link>
              
              <div className="content-block">
                <h2>Project Overview</h2>
                <p>{project.shortDescription}</p>
                <p>
                  Execution of major infrastructure projects requires precise planning and a robust 
                  supply chain. For the {project.title}, VD Mahale Infra prioritized quality control 
                  and ecological safety throughout the construction phase.
                </p>
              </div>

              {project.highlights && (
                <div className="highlights-grid">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="highlight-item">
                      <span className="h-label">{h.label}</span>
                      <span className="h-value">{h.value}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="project-gallery-preview">
                <h3>Site Gallery</h3>
                <div className="preview-grid">
                  <img src={project.image} alt="Site 1" />
                  <img src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=400" alt="Site 2" />
                  <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=400" alt="Site 3" />
                </div>
              </div>
            </div>

            <aside className="project-sidebar">
              <div className="project-stats-card">
                <div className="sidebar-stat">
                  <FiUser />
                  <div>
                    <span>Client</span>
                    <strong>{project.client}</strong>
                  </div>
                </div>
                <div className="sidebar-stat">
                  <FiMapPin />
                  <div>
                    <span>Location</span>
                    <strong>{project.location}</strong>
                  </div>
                </div>
                <div className="sidebar-stat">
                  <FiCalendar />
                  <div>
                    <span>Start Date</span>
                    <strong>{project.startDate}</strong>
                  </div>
                </div>
                <div className="sidebar-stat">
                  <FiBarChart />
                  <div>
                    <span>Project Value</span>
                    <strong>₹{project.value} Cr</strong>
                  </div>
                </div>
              </div>

              <div className="sidebar-progress-card">
                <h4>Execution Progress</h4>
                <div className="radial-progress">
                  <svg viewBox="0 0 36 36" className="circular-chart">
                    <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path className="circle" strokeDasharray={`${project.completion}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <text x="18" y="20.35" className="percentage">{project.completion}%</text>
                  </svg>
                </div>
                <p>Scheduled for completion within {project.duration || 'N/A'}.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default ProjectDetail;
