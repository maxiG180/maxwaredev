import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    // Ultra-clean, fast reveal animations
    gsap.utils.toArray(".reveal").forEach((el) => {
      gsap.fromTo(el, 
        { opacity: 0, y: 10 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.5, 
          ease: "expo.out",
          scrollTrigger: {
            trigger: el,
            start: "top 95%",
          }
        }
      );
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-[#a1a1aa] font-sans antialiased selection:bg-white selection:text-black">
      
      {/* Absolute Minimal Background */}
      <div 
        className="fixed inset-0 z-[-1] opacity-[0.03] pointer-events-none"
        style={{ 
          backgroundImage: `url('/resources/Background.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Structured Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 h-24 flex items-center border-b border-white/[0.03] bg-[#050505]/80 backdrop-blur-md">
        <div className="container mx-auto px-8 md:px-16 flex justify-between items-center">
          <a href="#" className="text-white font-bold tracking-tighter text-lg uppercase">
            MaxWare
          </a>
          <div className="flex items-center gap-12">
            <ul className="hidden md:flex items-center gap-10">
              {['About', 'Experience', 'Projects'].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-[11px] uppercase tracking-[0.2em] font-medium hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <a href="/resources/Maksym_CV_2_0.pdf" target="_blank" className="text-[11px] uppercase tracking-[0.2em] font-bold text-cyan-400 border border-cyan-400/20 px-4 py-2 rounded">
              CV
            </a>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-8 md:px-16">
        
        {/* Formal Hero Section */}
        <section className="min-h-screen flex flex-col justify-center pt-24">
          <div className="max-w-5xl">
            <div className="reveal">
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-10 leading-[0.9]">
                Maksym Grebeniuk
              </h1>
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12 mb-12">
                <h2 className="text-xl md:text-2xl text-white font-medium">
                  Full Stack .NET & React Engineer
                </h2>
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Eindhoven, NL
                </div>
              </div>
              <p className="text-lg md:text-xl text-gray-500 max-w-2xl mb-16 leading-relaxed">
                Specializing in the automation of complex business operations through 
                scalable .NET architectures and reactive frontend ecosystems. 
                7+ production platforms delivered.
              </p>
              <div className="flex items-center gap-8">
                <a href="#projects" className="bg-white text-black px-10 py-4 rounded font-bold text-sm uppercase tracking-widest hover:bg-cyan-400 transition-all">
                  Portfolio
                </a>
                <div className="flex gap-6">
                  <a href="https://linkedin.com/in/maksym-grebeniuk-7a8b63174" target="_blank" className="text-gray-600 hover:text-white transition-colors"><i className="fab fa-linkedin-in text-xl"></i></a>
                  <a href="https://github.com/maxiG180" target="_blank" className="text-gray-600 hover:text-white transition-colors"><i className="fab fa-github text-xl"></i></a>
                  <a href="mailto:maksymgrebeniuk@gmail.com" className="text-gray-600 hover:text-white transition-colors"><i className="far fa-envelope text-xl"></i></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Structured About Section */}
        <section id="about" className="py-40 border-t border-white/[0.05]">
          <div className="grid lg:grid-cols-[300px_1fr] gap-20 reveal">
            <h3 className="text-[11px] uppercase tracking-[0.4em] text-cyan-400 font-black">Background</h3>
            <div className="max-w-3xl space-y-10">
              <p className="text-2xl md:text-3xl text-white font-medium leading-tight tracking-tight">
                Software Engineering student at Fontys University, Relocated from Lisbon to the Netherlands to architect high-impact business systems.
              </p>
              <p className="text-lg leading-relaxed">
                Currently part of the <span className="text-white border-b border-white/20">Delta Excellence Programme</span>. My approach focuses on bridging technical engineering with measurable business value, from custom CRM platforms to automated enterprise ERP modules.
              </p>
              <div className="pt-10 grid md:grid-cols-2 gap-12 border-t border-white/[0.05]">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-600 font-black mb-6">Technical Stack</div>
                  <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold text-gray-400">
                    {['.NET Core', 'React', 'Next.js', 'PostgreSQL', 'AI Providers'].map(t => (
                      <span key={t} className="relative flex items-center gap-2">
                        <span className="w-1 h-1 bg-cyan-400 rounded-full"></span>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-600 font-black mb-6">Education</div>
                  <p className="text-sm font-bold text-gray-400 leading-relaxed uppercase tracking-wider">
                    Fontys ICT Eindhoven <br/> INETE & Assembly Lisbon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formal Experience Section */}
        <section id="experience" className="py-40 border-t border-white/[0.05]">
          <div className="grid lg:grid-cols-[300px_1fr] gap-20">
            <h3 className="text-[11px] uppercase tracking-[0.4em] text-cyan-400 font-black reveal">Experience</h3>
            <div className="space-y-32">
              {[
                {
                  date: "2026 - Present",
                  company: "DAMEN-IT",
                  role: ".NET Developer Intern",
                  desc: "Architecting a modular workflow automation engine for an enterprise SaaS ERP. Focused on high-performance factory patterns and AI integration through Semantic Kernel.",
                  tech: ['.NET Core', 'SignalR', 'AI', 'Quartz.NET']
                },
                {
                  date: "2025 - Present",
                  company: "Framax Solutions",
                  role: "Co-founder & Full Stack Developer",
                  desc: "Lead developer for a boutique digital agency. Delivered custom CRM and booking ecosystems for SMBs using Next.js 15 and Supabase.",
                  tech: ['Next.js 15', 'Supabase', 'TypeScript']
                },
                {
                  date: "2023",
                  company: "MAIN HUB",
                  role: "Junior Developer",
                  desc: "Built a production-ready absence management platform with Blazor and .NET Core. Implemented role-based access and achieved 75% test coverage.",
                  tech: ['Blazor', '.NET Core', 'xUnit']
                }
              ].map((exp, i) => (
                <div key={i} className="reveal group">
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-8">
                    <h4 className="text-3xl font-bold text-white tracking-tighter uppercase">{exp.company}</h4>
                    <span className="text-[11px] font-black text-gray-600 uppercase tracking-[0.3em]">{exp.date}</span>
                  </div>
                  <div className="text-lg text-cyan-400 font-bold mb-6 uppercase tracking-widest">{exp.role}</div>
                  <p className="text-gray-500 text-lg mb-10 max-w-3xl leading-relaxed">{exp.desc}</p>
                  <div className="flex flex-wrap gap-6">
                    {exp.tech.map(s => <span key={s} className="text-[10px] font-black text-gray-700 uppercase tracking-widest">{s}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Clean Projects Grid */}
        <section id="projects" className="py-40 border-t border-white/[0.05]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 reveal">
            <h3 className="text-[11px] uppercase tracking-[0.4em] text-cyan-400 font-black">Selected Works</h3>
            <p className="text-gray-600 text-xs font-bold uppercase tracking-widest mt-4 md:mt-0">Enterprise • Automation • SaaS</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-px bg-white/[0.05] border border-white/[0.05] reveal">
            {[
              {
                title: "Workflow Automation Module",
                client: "DAMEN-IT",
                desc: "An event-driven visual engine for manufacturing workflows.",
                tags: ['Enterprise', '.NET Core']
              },
              {
                title: "Framax Solutions Platform",
                client: "Internal / Clients",
                desc: "Dual-purpose ERP/CRM system managing lead lifecycles and finance.",
                tags: ['Next.js 15', 'Supabase']
              },
              {
                title: "Package Management AI",
                client: "SIOUX campus",
                desc: "Algorithmic optimization for building-wide delivery logistics.",
                tags: ['NestJS', 'Algorithms']
              },
              {
                title: "Restaurant Operations Hub",
                client: "Pérola do Vouga",
                desc: "Full-cycle take-away ecosystem with WhatsApp parsing.",
                tags: ['Operations', 'React']
              }
            ].map((p, i) => (
              <div key={i} className="bg-[#050505] p-12 md:p-16 hover:bg-[#0a0a0a] transition-all group">
                <div className="text-[10px] font-black text-gray-600 uppercase tracking-widest mb-10 group-hover:text-cyan-400 transition-colors">{p.client}</div>
                <h4 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tighter uppercase leading-none">{p.title}</h4>
                <p className="text-gray-500 text-lg mb-10 font-medium leading-relaxed">{p.desc}</p>
                <div className="flex gap-6">
                  {p.tags.map(t => <span key={t} className="text-[10px] font-bold text-gray-700 uppercase tracking-widest">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Minimal Footer */}
        <footer className="py-24 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-[10px] font-black text-gray-700 tracking-[0.4em] uppercase">
            © 2026 MaxWare Protocol
          </div>
          <div className="flex gap-12">
            {['Email', 'LinkedIn', 'GitHub'].map(link => (
              <a key={link} href={link === 'Email' ? 'mailto:maksymgrebeniuk@gmail.com' : link === 'LinkedIn' ? 'https://linkedin.com/in/maksym-grebeniuk-7a8b63174' : 'https://github.com/maxiG180'} target="_blank" className="text-[10px] font-black text-white uppercase tracking-widest hover:text-cyan-400 transition-colors border-b border-white/10 pb-1">
                {link}
              </a>
            ))}
          </div>
        </footer>

      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap');
        
        body { 
          background-color: #050505; 
          color: #a1a1aa; 
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: #050505; }
        ::-webkit-scrollbar-thumb { background: #1a1a1a; }
        ::-webkit-scrollbar-thumb:hover { background: #22d3ee; }
        
        html { scroll-behavior: smooth; }
        
        h1, h2, h3, h4, .logo { 
          font-family: 'Inter', sans-serif;
          letter-spacing: -0.04em; 
        }
      ` }} />
    </div>
  );
};

export default App;
