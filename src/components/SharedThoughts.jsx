import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ShieldCheck, Heart, TrendingUp, Anchor, CheckCircle, Quote, Clock, Calendar, Sparkles, Building2, Layers } from 'lucide-react';
import { articles } from '../data/articles';

// ==========================================
// COMPONENT: INDIVIDUAL ARTICLE - SELLING ISN'T QUITTING
// ==========================================
const SellingIsntQuittingArticle = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="max-w-3xl mx-auto">
      {/* Header */}
      <header className="mb-14 border-b border-neutral-200 pb-10">
        <div className="flex items-center gap-3 text-xs font-serif uppercase tracking-widest text-neutral-500 mb-4">
          <span className="inline-block px-2.5 py-1 bg-neutral-100 text-neutral-800 font-bold">
            Ownership & Transitions
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Calendar size={13} /> September 2026
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock size={13} /> 4 min read
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-black leading-[1.15] mb-6">
          Selling Isn’t Quitting
        </h1>

        <p className="text-xl md:text-2xl font-serif text-neutral-600 font-light leading-relaxed italic">
          Why partnering with the right permanent home protects your life’s work.
        </p>
      </header>

      {/* Opening Hook */}
      <div className="mb-12">
        <div className="text-2xl md:text-3xl font-serif text-black mb-6 font-normal border-l-2 border-black pl-6 py-1 italic">
          “Hey, I’d like to buy your business.”
        </div>

        <p className="text-lg md:text-xl text-neutral-700 leading-relaxed font-light mb-6 first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-black">
          To most people, an offer to buy a company sounds like the ultimate badge of success. But for the business owner, once the initial excitement wears off, some other thoughts bubble up:
        </p>

        <div className="bg-neutral-50 p-6 border border-neutral-200 mb-8 font-serif text-neutral-800 text-lg italic text-center">
          “Am I quitting? Can I really leave what I’ve spent decades building?”
        </div>

        <p className="text-lg text-neutral-700 leading-relaxed font-light mb-6">
          In our entrepreneurial culture and in a market dominated by private equity with a bench of professional operators, “selling” has acquired a stigma—a synonym for “selling out” or packing up your desk and abruptly finding yourself in a premature retirement.
        </p>

        <p className="text-lg text-neutral-700 leading-relaxed font-light">
          That concern isn’t unfounded. Most buyers today fall into two camps:
        </p>
      </div>

      {/* The Two Camps Comparison */}
      <div className="grid md:grid-cols-2 gap-6 my-12">
        <div className="p-8 bg-neutral-50 border border-neutral-200">
          <div className="w-10 h-10 bg-neutral-200 text-neutral-700 flex items-center justify-center font-serif text-lg font-bold mb-4">
            01
          </div>
          <h3 className="text-xl font-serif font-bold text-black mb-3">The Strategic Competitor</h3>
          <p className="text-neutral-600 font-light leading-relaxed text-sm">
            A company in the same or similar business as yours who will undoubtedly have managers who feel they know how to run your operations and will, sooner or later, want to apply some hands-on “help.” If the acquiring company is much larger, they will often simply consolidate your product lines and customers and leave the rest behind in the name of synergy. Human nature will inevitably lead them to believe their methods are superior despite your proven track record.
          </p>
        </div>

        <div className="p-8 bg-neutral-50 border border-neutral-200">
          <div className="w-10 h-10 bg-neutral-200 text-neutral-700 flex items-center justify-center font-serif text-lg font-bold mb-4">
            02
          </div>
          <h3 className="text-xl font-serif font-bold text-black mb-3">The Financial Flipper</h3>
          <p className="text-neutral-600 font-light leading-relaxed text-sm">
            A financial sponsor operating with large amounts of borrowed money who plans to resell the business as soon as the market timing is favorable. Operational decisions are often geared toward short-term optimization for the next sale rather than long-term health.
          </p>
        </div>
      </div>

      {/* The Problem for True Owners */}
      <div className="space-y-6 text-lg text-neutral-700 leading-relaxed font-light mb-12">
        <p>
          If the only goal is to cash in your chips and put the business behind you, either buyer will do. But if you are the owner for whom being a founder or owner isn’t just a job, but part of your identity woven into your family, friendships, and daily purpose, these buyers have serious flaws.
        </p>
        <p className="font-normal text-black text-xl font-serif">
          For these business owners, the idea of abruptly handing over the keys can feel like an eviction from your life’s work.
        </p>
      </div>

      {/* Wallander Pullquote */}
      <div className="my-14 bg-neutral-900 text-white p-8 md:p-12 border-l-4 border-emerald-500 shadow-lg">
        <Quote className="text-emerald-500 mb-4" size={36} />
        <h3 className="text-2xl md:text-3xl font-serif leading-snug mb-4">
          “At Wallander Group, we believe selling shouldn’t mean handing over the reins Friday and becoming a stranger by Monday.”
        </h3>
        <p className="text-neutral-400 font-light">
          We buy to keep, and we don’t have a bench of operators waiting to take over and implement a formulaic game plan. We believe businesses we are fortunate enough to own should run autonomously; after all, we only want to buy proven, successful companies.
        </p>
      </div>

      {/* The 80% Preference Explanation */}
      <div className="bg-neutral-50 border border-neutral-200 p-8 my-12">
        <div className="inline-block px-3 py-1 bg-black text-white text-[11px] font-serif uppercase tracking-widest font-bold mb-4">
          Our Structure
        </div>
        <h3 className="text-2xl font-serif text-black mb-4">Why Our Preference is to Buy 80%</h3>
        <p className="text-neutral-700 leading-relaxed font-light mb-4">
          In order to consolidate earnings for tax purposes, we have to own at least 80%, but it is equally important that the original owning managers remain interested and invested in the outcome.
        </p>
        <p className="text-neutral-700 leading-relaxed font-light">
          We have observed a pattern where business owners reach a point where they still love their craft, their customers, and their team, but they are exhausted by the friction of back-office administration, constant capital demands, and the pressure of carrying 100% of the risk alone.
        </p>
      </div>

      {/* The 4 Pillars of the Wallander Offer */}
      <div className="my-14">
        <h3 className="text-2xl md:text-3xl font-serif text-black mb-8">What Wallander Group Offers</h3>
        
        <div className="space-y-6">
          <div className="p-6 bg-white border border-neutral-200 hover:border-black transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center shrink-0 mt-1">
                <Layers size={20} />
              </div>
              <div>
                <h4 className="text-xl font-serif font-bold text-black mb-2">Optional Back-Office Relief</h4>
                <p className="text-neutral-600 font-light leading-relaxed">
                  Options for centralized back-office functions like HR, accounting, and IT services. You have the freedom to choose any or none—whatever removes administrative burden while preserving operational focus.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white border border-neutral-200 hover:border-black transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center shrink-0 mt-1">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h4 className="text-xl font-serif font-bold text-black mb-2">Real Security</h4>
                <p className="text-neutral-600 font-light leading-relaxed">
                  Selling 80% allows you to take life-changing liquidity off the table. You solidify your family’s financial security and permanently remove personal liability and personal guarantees from your shoulders.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white border border-neutral-200 hover:border-black transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center shrink-0 mt-1">
                <TrendingUp size={20} />
              </div>
              <div>
                <h4 className="text-xl font-serif font-bold text-black mb-2">Real Partnership & Meaningful Upside</h4>
                <p className="text-neutral-600 font-light leading-relaxed">
                  You remain an owner. Retaining an equity stake means you participate directly in every dollar of future growth we create together. We measure success by aiming to make that 20% more valuable than the first 80%. When you do decide to exit entirely, we guarantee we’ll buy the remaining 20% at a fair market value.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white border border-neutral-200 hover:border-black transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center shrink-0 mt-1">
                <Anchor size={20} />
              </div>
              <div>
                <h4 className="text-xl font-serif font-bold text-black mb-2">Real Autonomy</h4>
                <p className="text-neutral-600 font-light leading-relaxed">
                  We believe deeply in decentralization. We don’t have a bench of operators waiting to take over your job and won’t second-guess your day-to-day operating, hiring, and culture. Our role is capital allocation, strategic support, and getting you the tools and advice to make you as successful as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="pt-10 border-t border-neutral-200 space-y-6 text-lg text-neutral-700 leading-relaxed font-light mb-16">
        <p className="text-xl font-serif text-black leading-relaxed">
          When you partner with us, you don’t leave your culture behind—you protect it.
        </p>
        <p>
          And when you do decide the time is right to focus on the next phase of your life, you can have the confidence that your company’s future is secure.
        </p>
      </div>

      {/* CTA Box */}
      <div className="bg-neutral-900 text-white p-10 text-center">
        <h3 className="text-2xl md:text-3xl font-serif mb-4">Thinking About the Next Chapter for Your Business?</h3>
        <p className="text-neutral-400 font-light max-w-lg mx-auto mb-8">
          We welcome confidential, no-pressure conversations with owners who want to protect their culture, derisk their family, and participate in future growth.
        </p>
        <Link
          to="/#contact"
          className="inline-flex items-center gap-2 bg-white text-black px-8 py-3.5 font-serif font-bold hover:bg-neutral-200 transition-colors"
        >
          Start a Confidential Conversation <ArrowRight size={18} />
        </Link>
      </div>
    </article>
  );
};

