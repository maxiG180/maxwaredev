import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = ({ onCvOpen }) => {
  const sectionRef = useRef(null);
  const nameRef = useRef(null);
  const subtitleRef = useRef(null);
  const quoteRef = useRef(null);
  const ctaRef = useRef(null);
  const imageDesktopRef = useRef(null);
  const imageMobileRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Intro timeline (plays once on load) ──
      const intro = gsap.timeline({ delay: 0.2 });

      // Name lines stagger in
      const nameLines = nameRef.current?.querySelectorAll('.hero-name-line');
      if (nameLines) {
        intro.fromTo(nameLines,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'power4.out', stagger: 0.1 },
          0
        );
      }

      // Subtitle, quote, CTA fade in
      intro.fromTo(subtitleRef.current,
        { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, 0.5
      );
      intro.fromTo(quoteRef.current,
        { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, 0.65
      );
      intro.fromTo(ctaRef.current,
        { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, 0.8
      );

      // ── Profile image: timed entrance on load ──
      if (imageDesktopRef.current) {
        intro.fromTo(imageDesktopRef.current,
          { opacity: 0, scale: 1.06 },
          { opacity: 1, scale: 1, duration: 1, ease: 'power3.out' },
          0.3
        );

        // Parallax on exit
        gsap.to(imageDesktopRef.current, {
          y: 80,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'center top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // Mobile image
      if (imageMobileRef.current) {
        intro.fromTo(imageMobileRef.current,
          { opacity: 0, scale: 1.04 },
          { opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out' },
          0.3
        );
      }

      // CV card
      if (cardRef.current) {
        intro.fromTo(cardRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
          0.9
        );
      }

      // ── Name parallax out on scroll ──
      gsap.to(nameRef.current, {
        y: -80,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: '60% top',
          end: 'bottom top',
          scrub: true,
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Glow orbs */}
      <div className="glow-orb glow-cyan" style={{ width: 600, height: 600, top: '-10%', right: '-10%' }} />
      <div className="glow-orb glow-blue" style={{ width: 400, height: 400, bottom: '10%', left: '-5%' }} />

      <div className="scroll-section-inner relative z-10">
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-20 items-center">

          {/* Left — Bio */}
          <div className="max-w-2xl">
            {/* Mobile row: profile + CV */}
            <div className="flex items-stretch gap-4 mb-8 lg:hidden">
              <div ref={imageMobileRef} className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden profile-container shrink-0">
                <img src="/resources/ProfilePic.jpeg" alt="Maksym Grebeniuk" className="profile-image" />
              </div>
              <div
                onClick={onCvOpen}
                className="flex-1 glass-card p-4 cursor-pointer group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between text-gray-400">
                  <span className="text-[9px] uppercase tracking-[0.3em]">Full Dossier</span>
                  <i className="fas fa-expand text-[10px] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-xs font-medium text-white uppercase tracking-wider leading-none mb-1">Technical CV</div>
                  <div className="text-[9px] text-gray-500 font-light uppercase tracking-widest">Tap to open</div>
                </div>
              </div>
            </div>

            <div ref={nameRef}>
              <div className="hero-name-line overflow-hidden">
                <h1 className="text-5xl sm:text-7xl md:text-[6.5rem] font-medium tracking-tighter text-white leading-[0.95] uppercase"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Maksym
                </h1>
              </div>
              <div className="hero-name-line overflow-hidden">
                <h1 className="text-5xl sm:text-7xl md:text-[6.5rem] font-medium tracking-tighter text-white leading-[0.95] uppercase"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Grebeniuk
                </h1>
              </div>
            </div>

            <h2 ref={subtitleRef} className="text-sm md:text-xl text-gray-400 font-light mt-6 mb-6 md:mb-10 tracking-[0.15em] uppercase">
              Full Stack .NET & React Engineer{' '}
              <span className="text-gray-600 mx-2">·</span>{' '}
              Eindhoven, NL
            </h2>

            <p ref={quoteRef} className="text-base md:text-lg text-gray-500 max-w-xl mb-8 md:mb-12 leading-relaxed font-light italic border-l-2 border-white/10 pl-5">
              "I build software that automates core business operations. +7 production platforms delivered."
            </p>

            <div ref={ctaRef} className="flex items-center gap-6 md:gap-10">
              <a href="#projects" className="group relative border border-white/30 text-white px-8 py-3 md:px-10 md:py-4 rounded-xl text-[10px] uppercase tracking-[0.3em] font-medium overflow-hidden transition-all hover:border-white/60">
                <span className="relative z-10 group-hover:text-black transition-colors duration-300">Portfolio</span>
                <span className="absolute inset-0 bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              </a>
              <div className="flex gap-5">
                <a href="https://linkedin.com/in/maksym-grebeniuk-7a8b63174" target="_blank" rel="noopener noreferrer" className="group relative flex items-center justify-center text-gray-600 hover:text-cyan-400 transition-colors duration-300">
                  <i className="fab fa-linkedin-in text-lg group-hover:scale-125 transition-transform duration-300" />
                  <span className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#111] text-white text-[9px] uppercase tracking-[0.2em] py-1.5 px-3 rounded-md pointer-events-none whitespace-nowrap border border-white/10 shadow-xl">LinkedIn</span>
                </a>
                <a href="https://github.com/maxiG180" target="_blank" rel="noopener noreferrer" className="group relative flex items-center justify-center text-gray-600 hover:text-white transition-colors duration-300">
                  <i className="fab fa-github text-lg group-hover:scale-125 transition-transform duration-300" />
                  <span className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#111] text-white text-[9px] uppercase tracking-[0.2em] py-1.5 px-3 rounded-md pointer-events-none whitespace-nowrap border border-white/10 shadow-xl">GitHub</span>
                </a>
                <a href="mailto:maksymgrebeniuk@gmail.com" className="group relative flex items-center justify-center text-gray-600 hover:text-white transition-colors duration-300">
                  <i className="far fa-envelope text-lg group-hover:scale-125 transition-transform duration-300" />
                  <span className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#111] text-white text-[9px] uppercase tracking-[0.2em] py-1.5 px-3 rounded-md pointer-events-none whitespace-nowrap border border-white/10 shadow-xl">Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right — Desktop image + CV card */}
          <div className="hidden lg:flex flex-col gap-8">
            <div ref={imageDesktopRef} className="profile-container rounded-[2rem] overflow-hidden" style={{ height: 420 }}>
              <img src="/resources/ProfilePic.jpeg" alt="Maksym Grebeniuk" className="profile-image" />
            </div>
            <div
              ref={cardRef}
              onClick={onCvOpen}
              className="glass-card p-8 cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-5 text-gray-500">
                <span className="text-[10px] uppercase tracking-[0.3em]">Full Dossier</span>
                <i className="fas fa-expand text-xs group-hover:text-white transition-colors" />
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-18 bg-[#111] rounded-lg border border-white/15 shrink-0 overflow-hidden group-hover:border-white/30 transition-colors relative">
                  <img src="/resources/CV_img.png" alt="CV Preview" className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white uppercase tracking-wider leading-none mb-2">Technical CV</div>
                  <div className="text-[10px] text-gray-500 font-light uppercase tracking-widest">Expand to full screen</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
