import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);



const AboutSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textBlockRef = useRef(null);

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
            <h3 className="text-3xl md:text-4xl lg:text-[2.5rem] font-medium text-white leading-tight tracking-tight mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              I engineer software that solves complex business problems.
            </h3>
            <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
              My focus is on <span className="text-cyan-400">saving time</span>, <span className="text-cyan-400">reducing costs</span>, and <span className="text-cyan-400">driving revenue</span>.
            </p>
          </div>

          <div ref={textBlockRef} className="space-y-6 md:space-y-8 text-base md:text-lg text-gray-400 font-light leading-relaxed flex flex-col justify-center">
            <p>
              Currently, I'm a software engineer based in Eindhoven, studying at <span className="text-white font-normal">Fontys University</span>, and have been building things professionally since 2023.
            </p>
            <p>
              Recently, I've shipped multiple production platforms end-to-end across different domains—from enterprise workflow engines to campus-scale delivery systems.
            </p>
          </div>
        </div>


      </div>
    </section>
  );
};

export default AboutSection;