// ==========================================
// COMPONENT: SHARED THOUGHTS (LIST / DETAIL WRAPPER)
// ==========================================
export const SharedThoughts = () => {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const selectedArticle = slug ? articles.find(a => a.slug === slug) : null;

  return (
    <div className="font-sans text-neutral-800 bg-white min-h-screen selection:bg-neutral-200 flex flex-col justify-between">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md py-4 border-b border-neutral-200">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2 text-neutral-500 hover:text-black transition-colors font-serif">
              <ArrowLeft size={18} />
              <span>Back to Home</span>
            </Link>

            {slug && (
              <>
                <span className="text-neutral-300 hidden sm:inline">/</span>
                <Link to="/thoughts" className="text-sm font-serif text-neutral-500 hover:text-black transition-colors hidden sm:inline">
                  Shared Thoughts
                </Link>
              </>
            )}
          </div>

          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-black flex items-center justify-center text-white font-serif text-xl font-normal pt-1">
              W
            </div>
            <span className="font-serif tracking-wide text-black hidden sm:inline">Wallander Group</span>
          </Link>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="pt-32 pb-24 px-6 flex-grow">
        <div className="container mx-auto max-w-4xl">
          {slug ? (
            selectedArticle ? (
              <SellingIsntQuittingArticle />
            ) : (
              <div className="text-center py-20">
                <h2 className="text-3xl font-serif mb-4">Article Not Found</h2>
                <p className="text-neutral-600 mb-8 font-light">The piece you are looking for does not exist or has been moved.</p>
                <Link to="/thoughts" className="inline-block bg-black text-white px-6 py-3 font-serif">
                  View All Shared Thoughts
                </Link>
              </div>
            )
          ) : (
            /* Index View */
            <div>
              <div className="text-center max-w-2xl mx-auto mb-16">
                <div className="inline-block px-3 py-1 bg-black text-white text-xs font-bold tracking-widest uppercase mb-6 font-serif">
                  Perspectives & Essays
                </div>
                <h1 className="text-4xl md:text-6xl font-serif text-black leading-tight mb-6">
                  Shared Thoughts
                </h1>
                <p className="text-xl text-neutral-600 font-light leading-relaxed">
                  Reflections on enduring ownership, decentralized leadership, and the stewardship of niche manufacturing.
                </p>
              </div>

              <div className="grid gap-8 max-w-3xl mx-auto">
                {articles.map((art) => (
                  <Link
                    key={art.id}
                    to={`/thoughts/${art.slug}`}
                    className="group block p-8 md:p-10 bg-neutral-50 border border-neutral-200 hover:border-black transition-all hover:shadow-md no-underline"
                  >
                    <div className="flex items-center gap-3 text-xs font-serif uppercase tracking-widest text-neutral-400 mb-4">
                      <span>{art.date}</span>
                      <span>•</span>
                      <span>{art.readTime}</span>
                      <div className="ml-auto flex gap-2">
                        {art.tags.map((t, idx) => (
                          <span key={idx} className="bg-white border border-neutral-200 px-2 py-0.5 text-[10px] text-neutral-600">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-serif text-black group-hover:text-neutral-700 transition-colors mb-3">
                      {art.title}
                    </h2>

                    <p className="text-neutral-600 font-light leading-relaxed mb-6">
                      {art.summary}
                    </p>

                    <div className="flex items-center gap-2 text-sm font-serif font-bold text-black group-hover:translate-x-1 transition-transform">
                      <span>Read Thought Piece</span>
                      <ArrowRight size={16} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12 text-center border-t border-neutral-800">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white text-black flex items-center justify-center font-serif text-sm font-bold pt-0.5">W</div>
            <span className="font-serif tracking-wide text-neutral-400 text-sm">Wallander Group</span>
          </div>

          <div className="flex items-center gap-6 text-sm font-serif text-neutral-400">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/thoughts" className="hover:text-white transition-colors">Shared Thoughts</Link>
            <Link to="/jan-wallander" className="hover:text-white transition-colors">Jan Wallander</Link>
            <Link to="/partners" className="hover:text-white transition-colors">Partners</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SharedThoughts;
