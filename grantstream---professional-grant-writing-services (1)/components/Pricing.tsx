
import React, { useState } from 'react';

const Pricing: React.FC = () => {
  const [view, setView] = useState<'packages' | 'subscriptions'>('packages');

  const generateMailto = (title: string) => {
    const subject = encodeURIComponent(`Service Inquiry: ${title}`);
    const body = encodeURIComponent(`Hello GrantStream Team,\n\nI'm interested in learning more about the "${title}" plan listed on your website. I would like to schedule a discovery call to discuss how this fits our organization's needs.\n\nThank you.`);
    return `mailto:info@grantstream.company?subject=${subject}&body=${body}`;
  };

  const packages = [
    {
      title: "The Federal Foundation",
      price: "Cost to be estimated",
      type: "Project-Based",
      desc: "Complete technical setup for federal eligibility.",
      features: [
        "SAM.gov / Grants.gov Registration",
        "UEI Acquisition Support",
        "Entity Status Validation",
        "Readiness Roadmap",
        "1-Hour Strategic Briefing"
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Strategic Editor",
      price: "Starting at $500",
      type: "Per Application",
      desc: "Expert review and polish for your internally drafted grants.",
      features: [
        "Developmental Narrative Editing",
        "Compliance & Logic Cross-Check",
        "Budget Alignment Review",
        "Tone & Persuasion Optimization",
        "Final Technical Proofing"
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      popular: true
    },
    {
      title: "Narrative Powerhouse",
      price: "Starting at $2,500",
      type: "Per Application",
      desc: "Comprehensive writing for a single major grant.",
      features: [
        "Logic Model Development",
        "Full Narrative Drafting",
        "Budget Justification",
        "Partner Support Letters",
        "2 Rounds of Revisions"
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Readiness Assessment",
      price: "$2,500",
      type: "One-Time",
      desc: "Complete audit and strategic report of organizational eligibility.",
      features: [
        "55-Point Readiness Audit",
        "Strategic Funding Roadmap",
        "Documentation Gap Analysis",
        "Funder Alignment Check",
        "Executive PDF Report"
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    }
  ];

  const subscriptions = [
    {
      title: "The Watchtower",
      price: "$900",
      period: "/mo",
      desc: "Stay ahead of every funding opportunity.",
      features: [
        "Custom Grant Monitoring",
        "Weekly Opportunity Alerts",
        "Monthly Strategy Call",
        "Eligibility Screening",
        "Access to Resource Library"
      ]
    },
    {
      title: "Fractional Department",
      price: "$5,000",
      period: "/mo",
      desc: "Your dedicated grant writing team.",
      features: [
        "Everything in Watchtower",
        "1 Major Application / Month",
        "5 Small Applications",
        "Unlimited Strategy Calls",
        "Technical Portal Management"
      ],
      popular: true
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-4">Investment & Plans</h2>
          <h3 className="serif text-4xl lg:text-5xl text-slate-900 mb-8">Flexible Funding Solutions</h3>
          
          <div className="inline-flex bg-slate-100 p-1 rounded-2xl border border-slate-200">
            <button 
              onClick={() => setView('packages')}
              className={`px-8 py-3 rounded-xl text-sm font-bold transition-all ${view === 'packages' ? 'bg-white text-blue-600 shadow-md' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Service Packages
            </button>
            <button 
              onClick={() => setView('subscriptions')}
              className={`px-8 py-3 rounded-xl text-sm font-bold transition-all ${view === 'subscriptions' ? 'bg-white text-blue-600 shadow-md' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Monthly Retainers
            </button>
          </div>
        </div>

        <div className={`grid gap-8 ${view === 'packages' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1 md:grid-cols-2 lg:max-w-3xl lg:mx-auto'}`}>
          {(view === 'packages' ? packages : subscriptions).map((item, idx) => (
            <div 
              key={idx} 
              className={`group relative flex flex-col p-8 rounded-[2.5rem] border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${item.popular ? 'border-blue-600 bg-white ring-4 ring-blue-50/50' : 'border-slate-100 bg-slate-50'}`}
            >
              {item.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg shadow-blue-200">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                {'icon' in item && (
                  <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 text-blue-400 shadow-lg group-hover:scale-110 transition-transform duration-500">
                    {item.icon as React.ReactNode}
                  </div>
                )}
                <h4 className="serif text-xl text-slate-900 mb-2 leading-tight">{item.title}</h4>
                <p className="text-slate-500 text-xs mb-6 font-light leading-relaxed">{item.desc}</p>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl font-bold text-slate-900 tracking-tight">{item.price}</span>
                  {'period' in item && <span className="text-slate-500 text-sm font-medium">{item.period}</span>}
                </div>
                {'type' in item && <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">{item.type}</span>}
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {item.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs text-slate-600 font-medium">
                    <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-2.5 h-2.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href={generateMailto(item.title)}
                className={`w-full py-4 rounded-xl font-bold text-sm text-center transition-all ${item.popular ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200' : 'bg-slate-900 text-white hover:bg-slate-800'}`}
              >
                Select Plan
              </a>
            </div>
          ))}
        </div>

        <p className="mt-16 text-center text-slate-400 text-xs max-w-2xl mx-auto italic font-light">
          * All pricing is subject to organizational complexity and specific grant requirements. Custom quotes are provided following a discovery call.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
