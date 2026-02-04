
import React from 'react';

const PainPoints: React.FC = () => {
  const challenges = [
    {
      title: "Technical Red Tape",
      desc: "Navigating SAM.gov, UEI registrations, and complex federal portals is a full-time job that stalls progress.",
      solution: "We handle all technical registrations and portal management for you.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Capacity Constraints",
      desc: "Most internal teams lack the bandwidth to research, draft, and submit high-stakes narratives under tight deadlines.",
      solution: "Our writers act as your dedicated, on-demand grant department.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Compliance Risk",
      desc: "Incomplete logic models or sloppy budgeting leads to rejected applications or devastating audit failures.",
      solution: "Every narrative is built to satisfy strict federal and foundation standards.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-4">Core Challenges</h2>
          <h3 className="serif text-4xl lg:text-5xl text-slate-900 mb-6">Grant writing made simple.</h3>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            We remove the friction between your mission and the capital required to fund it.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((item, idx) => (
            <div key={idx} className="group relative">
              {/* Subtle hover background effect */}
              <div className="absolute -inset-px bg-slate-200 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              
              <div className="h-full p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 transition-all duration-300 flex flex-col">
                <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center mb-8 text-blue-400 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                
                <h4 className="serif text-2xl text-slate-900 mb-4">{item.title}</h4>
                <p className="text-slate-500 mb-10 leading-relaxed font-light flex-1">
                  {item.desc}
                </p>
                
                <div className="pt-8 border-t border-slate-200">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest block">The GrantStream Fix</span>
                  </div>
                  <p className="text-slate-900 font-bold leading-snug">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
