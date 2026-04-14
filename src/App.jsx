import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [isCvOpen, setIsCvOpen] = useState(false);

  useEffect(() => {
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
      
      {/* Absolute Minimal Background */}
      <div 
        className="fixed inset-0 z-[-1] opacity-[0.02] pointer-events-none"
        style={{ 
          backgroundImage: `url('/resources/Background.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 h-20 flex items-center border-b border-white/[0.03] bg-[#050505]/95 backdrop-blur-xl px-8 md:px-16 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="font-medium tracking-[0.2em] text-sm uppercase">
            MaxWare
          </a>
          <div className="flex items-center gap-12">
            <ul className="hidden md:flex items-center gap-10 text-gray-400 font-light">
              {['About', 'Experience', 'Portfolio'].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase() === 'portfolio' ? 'projects' : item.toLowerCase()}`} className="text-[10px] uppercase tracking-[0.2em] font-normal hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <button onClick={() => setIsCvOpen(true)} className="text-[10px] uppercase tracking-[0.3em] font-medium border border-white/20 px-5 py-2 rounded-lg hover:bg-white hover:text-black transition-all">
              Curriculum
            </button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-8 md:px-16 text-left">
        
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center pt-32 pb-20">
          <div className="grid lg:grid-cols-[1fr_auto] gap-24 items-center w-full reveal">
            
            {/* Left Bio */}
            <div className="max-w-2xl py-10">
              <h1 className="text-5xl md:text-8xl font-normal tracking-tighter text-white mb-8 leading-none uppercase">
                Maksym Grebeniuk
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-400 font-light mb-10 tracking-widest uppercase">
                Full Stack .NET & React Engineer • Eindhoven, NL
              </h2>
              <p className="text-lg text-gray-500 max-w-xl mb-12 leading-relaxed font-light italic text-left">
                "I architect software that automates real business operations."
              </p>
              <p className="text-lg text-gray-500 max-w-xl mb-12 leading-relaxed font-extralight text-left">
                7+ production platforms delivered. Currently specializing in modular 
                automation engines and scalable enterprise SaaS architectures.
              </p>
              <div className="flex items-center gap-10">
                <a href="#projects" className="border border-white/10 text-white px-10 py-4 rounded-xl text-[9px] uppercase tracking-[0.3em] font-light hover:bg-white hover:text-black transition-all text-left">
                  Portfolio
                </a>
                <div className="flex gap-6">
                  <a href="https://linkedin.com/in/maksym-grebeniuk-7a8b63174" target="_blank" className="text-gray-600 hover:text-white transition-colors"><i className="fab fa-linkedin-in text-lg"></i></a>
                  <a href="https://github.com/maxiG180" target="_blank" className="text-gray-600 hover:text-white transition-colors"><i className="fab fa-github text-lg"></i></a>
                  <a href="mailto:maksymgrebeniuk@gmail.com" className="text-gray-600 hover:text-white transition-colors"><i className="far fa-envelope text-lg"></i></a>
                </div>
              </div>
            </div>

            {/* Right Portfolio Dashboard */}
            <div className="hidden lg:flex flex-col gap-10">
              {/* Profile */}
              <div className="w-[350px] h-[350px] rounded-[3rem] overflow-hidden border border-white/[0.05] grayscale opacity-90 hover:opacity-100 transition-all duration-1000 shadow-2xl">
                <img 
                  src="/resources/ProfilePic.jpeg" 
                  alt="Maksym Grebeniuk" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Document Access Card */}
              <div 
                onClick={() => setIsCvOpen(true)}
                className="w-[350px] p-8 bg-white/[0.01] border border-white/[0.05] rounded-[2rem] cursor-pointer group hover:bg-white/[0.03] hover:border-white/20 transition-all shadow-2xl"
              >
                <div className="flex items-center justify-between mb-6 text-gray-400 font-light">
                  <div className="text-[10px] uppercase tracking-[0.3em] italic">Professional Dossier</div>
                  <i className="fas fa-expand text-xs group-hover:text-white transition-colors"></i>
                </div>
                <div className="flex items-center gap-6">
                  {/* Stylized CV Preview Icon */}
                  <div className="w-14 h-16 bg-[#111] rounded-lg flex flex-col gap-1.5 p-3 border border-white/10 shadow-xl shrink-0 group-hover:border-white/30 transition-colors">
                    <div className="w-full h-[1px] bg-gray-700"></div>
                    <div className="w-4/5 h-[1px] bg-gray-700"></div>
                    <div className="w-full h-[1px] bg-gray-700"></div>
                    <div className="w-3/5 h-[1px] bg-gray-700"></div>
                    <div className="mt-auto self-end">
                      <i className="far fa-file-pdf text-[10px] text-gray-500 group-hover:text-white transition-colors"></i>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-light text-white uppercase tracking-[0.2em] leading-none mb-2">Technical CV</div>
                    <div className="text-[10px] text-gray-400 font-light uppercase tracking-widest italic">Click to review full screen</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CV Modal HD */}
        {isCvOpen && (
          <div className="fixed inset-0 z-[200] bg-[#000]/98 backdrop-blur-3xl flex items-center justify-center p-4 md:p-10">
            <button 
              onClick={() => setIsCvOpen(false)}
              className="absolute top-8 right-8 text-white hover:text-gray-400 transition-colors z-[210] flex items-center gap-3 uppercase text-[9px] tracking-[0.5em]"
            >
              Close Viewer <i className="fas fa-times text-lg"></i>
            </button>
            <div className="w-full max-w-5xl h-full bg-[#111] rounded-[2rem] shadow-2xl overflow-hidden relative border border-white/10">
              <iframe 
                src="/resources/Maksym_CV_2_0.pdf" 
                className="w-full h-full border-none"
                title="Maksym Grebeniuk CV"
              ></iframe>
            </div>
          </div>
        )}

        {/* Academic Path */}
        <section id="about" className="py-40 border-t border-white/[0.03] text-left">
          <div className="grid lg:grid-cols-[250px_1fr] gap-20 reveal">
            <h3 className="text-[10px] uppercase tracking-[0.6em] text-white font-light italic">Academic Track</h3>
            <div className="max-w-3xl space-y-24">
              
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 border-b border-white/[0.03] pb-12 text-white text-left">
                  <div className="flex items-center gap-10 text-left">
                    <div className="w-24 h-24 shrink-0 flex items-center justify-center transition-transform duration-500 hover:scale-110">
                      <img src="/resources/fontyslogo.png" alt="Fontys" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-light uppercase tracking-[0.2em] leading-none mb-3 text-left text-left text-left text-left text-left text-left text-left">Fontys University</h4>
                      <p className="text-sm text-gray-400 font-extralight uppercase tracking-widest leading-relaxed italic text-left">Bachelor of Science, Software Engineering</p>
                    </div>
                  </div>
                  <span className="text-[9px] font-light text-gray-400 uppercase tracking-[0.5em] shrink-0 italic whitespace-nowrap text-right">2024 - 2028</span>
                </div>
                <div className="space-y-6 text-left">
                  <div className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 text-white text-[9px] font-light uppercase tracking-[0.4em] rounded-lg italic">
                    Delta Excellence Programme
                  </div>
                  <p className="text-gray-400 font-extralight leading-relaxed max-w-2xl text-lg italic text-left text-left text-left text-left">
                    Selected for the elite programme representing the top performance tier of engineering students. Focused on high-level software architecture and leadership.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-16 pt-8 text-left">
                <div className="p-10 bg-white/[0.01] border border-white/[0.03] rounded-[2.5rem] hover:bg-white/[0.02] transition-all group">
                  <div className="flex items-center gap-6 mb-8 text-left text-left">
                    <img src="/resources/inetelogo.png" alt="INETE" className="h-14 object-contain transition-all shrink-0" />
                    <h5 className="text-[9px] text-white uppercase font-light tracking-[0.4em]">INETE Lisbon</h5>
                  </div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-[0.3em] font-extralight leading-loose italic">
                    IT & Software Development <br/> Professional programming <br/> 2020 — 2023
                  </p>
                </div>
                <div className="p-10 bg-white/[0.01] border border-white/[0.03] rounded-[2.5rem] hover:bg-white/[0.02] transition-all group">
                  <div className="flex items-center gap-6 mb-8 text-left">
                    <img src="/resources/assembly.png" alt="Assembly" className="h-14 object-contain transition-all shrink-0" />
                    <h5 className="text-[9px] text-white uppercase font-light tracking-[0.4em]">Assembly Academy</h5>
                  </div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-[0.3em] font-extralight leading-loose italic">
                    Advanced Code Intensive <br/> Lisbon, Portugal <br/> 2020 — 2023
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-40 border-t border-white/[0.03] text-left">
          <div className="grid lg:grid-cols-[250px_1fr] gap-20">
            <h3 className="text-[10px] uppercase tracking-[0.6em] text-white font-light italic reveal">Career Timeline</h3>
            <div className="space-y-32">
              {[
                {
                  date: "Feb 2026 - Present",
                  company: "DAMEN-IT",
                  role: ".NET Developer Intern",
                  logo: "/resources/damenit_digitalworkmatelogo.png",
                  isLarge: true,
                  desc: "Architecting a modular workflow automation engine for Digital WorkMate SaaS ERP. Implementing high-performance factory patterns and multi-provider AI via Semantic Kernel.",
                  tech: ['.NET Core', 'SignalR', 'Semantic Kernel', 'Quartz.NET', 'TypeScript', 'Webix']
                },
                {
                  date: "Apr 2025 - Present",
                  company: "Framax Solutions",
                  role: "Co-founder & Full Stack Developer",
                  logo: "/resources/framaxlogo.png",
                  desc: "Lead engineer for digital transformation systems. Delivered custom CRM, booking ecosystems, and financial automation tools for SMBs using Next.js 15 and Supabase.",
                  tech: ['Next.js 15', 'Supabase', 'TypeScript', 'PostgreSQL RLS', 'Google APIs']
                },
                {
                  date: "Mar 2023 - Jun 2023",
                  company: "MAIN HUB",
                  role: "Junior Full Stack Developer",
                  logo: "/resources/mainhublogo.jpg",
                  desc: "Built a production absence management platform with Blazor and .NET Core. Implemented role-based access and achieved 75%+ unit test coverage.",
                  tech: ['Blazor', '.NET Core', 'EF Core', 'xUnit', 'C#', 'JavaScript']
                }
              ].map((exp, i) => (
                <div key={i} className="reveal group text-left">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 border-b border-white/[0.03] pb-10 gap-8">
                    <div className="flex items-center gap-10">
                      <div className={`${exp.isLarge ? 'w-32 h-32' : 'w-24 h-24'} shrink-0 flex items-center justify-center transition-transform duration-500 hover:scale-110`}>
                        <img src={exp.logo} alt={exp.company} className="max-w-full max-h-full object-contain" />
                      </div>
                      <div>
                        <h4 className="text-3xl font-light text-white tracking-[0.1em] uppercase leading-none">{exp.company}</h4>
                        <div className="text-xs text-gray-400 font-extralight uppercase tracking-[0.3em] mt-4 leading-none italic">{exp.role}</div>
                      </div>
                    </div>
                    <span className="text-[9px] font-light text-gray-400 uppercase tracking-[0.5em] shrink-0 italic text-right">{exp.date}</span>
                  </div>
                  <p className="text-gray-500 text-lg mb-12 max-w-3xl leading-relaxed font-extralight">{exp.desc}</p>
                  <div className="flex flex-wrap gap-x-10 gap-y-5 text-[9px] font-normal text-gray-700 uppercase tracking-[0.3em]">
                    {exp.tech.map(s => (
                      <span key={s} className="flex items-center gap-3 text-left text-left">
                        <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid - Reordered by Impact */}
        <section id="projects" className="py-40 border-t border-white/[0.03] text-left">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 reveal text-white text-left">
            <h3 className="text-[10px] uppercase tracking-[0.6em] font-light italic">Portfolio</h3>
            <p className="text-gray-400 text-[9px] font-light uppercase tracking-[0.5em] mt-4 md:mt-0 italic">Architecture • Operations</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-px bg-white/[0.03] border border-white/[0.03] reveal rounded-[3rem] overflow-hidden shadow-2xl text-left">
            {[
              {
                title: "Workflow Automation Module",
                client: "DAMEN-IT",
                desc: "An event-driven visual engine for manufacturing workflows. Built on ASP.NET Core with dynamic form generation. Reduced manual work by 1-2 hours daily per developer.",
                tags: ['Enterprise SaaS', '.NET Core', 'AI']
              },
              {
                title: "Absence Management Platform",
                client: "MAIN HUB",
                desc: "Enterprise platform featuring interactive calendars, multi-step approval workflows, and role-based access. Achieved 75%+ unit test coverage.",
                tags: ['C# / .NET Core', 'Blazor', 'EF Core']
              },
              {
                title: "Perola do Vouga Ecosystem",
                client: "Restaurant SaaS",
                desc: "Full-cycle take-away ecosystem with automated WhatsApp-to-Menu parsing engine that reduced manual data entry latency by 99%.",
                tags: ['Next.js', 'Supabase', 'Parsing Engine']
              },
              {
                title: "Framax Solutions Platform",
                client: "Agency OS",
                desc: "Dual-purpose ERP/CRM system managing agency lifecycles and automated financial quote generation.",
                tags: ['Next.js 15', 'Supabase RLS']
              },
              {
                title: "Package Management AI",
                client: "SIOUX / Fontys",
                desc: "Algorithmic optimization for building-wide delivery logistics using occupancy and volume algorithms.",
                tags: ['NestJS', 'PostgreSQL']
              }
            ].map((p, i) => (
              <div key={i} className="bg-[#050505] p-16 md:p-24 hover:bg-[#080808] transition-all group relative overflow-hidden text-left text-left">
                <div className="absolute top-0 right-0 w-1 h-0 bg-white/20 group-hover:h-full transition-all duration-700"></div>
                <div className="text-[9px] font-normal text-gray-600 uppercase tracking-[0.5em] mb-12 group-hover:text-white transition-colors italic">{p.client}</div>
                <h4 className="text-4xl font-normal text-white mb-8 tracking-widest uppercase leading-tight">{p.title}</h4>
                <p className="text-gray-500 text-lg mb-12 font-extralight leading-relaxed italic">{p.desc}</p>
                <div className="flex flex-wrap gap-10 text-[9px] font-light text-gray-700 uppercase tracking-[0.3em]">
                  {p.tags.map(t => <span key={t} className="group-hover:text-white transition-colors">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Minimal Footer */}
        <footer className="py-32 border-t border-white/[0.03] flex flex-col md:flex-row justify-between items-center gap-12 text-white">
          <div className="text-[9px] font-light text-gray-400 tracking-[0.6em] uppercase text-center md:text-left leading-loose italic text-left">
            © 2026 MaxWare Protocol <br /> Architectural Design by Maksym Grebeniuk
          </div>
          <div className="flex gap-12 md:gap-16">
            {['Email', 'LinkedIn', 'GitHub'].map(link => (
              <a key={link} href={link === 'Email' ? 'mailto:maksymgrebeniuk@gmail.com' : link === 'LinkedIn' ? 'https://linkedin.com/in/maksym-grebeniuk-7a8b63174' : 'https://github.com/maxiG180'} target="_blank" className="text-[10px] font-normal uppercase tracking-[0.4em] hover:text-white transition-colors border-b border-white/10 pb-1 italic">
                {link}
              </a>
            ))}
          </div>
        </footer>

      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500&display=swap');
        
        body { 
          background-color: #050505; 
          color: #cbd5e1; 
          font-family: 'Inter', -apple-system, sans-serif;
          font-weight: 100;
        }
        
        ::-webkit-scrollbar { width: 2px; }
        ::-webkit-scrollbar-track { background: #050505; }
        ::-webkit-scrollbar-thumb { background: #1a1a1a; }
        
        html { scroll-behavior: smooth; }
        
        h1, h2, h3, h4, h5, .logo { 
          font-family: 'Inter', sans-serif;
          font-weight: 200;
          letter-spacing: -0.04em; 
        }
        
        iframe {
          filter: grayscale(1) invert(0.95) brightness(1.1); 
        }
      ` }} />
    </div>
  );
};

export default App;
