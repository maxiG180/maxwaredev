import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Workflow Automation Module',
    client: 'DAMEN-IT / DigitalWorkmate',
    desc: 'Modular, event-driven automation engine for a multi-tenant manufacturing ERP. Drag-and-drop builder wires SignalR realtime triggers and Quartz.NET schedules into a factory-pattern runtime. AI actions piped through Semantic Kernel across Ollama, OpenAI, and Google providers.',
    tags: ['.NET Core', 'SignalR', 'Semantic Kernel'],
    image: '/resources/projects/workflowautomation.png',
    imagePos: 'left center',
  },
  {
    title: 'Pérola do Vouga Ecosystem',
    client: 'Restaurant Operations Hub',
    desc: 'End-to-end digital platform for a traditional Portuguese restaurant. Customer-facing site with ordering flow, WhatsApp-to-menu parsing engine, and realtime financial dashboard tracking sales, expenses, and margin.',
    tags: ['Next.js', 'Supabase'],
    image: '/resources/projects/peroladovouga.png',
    imagePos: 'center center',
  },
  {
    title: 'Framax Solutions Platform',
    client: 'Agency OS',
    desc: 'Dual-surface product: conversion-tuned agency landing page and secure internal CRM/ERP dashboard. PostgreSQL RLS, automated PDF quotes via jsPDF, Supabase triggers, Google Sheets + Calendar lead pipeline, and bilingual i18n engine.',
    tags: ['Next.js 15', 'Supabase'],
    image: '/resources/projects/framax.png',
    imagePos: 'left center',
  },
  {
    title: 'SIOUX Package Management',
    client: 'SIOUX Technologies / Fontys',
    desc: 'Fullstack delivery platform replacing manual package handling across an 8-building campus. Smart-shelf algorithm computes realtime occupancy and optimal storage. Dockerized NestJS backend deployed through GitLab CI.',
    tags: ['NestJS', 'Next.js', 'PostgreSQL'],
    image: '/resources/projects/sioux.png',
    imagePos: 'center center',
  },
  {
    title: 'TrimminFlow',
    client: 'Fontys ICT',
    desc: 'Barbershop booking platform with realtime calendar sync and server-side conflict detection. Customers book through shop-specific QR codes while owners manage shifts and appointments from a single view.',
    tags: ['Spring Boot', 'Next.js', 'CI/CD'],
    image: '/resources/projects/trimminflow.png',
    imagePos: 'center top',
  },
  {
    title: 'TF Auto Platform',
    client: 'Framax Solutions',
    desc: 'Client-facing automotive marketplace and internal admin system. Vehicle listings, service management, and operational tooling with a premium burgundy glassmorphism design and full European Portuguese localization.',
    tags: ['Next.js', 'Supabase', 'Vercel'],
    image: '/resources/projects/tfauto.png',
    imagePos: 'center bottom',
  },
];

const PortfolioSection = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header scrub reveal
      gsap.set(headerRef.current, { y: 50, opacity: 0 });
      gsap.to(headerRef.current, {
        y: 0, opacity: 1, ease: 'none',
        scrollTrigger: { trigger: headerRef.current, start: 'top 90%', end: 'top 60%', scrub: 1 },
      });

      // Project cards: alternate left/right entrance with scrub
      const cards = sectionRef.current?.querySelectorAll('.project-card');
      if (cards) {
        cards.forEach((card, i) => {
          const fromX = i % 2 === 0 ? -50 : 50;
          gsap.set(card, { x: fromX, y: 40, opacity: 0, scale: 0.95 });
          gsap.to(card, {
            x: 0, y: 0, opacity: 1, scale: 1, ease: 'none',
            scrollTrigger: {
              trigger: card,
              start: 'top 95%',
              end: 'top 60%',
              scrub: 1,
            },
          });
        });
      }

      // Image parallax inside each card
      const images = sectionRef.current?.querySelectorAll('.project-image-wrapper img');
      if (images) {
        images.forEach((img) => {
          gsap.to(img, {
            y: -30,
            ease: 'none',
            scrollTrigger: {
              trigger: img.closest('.project-card'),
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          });
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="relative py-24 md:py-40 overflow-hidden">
      <div className="glow-orb glow-cyan" style={{ width: 600, height: 600, top: '30%', right: '-15%' }} />
      <div className="glow-orb glow-blue" style={{ width: 400, height: 400, bottom: '20%', left: '-10%' }} />

      <div className="scroll-section-inner relative z-10">
        <div ref={headerRef} className="mb-16 md:mb-24">
          <div className="line-accent" />
          <div className="section-label">Portfolio</div>
          <h3 className="big-statement max-w-2xl" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            Architecture · Operations · Full Stack
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <div key={i} className="project-card group">
              {/* Image */}
              {p.image && (
                <div className="project-image-wrapper">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    style={{ objectPosition: p.imagePos || 'center center' }}
                  />
                </div>
              )}
              
              {/* Content */}
              <div className="p-8 md:p-10 relative z-10">
                <div className="text-[10px] font-medium text-cyan-500/60 uppercase tracking-[0.4em] mb-3 group-hover:text-cyan-400/80 transition-colors">
                  {p.client}
                </div>
                <h4 className="text-xl md:text-2xl font-medium text-white mb-4 uppercase tracking-wide leading-tight">
                  {p.title}
                </h4>
                <p className="text-gray-400 text-sm mb-6 font-light leading-relaxed line-clamp-3">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="tech-pill group-hover:border-white/10">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
