import React, { createContext, useContext, useState, useEffect } from 'react';

const SlideContext = createContext();

export const slides = [
  { id: 'intro', title: 'Inicio', subtitle: 'Masterclass Web' },
  { id: 'sections', title: 'Anatomía', subtitle: 'Secciones Premium' },
  { id: 'uxui', title: 'UI vs UX', subtitle: 'Laboratorio Interactivo' },
  { id: 'types', title: 'Tipos', subtitle: 'Evolución Web' },
  { id: 'stack', title: 'Despliegue', subtitle: 'Lanzamiento Real' },
];

export function SlideProvider({ children }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const goToSlide = (index) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlideIndex(index);
    }
  };

  const nextSlide = () => goToSlide(currentSlideIndex + 1);
  const prevSlide = () => goToSlide(currentSlideIndex - 1);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex]);

  return (
    <SlideContext.Provider value={{ currentSlideIndex, goToSlide, nextSlide, prevSlide, currentSlide: slides[currentSlideIndex] }}>
      {children}
    </SlideContext.Provider>
  );
}

export const useSlides = () => useContext(SlideContext);
