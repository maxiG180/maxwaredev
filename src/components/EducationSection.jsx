import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const education = [
  {
    logo: '/resources/fontyslogo.png',
    name: 'Fontys University of Applied Sciences',
    degree: 'BSc Software Engineering, Delta Excellence Programme',
    year: '2024 · 2028',
    primary: true,
  },
  {
    logo: '/resources/inetelogo.png',
    name: 'INETE Lisbon',
    degree: 'IT & Software Development, Professional Track',
    year: '2020 · 2023',
  },
  {
    logo: '/resources/assembly.png',
    name: 'Assembly Academy',
    degree: 'Advanced Code Intensive, Lisbon, Portugal',
    year: '2020 · 2021',
  },
];

const EducationSection = () => {
  const sectionRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section label scrub
      gsap.set(labelRef.current, { x: -40, opacity: 0 });
      gsap.to(labelRef.current, {
        x: 0, opacity: 1, ease: 'none',
        scrollTrigger: { trigger: labelRef.current, start: 'top 92%', end: 'top 70%', scrub: 1 },
      });

      // Each edu card slides in from left with scrub
      const cards = sectionRef.current?.querySelectorAll('.edu-card');
      if (cards) {
        cards.forEach((card, i) => {
          gsap.set(card, { x: -60 - i * 15, opacity: 0, scale: 0.96 });
          gsap.to(card, {
            x: 0, opacity: 1, scale: 1, ease: 'none',
            scrollTrigger: {
              trigger: card,
              start: 'top 93%',
              end: 'top 65%',
              scrub: 1,
            },
          });
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="education" className="relative py-24 md:py-40 overflow-hidden">
      <div className="glow-orb glow-blue" style={{ width: 400, height: 400, top: '30%', right: '-5%' }} />

      <div className="scroll-section-inner relative z-10">
        <div ref={labelRef}>
          <div className="line-accent" />
          <div className="section-label">Education</div>
        </div>

        <div className="max-w-3xl space-y-5">
          {education.map((edu, i) => (
            <div key={i} className="edu-card group">
              <div className="flex items-center justify-between gap-6">
                <div className="flex items-center gap-5 md:gap-7 min-w-0">
                  <div className="w-14 h-14 md:w-18 md:h-18 shrink-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                    <img src={edu.logo} alt={edu.name} className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="min-w-0">
                    <h4 className={`${edu.primary ? 'text-base md:text-lg' : 'text-sm md:text-base'} font-medium text-white uppercase tracking-wide leading-snug mb-1`}>
                      {edu.name}
                    </h4>
                    <p className="text-xs md:text-sm text-gray-500 font-light">{edu.degree}</p>
                  </div>
                </div>
                <span className="text-xs text-gray-500 uppercase tracking-widest shrink-0 whitespace-nowrap tabular-nums hidden sm:block">
                  {edu.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
