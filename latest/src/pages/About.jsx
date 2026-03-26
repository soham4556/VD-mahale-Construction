import React from 'react';
import PageHero from '../components/common/PageHero';
import VisionMission from '../components/about/VisionMission';
import ChairmanMessage from '../components/about/ChairmanMessage';
import Timeline from '../components/about/Timeline';
import TeamGrid from '../components/about/TeamGrid';
import CTASection from '../components/common/CTASection';

const About = () => {
  const breadcrumbItems = [
    { label: 'About Us', path: '/about' }
  ];

  return (
    <div className="about-page">
      <PageHero 
        title="Our Legacy. Your Future."
        subtitle="25 years of building trust and infrastructure across India."
        backgroundImage="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1600"
        breadcrumbItems={breadcrumbItems}
      />
      <VisionMission />
      <ChairmanMessage />
      <Timeline />
      <TeamGrid />
      <CTASection 
        title="Help Us Build a Better India"
        subtitle="We're always looking for talented engineers and visionaries to join our growing team."
        buttonText="View Careers"
        buttonLink="/careers"
      />
    </div>
  );
};

export default About;
