import React, { useEffect, useState } from 'react';

const Navigation = ({ onCvOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Portfolio', href: '#projects' },
  ];

  return (
    <>
      {/* Scroll progress bar */}
      <div className="scroll-progress" style={{ width: `${progress}%` }} />

      <nav className={`nav-fixed ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="flex items-center justify-between h-20 max-w-[1400px] mx-auto">
          <a href="#" className="z-10 group">
            <img src="/resources/MWLogo.png" alt="MaxWare" className="h-16 w-auto object-contain rounded-lg group-hover:scale-110 transition-transform duration-500" />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {links.map(l => (
              <a key={l.label} href={l.href} className="nav-link">{l.label}</a>
            ))}
            <button
              onClick={onCvOpen}
              className="text-[11px] uppercase tracking-[0.3em] font-medium border border-white/30 px-6 py-2.5 rounded-lg text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              Curriculum
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden relative z-[120] text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <i className={`fas ${mobileOpen ? 'fa-times' : 'fa-bars'} text-lg`} />
          </button>
        </div>

        {/* Mobile overlay */}
        {mobileOpen && (
          <div className="md:hidden fixed top-0 left-0 w-screen h-[100dvh] bg-[#050505]/98 backdrop-blur-2xl z-[110] flex flex-col items-center justify-center gap-8">
            {links.map(l => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl uppercase tracking-[0.3em] text-white/70 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => { onCvOpen(); setMobileOpen(false); }}
              className="text-sm uppercase tracking-[0.3em] font-medium border border-white/30 px-8 py-3 rounded-lg text-white hover:bg-white hover:text-black transition-all"
            >
              Curriculum
            </button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
