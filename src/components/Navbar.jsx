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
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4 flex items-center justify-between shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/20">
            <span className="text-white font-bold">W</span>
          </div>
          <span className="text-white font-semibold hidden md:block">Mastering Web</span>
        </div>

        <div className="hidden lg:flex items-center gap-1 bg-black/20 rounded-xl p-1">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                currentSlideIndex === index 
                  ? "bg-primary-500 text-white shadow-lg" 
                  : "text-white/60 hover:text-white hover:bg-white/5"
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
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white disabled:opacity-30 transition-all"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="text-white font-mono text-sm px-2">
            {currentSlideIndex + 1} / {slides.length}
          </div>
          <button 
            onClick={nextSlide}
            disabled={currentSlideIndex === slides.length - 1}
            className="p-2 rounded-xl bg-primary-500 hover:bg-primary-400 text-white disabled:opacity-30 transition-all shadow-lg shadow-primary-500/10"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
}
