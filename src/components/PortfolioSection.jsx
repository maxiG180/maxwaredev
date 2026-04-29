import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Workflow Automation Module',
    client: 'DAMEN-IT / DigitalWorkmate',
    desc: 'A scalable workflow automation module for Digital WorkMate, an enterprise level multi tenant SaaS ERP platform serving manufacturing companies. Users can build and run multiple independent workflow instances through a visual editor, configuring flexible trigger, condition, action flows without writing code. The backend is built on ASP.NET Core following strict layered architecture with factory pattern and attribute based IOC auto registration, ensuring the system is fully extensible without modifying existing code. Event driven realtime triggers, scheduled execution, data configurable triggers, and tenant isolated data access are handled through dedicated infrastructure layers. The frontend leverages dynamic metadata driven form generation, where the UI adapts entirely. AI capabilities are integrated through Microsoft Semantic Kernel supporting multiple providers, with an AI assistant being incorporated into the builder itself to guide users through workflow configuration. Enabling intelligent automation at scale.',
    tags: ['.NET Core', 'SignalR', 'Semantic Kernel'],
    image: '/resources/projects/workflowautomation.png',
    imagePos: 'left center',
  },
  {
    title: 'Framax Solutions Platform',
    client: 'Agency OS',
    desc: 'Framax Solutions 2.0 is a dual purpose platform that serves as both a high conversion agency landing page and a full internal CRM/ERP operating system. The challenge was clear: as an agency that builds automation and AI solutions for clients, its own operations needed to run the same way. The platform is a unified ecosystem where the public facing site showcases the services while a secure, integrated dashboard manages the entire agency lifecycle. The backend is built on Next.js 15 (App Router) and Supabase, using PostgreSQL with Row Level Security for role based access to sensitive business data. A custom financial module automates the generation of quotes and invoices using jsPDF and html-pdf-node, and Supabase database triggers keep auth profiles and client records in sync in realtime. For external automation, Google Sheets and Calendar APIs handle lead ingestion and meeting scheduling, alongside a QR code engine with scan analytics for marketing tracking. The frontend is built in TypeScript with Tailwind CSS, featuring a custom i18n engine for seamless switching between English and Portuguese. Framer Motion powers an interactive, high fidelity landing page that reflects the agency\'s focus on modern tech, while the internal side is a data dense, performance optimized dashboard for management.',
    tags: ['Next.js 15', 'Supabase'],
    image: '/resources/projects/framax.png',
    imagePos: 'left center',
  },
  {
    title: 'SIOUX Package Management',
    client: 'SIOUX Technologies / Fontys',
    desc: 'A fullstack package management system for SIOUX Technologies\' 8 building campus in Eindhoven, designed to replace manual delivery handling with an automated end to end workflow. The system covers everything from package registration to storage optimization and pickup notifications, supporting Receptionist, Admin, and Employee roles. The backend runs on NestJS with TypeScript and PostgreSQL via TypeORM, featuring JWT authentication with Passport.js and a smart shelf algorithm that calculates realtime occupancy, volume usage, and weight limits to suggest optimal storage locations across buildings. Barcode and QR code detection is handled through zxing-wasm with image processing via sharp, so staff can register packages by scanning with a live camera, uploading images via drag and drop, or entering details manually. Automated email notifications run through nodemailer, and the whole backend is containerized with Docker and deployed via GitLab CI pipelines. The frontend is built with Next.js 15 and React 19, styled with Tailwind CSS following SIOUX\'s strict brand guidelines (black, white, red). It includes a realtime dashboard showing daily package volume, pending pickups, and shelf availability, plus an advanced filtering system to track packages by status, building, shelf, or date. The UI is optimized for both desktop and tablet since staff walk between shelves with devices in hand. Admins can configure building layouts and manage storage zones directly from the interface.',
    tags: ['NestJS', 'Next.js', 'PostgreSQL'],
    image: '/resources/projects/sioux.png',
    imagePos: 'center center',
  },
  {
    title: 'Absence Management Platform',
    client: 'MAIN HUB',
    desc: 'Contributed to an enterprise-grade absence management platform, engineered against Microsoft\'s layered .NET architecture: EF Core, repository and service patterns, dependency injection, and Blazor component conventions.',
    tags: ['Blazor', '.NET Core', 'EF Core', 'C#'],
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
            Highlighted projects
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
                <p className="text-gray-400 text-sm mb-6 font-light leading-relaxed">
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
