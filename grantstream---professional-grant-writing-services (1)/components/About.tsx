
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-4">About Our Team</h2>
          <h3 className="serif text-4xl lg:text-6xl text-slate-900 mb-8 leading-tight">Expertise Built on Over 15 Years of Collective Impact.</h3>
          
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-8 text-slate-600 font-light leading-relaxed text-lg lg:text-xl">
          <p>
            GrantStream brings together experts with over 15 years of experience leading the full grant lifecycle for nonprofits working in complex, high-impact environments. Our team's collective background includes identifying funding opportunities, developing competitive proposals, managing funder relationships, and producing clear, timely reports that balance compliance with compelling storytelling.
          </p>
          
          <p>
            We have successfully led and written grant applications to major government agencies and private foundations, securing multi-year awards that have supported critical direct services, staffing, and organizational expansion. Our approach to grants work is highly practical, collaborative, and results-driven.
          </p>

          <div className="grid sm:grid-cols-2 gap-10 py-12 border-y border-slate-200 my-12">
            <div>
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Systems Strengthening
              </h4>
              <p className="text-base">We aim to strengthen internal systems rather than create dependency, leaving our partner organizations with clearer processes and more sustainable funding pipelines.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Funder Trust
              </h4>
              <p className="text-base">We value transparency, thoughtful planning, and honest communication as essential pillars of building long-term partnership and accountability with funders.</p>
            </div>
          </div>

          <p>
            We start every engagement by developing a clear understanding of our clients' program goals, capacity, and constraints. We then translate that into realistic funding strategies and well-structured proposals. Our experts are particularly experienced at working closely with program and finance teams to align budgets, outcomes, and reporting requirements, ensuring deadlines are met without last-minute pressure.
          </p>

          <p>
            As a consulting partner, we step in as a trusted extension of your leadership and staff. We place strong emphasis on risk management and clarity of expectations, both internally and with funders, ensuring your organization is positioned for long-term success and sustainable growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
