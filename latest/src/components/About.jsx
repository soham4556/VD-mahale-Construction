import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiTarget, FiEye, FiCheckCircle, FiShield } from 'react-icons/fi';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="relative py-32 bg-primary overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Main Image with Glass Frame */}
            <div className="relative z-10 rounded-[2rem] overflow-hidden glass-card glass-l2 p-2 md:p-3">
              <img
                src="/images/about.png"
                alt="VD Mahale Construction Excellence"
                className="w-full h-[350px] sm:h-[450px] lg:h-[600px] object-cover rounded-[1.5rem] grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1121]/40 to-transparent pointer-events-none" />
            </div>

            {/* Experience Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-6 -right-4 md:-right-10 z-20 glass-card glass-l4 border-white/20 p-5 md:p-8 shadow-2xl"
            >
              <div className="text-3xl md:text-5xl font-black text-accent mb-1 font-mono tracking-tighter">18+</div>
              <div className="text-[9px] md:text-[10px] uppercase font-bold tracking-[0.3em] text-white/60 leading-tight">
                Years of Pure<br/>Engineering Excellence
              </div>
            </motion.div>

            {/* Decorative Shape */}
            <div className="absolute -top-10 -left-10 w-40 h-40 border-2 border-dashed border-white/10 rounded-full animate-spin-slow" />
          </motion.div>

          {/* Text Side */}
          <div className="space-y-10">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                className="overline-label mb-4"
              >
                Our Legacy
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
              >
                Crafting India's <br/>
                <span className="text-gradient-accent underline-effect">Modern Landmarks</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="text-secondary text-lg leading-relaxed"
              >
                Established in 2005, VD Mahale Infrastructure has emerged as a powerhouse 
                in civil engineering. We don't just build structures; we create life-lines 
                that connect cities, foster communities, and drive national progress.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="grid sm:grid-cols-2 gap-6"
            >
              {/* Mission */}
              <div className="glass-card glass-l1 p-6 hover:border-accent/30 transition-all group shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-accent mb-5 group-hover:scale-110 transition-transform">
                  <FiTarget size={24} />
                </div>
                <h4 className="text-xl font-bold mb-3">Our Mission</h4>
                <p className="text-sm text-secondary leading-relaxed">
                  To deliver sustainable infrastructure solutions through innovative engineering and precision execution.
                </p>
              </div>

              {/* Vision */}
              <div className="glass-card glass-l1 p-6 hover:border-accent/30 transition-all group shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-accent mb-5 group-hover:scale-110 transition-transform">
                  <FiEye size={24} />
                </div>
                <h4 className="text-xl font-bold mb-3">Our Vision</h4>
                <p className="text-sm text-secondary leading-relaxed">
                  To be the gold standard in construction by setting new benchmarks in quality, safety, and reliability.
                </p>
              </div>
            </motion.div>

            {/* Core Values Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="pt-4 flex flex-wrap gap-8 opacity-60"
            >
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-accent" />
                <span className="text-xs font-bold uppercase tracking-widest text-primary dark:text-white">Quality Driven</span>
              </div>
              <div className="flex items-center gap-2">
                <FiShield className="text-accent" />
                <span className="text-xs font-bold uppercase tracking-widest text-primary dark:text-white">Safety First</span>
              </div>
              <div className="flex items-center gap-2">
                <FiTarget className="text-accent" />
                <span className="text-xs font-bold uppercase tracking-widest text-primary dark:text-white">Timely Delivery</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
