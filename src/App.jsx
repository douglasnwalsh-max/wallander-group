import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, ArrowRight, ArrowLeft, Building2, Users, TrendingUp, Handshake, Mail, CheckCircle, ChevronRight, BarChart3, Microscope, ShieldCheck, XCircle, Loader2, Quote, Lock, FileText, Download } from 'lucide-react';

// ==========================================
// PAGE: PARTNER PORTAL (STATIC LIBRARY)
// ==========================================
const PartnerPortal = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // ------------------------------------------------------
  // 🔴 LIBRARY CONFIGURATION
  // To add a new document:
  // 1. Drop the PDF into your 'public' folder.
  // 2. Add a new line below: { title: 'Name', date: 'Date', filename: 'your-file.pdf' },
  // ------------------------------------------------------
  const partnerDocuments = [
    { 
      title: 'Decentralisation - Why and How to Make It Work by Jan Wallander', 
      date: '2003', 
      filename: 'Decentralisation - Why and How to Make It Work by Jan Wallander.pdf"' // Make sure this file exists in /public
    },
    { 
      title: 'Swedish Legacy of Decentralization', 
      date: 'Mar 2025', 
      filename: 'annual-report-2025.pdfSwedish-legacy-of-decentralization.pdf' 
    },
    { 
      title: 'Confidence and Humility', 
      date: 'Mar 2025', 
      filename: 'confidence-and-humility-3.pdf' 
    }
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    const correctPassword = 'GreatCod26!'; // Password
    
    if (passwordInput === correctPassword) {
      setIsAuthenticated(true);
      setErrorMsg('');
    } else {
      setErrorMsg('Incorrect password. Please contact info@wallandergroup.com.');
    }
  };

  return (
    <div className="font-sans text-neutral-800 bg-white min-h-screen selection:bg-neutral-200">
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md py-4 border-b border-neutral-200">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-neutral-500 hover:text-black transition-colors font-serif">
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-black flex items-center justify-center text-white font-serif text-xl font-normal pt-1">W</div>
          </Link>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-2xl">
           {!isAuthenticated ? (
             <div className="bg-neutral-900 text-white p-10 rounded-sm shadow-xl mt-10">
               <div className="flex flex-col items-center text-center gap-6">
                 <Lock size={48} className="text-neutral-500" />
                 <h1 className="text-3xl font-serif">Partner Portal</h1>
                 <p className="text-neutral-400 font-light max-w-md">
                   Access to quarterly letters, annual reports, and financial statements is restricted to partners of Wallander Group.
                 </p>
                 <form onSubmit={handleLogin} className="w-full max-w-sm flex flex-col gap-3">
                   <input 
                     type="password" 
                     value={passwordInput}
                     onChange={(e) => setPasswordInput(e.target.value)}
                     placeholder="Enter Password" 
                     className="bg-neutral-800 border border-neutral-600 text-white px-4 py-3 focus:outline-none focus:border-white transition-colors placeholder:text-neutral-600"
                   />
                   <button type="submit" className="bg-white text-black px-6 py-3 font-serif hover:bg-neutral-200 transition-colors font-bold">
                     Access Library
                   </button>
                   {errorMsg && <p className="text-rose-400 text-sm mt-2">{errorMsg}</p>}
                 </form>
               </div>
             </div>
           ) : (
             <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 mt-10">
                <div className="flex justify-between items-end mb-8 border-b border-neutral-200 pb-4">
                    <h1 className="text-3xl font-serif">Partner Documents</h1>
                    <button onClick={() => setIsAuthenticated(false)} className="text-sm text-neutral-500 hover:text-black underline">Log Out</button>
                </div>
                
                <div className="grid gap-4">
                  {partnerDocuments.map((doc, i) => (
                    <a 
                      key={i} 
                      href={`/${doc.filename}`} // Links directly to public folder
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-6 bg-neutral-50 border border-neutral-100 hover:border-black transition-colors group cursor-pointer no-underline"
                    >
                      <div className="flex items-center gap-4">
                         <div className="w-10 h-10 bg-white border border-neutral-200 flex items-center justify-center text-neutral-500 group-hover:text-black group-hover:bg-neutral-100 transition-colors">
                           <FileText size={20} />
                         </div>
                         <div>
                            <span className="font-serif text-lg block text-neutral-800">{doc.title}</span>
                            <span className="text-xs text-neutral-400 uppercase tracking-widest">{doc.date}</span>
                         </div>
                      </div>
                      <Download size={20} className="text-neutral-400 group-hover:text-black" />
                    </a>
                  ))}
                </div>
                <p className="mt-8 text-neutral-400 text-sm italic">
                    Note: This is a secure area. Please do not share these documents externally.
                </p>
             </div>
           )}
        </div>
      </section>
    </div>
  );
};

