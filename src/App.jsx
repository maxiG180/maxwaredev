import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [isCvOpen, setIsCvOpen] = useState(false);

  useEffect(() => {
    // Reveal animations
    gsap.utils.toArray(".reveal").forEach((el) => {
      gsap.fromTo(el, 
        { opacity: 0, y: 15 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.7, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 95%",
          }
        }
      );
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-[#cbd5e1] font-sans antialiased selection:bg-white selection:text-black">
      
      {/* Background texture */}
      <div
        className="fixed inset-0 z-[-1] opacity-[0.25] pointer-events-none"
        style={{
          backgroundImage: `url('/resources/Background.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 h-20 flex items-center border-b border-white/[0.08] bg-[#050505]/95 backdrop-blur-xl px-8 md:px-16 text-white">
        <div className="container mx-auto flex justify-between items-center text-left">
          <a href="#" className="font-semibold tracking-[0.2em] text-sm uppercase">
            MaxWare
          </a>
          <div className="flex items-center gap-12 text-left">
            <ul className="hidden md:flex items-center gap-10 text-gray-400 font-normal">
              {['About', 'Education', 'Experience', 'Portfolio'].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase() === 'portfolio' ? 'projects' : item.toLowerCase()}`} className="text-[11px] uppercase tracking-[0.2em] hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <button onClick={() => setIsCvOpen(true)} className="text-[11px] uppercase tracking-[0.3em] font-medium border border-white/40 px-6 py-2.5 rounded-lg hover:bg-white hover:text-black transition-all">
              Curriculum
            </button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 md:px-16">

        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center pt-28 pb-16 md:pt-32 md:pb-20">
          <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-24 items-center w-full reveal">

            {/* Left Bio */}
            <div className="max-w-2xl">
              {/* Mobile: profile pic + CV card side by side */}
              <div className="flex items-stretch gap-4 mb-8 lg:hidden">
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border border-white/[0.1] grayscale shrink-0">
                  <img src="/resources/ProfilePic.jpeg" alt="Maksym Grebeniuk" className="w-full h-full object-cover object-top" />
                </div>
                <div
                  onClick={() => setIsCvOpen(true)}
                  className="flex-1 p-4 bg-white/[0.02] border border-white/[0.08] rounded-2xl cursor-pointer group hover:bg-white/[0.05] hover:border-white/30 transition-all flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between text-gray-400">
                    <div className="text-[9px] uppercase tracking-[0.3em] italic">Full Dossier</div>
                    <i className="fas fa-expand text-[10px] group-hover:text-white transition-colors"></i>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-white uppercase tracking-wider leading-none mb-1">Technical CV</div>
                    <div className="text-[9px] text-gray-500 font-light uppercase tracking-widest italic">Tap to open</div>
                  </div>
                </div>
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-medium tracking-tighter text-white mb-6 leading-none uppercase">
                Maksym Grebeniuk
              </h1>
              <h2 className="text-base md:text-2xl text-gray-300 font-normal mb-6 md:mb-10 tracking-widest uppercase">
                Full Stack .NET & React Engineer • Eindhoven, NL
              </h2>
              <p className="text-base md:text-lg text-gray-400 max-w-xl mb-8 md:mb-12 leading-relaxed font-light italic">
                "I build software that automates real business operations. +7 production platforms delivered."
              </p>
              <div className="flex items-center gap-6 md:gap-10">
                <a href="#projects" className="border border-white/40 text-white px-8 py-3 md:px-10 md:py-4 rounded-xl text-[10px] uppercase tracking-[0.3em] font-medium hover:bg-white hover:text-black transition-all">
                  Portfolio
                </a>
                <div className="flex gap-5">
                  <a href="https://linkedin.com/in/maksym-grebeniuk-7a8b63174" target="_blank" className="text-gray-500 hover:text-white transition-colors"><i className="fab fa-linkedin-in text-lg"></i></a>
                  <a href="https://github.com/maxiG180" target="_blank" className="text-gray-500 hover:text-white transition-colors"><i className="fab fa-github text-lg"></i></a>
                  <a href="mailto:maksymgrebeniuk@gmail.com" className="text-gray-500 hover:text-white transition-colors"><i className="far fa-envelope text-lg"></i></a>
                </div>
              </div>
            </div>

            {/* Right Asset Dashboard — desktop only */}
            <div className="hidden lg:flex flex-col gap-10">
              <div className="w-[350px] h-[350px] rounded-[3rem] overflow-hidden border border-white/[0.1] grayscale opacity-90 hover:opacity-100 transition-all duration-1000 shadow-2xl">
                <img
                  src="/resources/ProfilePic.jpeg"
                  alt="Maksym Grebeniuk"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                onClick={() => setIsCvOpen(true)}
                className="w-[350px] p-8 bg-white/[0.02] border border-white/[0.1] rounded-[2rem] cursor-pointer group hover:bg-white/[0.05] hover:border-white/40 transition-all shadow-2xl"
              >
                <div className="flex items-center justify-between mb-6 text-gray-400 font-normal">
                  <div className="text-[10px] uppercase tracking-[0.3em] italic">Full Dossier</div>
                  <i className="fas fa-expand text-xs group-hover:text-white transition-colors"></i>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-18 bg-[#111] rounded-lg border border-white/20 shadow-xl shrink-0 group-hover:border-white/40 transition-colors relative overflow-hidden">
                    <img src="/resources/CV_img.png" alt="CV Preview" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
                    <div className="absolute inset-0 bg-white/[0.02] group-hover:bg-transparent transition-colors"></div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white uppercase tracking-wider leading-none mb-2">Technical CV</div>
                    <div className="text-[10px] text-gray-400 font-light uppercase tracking-widest italic">Expand to full screen</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modal */}
        {isCvOpen && (
          <div className="fixed inset-0 z-[200] bg-[#000]/98 backdrop-blur-3xl flex items-center justify-center p-4 md:p-10 text-left">
            <button 
              onClick={() => setIsCvOpen(false)}
              className="absolute top-8 right-8 text-white hover:text-gray-400 transition-colors z-[210] flex items-center gap-3 uppercase text-[10px] tracking-[0.5em]"
            >
              Close Viewer <i className="fas fa-times text-lg"></i>
            </button>
            <div className="w-full max-w-5xl h-full bg-white rounded-[2rem] shadow-2xl overflow-hidden relative border border-white/10">
              <iframe 
                src="/resources/Maksym_CV_2_0.pdf" 
                className="w-full h-full border-none"
                title="Maksym Grebeniuk CV"
              ></iframe>
            </div>
          </div>
        )}

        {/* Identity Section */}
        <section id="about" className="py-20 md:py-40 border-t border-white/[0.08]">
          <div className="reveal">
            <h3 className="text-[10px] uppercase tracking-[0.6em] text-white font-semibold italic mb-10 md:mb-20">About</h3>
            <div className="grid lg:grid-cols-2 gap-10 md:gap-16 mb-12 md:mb-20">
              <div>
                <p className="text-2xl sm:text-3xl md:text-5xl text-white font-light leading-tight tracking-tight">
                  I build software that solves real problems for real businesses.
                </p>
              </div>
              <div className="space-y-6 md:space-y-8 text-base md:text-lg text-gray-400 font-light leading-relaxed flex flex-col justify-center">
                <p>
                  I'm a software engineer based in Eindhoven, in my third year at <span className="text-white font-normal">Fontys University</span>. I started coding at 15 and have been building things professionally since 2023.
                </p>
                <p>
                  In the last two years I shipped 7 production platforms across very different domains: from enterprise workflow engines and CRMs to campus-scale delivery systems and automated booking ecosystems. Most of them built end-to-end.
                </p>
                <p>
                  Before I focused on tech, I spent years competing in professional sports at a high level. That taught me to stay consistent under pressure, to find what is not working and fix it fast, and to care about the details that other people skip. I bring that same approach to every project.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Academic Section */}
        <section id="education" className="py-20 md:py-40 border-t border-white/[0.08]">
          <div className="grid lg:grid-cols-[250px_1fr] gap-10 md:gap-20 reveal">
            <h3 className="text-[10px] uppercase tracking-[0.6em] text-white font-semibold italic">Education</h3>
            <div className="max-w-3xl">
              {[
                {
                  logo: "/resources/fontyslogo.png",
                  name: "Fontys University of Applied Sciences",
                  degree: "BSc Software Engineering, Delta Excellence Programme",
                  year: "2024 · 2028",
                  primary: true
                },
                {
                  logo: "/resources/inetelogo.png",
                  name: "INETE Lisbon",
                  degree: "IT & Software Development, Professional Track",
                  year: "2020 · 2023"
                },
                {
                  logo: "/resources/assembly.png",
                  name: "Assembly Academy",
                  degree: "Advanced Code Intensive, Lisbon, Portugal",
                  year: "2020 · 2021"
                }
              ].map((edu, i) => (
                <div key={i} className={`flex items-start sm:items-center justify-between gap-6 py-8 border-b border-white/[0.08] group transition-colors ${i === 0 ? 'pt-0' : ''}`}>
                  <div className="flex items-center gap-5 md:gap-8 min-w-0">
                    <div className="w-14 h-14 md:w-20 md:h-20 shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                      <img src={edu.logo} alt={edu.name} className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="min-w-0">
                      <h4 className={`${edu.primary ? 'text-base md:text-xl' : 'text-sm md:text-base'} font-medium text-white uppercase tracking-wide leading-snug mb-1`}>{edu.name}</h4>
                      <p className="text-xs md:text-sm text-gray-500 font-light italic">{edu.degree}</p>
                    </div>
                  </div>
                  <span className="text-xs md:text-sm text-gray-400 uppercase tracking-widest shrink-0 whitespace-nowrap tabular-nums pt-1">{edu.year}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 md:py-40 border-t border-white/[0.08]">
          <div className="grid lg:grid-cols-[250px_1fr] gap-10 md:gap-20">
            <h3 className="text-[10px] uppercase tracking-[0.6em] text-white font-semibold italic reveal">Experience</h3>
            <div className="space-y-16 md:space-y-24">
              {[
                {
                  date: "Feb 2026 · Present",
                  company: "DAMEN-IT",
                  role: ".NET Developer Intern",
                  logo: "/resources/damenit_digitalworkmatelogo.png",
                  desc: "Architecting a modular workflow automation engine for the Digital WorkMate multi-tenant ERP. Event-driven factory-pattern runtime, SignalR + Quartz.NET triggers, and multi-provider AI actions wired through Semantic Kernel.",
                  tech: ['.NET Core', 'SignalR', 'Semantic Kernel', 'Quartz.NET', 'TypeScript', 'Webix']
                },
                {
                  date: "Apr 2025 · Present",
                  company: "Framax Solutions",
                  role: "Co-founder & Full Stack Developer",
                  logo: "/resources/framaxlogo.png",
                  desc: "Co-founded Framax to build automation and AI products for SMBs. Shipped custom CRMs, booking ecosystems, and financial automation tooling on Next.js 15 and Supabase, end-to-end from design to deployment.",
                  tech: ['Next.js 15', 'Supabase', 'TypeScript', 'PostgreSQL RLS', 'Google APIs']
                },
                {
                  date: "Mar 2023 · Jun 2023",
                  company: "MAIN HUB",
                  role: "Junior Full Stack Developer",
                  logo: "/resources/mainhublogo.jpg",
                  desc: "Contributed to an enterprise-grade absence management platform, engineered against Microsoft's layered .NET architecture: EF Core, repository and service patterns, dependency injection, and Blazor component conventions. Interactive calendars, multi-step approval flows, and role-based access across HR, managers, and employees.",
                  tech: ['Blazor', '.NET Core', 'EF Core', 'C#', 'JavaScript']
                }
              ].map((exp, i) => (
                <div key={i} className="reveal group">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 border-b border-white/[0.08] pb-8 gap-4">
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 md:w-20 md:h-20 shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                        <img src={exp.logo} alt={exp.company} className="max-w-full max-h-full object-contain" />
                      </div>
                      <div>
                        <h4 className="text-xl md:text-2xl font-medium text-white tracking-wide uppercase leading-none">{exp.company}</h4>
                        <div className="text-xs md:text-sm text-gray-500 font-light mt-2 italic">{exp.role}</div>
                      </div>
                    </div>
                    <span className="text-xs md:text-sm text-gray-400 uppercase tracking-widest shrink-0 whitespace-nowrap tabular-nums">{exp.date}</span>
                  </div>
                  <p className="text-gray-400 text-sm md:text-base mb-8 max-w-3xl leading-relaxed font-light">{exp.desc}</p>
                  <div className="flex flex-wrap gap-x-8 gap-y-4 text-[11px] font-medium text-gray-300 uppercase tracking-[0.3em]">
                    {exp.tech.map(s => (
                      <span key={s} className="flex items-center gap-3">
                        <span className="w-1 h-1 bg-white/30 rounded-full"></span>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section id="projects" className="py-20 md:py-40 border-t border-white/[0.08]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-24 reveal">
            <h3 className="text-[10px] uppercase tracking-[0.6em] text-white font-semibold italic">Portfolio</h3>
            <p className="text-gray-400 text-[10px] font-normal uppercase tracking-[0.5em] mt-3 md:mt-0 italic">Architecture • Operations</p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-white/[0.08] border border-white/[0.08] reveal rounded-2xl md:rounded-[3rem] overflow-hidden shadow-2xl">
            {[
              {
                title: "Workflow Automation Module",
                client: "DAMEN-IT / DigitalWorkmate",
                desc: "Modular, event-driven automation engine for a multi-tenant manufacturing ERP. A drag-and-drop builder wires SignalR realtime triggers and Quartz.NET schedules into a factory-pattern runtime where new workflow items auto-register at startup. Tenant isolation enforced at the DAL, with AI actions piped through Semantic Kernel across Ollama, OpenAI, and Google providers.",
                tags: ['.NET Core', 'SignalR', 'Semantic Kernel']
              },
              {
                title: "Pérola do Vouga Ecosystem",
                client: "Restaurant Operations Hub",
                desc: "End-to-end digital platform for a traditional Portuguese restaurant. A customer-facing site and ordering flow sit alongside a WhatsApp-to-menu parsing engine that ingests daily specials automatically, and a realtime financial dashboard tracking sales, expenses, and margin in one pane.",
                tags: ['Next.js', 'Supabase']
              },
              {
                title: "Framax Solutions Platform",
                client: "Agency OS",
                desc: "Dual-surface product: a conversion-tuned agency landing page and a secure internal CRM/ERP dashboard running on the same stack. PostgreSQL with row-level security, automated PDF quotes and invoices via jsPDF, Supabase triggers syncing auth and client records live, plus a Google Sheets + Calendar lead pipeline and a bilingual custom i18n engine.",
                tags: ['Next.js 15', 'Supabase']
              },
              {
                title: "SIOUX Package Management",
                client: "SIOUX Technologies / Fontys",
                desc: "Fullstack delivery platform replacing manual package handling across an 8-building campus. A smart-shelf algorithm computes realtime occupancy, volume, and weight to suggest optimal storage; staff register packages via live camera scanning, drag-and-drop uploads, or manual entry. Dockerized NestJS backend deployed through GitLab CI.",
                tags: ['NestJS', 'Next.js', 'PostgreSQL']
              },
              {
                title: "TrimminFlow",
                client: "Fontys ICT",
                desc: "Barbershop booking platform with realtime calendar sync and server-side conflict detection. Customers book through shop-specific QR codes while owners manage shifts, breaks, and appointments from a single view. Spring Boot backend with unit testing and a Railway/Vercel CI/CD pipeline.",
                tags: ['Spring Boot', 'Next.js', 'CI/CD', 'Unit Testing']
              },
              {
                title: "15 Minute Coaches",
                client: "Fontys University",
                desc: "Digital platform pairing students with industry professionals for structured coaching sessions. Multi-stage coach application and approval flow, automated session emails and reminders, plus an admin dashboard with bulk mailing, document generation, and anonymous QR-based student feedback collection.",
                tags: ['Next.js', 'Supabase']
              },
              {
                title: "EventXpert",
                client: "Fontys University",
                desc: "Festival management ecosystem unifying the customer and organizer sides. QR-code ticketing and entry scanning, camping spot reservations, in-event retail and rentals, and a digital wallet for cashless transactions. Organizer tooling streamlines planning, logistics, and live operations.",
                tags: ['C#', '.NET', 'Razor Pages']
              },
              {
                title: "Absence Management Platform",
                client: "MAIN HUB",
                desc: "Enterprise absence platform with interactive calendars, multi-step approval flows, and role-based access across HR, managers, and employees. Blazor frontend over EF Core with 75%+ unit test coverage.",
                tags: ['C#', 'Blazor', 'OAuth2', 'EF Core']
              }
            ].map((p, i, arr) => (
              <div key={i} className={`bg-[#050505] p-12 md:p-16 hover:bg-[#080808] transition-all group relative overflow-hidden ${i === arr.length - 1 && arr.length % 2 === 1 ? 'md:col-span-2' : ''}`}>
                <div className="absolute top-0 right-0 w-1 h-0 bg-white/20 group-hover:h-full transition-all duration-700"></div>
                <div className="text-[10px] font-normal text-gray-500 uppercase tracking-[0.5em] mb-6 group-hover:text-gray-300 transition-colors italic">{p.client}</div>
                <h4 className="text-2xl font-medium text-white mb-5 uppercase tracking-wide leading-tight">{p.title}</h4>
                <p className="text-gray-400 text-sm mb-8 font-light leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-6 text-[10px] font-medium text-gray-400 uppercase tracking-[0.3em]">
                  {p.tags.map(t => <span key={t} className="group-hover:text-cyan-400 transition-colors">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Minimal Footer */}
        <footer className="py-16 md:py-32 border-t border-white/[0.08] flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 text-white">
          <div className="text-[10px] font-normal text-gray-500 tracking-[0.6em] uppercase text-center md:text-left leading-loose italic">
            © 2026 MaxWare Protocol <br /> Architectural Design by Maksym Grebeniuk
          </div>
          <div className="flex gap-8">
            <a href="mailto:maksymgrebeniuk@gmail.com" className="text-gray-500 hover:text-white transition-colors text-xl"><i className="far fa-envelope"></i></a>
            <a href="https://linkedin.com/in/maksym-grebeniuk-7a8b63174" target="_blank" className="text-gray-500 hover:text-white transition-colors text-xl"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://github.com/maxiG180" target="_blank" className="text-gray-500 hover:text-white transition-colors text-xl"><i className="fab fa-github"></i></a>
          </div>
        </footer>

      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
        
        body { 
          background-color: #050505; 
          color: #cbd5e1; 
          font-family: 'Inter', -apple-system, sans-serif;
          font-weight: 200;
        }
        
        ::-webkit-scrollbar { width: 2px; }
        ::-webkit-scrollbar-track { background: #050505; }
        ::-webkit-scrollbar-thumb { background: #1a1a1a; }
        
        html { scroll-behavior: smooth; }
        
        h1, h2, h3, h4, h5, .logo { 
          font-family: 'Inter', sans-serif;
          letter-spacing: -0.02em; 
        }
      ` }} />
    </div>
  );
};

export default App;
