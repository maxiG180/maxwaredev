import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    date: 'Feb 2026 · Present',
    company: 'DAMEN-IT',
    role: '.NET Developer Intern',
    logo: '/resources/damenit_digitalworkmatelogo.png',
    desc: 'Architecting a modular workflow automation engine for the Digital WorkMate multi-tenant ERP. Event-driven factory-pattern runtime, SignalR + Quartz.NET triggers, and multi-provider AI actions wired through Semantic Kernel.',
    tech: ['.NET Core', 'SignalR', 'Semantic Kernel', 'Quartz.NET', 'TypeScript', 'Webix'],
  },
  {
    date: 'Apr 2025 · Present',
    company: 'Framax Solutions',
    role: 'Co-founder & Full Stack Developer',
    logo: '/resources/framaxlogo.png',
    desc: 'Co-founded Framax to build automation and AI products for SMBs. Shipped custom CRMs, booking ecosystems, and financial automation tooling on Next.js 15 and Supabase, end-to-end from design to deployment.',
    tech: ['Next.js 15', 'Supabase', 'TypeScript', 'PostgreSQL RLS', 'Google APIs'],
  },
  {
    date: 'Mar 2023 · Jun 2023',
    company: 'MAIN HUB',
    role: 'Junior Full Stack Developer',
    logo: '/resources/mainhublogo.jpg',
    desc: 'Contributed to an enterprise-grade absence management platform, engineered against Microsoft\'s layered .NET architecture: EF Core, repository and service patterns, dependency injection, and Blazor component conventions.',
    tech: ['Blazor', '.NET Core', 'EF Core', 'C#', 'JavaScript'],
  },
];

const ExperienceSection = () => {
  const sectionRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Label reveal
      gsap.set(labelRef.current, { x: -40, opacity: 0 });
      gsap.to(labelRef.current, {
        x: 0, opacity: 1, ease: 'none',
        scrollTrigger: { trigger: labelRef.current, start: 'top 92%', end: 'top 70%', scrub: 1 },
      });

      // Timeline line grows with scroll
      const line = sectionRef.current?.querySelector('.timeline-grow');
      if (line) {
        gsap.set(line, { scaleY: 0 });
        gsap.to(line, {
          scaleY: 1, ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 50%',
            end: 'bottom 50%',
            scrub: true,
          },
        });
      }

      // Each experience item: scrub-driven fade + slide
      const items = sectionRef.current?.querySelectorAll('.exp-item');
      if (items) {
        items.forEach((item) => {
          gsap.set(item, { y: 70, opacity: 0 });
          gsap.to(item, {
            y: 0, opacity: 1, ease: 'none',
            scrollTrigger: {
              trigger: item,
              start: 'top 92%',
              end: 'top 60%',
              scrub: 1,
            },
          });
        });
      }

      // Tech pills within each item: stagger scrub
      const pillGroups = sectionRef.current?.querySelectorAll('.pill-group');
      if (pillGroups) {
        pillGroups.forEach((group) => {
          const pills = group.querySelectorAll('.tech-pill');
          gsap.set(pills, { opacity: 0, y: 10 });
          gsap.to(pills, {
            opacity: 1, y: 0, ease: 'none', stagger: 0.02,
            scrollTrigger: {
              trigger: group,
              start: 'top 90%',
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
    <section ref={sectionRef} id="experience" className="relative py-24 md:py-40 overflow-hidden">
      <div className="glow-orb glow-cyan" style={{ width: 500, height: 500, bottom: '10%', left: '-10%' }} />

      <div className="scroll-section-inner relative z-10">
        <div ref={labelRef}>
          <div className="line-accent" />
          <div className="section-label">Experience</div>
        </div>

        <div className="relative pl-8 md:pl-12 max-w-4xl">
          {/* Timeline track */}
          <div className="absolute left-0 top-0 w-[1px] h-full bg-white/[0.04]">
            <div className="timeline-grow absolute left-0 top-0 w-full h-full bg-gradient-to-b from-cyan-500/40 via-cyan-500/20 to-transparent origin-top" />
          </div>

          <div className="space-y-16 md:space-y-24">
            {experiences.map((exp, i) => (
              <div key={i} className="exp-item relative group">
                {/* Timeline dot */}
                <div className="absolute -left-8 md:-left-12 top-2 w-[9px] h-[9px] rounded-full border border-cyan-500/40 bg-[#050505] group-hover:bg-cyan-500/60 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-500"
                     style={{ marginLeft: '-4px' }} />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">
                  <div className="flex items-center gap-5 md:gap-7">
                    <div className="w-14 h-14 md:w-16 md:h-16 shrink-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 rounded-xl overflow-hidden bg-white/[0.02] border border-white/[0.05] p-2">
                      <img src={exp.logo} alt={exp.company} className="max-w-full max-h-full object-contain" />
                    </div>
                    <div>
                      <h4 className="text-xl md:text-2xl font-medium text-white tracking-wide uppercase leading-none">
                        {exp.company}
                      </h4>
                      <div className="text-xs md:text-sm text-gray-500 font-light mt-1.5">{exp.role}</div>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500 uppercase tracking-widest shrink-0 whitespace-nowrap tabular-nums">
                    {exp.date}
                  </span>
                </div>

                <p className="text-gray-400 text-sm md:text-base mb-6 max-w-3xl leading-relaxed font-light">
                  {exp.desc}
                </p>

                <div className="pill-group flex flex-wrap gap-2">
                  {exp.tech.map(t => (
                    <span key={t} className="tech-pill">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
