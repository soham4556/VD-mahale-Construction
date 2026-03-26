import React, { useEffect, useRef } from 'react';
import { useCountUp } from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { companyData } from '../../data/companyData';
import './StatsCounter.css';

const StatBox = ({ label, value, suffix = "+", delay = 0 }) => {
  const countRef = useRef(null);
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { start } = useCountUp({
    ref: countRef,
    start: 0,
    end: value,
    duration: 2,
    startOnMount: false,
  });

  useEffect(() => {
    if (inView && countRef.current) {
      start();
    }
  }, [inView, start]);

  return (
    <div className="stat-box" ref={inViewRef} data-aos="fade-up" data-aos-delay={delay}>
      <h2 className="stat-number">
        <span ref={countRef}>0</span>
        <span className="stat-suffix">{suffix}</span>
      </h2>
      <p className="stat-label">{label}</p>
    </div>
  );
};

const StatsCounter = () => {
  const { statistics } = companyData;

  return (
    <div className="stats-container">
      <div className="container">
        <div className="stats-grid">
          <StatBox label="Years Experience" value={statistics.years} delay={0} />
          <StatBox label="Projects Completed" value={statistics.projects} delay={100} />
          <StatBox label="Construction Fleet" value={statistics.fleet} delay={200} />
          <StatBox label="States Presence" value={statistics.states} suffix="" delay={300} />
        </div>
      </div>
    </div>
  );
};

export default StatsCounter;
