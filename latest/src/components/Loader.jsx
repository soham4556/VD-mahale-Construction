import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }
          }}
          className="fixed inset-0 z-[100] bg-[#0B1121] flex items-center justify-center overflow-hidden"
        >
          {/* Split Opening Background Layers */}
          <motion.div 
            exit={{ x: '-100%' }}
            transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}
            className="absolute inset-0 w-1/2 bg-[#0B1121] z-20"
          />
          <motion.div 
            exit={{ x: '100%' }}
            transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}
            className="absolute inset-y-0 right-0 w-1/2 bg-[#0B1121] z-20"
          />

          {/* Cinematic Content */}
          <div className="relative z-30 flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.2, opacity: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-12"
            >
              <div className="w-28 h-28 bg-accent rounded-3xl flex items-center justify-center shadow-glow-orange relative z-10">
                <span className="text-white font-black text-4xl italic tracking-tighter">VM</span>
              </div>
              
              {/* Pulsing Aura */}
              <motion.div 
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.1, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-[-20px] bg-accent/20 rounded-full blur-3xl z-0"
              />
            </motion.div>

            <div className="overflow-hidden h-10">
              <motion.h2
                initial={{ y: 40 }}
                animate={{ y: 0 }}
                exit={{ y: -40 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-white font-black text-3xl tracking-[0.3em] uppercase italic"
              >
                VD MAHALE
              </motion.h2>
            </div>

            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ delay: 0.5, duration: 1.5, ease: "circOut" }}
              className="h-[2px] bg-accent/40 mt-4 relative"
            >
              <motion.div 
                animate={{ left: ['-100%', '100%'] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-accent w-1/2"
              />
            </motion.div>
          </div>

          <div className="absolute inset-0 opacity-[0.05] z-10">
             <div className="w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
