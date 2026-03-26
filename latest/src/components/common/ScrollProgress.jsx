import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import './ScrollProgress.css';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stagger: 0.1,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div 
      className="scroll-progress-bar" 
      style={{ scaleX }} 
    />
  );
};

export default ScrollProgress;
