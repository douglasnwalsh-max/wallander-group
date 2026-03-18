import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, ArrowRight, ArrowLeft, Building2, Users, TrendingUp, Handshake, Mail, CheckCircle, ChevronRight, BarChart3, Microscope, Lock, FileText, Download, Target, ShieldCheck, Zap, Loader2, Heart, Award, Anchor, Quote } from 'lucide-react';

// ==========================================
// PAGE: PARTNER PORTAL
// ==========================================
const PartnerPortal = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const partnerDocuments = [
    { 
      title: 'Q4 2025 Investor Letter', 
      date: 'Dec 2025', 
      filename: 'q4-letter.pdf' 
    },
    { 
      title: 'Annual Report 2025', 
      date: 'Jan 2026', 
      filename: 'annual-report-2025.pdf' 
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
                      href={`/${doc.filename}`} 
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
// PAGE: MAIN HOME PAGE (REVAMPED)
// ==========================================
const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formStatus, setFormStatus] = useState('idle');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['home', 'culture', 'criteria', 'contact'];
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
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-white/95 backdrop-blur-md py-4 border-neutral-200' : 'bg-white py-6 border-transparent'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollToSection('home')}>
            <div className="w-10 h-10 bg-black flex items-center justify-center text-white font-serif text-2xl font-normal pt-1 shadow-sm transition-transform group-hover:scale-105">W</div>
            <span className="text-xl font-serif tracking-wide text-black">Wallander Group</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <NavLink id="culture" label="Our Culture" />
            <NavLink id="criteria" label="Criteria" />
            
            <Link to="/jan-wallander" className="text-sm font-serif tracking-wide text-neutral-500 hover:text-black transition-colors duration-300">
              Jan Wallander
            </Link>
            
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-neutral-100 py-6 px-6 flex flex-col gap-4 md:hidden animate-in slide-in-from-top-5">
            <button onClick={() => scrollToSection('culture')} className="text-left text-neutral-600 font-serif text-lg py-2">Our Culture</button>
            <button onClick={() => scrollToSection('criteria')} className="text-left text-neutral-600 font-serif text-lg py-2">Criteria</button>
            <Link to="/jan-wallander" className="text-left text-neutral-600 font-serif text-lg py-2">Jan Wallander</Link>
            <Link to="/partners" className="text-left text-neutral-600 font-serif text-lg py-2 flex items-center gap-2"><Lock size={16}/> Partners</Link>
            <button onClick={() => scrollToSection('contact')} className="bg-black text-white py-3 mt-4 text-center font-serif">Contact Us</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-24 md:pt-48 md:pb-36 px-6 bg-neutral-50 border-b border-neutral-200">
        <div className="container mx-auto max-w-5xl">
          <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-black leading-[1.1] mb-8">
              Building the home of choice for makers of
              <span className="italic"> mission-critical, proprietary products.</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 mb-12 leading-relaxed max-w-2xl font-light">
              Wallander Group is a decentralized holding company assembling a collective of exceptional niche manufacturers. We acquire and partner with IP owners, and we invest in the next generation of leaders to carry your legacy forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => scrollToSection('contact')} className="flex items-center justify-center gap-2 bg-black text-white px-8 py-4 font-serif hover:bg-neutral-800 transition-all shadow-sm hover:translate-y-[-1px]">
                Reach Out <ArrowRight size={18} />
              </button>
              <button onClick={() => scrollToSection('criteria')} className="flex items-center justify-center gap-2 bg-white text-black border border-neutral-300 px-8 py-4 font-serif hover:bg-neutral-50 transition-all">
                Acquisition Criteria
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Culture Section (People-First & SOF Truths) */}
      <section id="culture" className="py-24 bg-neutral-900 text-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-16">
            <div className="inline-block px-3 py-1 bg-neutral-800 text-neutral-400 text-xs font-bold tracking-widest uppercase mb-6 font-serif border border-neutral-700">Our Culture</div>
            <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight max-w-2xl">
              Extraordinary outcomes are driven by empowered people.
            </h2>
            <p className="text-neutral-400 max-w-2xl text-lg font-light">
              Inspired by the radical decentralization of Jan Wallander and the enduring truths of Special Operations Forces, we operate differently. We are building an environment where elite operators want to spend their careers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-neutral-800 border border-neutral-800">
            {/* Culture Pillar 1: Humans over Hardware */}
            <div className="bg-neutral-900 p-10 hover:bg-neutral-800/50 transition-colors">
              <span className="text-emerald-500 font-serif text-2xl mb-4 block">01</span>
              <h3 className="text-2xl font-serif mb-4 flex items-center gap-3">
                <Heart size={24} className="text-emerald-500" />
                Humans Over Hardware
              </h3>
              <p className="text-neutral-400 leading-relaxed font-light">
                Equipment and facilities are useless without the right team. We put people first. Our primary game plan is to identify, place, and invest heavily in the next generation of leaders who will protect your culture and drive your company's next chapter.
              </p>
            </div>
            {/* Culture Pillar 2: Quality over Quantity */}
            <div className="bg-neutral-900 p-10 hover:bg-neutral-800/50 transition-colors">
              <span className="text-emerald-500 font-serif text-2xl mb-4 block">02</span>
              <h3 className="text-2xl font-serif mb-4 flex items-center gap-3">
                <Award size={24} className="text-emerald-500" />
                Quality Over Quantity
              </h3>
              <p className="text-neutral-400 leading-relaxed font-light">
                Excellence cannot be mass-produced. We do not aggregate hundreds of companies to flip them for a quick return. We are highly selective, choosing to partner only with exceptional, proprietary product businesses, and we hold them forever.
              </p>
            </div>
            {/* Culture Pillar 3: Decentralized Execution */}
            <div className="bg-neutral-900 p-10 hover:bg-neutral-800/50 transition-colors">
              <span className="text-emerald-500 font-serif text-2xl mb-4 block">03</span>
              <h3 className="text-2xl font-serif mb-4 flex items-center gap-3">
                <Users size={24} className="text-emerald-500" />
                Decentralized Execution
              </h3>
              <p className="text-neutral-400 leading-relaxed font-light">
                Decisions should be made as close to the customer as possible. We strip away headquarters bureaucracy, abolishing rigid political budgets, and provide our operating companies with complete autonomy to execute their mission.
              </p>
            </div>
            {/* Culture Pillar 4: Enduring Preparation */}
            <div className="bg-neutral-900 p-10 hover:bg-neutral-800/50 transition-colors">
              <span className="text-emerald-500 font-serif text-2xl mb-4 block">04</span>
              <h3 className="text-2xl font-serif mb-4 flex items-center gap-3">
                <Anchor size={24} className="text-emerald-500" />
                Enduring Preparation
              </h3>
              <p className="text-neutral-400 leading-relaxed font-light">
                True competence cannot be created in a crisis. We take a multi-decade approach to capital allocation, ensuring our businesses have the resilient balance sheets, robust systems, and continuous talent development needed to thrive in any environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Sellers Section - Re-framed as an Invitation */}
      <section id="sellers" className="py-24 bg-white border-b border-neutral-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-black mb-6">Join the Ultimate Home for Engineered Products</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto font-light">
              We aren't just buying businesses; we are building a destination. We offer a permanent partnership for owners who want their life's work to reach new heights.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-neutral-50 hover:bg-white border border-neutral-100 hover:border-neutral-200 transition-all hover:shadow-lg group">
              <Users size={32} className="text-black mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-serif font-bold mb-4">Next-Gen Leadership</h3>
              <p className="text-neutral-600 leading-relaxed">
                We specialize in transition. If you are ready to step back, we bring in or elevate elite operators to take the helm, preserving your culture while infusing new energy into your life's work.
              </p>
            </div>
            
            <div className="p-8 bg-neutral-50 hover:bg-white border border-neutral-100 hover:border-neutral-200 transition-all hover:shadow-lg group">
              <Building2 size={32} className="text-black mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-serif font-bold mb-4">Permanent Capital</h3>
              <p className="text-neutral-600 leading-relaxed">
                Unlike traditional private equity, we have no mandate to sell. Your company will not be flipped, absorbed, or relocated. It becomes a permanent pillar in our decentralized collective.
              </p>
            </div>

            <div className="p-8 bg-neutral-50 hover:bg-white border border-neutral-100 hover:border-neutral-200 transition-all hover:shadow-lg group">
              <ShieldCheck size={32} className="text-black mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-serif font-bold mb-4">Operational Autonomy</h3>
              <p className="text-neutral-600 leading-relaxed">
                We believe you built a great business for a reason. We do not seek destructive "synergies" or force integration. We provide strategic support and capital, but leave the daily operations to the unit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Acquisition Criteria Section */}
      <section id="criteria" className="py-24 bg-neutral-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-16">
            <div className="inline-block px-3 py-1 bg-black text-white text-xs font-bold tracking-widest uppercase mb-6 font-serif">Acquisition Criteria</div>
            <h2 className="text-3xl md:text-5xl font-serif text-black mb-6 leading-tight max-w-3xl">
              We acquire manufacturers of engineered components that have pricing power.
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* The 4 Characteristics */}
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
              <div className="p-8 border border-neutral-200 bg-white group hover:border-black transition-colors">
                <Target size={28} className="text-black mb-6" />
                <h3 className="text-xl font-serif font-bold mb-3">Critical, but Small</h3>
                <p className="text-neutral-600 font-light leading-relaxed text-sm">
                  The product is absolutely critical to the customer's application, but represents a small percentage of the total bill of materials. Smaller dollar value in relation to the overall system.
                </p>
              </div>
              <div className="p-8 border border-neutral-200 bg-white group hover:border-black transition-colors">
                <Microscope size={28} className="text-black mb-6" />
                <h3 className="text-xl font-serif font-bold mb-3">Highly Engineered</h3>
                <p className="text-neutral-600 font-light leading-relaxed text-sm">
                  Designed for purpose, IP-heavy, and highly specialized. We acquire businesses making unique, proprietary products—ranging from parachutes to specialized gratings and precision mirrors.
                </p>
              </div>
              <div className="p-8 border border-neutral-200 bg-white group hover:border-black transition-colors">
                <Zap size={28} className="text-black mb-6" />
                <h3 className="text-xl font-serif font-bold mb-3">Recurring</h3>
                <p className="text-neutral-600 font-light leading-relaxed text-sm">
                  Recurring sale profile with strong aftermarket content. The business features longer product lifecycles and maintains 90%+ gross customer retention.
                </p>
              </div>
              <div className="p-8 border border-neutral-200 bg-white group hover:border-black transition-colors">
                <ShieldCheck size={28} className="text-black mb-6" />
                <h3 className="text-xl font-serif font-bold mb-3">Specified</h3>
                <p className="text-neutral-600 font-light leading-relaxed text-sm">
                  Requires regulatory specifications and validation. The components are specified onto OEM programs that possess strong, underlying secular growth dynamics.
                </p>
              </div>
            </div>

            {/* Financial Characteristics */}
            <div className="lg:col-span-1">
              <div className="bg-black text-white p-10 h-full shadow-xl mb-8">
                <h3 className="text-2xl font-serif mb-8 border-b border-neutral-800 pb-4">Financial Characteristics</h3>
                
                <div className="space-y-8">
                  <div>
                    <span className="text-4xl font-serif block mb-1">$1-5mm</span>
                    <span className="text-neutral-400 text-sm tracking-widest uppercase font-bold">EBIT / EBITDA</span>
                  </div>
                  <div>
                    <span className="text-4xl font-serif block mb-1">&gt; 50%</span>
                    <span className="text-neutral-400 text-sm tracking-widest uppercase font-bold">Gross Margins</span>
                  </div>
                  <div>
                    <span className="text-4xl font-serif block mb-1">&gt; 0%</span>
                    <span className="text-neutral-400 text-sm tracking-widest uppercase font-bold">Revenue Growth</span>
                  </div>
                  <div>
                    <span className="text-4xl font-serif block mb-1">&lt; 5%</span>
                    <span className="text-neutral-400 text-sm tracking-widest uppercase font-bold">Capex % of Sales</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* New Area of Interest */}
          <div className="mt-12 bg-white p-8 md:p-12 border border-neutral-200 flex flex-col md:flex-row gap-12 items-center shadow-sm">
             <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-serif text-black mb-6">Proprietary Products & IP Owners</h2>
                <p className="text-neutral-600 text-lg mb-0 font-light leading-relaxed">
                  We are focused exclusively on proprietary product owners and original equipment manufacturers (OEMs). <strong className="text-black">We do not acquire build-to-print or contract manufacturers.</strong> We look for IP-heavy, niche businesses with deep engineering expertise.
                </p>
             </div>
             <div className="md:w-1/2 w-full">
                <div className="bg-neutral-50 p-6 border border-neutral-200">
                  <h4 className="font-serif font-bold mb-6 flex items-center gap-2 border-b border-neutral-200 pb-4">
                    <Microscope size={18} /> Representative Components
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-sm text-neutral-600">
                    <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-black rounded-full shrink-0"></div>Precision Optics & Mirrors</div>
                    <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-black rounded-full shrink-0"></div>Specialized Gratings</div>
                    <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-black rounded-full shrink-0"></div>Life Safety (e.g., Parachutes)</div>
                    <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-black rounded-full shrink-0"></div>Scientific Instruments</div>
                    <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-black rounded-full shrink-0"></div>Oceanographic Sensors</div>
                    <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-black rounded-full shrink-0"></div>RF & Microwave Systems</div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white border-t border-neutral-200">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-neutral-50 border border-neutral-200 p-8 md:p-12 flex flex-col md:flex-row gap-12 shadow-sm">
            <div className="md:w-1/2">
              <h3 className="text-3xl font-serif mb-6">Reach Out to Wallander</h3>
              <p className="text-neutral-600 mb-8 font-light leading-relaxed">
                Whether you are a founder exploring a transition, or an intermediary with an opportunity to discuss, we operate with strict confidentiality and respect for your time.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white border border-neutral-200 flex items-center justify-center">
                    <Mail size={18} className="text-black" />
                  </div>
                  <a href="mailto:info@wallandergroup.com" className="text-lg hover:underline decoration-1 underline-offset-4 font-serif">info@wallandergroup.com</a>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-neutral-200">
                <p className="text-sm text-neutral-400 font-serif">
                  &copy; {new Date().getFullYear()} Wallander Group.<br/>
                  A permanent home.
                </p>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <form className="space-y-4" onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-2">First Name*</label>
                    <input required name="firstName" type="text" className="w-full px-4 py-3 bg-white border border-neutral-200 focus:outline-none focus:border-black transition-colors text-sm" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-2">Last Name*</label>
                    <input required name="lastName" type="text" className="w-full px-4 py-3 bg-white border border-neutral-200 focus:outline-none focus:border-black transition-colors text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-2">Email*</label>
                  <input required name="email" type="email" className="w-full px-4 py-3 bg-white border border-neutral-200 focus:outline-none focus:border-black transition-colors text-sm" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-2">Company</label>
                  <input name="company" type="text" className="w-full px-4 py-3 bg-white border border-neutral-200 focus:outline-none focus:border-black transition-colors text-sm" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-2">Message</label>
                  <textarea required name="message" rows="3" className="w-full px-4 py-3 bg-white border border-neutral-200 focus:outline-none focus:border-black transition-colors text-sm"></textarea>
                </div>
                <button 
                  disabled={formStatus === 'sending' || formStatus === 'success'} 
                  className={`w-full font-serif py-4 transition-colors flex items-center justify-center gap-2 ${formStatus === 'success' ? 'bg-emerald-600 text-white' : 'bg-black text-white hover:bg-neutral-800'}`}
                >
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