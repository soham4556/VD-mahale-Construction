import { motion } from 'framer-motion';
import { BsSun, BsMoon } from 'react-icons/bs';
import { useTheme } from '../../context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className="theme-toggle-btn"
      aria-label="Toggle dark mode"
    >
      <motion.div
        animate={{ x: darkMode ? 32 : 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className={`theme-toggle-slider ${darkMode ? 'dark' : 'light'}`}
      >
        {darkMode ? <BsMoon size={14} /> : <BsSun size={14} />}
      </motion.div>
      
      {/* Decorative icons behind */}
      <div className="theme-toggle-icons">
        <BsSun size={12} />
        <BsMoon size={12} />
      </div>
    </button>
  );
};

export default ThemeToggle;