// ==========================================
// PAGE: JAN WALLANDER & DECENTRALIZATION
// ==========================================
const JanWallander = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans text-neutral-800 bg-white min-h-screen selection:bg-neutral-200">
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md py-4 border-b border-neutral-200">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-neutral-500 hover:text-black transition-colors font-serif">
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-black flex items-center justify-center text-white font-serif text-xl font-normal pt-1">W</div>
          </Link>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6 bg-neutral-50">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-block px-3 py-1 bg-black text-white text-xs font-bold tracking-widest uppercase mb-6 font-serif">
            Our History & Inspiration
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-black leading-tight mb-8">
            Jan Wallander & <br/>
            <span className="italic text-neutral-500">The Case for Decentralization</span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto font-light leading-relaxed">
            The philosophy of Wallander Group is rooted in the work of Dr. Jan Wallander, the Swedish economist who revolutionized banking by dismantling hierarchy and empowering the frontline.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="prose prose-lg text-neutral-600 font-light mb-16">
            <p className="mb-6 first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:mr-3 first-letter:float-left">
              Jan Wallander (1920–2016) was a Swedish economist who decided in 1960 to leave academia and put his theories to work. It was with this unique mix of theoretical insight and practical experience that he became CEO of Handelsbanken in 1970.
            </p>
            <p>
              At the time, Handelsbanken was in crisis. It was centralized, bureaucratic, and losing ground to competitors. Wallander’s solution was radical: he turned the organization upside down.
            </p>
          </div>

          <div className="bg-neutral-50 border-l-4 border-black p-8 md:p-12 my-16">
            <Quote className="text-neutral-300 mb-4" size={32} />
            <h3 className="text-2xl md:text-3xl font-serif text-black leading-tight mb-4">
              "Decisions should be made as close as possible to the customer."
            </h3>
            <p className="text-neutral-500 font-serif italic">— Dr. Jan Wallander</p>
          </div>

          <div className="space-y-16 mb-20">
            <div>
              <div className="w-12 h-12 bg-black text-white flex items-center justify-center mb-6"><Building2 size={24} /></div>
              <h3 className="text-2xl font-serif font-bold text-black mb-4">Dismantling the Hierarchy</h3>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Wallander believed that central headquarters often hindered more than they helped. He stripped away layers of middle management and gave extensive authority to local branch managers. If a branch manager wanted to make a loan, they didn't need approval from Stockholm—they just needed to know their customer.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-black text-white flex items-center justify-center mb-6"><TrendingUp size={24} /></div>
              <h3 className="text-2xl font-serif font-bold text-black mb-4">Abolishing the Budget (1972)</h3>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Perhaps his most famous move was abolishing the annual budget. Wallander viewed budgets as rigid, political instruments that were disconnected from reality. Instead, he implemented a system of continuous benchmarking.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-black text-white flex items-center justify-center mb-6"><Users size={24} /></div>
              <h3 className="text-2xl font-serif font-bold text-black mb-4">People Over Process</h3>
              <p className="text-lg text-neutral-600 leading-relaxed">
                The "Wallander Model" is built on trust. It assumes that people want to do a good job and will make the right decisions if given the right information and incentives.
              </p>
            </div>
          </div>

          <div className="pt-10 border-t border-neutral-200">
             <h4 className="font-serif font-bold text-lg mb-4">Why this matters to Wallander Group</h4>
             <p className="text-neutral-600">
               We apply these exact same principles to the companies we acquire. We are not here to micromanage from a central office. We are here to provide capital, support, and the freedom for operators to run their businesses.
             </p>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-12 text-center">
        <Link to="/" className="inline-block border border-white/20 px-8 py-3 hover:bg-white hover:text-black transition-all font-serif">
          Return to Homepage
        </Link>
      </footer>
    </div>
  );
};

