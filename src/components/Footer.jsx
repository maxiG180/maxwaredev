import React from 'react';

const Footer = () => {
  return (
    <footer className="relative py-12 md:py-16 overflow-hidden">
      {/* Big centered glassy logo */}
      <div className="flex flex-col items-center justify-center mb-10 md:mb-14">
        <div className="relative rounded-[2rem] overflow-hidden"
             style={{ boxShadow: '0 0 80px rgba(6, 182, 212, 0.04)' }}>
          <img
            src="/resources/MWLogo.png"
            alt="MaxWare"
            className="w-32 h-32 md:w-44 md:h-44 object-contain"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-[1400px] mx-auto px-8 md:px-16">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-12" />
      </div>

      <div className="max-w-[1400px] mx-auto px-8 md:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Left branding */}
          <div className="text-[10px] text-gray-600 uppercase tracking-[0.4em] leading-loose text-center md:text-left">
            © 2026 MaxWare Protocol<br />
            Designed & Built by Maksym Grebeniuk
          </div>

          {/* Center email */}
          <a
            href="mailto:maksymgrebeniuk@gmail.com"
            className="group text-gray-500 hover:text-white transition-colors duration-300 text-center"
          >
            <div className="text-[10px] uppercase tracking-[0.4em] mb-1 text-gray-600">Get in touch</div>
            <div className="text-sm md:text-base tracking-wider group-hover:tracking-[0.15em] transition-all duration-500">
              maksymgrebeniuk@gmail.com
            </div>
          </a>

          {/* Socials */}
          <div className="flex gap-6">
            {[
              { href: 'mailto:maksymgrebeniuk@gmail.com', icon: 'far fa-envelope' },
              { href: 'https://linkedin.com/in/maksym-grebeniuk-7a8b63174', icon: 'fab fa-linkedin-in' },
              { href: 'https://github.com/maxiG180', icon: 'fab fa-github' },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel={s.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="w-10 h-10 rounded-full border border-white/[0.06] flex items-center justify-center text-gray-600 hover:text-white hover:border-white/20 hover:bg-white/[0.03] transition-all duration-300"
              >
                <i className={`${s.icon} text-sm`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
