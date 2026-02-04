
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import ReadinessAssessment from './components/ReadinessAssessment';
import Pricing from './components/Pricing';
import About from './components/About';
import ContactForm from './components/ContactForm';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900 bg-slate-50">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <ReadinessAssessment />
        <Pricing />
        <About />
        <ContactForm />
      </main>
      
      <footer className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">G</span>
            </div>
            <span className="text-xl font-bold text-slate-900">GrantStream</span>
          </div>
          <div className="flex gap-8 text-sm text-slate-500 font-medium">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-600 transition-colors">GSA Schedule</a>
          </div>
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} GrantStream Partners LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
