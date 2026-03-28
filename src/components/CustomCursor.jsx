import React, { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHoverStart = () => setIsHovered(true);
    const handleHoverEnd = () => setIsHovered(false);

    window.addEventListener('mousemove', moveCursor);

    const interactiveElements = document.querySelectorAll('a, button, input, select, textarea, .cursor-pointer');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Outer Lens Ring */}
      <motion.div
        className="custom-cursor-outline md:block hidden"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          scale: isHovered ? 2.2 : 1,
          backgroundColor: isHovered ? 'rgba(230, 0, 0, 0.05)' : 'transparent',
          borderStyle: isHovered ? 'solid' : 'dashed',
          width: isHovered ? 40 : 24,
          height: isHovered ? 40 : 24,
        }}
      >
        {/* Cinematic Focusing Marks */}
        {isHovered && (
          <>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-1.5 bg-racing-red/60" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-1.5 bg-racing-red/60" />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-0.5 bg-racing-red/60" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-0.5 bg-racing-red/60" />
          </>
        )}
      </motion.div>
      {/* Inner Precision Dot */}
      <motion.div
        className="custom-cursor-dot md:block hidden"
        style={{
          left: cursorX,
          top: cursorY,
          scale: isHovered ? 0.5 : 1,
        }}
      />
    </>
  );
};

export default CustomCursor;
