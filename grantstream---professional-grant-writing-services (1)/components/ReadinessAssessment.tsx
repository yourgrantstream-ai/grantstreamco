
import React from 'react';

const ReadinessAssessment: React.FC = () => {
  const pillars = [
    {
      title: "Strategic Alignment",
      desc: "Assessment of organizational mission against funder priorities across federal, state, and private foundation sectors.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "blue"
    },
    {
      title: "Fiscal Infrastructure",
      desc: "Comprehensive review of financial systems, revenue diversity, and audit readiness for high-stakes funding management.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: "indigo"
    },
    {
      title: "Operational Capacity",
      desc: "Evaluation of leadership, staffing models, and programmatic logic required to execute multi-year funded projects.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: "sky"
    },
    {
      title: "Compliance Standards",
      desc: "Validation of legal standing, governance bylaws, and registration status across necessary funding portals.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z" />
        </svg>
      ),
      color: "blue"
    }
  ];

  const assessmentMailto = () => {
    const subject = encodeURIComponent("Inquiry: Strategic Grant Readiness Assessment");
    const body = encodeURIComponent("Hello,\n\nI am interested in initiating a Strategic Grant Readiness Assessment for my organization. We are looking for an objective audit of our documentation, fiscal infrastructure, and operational capacity to secure larger funding awards.\n\nThank you.");
    return `mailto:info@grantstream.company?subject=${subject}&body=${body}`;
  };

  return (
    <section id="readiness" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-blue-400 font-bold uppercase tracking-[0.25em] text-xs mb-4">Precision Analysis</h2>
          <h3 className="serif text-4xl lg:text-6xl mb-6">Readiness Simplified.</h3>
          <p className="text-slate-400 text-lg leading-relaxed font-light">
            Securing transformative funding requires more than a good story. 
            It requires a robust organizational backbone that funders can trust.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div>
              <h4 className="serif text-3xl mb-4 text-blue-100">The 55-Point Readiness Audit</h4>
              <p className="text-slate-400 mb-10 leading-relaxed font-light max-w-xl">
                Our proprietary assessment evaluates 55 critical data points across four core domains to build an objective map of your funding potential.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl opacity-0 group-hover:opacity-10 transition duration-500"></div>
                  <div className="relative bg-slate-800/50 backdrop-blur-xl p-8 rounded-3xl border border-slate-700/50 hover:border-slate-600 transition-all">
                    <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 text-blue-400 shadow-inner group-hover:scale-110 transition-transform border border-slate-700">
                      {pillar.icon}
                    </div>
                    <h5 className="font-bold text-slate-100 mb-3 text-lg">{pillar.title}</h5>
                    <p className="text-sm text-slate-400 leading-relaxed font-light">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-blue-600/15 blur-[100px] -z-10 rounded-full"></div>
            <div className="bg-white text-slate-900 p-8 lg:p-14 rounded-[3.5rem] shadow-2xl relative">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <svg className="w-32 h-32 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-8 border border-blue-100">
                What We Provide
              </div>
              
              <h4 className="serif text-3xl lg:text-4xl mb-6 leading-tight">Your Grant Readiness Strategic Roadmap</h4>
              <p className="text-slate-600 mb-10 leading-relaxed text-lg font-light">
                This authoritative report provides a prioritized path to becoming "Grant Ready" for any funder, including:
              </p>
              
              <div className="space-y-5 mb-12">
                {[
                  "Critical Documentation Gaps & Risk Analysis",
                  "Alignment for Major Funding Streams",
                  "Financial Policy Modernization Priorities",
                  "Narrative & Impact Strategy Optimization",                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              
              <a href={assessmentMailto()} className="block w-full text-center bg-blue-600 text-white font-bold py-5 rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 hover:-translate-y-1 active:scale-[0.98]">
                Initiate Strategic Assessment
              </a>
              <p className="mt-5 text-center text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                Professional Audit & Comprehensive PDF Report Included
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadinessAssessment;
