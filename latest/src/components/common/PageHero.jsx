import React from 'react';
import Breadcrumb from './Breadcrumb';

const PageHero = ({ title, subtitle, backgroundImage, breadcrumbItems }) => {
  return (
    <section className="page-hero" style={{
      height: '400px',
      minHeight: '400px',
      background: `linear-gradient(rgba(10,22,40,0.7), rgba(10,22,40,0.7)), url(${backgroundImage || 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1600'})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      padding: 0,
    }}>
      <div className="container">
        <div style={{ maxWidth: '800px' }}>
          {breadcrumbItems && <Breadcrumb items={breadcrumbItems} />}
          <h1 style={{ color: 'white', marginBottom: '15px' }}>{title}</h1>
          {subtitle && <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', marginBottom: 0 }}>{subtitle}</p>}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
