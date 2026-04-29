import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import PortfolioSection from './components/PortfolioSection';
import Footer from './components/Footer';

const App = () => {
  const [isCvOpen, setIsCvOpen] = useState(false);

  // Lock body scroll when CV modal is open
  useEffect(() => {
    document.body.style.overflow = isCvOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isCvOpen]);

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#cbd5e1] antialiased">

      {/* Background texture */}
      <div
        className="fixed inset-0 z-0 opacity-[0.18] pointer-events-none"
        style={{
          backgroundImage: "url('/resources/Background.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Navigation */}
      <Navigation onCvOpen={() => setIsCvOpen(true)} />

      {/* Sections */}
      <main className="relative z-[2]">
        <HeroSection onCvOpen={() => setIsCvOpen(true)} />

        {/* Section divider */}
        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </div>

        <AboutSection />

        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </div>

        <EducationSection />

        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </div>

        <ExperienceSection />

        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </div>

        <PortfolioSection />
      </main>

      <Footer />

      {/* CV Modal */}
      {isCvOpen && (
        <div className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-3xl flex items-center justify-center p-4 md:p-10">
          <button
            onClick={() => setIsCvOpen(false)}
            className="absolute top-6 right-6 md:top-8 md:right-8 bg-white md:bg-transparent text-black md:text-white w-10 h-10 md:w-auto md:h-auto rounded-full md:rounded-none flex items-center justify-center gap-3 transition-colors z-[210] uppercase text-[10px] tracking-[0.5em] hover:text-cyan-400"
          >
            <span className="hidden md:inline">Close Viewer</span>
            <i className="fas fa-times text-xl md:text-lg" />
          </button>
          <div className="w-full max-w-5xl h-full bg-white rounded-[2rem] shadow-2xl overflow-hidden relative border border-white/10">
            <iframe
              src="/resources/Maksym_CV_2_0.pdf"
              className="w-full h-full border-none"
              title="Maksym Grebeniuk CV"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
