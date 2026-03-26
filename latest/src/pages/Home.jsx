import React from 'react';
import HeroSection from '../components/home/HeroSection';
import StatsCounter from '../components/home/StatsCounter';
import AboutPreview from '../components/home/AboutPreview';
import ServicesGrid from '../components/home/ServicesGrid';
import FeaturedProjects from '../components/home/FeaturedProjects';
import InfrastructureSection from '../components/home/InfrastructureSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ClientLogos from '../components/home/ClientLogos';
import Testimonials from '../components/home/Testimonials';
import LatestNews from '../components/home/LatestNews';
import CertificationsBar from '../components/home/CertificationsBar';
import CTASection from '../components/common/CTASection';

const Home = () => {
  return (
    <div className="home-page">
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <HeroSection />

      <StatsCounter />
      <AboutPreview />
      <ServicesGrid />
      <InfrastructureSection />
      <WhyChooseUs />
      <FeaturedProjects />
      <ClientLogos />
      <Testimonials />
      <LatestNews />
      <CertificationsBar />
      <CTASection 
        title="Ready to Partner on Your Next Landmark Project?"
        subtitle="Combine our expertise, infrastructure, and delivery excellence for uncompromising results."
        showForm
      />
    </div>
  );
};

export default Home;
