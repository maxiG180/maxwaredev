import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { number: '7+', label: 'Production Platforms' },
  { number: '3', label: 'Years Building' },
  { number: '5', label: 'Tech Stacks' },
];

const AboutSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textBlockRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── Big statement: scrub fade + slide from left ──
      gsap.set(headingRef.current, { x: -80, opacity: 0 });
      gsap.to(headingRef.current, {
        x: 0, opacity: 1, ease: 'none',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 90%',
          end: 'top 50%',
          scrub: 1,
        },
      });

      // ── Bio paragraphs: each fades in + slides up as you scroll ──
      const paras = textBlockRef.current?.querySelectorAll('p');
      if (paras) {
        paras.forEach((p, i) => {
          gsap.set(p, { y: 50, opacity: 0 });
          gsap.to(p, {
            y: 0, opacity: 1, ease: 'none',
            scrollTrigger: {
              trigger: p,
              start: 'top 92%',
              end: 'top 60%',
              scrub: 1,
            },
          });
        });
      }

      // ── Stats: scrub-driven scale + fade ──
      const statEls = statsRef.current?.querySelectorAll('.stat-card');
      if (statEls) {
        statEls.forEach((el, i) => {
          gsap.set(el, { y: 60, opacity: 0, scale: 0.85 });
          gsap.to(el, {
            y: 0, opacity: 1, scale: 1, ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top 95%',
              end: 'top 65%',
              scrub: 1,
            },
          });
        });
      }

      // ── Whole section fades out as you scroll past ──
      gsap.to(sectionRef.current, {
        opacity: 0.3,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'bottom 30%',
          end: 'bottom top',
          scrub: true,
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative py-24 md:py-40 overflow-hidden">
      {/* Glow */}
      <div className="glow-orb glow-white" style={{ width: 500, height: 500, top: '20%', left: '50%', transform: 'translateX(-50%)' }} />

      <div className="scroll-section-inner relative z-10">
        <div className="line-accent" />
        <div className="section-label">About</div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 mb-16 md:mb-24">
          <div ref={headingRef}>
            <p className="big-statement">
              I build software that solves real problems for real businesses.
            </p>
          </div>

          <div ref={textBlockRef} className="space-y-6 md:space-y-8 text-base md:text-lg text-gray-400 font-light leading-relaxed flex flex-col justify-center">
            <p>
              I'm a software engineer based in Eindhoven, in my third year at{' '}
              <span className="text-white font-normal">Fontys University</span>. I started coding at 15 and have been building things professionally since 2023.
            </p>
            <p>
              In the last two years I shipped 7 production platforms across very different domains: from enterprise workflow engines and CRMs to campus-scale delivery systems and automated booking ecosystems. Most of them built end-to-end.
            </p>
            <p>
              Before I focused on tech, I spent years competing in professional sports at a high level. That taught me to stay consistent under pressure, to find what is not working and fix it fast, and to care about the details that other people skip.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
          {stats.map((s, i) => (
            <div key={i} className="stat-card glass-card">
              <div className="stat-number">{s.number}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
