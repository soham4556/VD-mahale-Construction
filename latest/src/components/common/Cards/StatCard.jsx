import React from 'react';
import { motion } from 'framer-motion';
import { useCountUp } from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { useMagneticTilt } from '../../../hooks/useMagneticTilt';
import '../../../styles/cards.css';

const StatCard = ({ label, value, suffix = "+", delay = 0 }) => {
  const countRef = React.useRef(null);
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { tiltStyles, onMouseMove, handleMouseLeave } = useMagneticTilt(10);

  const { start } = useCountUp({
    ref: countRef,
    start: 0,
    end: value,
    duration: 2,
    startOnMount: false,
  });

  React.useEffect(() => {
    if (inView && countRef.current) start();
  }, [inView, start]);

  return (
    <motion.div
      ref={inViewRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      onMouseMove={onMouseMove}
      onMouseLeave={handleMouseLeave}
      className="premium-card-base stat-card p-8 text-center"
      style={tiltStyles}
    >
      <div className="shine-sweep"></div>
      <div className="stat-value-container mb-2">
        <span ref={countRef} className="stat-val font-black">0</span>
        <span className="stat-suffix font-bold text-accent">{suffix}</span>
      </div>
      <p className="stat-lbl text-xs font-black uppercase tracking-[0.2em] text-muted">{label}</p>
    </motion.div>
  );
};

export default StatCard;
