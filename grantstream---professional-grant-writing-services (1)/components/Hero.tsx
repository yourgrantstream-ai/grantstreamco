
import React from 'react';

const Hero: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      if (window.history.pushState) {
        window.history.pushState(null, '', `#${id}`);
      }
    }
  };

  const consultationMailto = () => {
    const subject = encodeURIComponent("Consultation Request: GrantStream Services");
    const body = encodeURIComponent("Hello GrantStream Team,\n\nI would like to request a free consultation regarding your grant writing services. We are interested in identifying new funding streams and strengthening our organizational readiness.\n\nThank you.");
    return `mailto:info@grantstream.company?subject=${subject}&body=${body}`;
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-[120px] opacity-60"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-100 rounded-full blur-[120px] opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="px-1">Professional Grant Services</span>
          </div>
          
          <h1 className="serif text-5xl lg:text-8xl leading-[1.1] mb-8 text-slate-900 max-w-5xl">
            <span className="text-blue-600">Fund</span> Your Mission
          </h1>
          
          <p className="text-lg lg:text-2xl text-slate-600 mb-12 leading-relaxed max-w-3xl font-light">
            Grant writing needs vary greatly across organizations. We bring the elite experience and strategic know-how to meet your specific grant writing needs—navigating the complexity so you can focus on your impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={consultationMailto()}
              className="bg-blue-600 text-white px-10 py-5 rounded-xl font-bold text-center text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-100"
            >
              Start Free Consultation
            </a>
            <a 
              href="#solutions" 
              onClick={(e) => handleScrollTo(e, 'solutions')}
              className="bg-white text-slate-900 border border-slate-200 px-10 py-5 rounded-xl font-bold text-center text-lg hover:bg-slate-50 transition-all"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
