import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, ArrowRight, ArrowLeft, Building2, Users, TrendingUp, Handshake, Mail, CheckCircle, ChevronRight, BarChart3, Microscope, Lock, FileText, Download, Target, ShieldCheck, Zap, Loader2, Heart, Award, Anchor, Quote, MapPin, Clock, Waves } from 'lucide-react';
import SharedThoughts from './components/SharedThoughts.jsx';

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
            <span className="text-neutral-500">The Case for Decentralization</span>
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
    if (window.location.hash) {
      const targetId = window.location.hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
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
            <NavLink id="about" label="About Us" />
            <NavLink id="promise" label="The Promise" />
            <NavLink id="criteria" label="Criteria" />
            
            <Link to="/thoughts" className="text-sm font-serif tracking-wide text-neutral-500 hover:text-black transition-colors duration-300">
              Shared Thoughts
            </Link>

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
            <button onClick={() => scrollToSection('about')} className="text-left text-neutral-600 font-serif text-lg py-2">About Us</button>
            <button onClick={() => scrollToSection('promise')} className="text-left text-neutral-600 font-serif text-lg py-2">The Promise</button>
            <button onClick={() => scrollToSection('criteria')} className="text-left text-neutral-600 font-serif text-lg py-2">Criteria</button>
            <Link to="/thoughts" className="text-left text-neutral-600 font-serif text-lg py-2">Shared Thoughts</Link>
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
              Building the home of choice for makers of mission-critical, proprietary products.
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

      {/* About Us / Leadership Section (Directly after Hero) */}
      <section id="about" className="py-24 bg-white border-b border-neutral-200">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <div className="inline-block px-3 py-1 bg-black text-white text-xs font-bold tracking-widest uppercase mb-6 font-serif">
              Leadership & Stewardship
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-black leading-tight mb-6">
              Partners who are in it for the long haul.
            </h2>
            <p className="text-lg text-neutral-600 font-light leading-relaxed">
              This is where we grew up, went to school, and where we are raising our own families. We believe the small businesses woven into the fabric of our communities are worth preserving—not flipping—for the next generation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Doug Walsh */}
            <div className="bg-neutral-50 border border-neutral-200 p-8 md:p-10 flex flex-col sm:flex-row gap-8 items-center sm:items-start hover:border-black transition-all hover:shadow-sm">
              <div className="w-32 h-32 md:w-36 md:h-36 shrink-0 rounded-full overflow-hidden border-2 border-black/10 shadow-sm bg-neutral-200">
                <img 
                  src="/images/doug-walsh.jpg" 
                  alt="Doug Walsh" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-2xl font-serif font-bold text-black mb-1">Doug Walsh</h3>
                <div className="text-sm font-serif text-neutral-500 uppercase tracking-widest mb-3">Co-Founder</div>
                <div className="inline-block bg-white border border-neutral-200 px-2.5 py-1 text-xs text-neutral-700 font-medium mb-4">
                  West Point • HBS • Army Special Ops
                </div>
                <p className="text-neutral-600 font-light leading-relaxed text-sm mb-6">
                  Former Army Special Operations officer and expert in building high-performance technical teams. Dedicated to preserving the precision and culture of New England’s technical firms. Doug and his wife reside in Quincy, MA with their two children and beloved mutt.
                </p>
                <div className="flex items-center justify-center sm:justify-start gap-4 pt-4 border-t border-neutral-200/80">
                  <a 
                    href="https://www.linkedin.com/in/douglas-walsh/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 text-xs font-serif font-bold text-black hover:text-neutral-600 transition-colors"
                  >
                    <span>LinkedIn Profile</span>
                    <ArrowRight size={13} />
                  </a>
                  <span className="text-neutral-300">•</span>
                  <a 
                    href="mailto:Doug@wallandergroup.com" 
                    className="text-xs font-serif text-neutral-500 hover:text-black transition-colors"
                  >
                    Doug@wallandergroup.com
                  </a>
                </div>
              </div>
            </div>

            {/* Troy Renauld */}
            <div className="bg-neutral-50 border border-neutral-200 p-8 md:p-10 flex flex-col sm:flex-row gap-8 items-center sm:items-start hover:border-black transition-all hover:shadow-sm">
              <div className="w-32 h-32 md:w-36 md:h-36 shrink-0 rounded-full overflow-hidden border-2 border-black/10 shadow-sm bg-neutral-200">
                <img 
                  src="/images/troy-renauld.jpg" 
                  alt="Troy Renauld" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-2xl font-serif font-bold text-black mb-1">Troy Renauld</h3>
                <div className="text-sm font-serif text-neutral-500 uppercase tracking-widest mb-3">Co-Founder</div>
                <div className="inline-block bg-white border border-neutral-200 px-2.5 py-1 text-xs text-neutral-700 font-medium mb-4">
                  Investor • Engineer • Boston College
                </div>
                <p className="text-neutral-600 font-light leading-relaxed text-sm mb-6">
                  Engineer and investor with over a decade of experience identifying durable businesses. Expert in resilient, technical business models and growth through principled acquisition. Troy and his wife reside in Reading, MA with their two sons and dog.
                </p>
                <div className="flex items-center justify-center sm:justify-start gap-4 pt-4 border-t border-neutral-200/80">
                  <a 
                    href="https://www.linkedin.com/in/troyr1/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 text-xs font-serif font-bold text-black hover:text-neutral-600 transition-colors"
                  >
                    <span>LinkedIn Profile</span>
                    <ArrowRight size={13} />
                  </a>
                  <span className="text-neutral-300">•</span>
                  <a 
                    href="mailto:Troy@wallandergroup.com" 
                    className="text-xs font-serif text-neutral-500 hover:text-black transition-colors"
                  >
                    Troy@wallandergroup.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Wallander Promise & Principles: Commitments to Founders */}
      <section id="promise" className="py-24 bg-white border-b border-neutral-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-3 py-1 bg-black text-white text-xs font-bold tracking-widest uppercase mb-6 font-serif">
              The Wallander Promise
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-black leading-tight mb-6">
              What We Promise Every Founder We Partner With
            </h2>
            <p className="text-lg text-neutral-600 font-light leading-relaxed">
              You spent decades building your business, your team, and your reputation. Guided by the enduring truths of Special Operations and radical decentralization, we exist to protect what you built—not flip it, strip it, or relocate it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Commitment 1: Operations Stay Local */}
            <div className="p-8 md:p-10 bg-neutral-50 border border-neutral-200 hover:border-black transition-colors">
              <div className="w-12 h-12 bg-black text-white flex items-center justify-center mb-6">
                <MapPin size={24} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-black mb-3">Operations Stay Local</h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                We will never relocate your facility, move your machines, or consolidate your operations into a distant plant. Your business was built by your community, and that is where it stays.
              </p>
            </div>

            {/* Commitment 2: Your People Are Protected */}
            <div className="p-8 md:p-10 bg-neutral-50 border border-neutral-200 hover:border-black transition-colors">
              <div className="w-12 h-12 bg-black text-white flex items-center justify-center mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-black mb-3">Your People Are Protected</h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                Equipment and facilities are useless without the right team. We put people first: honoring your workforce, protecting frontline tenure, and investing heavily in the next generation of leaders so your culture endures.
              </p>
            </div>

            {/* Commitment 3: Transition on Your Terms */}
            <div className="p-8 md:p-10 bg-neutral-50 border border-neutral-200 hover:border-black transition-colors">
              <div className="w-12 h-12 bg-black text-white flex items-center justify-center mb-6">
                <Clock size={24} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-black mb-3">Transition on Your Terms</h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                Whether you want to step back in six months to spend time with your family, or remain actively engaged for years, we shape the transition around your life—not an arbitrary private equity fund deadline.
              </p>
            </div>

            {/* Commitment 4: Permanent Capital & Autonomy */}
            <div className="p-8 md:p-10 bg-neutral-50 border border-neutral-200 hover:border-black transition-colors">
              <div className="w-12 h-12 bg-black text-white flex items-center justify-center mb-6">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-black mb-3">Permanent Capital & Autonomy</h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                Inspired by Jan Wallander’s radical decentralization, we buy to hold forever. We strip away bureaucracy, reject reckless debt, and empower the operators closest to the customer with genuine autonomy.
              </p>
            </div>
          </div>

          {/* Tailored Engagement Phases */}
          <div className="bg-neutral-900 text-white p-8 md:p-12">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h3 className="text-2xl md:text-3xl font-serif mb-3">A Thoughtful, Tailored Approach</h3>
              <p className="text-neutral-400 font-light text-sm">
                We move deliberately and respectfully. Every engagement is custom-built around your personal goals, your team, and complete confidentiality.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border-t border-neutral-700 pt-6">
                <span className="text-emerald-500 font-serif text-lg font-bold block mb-2">Phase 01</span>
                <h4 className="text-lg font-serif text-white font-bold mb-2">Getting to Know One Another</h4>
                <p className="text-neutral-400 font-light text-sm leading-relaxed">
                  We believe getting to know one another is fundamental. Before looking at spreadsheets, we focus on whether we align on ambitions, goals, and values as people.
                </p>
              </div>

              <div className="border-t border-neutral-700 pt-6">
                <span className="text-emerald-500 font-serif text-lg font-bold block mb-2">Phase 02</span>
                <h4 className="text-lg font-serif text-white font-bold mb-2">A Clear, Prudent Offer</h4>
                <p className="text-neutral-400 font-light text-sm leading-relaxed">
                  A straightforward offer without predatory games, excessive debt, or drawn-out diligence interruptions to your operation.
                </p>
              </div>

              <div className="border-t border-neutral-700 pt-6">
                <span className="text-emerald-500 font-serif text-lg font-bold block mb-2">Phase 03</span>
                <h4 className="text-lg font-serif text-white font-bold mb-2">Executing Your Plan</h4>
                <p className="text-neutral-400 font-light text-sm leading-relaxed">
                  We execute the plan you designed with us. That may mean a gradual, dignified handoff to next-generation leaders, or it may mean no operational change at all—with you remaining firmly at the helm.
                </p>
              </div>
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
                  The product is absolutely vital to the customer's application, but represents a small percentage of the total bill of materials, affording strong pricing power.
                </p>
              </div>

              <div className="p-8 border border-neutral-200 bg-white group hover:border-black transition-colors">
                <Award size={28} className="text-black mb-6" />
                <h3 className="text-xl font-serif font-bold mb-3">Proven Track Record of Products</h3>
                <p className="text-neutral-600 font-light leading-relaxed text-sm">
                  A demonstrated history of reliable, proprietary products that customers depend upon. We look for established, field-tested designs—not speculative or unproven concepts.
                </p>
              </div>

              <div className="p-8 border border-neutral-200 bg-white group hover:border-black transition-colors">
                <Users size={28} className="text-black mb-6" />
                <h3 className="text-xl font-serif font-bold mb-3">Strong, Committed Team</h3>
                <p className="text-neutral-600 font-light leading-relaxed text-sm">
                  A dedicated, capable frontline workforce with deep technical know-how. We put people first, preserve company culture, and invest in the next generation of leadership.
                </p>
              </div>

              <div className="p-8 border border-neutral-200 bg-white group hover:border-black transition-colors">
                <Waves size={28} className="text-black mb-6" />
                <h3 className="text-xl font-serif font-bold mb-3">Comfortable with Non-Linear Revenue</h3>
                <p className="text-neutral-600 font-light leading-relaxed text-sm">
                  While we welcome recurring aftermarket sales and specified OEM programs, they are not mandatory. We understand that niche manufacturing has project cycles and non-linear demand—our permanent capital lets us think in decades, not quarters.
                </p>
              </div>
            </div>

            {/* Financial Characteristics */}
            <div className="lg:col-span-1">
              <div className="bg-black text-white p-10 h-full shadow-xl mb-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-serif mb-8 border-b border-neutral-800 pb-4">Financial Profile</h3>
                  
                  <div className="space-y-8">
                    <div>
                      <span className="text-4xl font-serif block mb-1">$500k – $5mm</span>
                      <span className="text-neutral-400 text-xs tracking-widest uppercase font-bold">EBIT / Cash Flow</span>
                      <p className="text-neutral-400 text-xs mt-1 font-light">Flexible for smaller, exceptional niche businesses.</p>
                    </div>
                    <div>
                      <span className="text-4xl font-serif block mb-1">&gt; 40%</span>
                      <span className="text-neutral-400 text-xs tracking-widest uppercase font-bold">Gross Margins</span>
                      <p className="text-neutral-400 text-xs mt-1 font-light">Reflecting proprietary value and pricing power.</p>
                    </div>
                    <div>
                      <span className="text-4xl font-serif block mb-1">Flexible</span>
                      <span className="text-neutral-400 text-xs tracking-widest uppercase font-bold">Revenue Pattern</span>
                      <p className="text-neutral-400 text-xs mt-1 font-light">Non-linear, project-driven, or cyclical demand is welcome.</p>
                    </div>
                    <div>
                      <span className="text-4xl font-serif block mb-1">&lt; 10%</span>
                      <span className="text-neutral-400 text-xs tracking-widest uppercase font-bold">Maintenance Capex</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Representative Products & Instruments (Options 1 & 2 combined) */}
          <div className="mt-12 bg-white p-8 md:p-12 border border-neutral-200 shadow-sm">
             <div className="max-w-3xl mb-10">
                <div className="inline-block px-2.5 py-1 bg-neutral-100 text-neutral-700 text-xs font-bold tracking-widest uppercase mb-3 font-serif">
                  Product Archetypes
                </div>
                <h2 className="text-3xl md:text-4xl font-serif text-black mb-4">
                  Proprietary Instruments, Devices & Engineered Components
                </h2>
                <p className="text-neutral-600 text-lg font-light leading-relaxed">
                  We partner with IP owners and original manufacturers across a broad technical spectrum. Whether you build complete standalone instruments or mission-critical embedded subsystems, if your product solves a difficult problem for demanding customers, it fits our criteria.
                </p>
             </div>

             <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Archetype 1: Test & Measurement */}
                <div className="bg-neutral-50 p-6 border border-neutral-200 hover:border-black transition-colors">
                  <div className="w-10 h-10 bg-white border border-neutral-200 flex items-center justify-center text-black mb-4">
                    <Microscope size={20} />
                  </div>
                  <h4 className="font-serif font-bold text-lg text-black mb-2">Test & Measurement</h4>
                  <p className="text-neutral-600 font-light text-sm leading-relaxed mb-3">
                    Benchtop, laboratory, and field-portable instruments where accuracy, calibration, and repeatability are paramount.
                  </p>
                  <div className="text-xs text-neutral-400 font-serif">
                    e.g., Optical instruments, spectrometers, analyzers
                  </div>
                </div>

                {/* Archetype 2: Sensors & Detection */}
                <div className="bg-neutral-50 p-6 border border-neutral-200 hover:border-black transition-colors">
                  <div className="w-10 h-10 bg-white border border-neutral-200 flex items-center justify-center text-black mb-4">
                    <Zap size={20} />
                  </div>
                  <h4 className="font-serif font-bold text-lg text-black mb-2">Sensors & Detection</h4>
                  <p className="text-neutral-600 font-light text-sm leading-relaxed mb-3">
                    Proprietary sensing hardware and transducers operating in harsh, industrial, marine, or scientific environments.
                  </p>
                  <div className="text-xs text-neutral-400 font-serif">
                    e.g., Oceanographic sensors, environmental monitors
                  </div>
                </div>

                {/* Archetype 3: Engineered Components */}
                <div className="bg-neutral-50 p-6 border border-neutral-200 hover:border-black transition-colors">
                  <div className="w-10 h-10 bg-white border border-neutral-200 flex items-center justify-center text-black mb-4">
                    <Target size={20} />
                  </div>
                  <h4 className="font-serif font-bold text-lg text-black mb-2">Engineered Components</h4>
                  <p className="text-neutral-600 font-light text-sm leading-relaxed mb-3">
                    High-precision mechanical, optical, or RF subsystems specified directly into critical customer equipment.
                  </p>
                  <div className="text-xs text-neutral-400 font-serif">
                    e.g., Precision optics, gratings, RF/microwave modules
                  </div>
                </div>

                {/* Archetype 4: Mission-Critical Products */}
                <div className="bg-neutral-50 p-6 border border-neutral-200 hover:border-black transition-colors">
                  <div className="w-10 h-10 bg-white border border-neutral-200 flex items-center justify-center text-black mb-4">
                    <ShieldCheck size={20} />
                  </div>
                  <h4 className="font-serif font-bold text-lg text-black mb-2">Mission-Critical Products</h4>
                  <p className="text-neutral-600 font-light text-sm leading-relaxed mb-3">
                    Specialized structures, enclosures, and vital subsystems engineered for extreme environments or integrated into larger defense, aerospace, and marine platforms.
                  </p>
                  <div className="text-xs text-neutral-400 font-serif">
                    e.g., Composite shelters, radomes, ruggedized housings, mission gear
                  </div>
                </div>
             </div>

             <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-neutral-500 font-serif">
                <span>The common thread is proprietary engineering and high consequence of failure.</span>
                <span className="text-neutral-800 font-bold">Open to adjacent technical niches and unique applications.</span>
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

      {/* Comprehensive Site Footer */}
      <footer className="bg-neutral-950 text-white pt-20 pb-12 border-t border-neutral-800">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 pb-16 border-b border-neutral-800">
            {/* Column 1: Monogram & Purpose */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white text-black flex items-center justify-center font-serif text-2xl font-normal pt-1">
                  W
                </div>
                <span className="text-2xl font-serif tracking-wide text-white">Wallander Group</span>
              </div>
              <p className="text-neutral-400 font-light max-w-sm text-sm leading-relaxed pt-2">
                A decentralized holding company and permanent home for makers of mission-critical, proprietary products. We acquire, protect, and hold forever.
              </p>
              <div className="pt-2 text-xs font-serif text-neutral-500 uppercase tracking-widest">
                Boston, Massachusetts
              </div>
            </div>

            {/* Column 2: Navigation */}
            <div>
              <h4 className="text-xs font-serif uppercase tracking-widest text-neutral-400 font-bold mb-6">
                Navigation
              </h4>
              <ul className="space-y-3 text-sm font-serif text-neutral-400">
                <li>
                  <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">
                    Leadership & Bios
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('promise')} className="hover:text-white transition-colors">
                    The Wallander Promise
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('criteria')} className="hover:text-white transition-colors">
                    Acquisition Criteria
                  </button>
                </li>
                <li>
                  <Link to="/thoughts" className="hover:text-white transition-colors">
                    Shared Thoughts
                  </Link>
                </li>
                <li>
                  <Link to="/jan-wallander" className="hover:text-white transition-colors">
                    Jan Wallander
                  </Link>
                </li>
                <li>
                  <Link to="/partners" className="hover:text-white transition-colors flex items-center gap-1.5">
                    <Lock size={12} /> Partner Portal
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact & Office */}
            <div>
              <h4 className="text-xs font-serif uppercase tracking-widest text-neutral-400 font-bold mb-6">
                Offices & Inquiries
              </h4>
              <div className="space-y-4 text-sm font-light text-neutral-400">
                <div>
                  <div className="text-white font-serif mb-1">Boston Headquarters</div>
                  <p className="text-xs leading-relaxed text-neutral-400">
                    One Beacon Street, Floor 15<br />
                    Boston, MA 02108
                  </p>
                </div>
                <div className="pt-2">
                  <div className="text-xs font-serif uppercase tracking-widest text-neutral-500 mb-1">General Inquiries</div>
                  <a href="mailto:info@wallandergroup.com" className="text-sm font-serif text-white hover:underline block">
                    info@wallandergroup.com
                  </a>
                </div>
                <div className="pt-1 flex flex-col gap-1 text-xs">
                  <a href="mailto:Doug@wallandergroup.com" className="text-neutral-400 hover:text-white transition-colors">
                    Doug Walsh: <span className="text-neutral-300 font-serif">Doug@wallandergroup.com</span>
                  </a>
                  <a href="mailto:Troy@wallandergroup.com" className="text-neutral-400 hover:text-white transition-colors">
                    Troy Renauld: <span className="text-neutral-300 font-serif">Troy@wallandergroup.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-serif text-neutral-500">
            <div>
              &copy; {new Date().getFullYear()} Wallander Group LLC. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <span>Permanent Capital</span>
              <span>•</span>
              <span>Decentralized Leadership</span>
              <span>•</span>
              <button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors">
                Back to Top ↑
              </button>
            </div>
          </div>
        </div>
      </footer>
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
        <Route path="/thoughts" element={<SharedThoughts />} />
        <Route path="/thoughts/:slug" element={<SharedThoughts />} />
        <Route path="/shared-thoughts" element={<SharedThoughts />} />
        <Route path="/shared-thoughts/:slug" element={<SharedThoughts />} />
        <Route path="/partners" element={<PartnerPortal />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;