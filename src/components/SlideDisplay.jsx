import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSlides } from './SlideProvider';

export default function SlideDisplay({ children }) {
  const { currentSlideIndex } = useSlides();

  return (
    <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlideIndex}
          initial={{ opacity: 0, x: 100, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -100, scale: 1.05 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="w-full h-full"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
