
import React from 'react';

const ContactForm: React.FC = () => {
  const handleEmailClick = () => {
    const subject = encodeURIComponent("GrantStream Inquiry: Partnership & Service Request");
    const body = encodeURIComponent(
      "Hello GrantStream Team,\n\n" +
      "I am interested in learning more about your grant writing services for my organization.\n\n" +
      "Organization Name:\n" +
      "Primary Funding Interest:\n\n" +
      "Thank you,"
    );
    window.location.href = `mailto:info@grantstream.company?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-blue-600 rounded-[3rem] p-8 lg:p-20 text-white relative overflow-hidden shadow-2xl shadow-blue-100">
          {/* Background Decorative Element */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute top-0 right-0 w-1/2 h-full bg-white rotate-12 transform translate-x-1/2"></div>
          </div>

          <div className="lg:grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="serif text-4xl lg:text-6xl mb-6 leading-tight">Ready to Secure Your Funding?</h2>
              <p className="text-blue-100 text-xl mb-12 font-light leading-relaxed max-w-lg">
                Stop struggling with complex narratives and technical portals. Connect with our experts today to build a sustainable funding pipeline.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center shrink-0 text-blue-400 border border-slate-800 transition-transform duration-500 hover:scale-110">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white">Direct Line</h4>
                    <p className="text-blue-100 font-medium">info@grantstream.company</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 lg:mt-0 flex justify-center lg:justify-end">
              <div className="bg-white p-12 lg:p-16 rounded-[3rem] shadow-2xl text-slate-900 text-center max-w-md w-full border border-slate-100 relative group transition-all hover:-translate-y-2">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white p-4 rounded-2xl shadow-xl">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                
                <h3 className="serif text-3xl mb-10 pt-4">Start Your Inquiry</h3>

                <button 
                  onClick={handleEmailClick}
                  className="w-full bg-blue-600 text-white font-bold py-5 px-8 rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 active:scale-95 flex items-center justify-center gap-3 text-lg"
                >
                  <span>Connect via Email</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
