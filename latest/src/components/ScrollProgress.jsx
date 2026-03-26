import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-accent origin-left z-[100] shadow-glow-orange"
      style={{ scaleX }}
    >
      <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-r from-transparent to-white/50 blur-sm" />
    </motion.div>
  );
};

export default ScrollProgress;
