import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    // 1. Initial Hero Animation
    const heroTl = gsap.timeline();
    heroTl.from(".hero-text", { y: 50, opacity: 0, duration: 1, ease: "power3.out" })
          .from(".hero-image", { x: 50, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.5");

    // 2. Scroll Animations for Sections
    const animateSection = (selector, start) => {
      gsap.from(selector, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: selector,
          start: start || "top 85%",
        }
      });
    };

    animateSection(".section-header");
    animateSection(".about-content");
    animateSection(".highlight-card");
    animateSection(".timeline-item");
    animateSection(".project-card");

    // Navbar scroll effect
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-texture">
      {/* Navigation */}
      <nav className="navbar fixed top-0 left-0 w-full z-50 h-20 flex items-center transition-all duration-300">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-extrabold logo">MG<span className="text-cyan-400">.</span></a>
          <ul className="hidden md:flex items-center gap-8">
            <li><a href="#about" className="hover:text-cyan-400 transition-colors">About</a></li>
            <li><a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a></li>
            <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a></li>
            <li><a href="/cv.pdf" target="_blank" className="flex items-center gap-2 hover:text-cyan-400 transition-colors font-semibold"><i className="fas fa-file-download"></i> CV</a></li>
            <li><a href="mailto:maksymgrebeniuk@gmail.com" className="border border-cyan-400 text-cyan-400 px-5 py-2 rounded-lg hover:bg-cyan-400 hover:text-black transition-all">Contact</a></li>
          </ul>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center px-6">
          <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="hero-text">
              <span className="badge inline-flex items-center px-4 py-1 rounded-full bg-cyan-400/10 text-cyan-400 text-sm font-semibold mb-6">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 shadow-[0_0_10px_#22d3ee]"></span>
                Available for Work
              </span>
              <h1 className="text-6xl font-extrabold mb-4 tracking-tighter">Maksym Grebeniuk</h1>
              <h2 className="text-2xl text-gray-400 font-medium mb-6">Full Stack .NET & React Developer</h2>
              <p className="text-lg text-gray-400 max-w-lg mb-8 leading-relaxed">
                I build software that automates real business operations. 7+ production platforms delivered.
              </p>
              
              <div className="flex flex-col gap-3 mb-10">
                <div className="flex items-center gap-3 text-gray-500 text-sm">
                  <i className="fas fa-map-marker-alt text-cyan-400 w-5"></i>
                  <span>Eindhoven, Netherlands</span>
                </div>
                <div className="flex items-center gap-3 text-gray-500 text-sm">
                  <i className="fas fa-language text-cyan-400 w-5"></i>
                  <span>English, Portuguese, Ukrainian, Russian</span>
                </div>
              </div>

              <div className="flex gap-6 mb-12">
                <a href="https://linkedin.com/in/maksym-grebeniuk-7a8b63174" target="_blank" className="text-2xl text-gray-400 hover:text-cyan-400 hover:-translate-y-1 transition-all"><i className="fab fa-linkedin"></i></a>
                <a href="https://github.com/maxiG180" target="_blank" className="text-2xl text-gray-400 hover:text-cyan-400 hover:-translate-y-1 transition-all"><i className="fab fa-github"></i></a>
                <a href="mailto:maksymgrebeniuk@gmail.com" className="text-2xl text-gray-400 hover:text-cyan-400 hover:-translate-y-1 transition-all"><i className="fas fa-envelope"></i></a>
                <a href="tel:+31623653103" className="text-2xl text-gray-400 hover:text-cyan-400 hover:-translate-y-1 transition-all"><i className="fas fa-phone"></i></a>
              </div>

              <div className="flex gap-4">
                <a href="#projects" className="bg-cyan-400 text-black px-8 py-3 rounded-lg font-bold shadow-lg shadow-cyan-400/20 hover:-translate-y-1 hover:shadow-cyan-400/30 transition-all">View My Work</a>
                <a href="/cv.pdf" target="_blank" className="border border-white/10 bg-white/5 px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-all">Download CV</a>
              </div>
            </div>
            <div className="hero-image flex justify-center">
              <div className="relative w-80 h-[450px] bg-white/5 rounded-3xl border border-white/10 overflow-hidden flex items-center justify-center">
                <img src="/profile-pic.png" alt="Maksym Grebeniuk" className="absolute inset-0 w-full h-full object-cover z-10" onError={(e) => e.target.style.display='none'} />
                <div className="flex flex-col items-center gap-3 text-gray-600">
                  <i className="fas fa-user text-6xl"></i>
                  <span className="text-sm font-semibold">profile-pic.png</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6">
          <div className="container mx-auto">
            <div className="section-header mb-16">
              <span className="text-cyan-400 uppercase text-xs font-bold tracking-[0.2em] mb-3 block">About Me</span>
              <h2 className="text-4xl font-bold">The person behind the code</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-16">
              <div className="about-content space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>I'm a Software Engineering student at <strong>Fontys University</strong> (BSc, graduating Feb 2028), currently part of the <strong>Delta Excellence Programme</strong>.</p>
                <p>My journey started in Lisbon, studying at <strong>INETE</strong> and <strong>ASSEMBLY Code Academy</strong>. Born in Ukraine, raised in Portugal, now in the Netherlands.</p>
                <p>Outside of engineering, I'm a <strong>multi-time kickboxing champion of Portugal</strong>. I bring that same discipline and drive to every line of code I write.</p>
              </div>
              <div className="flex flex-col gap-6">
                <div className="highlight-card bg-white/5 p-6 rounded-2xl border border-white/10">
                  <div className="flex items-center gap-4 mb-4">
                    <img src="/fontys-logo.png" className="w-10 h-10 object-contain" onError={(e) => e.target.style.display='none'} />
                    <img src="/inete-logo.png" className="w-10 h-10 object-contain" onError={(e) => e.target.style.display='none'} />
                    <img src="/assembly-logo.png" className="w-10 h-10 object-contain" onError={(e) => e.target.style.display='none'} />
                    <i className="fas fa-graduation-cap text-cyan-400 text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Education</h3>
                  <p className="text-gray-500 text-sm">Fontys University, INETE, ASSEMBLY Academy</p>
                </div>
                <div className="highlight-card bg-white/5 p-6 rounded-2xl border border-white/10">
                  <div className="flex items-center gap-4 mb-4">
                    <i className="fas fa-trophy text-cyan-400 text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Achievements</h3>
                  <p className="text-gray-500 text-sm">Delta Excellence Programme, Kickboxing Champion (PT)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 px-6">
          <div className="container mx-auto">
            <div className="section-header mb-16">
              <span className="text-cyan-400 uppercase text-xs font-bold tracking-[0.2em] mb-3 block">Career</span>
              <h2 className="text-4xl font-bold">Work Experience</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-12 relative before:absolute before:left-0 before:top-0 before:w-px before:h-full before:bg-white/10">
              {/* Experience 1 */}
              <div className="timeline-item pl-12 relative before:absolute before:left-[-5px] before:top-0 before:w-2.5 before:h-2.5 before:bg-cyan-400 before:rounded-full before:shadow-[0_0_10px_#22d3ee]">
                <div className="text-cyan-400 text-xs font-bold mb-2">Feb 2026 - Present</div>
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-cyan-400/30 transition-all group">
                  <div className="flex items-center gap-4 mb-6">
                    <img src="/damen-logo.png" className="w-12 h-12 bg-white rounded-lg p-1 object-contain" onError={(e) => e.target.style.display='none'} />
                    <div>
                      <h3 className="text-xl font-bold">.NET Full Stack Developer Intern</h3>
                      <p className="text-gray-400">DAMEN-IT | Veldhoven, NL</p>
                    </div>
                  </div>
                  <ul className="text-gray-400 space-y-3 mb-6 text-sm">
                    <li className="flex gap-3"><span className="text-cyan-400">→</span> Built Workflow Automation for Digital WorkMate SaaS ERP.</li>
                    <li className="flex gap-3"><span className="text-cyan-400">→</span> Tech: ASP.NET Core, SignalR, Quartz.NET, Semantic Kernel (AI).</li>
                    <li className="flex gap-3"><span className="text-cyan-400">→</span> Dynamic form generation from backend metadata.</li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {['.NET Core', 'React', 'SignalR', 'AI'].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/5 rounded-md text-[10px] font-medium border border-white/10 text-gray-400">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Experience 2 */}
              <div className="timeline-item pl-12 relative before:absolute before:left-[-5px] before:top-0 before:w-2.5 before:h-2.5 before:bg-cyan-400 before:rounded-full before:shadow-[0_0_10px_#22d3ee]">
                <div className="text-cyan-400 text-xs font-bold mb-2">Apr 2025 - Present</div>
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-cyan-400/30 transition-all group">
                  <div className="flex items-center gap-4 mb-6">
                    <img src="/framax-logo.png" className="w-12 h-12 bg-white rounded-lg p-1 object-contain" onError={(e) => e.target.style.display='none'} />
                    <div>
                      <h3 className="text-xl font-bold">Co-Founder</h3>
                      <p className="text-gray-400">Framax Solutions | Lisbon, PT</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 mb-6">Co-founded web agency for Portuguese SMBs. Building scalable platforms with Next.js and Supabase.</p>
                  <div className="flex flex-wrap gap-2">
                    {['Next.js', 'React', 'Supabase'].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/5 rounded-md text-[10px] font-medium border border-white/10 text-gray-400">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-6">
          <div className="container mx-auto">
            <div className="section-header mb-16">
              <span className="text-cyan-400 uppercase text-xs font-bold tracking-[0.2em] mb-3 block">My Work</span>
              <h2 className="text-4xl font-bold">Featured Projects</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="project-card bg-white/5 rounded-3xl overflow-hidden border border-white/10 group hover:border-cyan-400/30 transition-all">
                <div className="h-56 bg-black flex items-center justify-center relative overflow-hidden">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-cyan-400 text-black text-[10px] font-bold rounded">Enterprise SaaS</span>
                  </div>
                  <i className="fas fa-project-diagram text-gray-800 text-8xl transition-transform duration-500 group-hover:scale-110"></i>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-2">Workflow Automation System</h3>
                  <p className="text-cyan-400 text-xs font-bold mb-4">DAMEN-IT</p>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">Modular event-driven system with drag-and-drop editor and AI integration via Semantic Kernel.</p>
                  <div className="flex flex-wrap gap-2">
                    {['ASP.NET Core', 'SignalR', 'AI'].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/10 rounded-md text-[10px] font-medium text-gray-400">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/10 text-center text-gray-500 text-sm">
        <p>© 2026 Maksym Grebeniuk. Built with React & Vite.</p>
      </footer>

      {/* Styles for the background and navbar */}
      <style dangerouslySetInnerHTML={{ __html: `
        body { background-color: #0a0a0c; color: white; }
        .bg-texture {
          min-height: 100vh;
          background-image: 
            linear-gradient(rgba(10, 10, 12, 0.9), rgba(10, 10, 12, 0.9)),
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M0 0 L50 50 L100 0 Z' fill='none' stroke='rgba(255,255,255,0.03)' stroke-width='0.5'/%3E%3Cpath d='M0 100 L50 50 L100 100 Z' fill='none' stroke='rgba(255,255,255,0.03)' stroke-width='0.5'/%3E%3C/svg%3E");
          background-size: 150px 150px;
        }
        .navbar.scrolled {
          background-color: rgba(10, 10, 12, 0.85);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          height: 70px;
        }
      ` }} />
    </div>
  );
};

export default App;
