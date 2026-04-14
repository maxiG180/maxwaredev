import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
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
    <div className="min-h-screen bg-[#080808] text-[#94a3b8] font-light antialiased selection:bg-white selection:text-black">
      
      {/* Background Layer */}
      <div 
        className="fixed inset-0 z-[-1] opacity-[0.02] pointer-events-none"
        style={{ 
          backgroundImage: `url('/resources/Background.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 h-20 flex items-center border-b border-white/[0.03] bg-[#080808]/90 backdrop-blur-xl px-8 md:px-16">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-white font-medium tracking-[0.2em] text-sm uppercase">
            MaxWare
          </a>
          <div className="flex items-center gap-12">
            <ul className="hidden md:flex items-center gap-10">
              {['About', 'Experience', 'Projects'].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-[10px] uppercase tracking-[0.2em] font-normal hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <a href="/resources/Maksym_CV_2_0.pdf" target="_blank" className="text-[10px] uppercase tracking-[0.3em] font-medium text-cyan-400">
              Download Full CV
            </a>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-8 md:px-16">
        
        {/* Elite Split Hero Section */}
        <section className="min-h-screen flex flex-col justify-center pt-32 pb-20">
          <div className="grid lg:grid-cols-[1fr_auto] gap-20 items-start w-full reveal">
            
            {/* Left: Bio */}
            <div className="max-w-2xl py-10">
              <h1 className="text-5xl md:text-7xl font-normal tracking-tight text-white mb-8 leading-none">
                Maksym Grebeniuk
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-400 font-light mb-10 tracking-wide">
                Full Stack .NET & React Engineer • Eindhoven, NL
              </h2>
              <p className="text-lg text-gray-500 max-w-xl mb-12 leading-relaxed font-light">
                Architecting high-stakes business operations through scalable .NET 
                backend systems and high-performance React frontends. 
                7+ production platforms delivered.
              </p>
              <div className="flex items-center gap-10">
                <a href="#projects" className="border border-white/10 text-white px-8 py-3 rounded-sm text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all">
                  Selected Work
                </a>
                <div className="flex gap-6">
                  <a href="https://linkedin.com/in/maksym-grebeniuk-7a8b63174" target="_blank" className="text-gray-600 hover:text-white transition-colors"><i className="fab fa-linkedin-in text-lg"></i></a>
                  <a href="https://github.com/maxiG180" target="_blank" className="text-gray-600 hover:text-white transition-colors"><i className="fab fa-github text-lg"></i></a>
                  <a href="mailto:maksymgrebeniuk@gmail.com" className="text-gray-600 hover:text-white transition-colors"><i className="far fa-envelope text-lg"></i></a>
                </div>
              </div>
            </div>

            {/* Right: Embedded Assets (Profile + CV side by side) */}
            <div className="hidden lg:flex gap-6 h-[550px]">
              {/* Profile Image */}
              <div className="w-[240px] h-full rounded-sm overflow-hidden border border-white/[0.05] grayscale opacity-80 hover:opacity-100 transition-opacity">
                <img 
                  src="/resources/ProfilePic.jpeg" 
                  alt="Maksym Grebeniuk" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Embedded PDF CV */}
              <div className="w-[400px] h-full rounded-sm overflow-hidden border border-white/[0.05] bg-[#111]">
                <iframe 
                  src="/resources/Maksym_CV_2_0.pdf#toolbar=0&navpanes=0&scrollbar=0" 
                  className="w-full h-full border-none opacity-90"
                  title="Maksym Grebeniuk CV"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-40 border-t border-white/[0.03]">
          <div className="grid lg:grid-cols-[250px_1fr] gap-20 reveal">
            <h3 className="text-[10px] uppercase tracking-[0.5em] text-cyan-400 font-medium">Background</h3>
            <div className="max-w-3xl space-y-12">
              <p className="text-2xl md:text-3xl text-white font-light leading-tight tracking-tight">
                Software Engineering student at Fontys University, relocated from Lisbon to architect high-impact business systems.
              </p>
              <p className="text-lg leading-relaxed font-light text-gray-500">
                Member of the elite <span className="text-white">Delta Excellence Programme</span>. Specialized in bridging technical engineering with measurable business value, from custom CRM platforms to automated enterprise ERP modules.
              </p>
              <div className="pt-12 grid md:grid-cols-2 gap-16 border-t border-white/[0.03]">
                <div>
                  <div className="text-[9px] uppercase tracking-[0.3em] text-gray-600 font-medium mb-6">Stack</div>
                  <div className="flex flex-wrap gap-x-8 gap-y-4 text-xs font-normal text-gray-400">
                    {['.NET Core', 'React', 'Next.js 15', 'PostgreSQL', 'AI/ML'].map(t => (
                      <span key={t} className="flex items-center gap-3">
                        <span className="w-px h-3 bg-cyan-400/40"></span>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-[9px] uppercase tracking-[0.3em] text-gray-600 font-medium mb-6">Education</div>
                  <p className="text-xs font-normal text-gray-400 leading-loose uppercase tracking-widest">
                    Fontys ICT Eindhoven <br/> INETE & Assembly Lisbon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-40 border-t border-white/[0.03]">
          <div className="grid lg:grid-cols-[250px_1fr] gap-20">
            <h3 className="text-[10px] uppercase tracking-[0.5em] text-cyan-400 font-medium reveal">Timeline</h3>
            <div className="space-y-32">
              {[
                {
                  date: "2026 - Present",
                  company: "DAMEN-IT",
                  role: ".NET Developer Intern",
                  desc: "Architecting a modular workflow automation engine for an enterprise SaaS ERP. Focused on high-performance factory patterns and multi-provider AI via Semantic Kernel.",
                  tech: ['.NET Core', 'SignalR', 'AI', 'Quartz.NET']
                },
                {
                  date: "2025 - Present",
                  company: "Framax Solutions",
                  role: "Co-founder & Full Stack Developer",
                  desc: "Lead developer for digital platform delivery. Architected custom CRM and financial ecosystems for SMBs using Next.js 15 and Supabase.",
                  tech: ['Next.js 15', 'Supabase', 'TypeScript']
                },
                {
                  date: "2023",
                  company: "MAIN HUB",
                  role: "Junior Developer",
                  desc: "Built a production absence management platform with Blazor and .NET Core. Implemented role-based access and achieved 75%+ test coverage.",
                  tech: ['Blazor', '.NET Core', 'xUnit']
                }
              ].map((exp, i) => (
                <div key={i} className="reveal group">
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-8 border-b border-white/[0.03] pb-4">
                    <h4 className="text-2xl font-normal text-white tracking-widest uppercase">{exp.company}</h4>
                    <span className="text-[10px] font-normal text-gray-600 uppercase tracking-[0.4em]">{exp.date}</span>
                  </div>
                  <div className="text-sm text-cyan-400 font-medium mb-6 uppercase tracking-[0.2em]">{exp.role}</div>
                  <p className="text-gray-500 text-lg mb-10 max-w-3xl leading-relaxed font-light">{exp.desc}</p>
                  <div className="flex flex-wrap gap-8 text-[9px] font-normal text-gray-700 uppercase tracking-[0.3em]">
                    {exp.tech.map(s => <span key={s}>{s}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section id="projects" className="py-40 border-t border-white/[0.03]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 reveal">
            <h3 className="text-[10px] uppercase tracking-[0.5em] text-cyan-400 font-medium">Selected Works</h3>
            <p className="text-gray-600 text-[9px] font-normal uppercase tracking-[0.4em] mt-4 md:mt-0">Enterprise • Automation • SaaS</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-px bg-white/[0.03] border border-white/[0.03] reveal shadow-2xl">
            {[
              {
                title: "Workflow Automation Module",
                client: "DAMEN-IT",
                desc: "An event-driven visual engine for manufacturing workflows.",
                tags: ['Enterprise', '.NET Core']
              },
              {
                title: "Framax Solutions Platform",
                client: "Agency OS",
                desc: "Dual-purpose ERP/CRM system managing lead lifecycles and finance.",
                tags: ['Next.js 15', 'Supabase']
              },
              {
                title: "Package Management AI",
                client: "SIOUX / Fontys",
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
              <div key={i} className="bg-[#080808] p-16 hover:bg-[#0c0c0c] transition-all group relative">
                <div className="text-[9px] font-normal text-gray-600 uppercase tracking-[0.4em] mb-12 group-hover:text-cyan-400 transition-colors">{p.client}</div>
                <h4 className="text-3xl font-normal text-white mb-8 tracking-widest uppercase leading-none">{p.title}</h4>
                <p className="text-gray-500 text-lg mb-12 font-light leading-relaxed">{p.desc}</p>
                <div className="flex gap-8 text-[9px] font-normal text-gray-700 uppercase tracking-[0.3em]">
                  {p.tags.map(t => <span key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Minimal Footer */}
        <footer className="py-24 border-t border-white/[0.03] flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-[9px] font-normal text-gray-700 tracking-[0.5em] uppercase">
            © 2026 MaxWare Systems
          </div>
          <div className="flex gap-16">
            {['Email', 'LinkedIn', 'GitHub'].map(link => (
              <a key={link} href={link === 'Email' ? 'mailto:maksymgrebeniuk@gmail.com' : link === 'LinkedIn' ? 'https://linkedin.com/in/maksym-grebeniuk-7a8b63174' : 'https://github.com/maxiG180'} target="_blank" className="text-[9px] font-normal text-white uppercase tracking-[0.4em] hover:text-cyan-400 transition-colors">
                {link}
              </a>
            ))}
          </div>
        </footer>

      </main>

      {/* Global CSS for lightweight font stack */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500&display=swap');
        
        body { 
          background-color: #080808; 
          color: #94a3b8; 
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-weight: 300;
        }
        
        ::-webkit-scrollbar { width: 2px; }
        ::-webkit-scrollbar-track { background: #080808; }
        ::-webkit-scrollbar-thumb { background: #1a1a1a; }
        
        html { scroll-behavior: smooth; }
        
        h1, h2, h3, h4, .logo { 
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          letter-spacing: -0.02em; 
        }
        
        iframe {
          filter: invert(0.9) hue-rotate(180deg) brightness(1.1); /* Makes PDF look dark mode */
        }
      ` }} />
    </div>
  );
};

export default App;
