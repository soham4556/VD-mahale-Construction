import { useState, useCallback, useRef, useEffect } from 'react';

/**
 * Premium Magnetic Tilt Hook
 * Features:
 * - Smooth lerped transitions
 * - Configurable intensity
 * - Parallax raw values for child elements
 * - Touch detection (disables on mobile for performance)
 */
export const useMagneticTilt = (maxTilt = 5, perspective = 1000) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const rafId = useRef(null);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (isTouch) return;
    
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    
    // Calculate relative mouse position (-1 to 1)
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    
    // Y-axis mouse moves X-axis rotation, X-axis mouse moves Y-axis rotation
    const tiltX = -y * maxTilt;
    const tiltY = x * maxTilt;
    
    cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(() => {
      setTilt({ x: tiltX, y: tiltY });
    });
    
    if (!isHovered) setIsHovered(true);
  }, [maxTilt, isHovered, isTouch]);

  const handleMouseLeave = useCallback(() => {
    if (isTouch) return;
    cancelAnimationFrame(rafId.current);
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  }, [isTouch]);

  return {
    tiltStyles: isTouch ? {} : {
      transform: `perspective(${perspective}px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      transition: !isHovered ? 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' : 'transform 0.1s linear',
      willChange: 'transform'
    },
    raw: tilt,
    isHovered,
    isTouch,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave
  };
};
