import React from 'react';
import Navbar from './Navbar';
import SlideDisplay from './SlideDisplay';
import { SlideProvider, useSlides } from './SlideProvider';
import { IntroSlide, SectionsSlide, UXUISlide, TypesSlide, FoodHeroSlide, OGVSlide, StackSlide } from './Slides';

function AppContent() {
  const { currentSlideIndex } = useSlides();

  const renderSlide = () => {
    switch (currentSlideIndex) {
      case 0: return <IntroSlide />;
      case 1: return <SectionsSlide />;
      case 2: return <UXUISlide />;
      case 3: return <TypesSlide />;
      case 4: return <FoodHeroSlide />;
      case 5: return <OGVSlide />;
      case 6: return <StackSlide />;
      default: return <IntroSlide />;
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-primary-500/30 overflow-hidden flex flex-col">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-950/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]" />
      </div>

      <Navbar />
      
      <main className="relative z-10 flex-1 flex items-center justify-center">
        <SlideDisplay>
          {renderSlide()}
        </SlideDisplay>
      </main>

      {/* Footer Branding */}
      <footer className="relative z-10 px-8 py-4 flex justify-between items-center text-white/20 text-xs font-medium tracking-widest uppercase">
        <div>Web Dev Masters</div>
        <div>2026 - Presentación Interactiva</div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <SlideProvider>
      <AppContent />
    </SlideProvider>
  );
}
