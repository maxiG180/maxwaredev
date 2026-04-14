import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const mainRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Immersive Hero Entrance
      const heroTl = gsap.timeline();
      heroTl.from(".hero-badge", { y: -30, opacity: 0, duration: 0.8, ease: "power4.out" })
            .from(".hero-title", { x: -50, opacity: 0, duration: 1, ease: "power4.out" }, "-=0.5")
            .from(".hero-subtitle", { x: -30, opacity: 0, duration: 1, ease: "power4.out" }, "-=0.7")
            .from(".hero-tagline", { opacity: 0, duration: 1.2 }, "-=0.8")
            .from(".hero-stats", { y: 20, opacity: 0, duration: 0.8, stagger: 0.2 }, "-=1")
            .from(".hero-actions", { scale: 0.9, opacity: 0, duration: 0.8 }, "-=0.8")
            .from(".hero-image-glam", { scale: 1.1, opacity: 0, duration: 1.5, ease: "power2.out" }, "-=1.5");

      // 2. Continuous Ambient Background Animation
      gsap.to(".bg-glow-1", {
        x: '20vw',
        y: '10vh',
        duration: 15,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
      gsap.to(".bg-glow-2", {
        x: '-15vw',
        y: '-5vh',
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2
      });

      // 3. Scroll Reveals
      const revealOnScroll = (selector, y = 50) => {
        gsap.utils.toArray(selector).forEach((el) => {
          gsap.from(el, {
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none none"
            },
            y: y,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
          });
        });
      };

      revealOnScroll(".section-title-reveal");
      revealOnScroll(".glass-card", 30);
      revealOnScroll(".project-card-premium", 40);

    }, mainRef);

    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 100) {
        navbar.classList.add('navbar-active');
      } else {
        navbar.classList.remove('navbar-active');
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      ctx.revert();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={mainRef} className="portfolio-root bg-[#050506] text-white min-h-screen font-inter selection:bg-cyan-400 selection:text-black">
      
      {/* --- PREMIUM BACKGROUND LAYERS --- */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        {/* Base Texture */}
        <div 
          className="absolute inset-0 opacity-[0.15] grayscale"
          style={{ 
            backgroundImage: `url('/resources/Background.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        {/* Dynamic Glows */}
        <div className="bg-glow-1 absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-cyan-500/10 rounded-full blur-[120px]"></div>
        <div className="bg-glow-2 absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-600/10 rounded-full blur-[100px]"></div>
        {/* Noise Overlay for Texture */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      {/* --- NAVIGATION --- */}
      <nav className="navbar fixed top-0 left-0 w-full z-[100] transition-all duration-700 h-24 flex items-center">
        <div className="container mx-auto px-8 flex justify-between items-center">
          <div className="flex flex-col">
            <a href="#" className="text-2xl font-black tracking-tighter uppercase leading-none group">
              MAX<span className="text-cyan-400 group-hover:text-white transition-colors">WARE</span>
            </a>
            <span className="text-[9px] font-bold text-gray-500 uppercase tracking-[0.3em] mt-1">Architecture by Maksym</span>
          </div>
          
          <ul className="hidden md:flex items-center gap-12">
            {['About', 'Experience', 'Projects'].map(item => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-cyan-400 transition-all flex items-center gap-2 group">
                  <span className="w-0 h-[1px] bg-cyan-400 group-hover:w-4 transition-all"></span>
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a href="/resources/Maksym_CV_2_0.pdf" target="_blank" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white hover:text-cyan-400 transition-colors bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                <i className="fas fa-file-download text-xs text-cyan-400"></i> Dossier
              </a>
            </li>
            <li>
              <a href="mailto:maksymgrebeniuk@gmail.com" className="relative px-6 py-2.5 overflow-hidden group rounded-full">
                <span className="absolute inset-0 bg-cyan-400 transition-transform duration-500 group-hover:scale-105"></span>
                <span className="relative text-[10px] font-black uppercase tracking-widest text-black">Get in Touch</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main>
        {/* --- HERO SECTION --- */}
        <section id="hero" className="min-h-screen flex items-center relative px-8 pt-20">
          <div className="container mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-20 items-center">
            <div className="relative z-10">
              <div className="hero-badge inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-[10px] font-black tracking-[0.2em] uppercase mb-10 backdrop-blur-md">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 shadow-[0_0_12px_#22d3ee] animate-pulse"></span>
                System Status: Innovative
              </div>
              
              <h1 className="hero-title text-7xl md:text-9xl font-black mb-8 tracking-tightest leading-[0.85] uppercase">
                <span className="block text-white">Maksym</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">Grebeniuk</span>
              </h1>
              
              <h2 className="hero-subtitle text-2xl md:text-3xl text-gray-300 font-bold mb-10 tracking-tight flex items-center gap-4">
                <span className="w-12 h-[2px] bg-cyan-400"></span>
                Full Stack .NET & React Engineer
              </h2>
              
              <p className="hero-tagline text-lg md:text-xl text-gray-400 max-w-xl mb-12 leading-relaxed font-medium">
                I architect software that automates high-stakes business operations. 
                Focusing on <span className="text-white border-b-2 border-cyan-400/30">modular event-driven systems</span> and enterprise-grade scalability.
              </p>
              
              <div className="hero-stats flex gap-12 mb-16 border-l-2 border-white/5 pl-8">
                <div>
                  <div className="text-3xl font-black text-white">7+</div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">Platforms Live</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white">4+</div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">Languages</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white">AI</div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">Integration</div>
                </div>
              </div>

              <div className="hero-actions flex flex-wrap gap-6">
                <a href="#projects" className="bg-cyan-400 text-black px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest shadow-[0_20px_40px_rgba(34,211,238,0.2)] hover:-translate-y-1 transition-all active:scale-95">
                  Launch Projects
                </a>
                <div className="flex gap-4">
                  {[
                    { icon: 'fab fa-linkedin-in', url: 'https://linkedin.com/in/maksym-grebeniuk-7a8b63174' },
                    { icon: 'fab fa-github', url: 'https://github.com/maxiG180' }
                  ].map((social, i) => (
                    <a key={i} href={social.url} target="_blank" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-white/10 transition-all">
                      <i className={`${social.icon} text-lg`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="hero-image-glam relative hidden lg:flex justify-center">
              <div className="absolute inset-0 bg-cyan-500/20 blur-[100px] rounded-full scale-75 animate-pulse"></div>
              <div className="relative w-[380px] h-[520px] p-4 bg-white/5 backdrop-blur-2xl rounded-[4rem] border border-white/10 shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050506] z-20"></div>
                <img 
                  src="/resources/ProfilePic.jpeg" 
                  alt="Maksym Grebeniuk" 
                  className="w-full h-full object-cover rounded-[3rem] grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute bottom-12 left-10 z-30">
                  <div className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.4em] mb-2">Lead Developer</div>
                  <div className="text-2xl font-black uppercase tracking-tighter">Maksym G.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- ABOUT SECTION --- */}
        <section id="about" className="py-40 px-8 relative">
          <div className="container mx-auto">
            <div className="section-title-reveal text-center mb-32">
              <h3 className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.6em] mb-6">The Background</h3>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">Engineering <br /> Efficiency</h2>
              <div className="flex justify-center gap-3">
                <span className="w-16 h-1.5 bg-cyan-400 rounded-full"></span>
                <span className="w-4 h-1.5 bg-white/20 rounded-full"></span>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-32 items-start">
              <div className="space-y-12">
                <div className="glass-card bg-white/5 backdrop-blur-xl p-12 rounded-[3rem] border border-white/10 hover:border-cyan-400/20 transition-all group relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-2 h-full bg-cyan-400 scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500"></div>
                  <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed italic">
                    "I don't just write code; I design systems that eliminate manual friction. My goal is to turn complex business requirements into high-performance, modular technical assets."
                  </p>
                </div>
                <div className="space-y-8 pl-4">
                  <p className="text-lg text-gray-400 leading-relaxed font-medium">
                    As a Software Engineering student at <strong className="text-white">Fontys University</strong> and a member of the elite <strong className="text-cyan-400">Delta Excellence Programme</strong>, I spend my time at the intersection of enterprise stability and startup agility.
                  </p>
                  <p className="text-lg text-gray-400 leading-relaxed font-medium">
                    Relocating from Lisbon to the Netherlands has refined my perspective on global tech standards, allowing me to bridge the gap between large-scale .NET backends and modern React ecosystems.
                  </p>
                </div>
              </div>

              <div className="grid gap-8">
                <div className="glass-card bg-white/5 p-10 rounded-[3rem] border border-white/10 flex items-center gap-10 hover:bg-white/[0.07] transition-all shadow-xl">
                  <div className="flex -space-x-6 shrink-0">
                    {['fontys', 'inete', 'assembly'].map(edu => (
                      <div key={edu} className="w-16 h-16 rounded-2xl bg-white p-3 shadow-2xl ring-4 ring-[#0a0a0c] overflow-hidden grayscale hover:grayscale-0 transition-all cursor-pointer">
                        <img src={`/resources/${edu}-logo.png`} alt={edu} className="w-full h-full object-contain" onError={(e) => { e.target.parentElement.style.backgroundColor='#16161a'; e.target.src='https://cdn-icons-png.flaticon.com/512/2681/2681826.png'; }} />
                      </div>
                    ))}
                  </div>
                  <div>
                    <h4 className="text-xl font-black uppercase tracking-tighter text-white">Education Track</h4>
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-2 leading-relaxed">Fontys ICT Eindhoven <br/> Assembly & INETE Lisbon</p>
                  </div>
                </div>

                <div className="glass-card bg-[#16161a]/80 backdrop-blur-xl p-10 rounded-[3rem] border border-white/5 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-[-50px] right-[-50px] w-40 h-40 bg-cyan-400/5 rounded-full blur-3xl group-hover:bg-cyan-400/10 transition-colors"></div>
                  <div className="flex items-center gap-8 mb-8">
                    <div className="w-16 h-16 rounded-[1.5rem] bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-400/20">
                      <i className="fas fa-microchip text-black text-2xl"></i>
                    </div>
                    <h4 className="text-2xl font-black uppercase tracking-tighter">Core Stack</h4>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {['.NET Core', 'React', 'Next.js 15', 'NestJS', 'PostgreSQL', 'AI/LLM'].map(tag => (
                      <span key={tag} className="px-4 py-2 bg-white/5 rounded-xl text-[10px] font-black text-gray-400 border border-white/5 uppercase tracking-widest group-hover:text-cyan-400 group-hover:border-cyan-400/20 transition-all">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- EXPERIENCE SECTION --- */}
        <section id="experience" className="py-40 px-8">
          <div className="container mx-auto">
            <div className="section-title-reveal mb-32 flex flex-col md:flex-row md:items-end justify-between gap-10 border-b border-white/5 pb-12">
              <div>
                <h3 className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.6em] mb-6">The Journey</h3>
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">Career Path</h2>
              </div>
              <p className="text-gray-500 text-sm font-bold uppercase tracking-widest max-w-xs md:text-right">Architecture • Implementation • Impact</p>
            </div>
            
            <div className="max-w-6xl mx-auto space-y-12">
              {[
                {
                  company: "DAMEN-IT",
                  role: "Intern (Workflow Automation Developer)",
                  date: "2026 - Present",
                  logo: "damen",
                  desc: "Designing and implementing a high-performance modular automation engine for multi-tenant SaaS ERP environments.",
                  tech: ['.NET Core', 'SignalR', 'Semantic Kernel', 'Quartz.NET']
                },
                {
                  company: "Framax Solutions",
                  role: "Full-stack Developer / Co-founder",
                  date: "2025 - Present",
                  logo: "framax",
                  desc: "Architecting agency-level digital platforms with automated financial modules and integrated CRM systems.",
                  tech: ['Next.js 15', 'Supabase', 'Typescript', 'Tailwind']
                },
                {
                  company: "MAIN HUB",
                  role: "Junior Full Stack Developer",
                  date: "2023",
                  logo: "mainhub",
                  desc: "Developed an enterprise absence management platform with role-based access and interactive data visualization.",
                  tech: ['Blazor', '.NET Core', 'EF Core', 'xUnit']
                }
              ].map((exp, i) => (
                <div key={i} className="glass-card group bg-white/[0.02] hover:bg-white/[0.05] p-1 w-full rounded-[3.5rem] transition-all duration-500 border border-white/5 hover:border-cyan-400/20 shadow-2xl">
                  <div className="bg-[#0a0a0c]/80 rounded-[3.4rem] p-10 md:p-12 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-400/0 via-transparent to-cyan-400/0 opacity-0 group-hover:opacity-[0.03] transition-opacity"></div>
                    
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-[2.5rem] bg-white flex items-center justify-center p-5 shadow-2xl shrink-0 group-hover:scale-105 transition-transform duration-500">
                      <img src={`/resources/${exp.logo}-logo.png`} alt={exp.company} className="w-full h-full object-contain" onError={(e) => { e.target.src='https://cdn-icons-png.flaticon.com/512/3061/3061341.png'; }} />
                    </div>
                    
                    <div className="flex-1 text-center md:text-left">
                      <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-4">
                        <span className="text-cyan-400 text-xs font-black uppercase tracking-widest">{exp.date}</span>
                        <span className="w-1.5 h-1.5 bg-white/20 rounded-full hidden md:block"></span>
                        <h4 className="text-gray-500 text-xs font-black uppercase tracking-widest">{exp.company}</h4>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6 leading-tight">{exp.role}</h3>
                      <p className="text-gray-400 text-lg font-medium leading-relaxed mb-8 max-w-3xl">{exp.desc}</p>
                      <div className="flex flex-wrap justify-center md:justify-start gap-3">
                        {exp.tech.map(tag => (
                          <span key={tag} className="px-4 py-2 bg-white/5 rounded-xl text-[10px] font-black text-gray-500 border border-white/5 uppercase tracking-widest group-hover:text-cyan-400 group-hover:border-cyan-400/20 transition-all">{tag}</span>
                        ))}
                      </div>
                    </div>
                    
                    <i className="fas fa-chevron-right text-white/5 text-6xl absolute right-12 hidden lg:block group-hover:text-cyan-400 group-hover:translate-x-2 transition-all"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- PROJECTS SECTION --- */}
        <section id="projects" className="py-40 px-8 relative overflow-hidden">
          <div className="container mx-auto">
            <div className="section-title-reveal text-center mb-32">
              <h3 className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.6em] mb-6">The Ecosystem</h3>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">Selected Works</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
              {[
                {
                  title: "Workflow Automation Module",
                  client: "DAMEN-IT",
                  desc: "Modular event-driven system with a custom drag-and-drop editor and AI-powered triggers using Semantic Kernel.",
                  stack: ['ASP.NET Core', 'SignalR', 'AI'],
                  icon: 'fa-microchip'
                },
                {
                  title: "Framax Solutions OS",
                  client: "Internal / Clients",
                  desc: "Unified ERP/CRM system managing agency lifecycles, automated finance, and real-time database triggers.",
                  stack: ['Next.js 15', 'Supabase', 'RLS'],
                  icon: 'fa-rocket'
                },
                {
                  title: "Package Management AI",
                  client: "SIOUX / Fontys",
                  desc: "Campus-wide automation with a custom shelf algorithm calculating occupancy and suggesting storage paths.",
                  stack: ['NestJS', 'PostgreSQL', 'Algorithms'],
                  icon: 'fa-box-open'
                },
                {
                  title: "Take-Away Ops Hub",
                  client: "Pérola do Vouga",
                  desc: "Custom operations engine featuring WhatsApp-to-Menu parsing and real-time financial tracking.",
                  stack: ['React', 'Next.js', 'APIs'],
                  icon: 'fa-utensils'
                }
              ].map((project, i) => (
                <div key={i} className="project-card-premium group relative bg-[#16161a] rounded-[4rem] border border-white/5 overflow-hidden hover:border-cyan-400/30 transition-all duration-700 shadow-2xl">
                  <div className="h-[400px] bg-black relative flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#16161a] to-transparent z-10"></div>
                    <i className={`fas ${project.icon} text-gray-900 text-[15rem] absolute scale-110 group-hover:scale-125 transition-transform duration-1000 group-hover:text-cyan-400/5`}></i>
                    <div className="relative z-20 text-center px-12">
                      <div className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.4em] mb-4">{project.client}</div>
                      <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-8">{project.title}</h3>
                      <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-700">
                        {project.stack.map(s => <span key={s} className="px-4 py-2 bg-cyan-400 text-black text-[9px] font-black uppercase rounded-full">{s}</span>)}
                      </div>
                    </div>
                  </div>
                  <div className="p-12 bg-[#16161a]">
                    <p className="text-gray-400 text-lg font-medium leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">{project.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- FINAL CTA --- */}
        <section className="py-60 px-8 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-cyan-400/5 rounded-full blur-[150px]"></div>
          <div className="container mx-auto relative z-10">
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-16 leading-[0.85]">
              Let's build the <br /> <span className="text-cyan-400">Next Frontier</span>
            </h2>
            <a href="mailto:maksymgrebeniuk@gmail.com" className="inline-block relative group">
              <span className="absolute inset-0 bg-cyan-400 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></span>
              <span className="relative inline-block bg-white text-black px-16 py-8 rounded-[2rem] font-black text-2xl uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl">
                Initialize Connect
              </span>
            </a>
          </div>
        </section>
      </main>

      <footer className="py-20 border-t border-white/5 text-center text-gray-700 text-[10px] font-black uppercase tracking-[0.8em]">
        <p>© 2026 MaxWare Protocol. Distributed by Maksym Grebeniuk.</p>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        .navbar-active {
          background-color: rgba(5, 5, 6, 0.8);
          backdrop-filter: blur(25px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          height: 80px !important;
        }
        ::selection { background-color: #00e5ff; color: #000; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #050506; }
        ::-webkit-scrollbar-thumb { background: #16161a; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #22d3ee; }
        html { scroll-behavior: smooth; }
        .hero-title { line-height: 0.85 !important; }
      ` }} />
    </div>
  );
};

export default App;
