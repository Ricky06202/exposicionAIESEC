import React from 'react';
import { useSlides, slides } from './SlideProvider';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, Menu } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const { currentSlideIndex, goToSlide, nextSlide, prevSlide } = useSlides();

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 flex items-center justify-between shadow-2xl">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center shadow-lg shadow-primary-500/20">
            <span className="text-white font-bold text-sm">W</span>
          </div>
          <span className="text-white font-semibold text-sm hidden md:block">Mastering Web</span>
        </div>

        <div className="hidden lg:flex items-center gap-0.5 bg-black/20 rounded-lg p-0.5">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={cn(
                "px-2.5 py-1.5 rounded-md text-[11px] font-medium transition-all duration-200 whitespace-nowrap",
                currentSlideIndex === index 
                  ? "bg-primary-500 text-white shadow-md" 
                  : "text-white/50 hover:text-white hover:bg-white/5"
              )}
            >
              {slide.title}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={prevSlide}
            disabled={currentSlideIndex === 0}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white disabled:opacity-30 transition-all"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="text-white font-mono text-xs px-1.5 min-w-[40px] text-center">
            {currentSlideIndex + 1}/{slides.length}
          </div>
          <button 
            onClick={nextSlide}
            disabled={currentSlideIndex === slides.length - 1}
            className="p-1.5 rounded-lg bg-primary-500 hover:bg-primary-400 text-white disabled:opacity-30 transition-all shadow-lg shadow-primary-500/10"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </nav>
  );
}
