import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiMapPin, FiFilter } from 'react-icons/fi';
import PageHero from '../components/common/PageHero';
import SectionHeader from '../components/common/SectionHeader';
import CTASection from '../components/common/CTASection';
import { projectsData } from '../data/projectsData';
import '../components/projects/Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const breadcrumbItems = [{ label: 'Our Projects', path: '/projects' }];

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeFilter);

  const categories = ['all', 'road', 'bridge', 'irrigation'];

  return (
    <div className="projects-page">
      <PageHero 
        title="Our Infrastructure Portfolio"
        subtitle="Transforming landscapes through engineering excellence and timely delivery."
        backgroundImage="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1600"
        breadcrumbItems={breadcrumbItems}
      />

      <section className="projects-gallery-section">
        <div className="container">
          <div className="gallery-header">
            <div className="total-projects">
              Showing <strong>{filteredProjects.length}</strong> Projects
            </div>
            
            <div className="gallery-filters">
              <FiFilter className="filter-icon" />
              {categories.map(cat => (
                <button 
                  key={cat}
                  className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                  onClick={() => setActiveFilter(cat)}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="gallery-grid">
            {filteredProjects.map((project, idx) => (
              <div 
                key={project.id} 
                className="gallery-card"
                data-aos="fade-up"
                data-aos-delay={(idx % 3) * 100}
              >
                <div className="gallery-img-box">
                  <img src={project.image} alt={project.title} />
                  <div className={`status-tag ${project.status}`}>{project.status}</div>
                </div>
                <div className="gallery-info">
                  <div className="gallery-meta">
                    <span><FiMapPin /> {project.location}</span>
                    <span className="cat-tag">{project.category}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <Link to={`/projects/${project.slug}`} className="read-more-link">
                    View Project Details <FiArrowRight />
                  </Link>
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

export default Projects;