// ==========================================
// PAGE: MAIN HOME PAGE
// ==========================================
const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formStatus, setFormStatus] = useState('idle');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'strategy', 'sellers', 'criteria', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    const formId = 'xeelorlp'; // Your verified Formspree ID
    try {
      const formData = new FormData(e.target);
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        setFormStatus('success');
        e.target.reset();
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
        alert("There was an issue sending your message. Please try again.");
      }
    } catch (error) {
      setFormStatus('error');
      alert("Network error. Please try again later.");
    }
  };

  const NavLink = ({ id, label }) => (
    <button
      onClick={() => scrollToSection(id)}
      className={`text-sm font-serif tracking-wide transition-colors duration-300 ${
        activeSection === id 
          ? 'text-black font-bold border-b-2 border-black' 
          : 'text-neutral-500 hover:text-black'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="font-sans text-neutral-800 bg-white min-h-screen selection:bg-neutral-200">
      <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-white/95 backdrop-blur-md py-4 border-neutral-200' : 'bg-white py-6 border-transparent'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollToSection('home')}>
            <div className="w-10 h-10 bg-black flex items-center justify-center text-white font-serif text-2xl font-normal pt-1 shadow-sm transition-transform group-hover:scale-105">W</div>
            <span className="text-xl font-serif tracking-wide text-black">Wallander Group</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <NavLink id="about" label="Philosophy" />
            <NavLink id="strategy" label="Strategy" />
            
            <Link to="/jan-wallander" className="text-sm font-serif tracking-wide text-neutral-500 hover:text-black transition-colors duration-300">
              Jan Wallander
            </Link>

            <NavLink id="sellers" label="For Sellers" />
            <NavLink id="criteria" label="Criteria" />
            
            {/* PARTNER PORTAL LINK */}
            <Link to="/partners" className="text-sm font-serif tracking-wide text-neutral-500 hover:text-black transition-colors duration-300 flex items-center gap-1">
              <Lock size={14} className="mb-0.5" /> Partners
            </Link>

            <button onClick={() => scrollToSection('contact')} className="bg-black text-white px-6 py-2.5 text-sm font-serif hover:bg-neutral-800 transition-all shadow-sm hover:shadow-md">
              Contact Us
            </button>
          </div>

          <button className="md:hidden text-black" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-neutral-100 py-6 px-6 flex flex-col gap-4 md:hidden animate-in slide-in-from-top-5">
            <button onClick={() => scrollToSection('about')} className="text-left text-neutral-600 font-serif text-lg py-2">Philosophy</button>
            <button onClick={() => scrollToSection('strategy')} className="text-left text-neutral-600 font-serif text-lg py-2">Strategy</button>
            <Link to="/jan-wallander" className="text-left text-neutral-600 font-serif text-lg py-2">Jan Wallander</Link>
            <button onClick={() => scrollToSection('sellers')} className="text-left text-neutral-600 font-serif text-lg py-2">For Sellers</button>
            <button onClick={() => scrollToSection('criteria')} className="text-left text-neutral-600 font-serif text-lg py-2">Criteria</button>
            <Link to="/partners" className="text-left text-neutral-600 font-serif text-lg py-2 flex items-center gap-2"><Lock size={16}/> Partners</Link>
            <button onClick={() => scrollToSection('contact')} className="bg-black text-white py-3 mt-4 text-center font-serif">Contact Us</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-24 md:pt-48 md:pb-36 px-6 bg-neutral-50 border-b border-neutral-200">
        <div className="container mx-auto max-w-5xl">
          <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h1 className="text-4xl md:text-6xl font-serif text-black leading-[1.1] mb-8">
              Committed to Building <br/>
              <span className="italic">Entrepreneurial Teams.</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 mb-12 leading-relaxed max-w-2xl font-light">
              Wallander Group is a permanent home for exceptional niche technical manufacturing businesses dedicated to a decentralized operating model. We believe in empowering operators with autonomy, alignment, and accountability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => scrollToSection('contact')} className="flex items-center justify-center gap-2 bg-black text-white px-8 py-4 font-serif hover:bg-neutral-800 transition-all shadow-sm hover:translate-y-[-1px]">
                Get in Touch <ArrowRight size={18} />
              </button>
              <button onClick={() => scrollToSection('criteria')} className="flex items-center justify-center gap-2 bg-white text-black border border-neutral-300 px-8 py-4 font-serif hover:bg-neutral-50 transition-all">
                Investment Criteria
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy / About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-block px-3 py-1 bg-neutral-100 text-neutral-600 text-xs font-bold tracking-widest uppercase mb-6 font-serif">Our Inspiration</div>
              <h2 className="text-3xl md:text-4xl font-serif text-black mb-8 leading-tight">
                Decisions should be made as close as possible to the customer.
              </h2>
              <div className="prose prose-lg text-neutral-600 font-light">
                <p className="mb-6">
                  Our philosophy is inspired by <strong>Jan Wallander</strong>, the pioneer of decentralization who transformed Handelsbanken. Wallander dismantled traditional centralized hierarchies, abolished rigid annual budgets, and empowered local managers.
                </p>
                <p>
                  We believe that the best leaders empower their people. At Wallander Group, headquarters exists to serve the units of action—not the other way around. We provide strategic guidance and capital allocation, while giving our operators the autonomy to run their businesses.
                </p>
              </div>
            </div>
            
            <div className="bg-neutral-50 p-10 border border-neutral-100 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-black"></div>
              <h3 className="text-2xl font-serif mb-6">The Wallander Model</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-12 h-12 flex items-center justify-center border border-neutral-200 bg-white shrink-0">
                    <Users size={20} className="text-black" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold mb-1">Decentralization</h4>
                    <p className="text-sm text-neutral-500">Abolishing bureaucracy. Local teams make the decisions that matter.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-12 h-12 flex items-center justify-center border border-neutral-200 bg-white shrink-0">
                    <TrendingUp size={20} className="text-black" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold mb-1">Long-Term Horizon</h4>
                    <p className="text-sm text-neutral-500">We do not flip businesses. We build for decades, prioritizing durability over short-term optimization.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-12 h-12 flex items-center justify-center border border-neutral-200 bg-white shrink-0">
                    <Microscope size={20} className="text-black" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold mb-1">Niche Excellence</h4>
                    <p className="text-sm text-neutral-500">We focus on specialized technical businesses that are small for a reason but dominant in their field.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section id="strategy" className="py-24 bg-neutral-900 text-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-serif mb-4">A Different Kind of Partner</h2>
             <p className="text-neutral-400 max-w-2xl mx-auto text-lg font-light">We balance operational autonomy with strategic support.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-neutral-800 p-8 md:p-10 border-l-4 border-emerald-500">
              <h3 className="text-2xl font-serif mb-8 flex items-center gap-3">
                <CheckCircle className="text-emerald-500" size={28} /> What We Will Do
              </h3>
              <ul className="space-y-4">
                {["Incentivize operators for long-term profitable growth", "Modernize IT and reporting systems", "Harmonize metrics focused on return on invested capital", "Enhance visibility and accountability", "Build on the founders' brand and legacy", "Invest in high-return R&D and talent development"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-neutral-300"><span className="mt-2 w-1.5 h-1.5 bg-emerald-500 rounded-full shrink-0"></span><span>{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-neutral-800 p-8 md:p-10 border-l-4 border-rose-500">
              <h3 className="text-2xl font-serif mb-8 flex items-center gap-3">
                <XCircle className="text-rose-500" size={28} /> What We Will <span className="italic">Not</span> Do
              </h3>
              <ul className="space-y-4">
                {["Move the company or change its location", "Mandate vendors or centralize purchasing forcefully", "Seek 'synergies' that disrupt operations", "Flip the business to another buyer", "Over-lever the business with unsustainable debt", "Direct day-to-day operations from headquarters"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-neutral-300"><span className="mt-2 w-1.5 h-1.5 bg-rose-500 rounded-full shrink-0"></span><span>{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* For Sellers Section */}
      <section id="sellers" className="py-24 bg-white border-b border-neutral-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-black mb-6">Why Sell to Wallander Group?</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto font-light">We offer an alternative to strategics and private equity for owners who value a permanent home for their life’s work.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {icon: ShieldCheck, title: "Continuity & Autonomy", text: "We intend to keep your culture intact. We focus on business owners who value their employees and legacy, ensuring the business thrives without constant interference."},
              {icon: Handshake, title: "Fair Valuation", text: "We provide a fair, transparent valuation process. While we are disciplined buyers, we offer structural flexibility including seller financing and earn-outs."},
              {icon: CheckCircle, title: "Certainty of Close", text: "Our process is simple, repeatable, and efficient. We move quickly from LOI to close, respecting your time and minimizing disruption to the business."}
            ].map((item, idx) => (
              <div key={idx} className="p-8 bg-neutral-50 hover:bg-white border border-neutral-100 hover:border-neutral-200 transition-all hover:shadow-lg group">
                <item.icon size={32} className="text-black mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-serif font-bold mb-4">{item.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Criteria */}
      <section id="criteria" className="py-24 bg-neutral-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/2">
              <div className="inline-block px-3 py-1 bg-black text-white text-xs font-bold tracking-widest uppercase mb-6 font-serif">Acquisition Focus</div>
              <h2 className="text-3xl md:text-4xl font-serif text-black mb-6">Niche Technical Manufacturers</h2>
              <p className="text-neutral-600 text-lg mb-8 font-light">We focus on "Technical Products" and similar highly specialized fields. We look for capital-light, IP-heavy designers and manufacturers of niche products.</p>
              <div className="bg-white p-6 border border-neutral-200 shadow-sm">
                <h4 className="font-serif font-bold mb-4 flex items-center gap-2"><Microscope size={18} /> Areas of Interest</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Technical Products</h5>
                    <div className="grid grid-cols-1 gap-2 text-sm text-neutral-600">
                      {["Precision Optics & Machining (e.g., Lenses, Mirrors)", "Vacuum & Thin Film Components (Semiconductor)", "Oceanographic Sensors / 'Blue Tech' Instrumentation", "Defense RF & Microwave Systems (Radar Components)"].map((t, i) => (
                        <div key={i} className="flex items-center gap-2"><div className="w-1 h-1 bg-black rounded-full"></div><span>{t}</span></div>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-neutral-100">
                    <h5 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Scientific Instruments</h5>
                    <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-neutral-600">
                      {["Analytical Instruments", "Microscopy", "Material Testing", "Environmental Testing", "Optical Instruments", "Spectroscopy"].map((t, i) => (
                        <div key={i} className="flex items-center gap-2"><div className="w-1 h-1 bg-black rounded-full"></div>{t}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-8 md:p-10 border-t-4 border-black shadow-xl">
                <div className="flex items-center gap-3 mb-8">
                  <BarChart3 className="text-black" size={28} />
                  <h3 className="text-2xl font-serif">Financial Profile</h3>
                </div>
                <div className="space-y-6">
                  <div className="flex justify-between items-end border-b border-neutral-100 pb-3"><span className="text-neutral-500 font-medium">EBIT / EBITDA</span><span className="text-xl font-bold text-black">$1M – $3M</span></div>
                  <div className="flex justify-between items-end border-b border-neutral-100 pb-3"><span className="text-neutral-500 font-medium">EBIT Margins</span><span className="text-xl font-bold text-black">20% +</span></div>
                  <div className="flex justify-between items-end border-b border-neutral-100 pb-3"><span className="text-neutral-500 font-medium">Gross Margins</span><span className="text-xl font-bold text-black">&gt; 50%</span></div>
                </div>
                <div className="mt-8 pt-6 border-t border-dashed border-neutral-200">
                  <h4 className="font-serif font-bold mb-4">Business Characteristics</h4>
                  <ul className="space-y-3">
                    {["Dominant brand in a niche", "Technical founder / owner seeking liquidity", "Low customer concentration", "Asset-light & Product-based", "Small for a reason but benefits from secular trends"].map((item, i) => (
                      <li key={i} className="flex items-start gap-3"><ChevronRight size={16} className="text-neutral-400 mt-1 shrink-0" /><span className="text-neutral-700 text-sm">{item}</span></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white border-t border-neutral-200">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-neutral-50 border border-neutral-200 p-8 md:p-12 flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h3 className="text-3xl font-serif mb-6">Start a Conversation</h3>
              <p className="text-neutral-600 mb-8 font-light">Whether you are a business owner exploring options or an intermediary with a deal to discuss, we operate with strict confidentiality and respect for your time.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4"><div className="w-10 h-10 bg-white border border-neutral-200 flex items-center justify-center"><Mail size={18} className="text-black" /></div><a href="mailto:info@wallandergroup.com" className="text-lg hover:underline decoration-1 underline-offset-4">info@wallandergroup.com</a></div>
              </div>
              <div className="mt-12 pt-8 border-t border-neutral-200"><p className="text-sm text-neutral-400 font-serif">&copy; {new Date().getFullYear()} Wallander Group.<br/>Dedicated to the long-term.</p></div>
            </div>
            <div className="md:w-1/2">
              <form className="space-y-4" onSubmit={handleFormSubmit}>
                <div><label className="block text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2">Name</label><input required name="name" type="text" className="w-full px-4 py-3 bg-white border border-neutral-300 focus:outline-none focus:border-black transition-colors" placeholder="First Last" /></div>
                <div><label className="block text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2">Email</label><input required name="email" type="email" className="w-full px-4 py-3 bg-white border border-neutral-300 focus:outline-none focus:border-black transition-colors" placeholder="email@company.com" /></div>
                <div><label className="block text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2">Message</label><textarea required name="message" rows="4" className="w-full px-4 py-3 bg-white border border-neutral-300 focus:outline-none focus:border-black transition-colors" placeholder="How can we help?"></textarea></div>
                <button disabled={formStatus === 'sending' || formStatus === 'success'} className={`w-full font-serif py-4 transition-colors flex items-center justify-center gap-2 ${formStatus === 'success' ? 'bg-emerald-600 text-white' : 'bg-black text-white hover:bg-neutral-800'}`}>
                  {formStatus === 'idle' && 'Send Message'}
                  {formStatus === 'sending' && <><Loader2 className="animate-spin" size={18} />Sending...</>}
                  {formStatus === 'success' && <><CheckCircle size={18} />Message Sent!</>}
                  {formStatus === 'error' && 'Retry Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// ==========================================
// APP ROUTER SETUP
// ==========================================
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jan-wallander" element={<JanWallander />} />
        <Route path="/partners" element={<PartnerPortal />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;