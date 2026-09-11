import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

const DataThesisWebsite = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqItems = [
    {
      q: "Is this a signal service?",
      a: "No. The program is designed to teach macro analysis and thesis construction rather than provide a stream of buy/sell signals. You'll learn to build a structured framework for understanding markets, not rely on someone else's trades."
    },
    {
      q: "Is this a guaranteed trading system?",
      a: "No. Markets are uncertain. The objective is to improve your analytical framework and decision-making under uncertainty, not guarantee outcomes or profits."
    },
    {
      q: "Do I need technical-analysis knowledge?",
      a: "Basic trading knowledge is helpful. Technical analysis is not treated as the enemy—the program adds a macro layer of context that can complement it."
    },
    {
      q: "What markets does this apply to?",
      a: "The framework is particularly relevant to Gold, Silver, the U.S. Dollar/DXY, and other markets influenced by monetary policy and macroeconomic conditions."
    },
    {
      q: "Will I learn how to predict the market?",
      a: "The goal is not certainty. You will learn to build structured hypotheses, evaluate scenarios, identify catalysts, and define invalidation—a much more valuable skill."
    },
    {
      q: "How long is the mentorship?",
      a: "8 weeks."
    },
    {
      q: "Is it one-on-one?",
      a: "Yes. The entire mentorship is one-on-one intensive work."
    },
    {
      q: "How much does it cost?",
      a: "₦100,000."
    },
    {
      q: "Is this financial advice?",
      a: "No. The program is educational. Nothing should be interpreted as personalized financial or investment advice. You remain responsible for your own decisions and risk."
    }
  ];

  const curriculumModules = [
    { title: "Foundation", items: ["Macro trader mindset", "How macro influences markets", "Building market narratives"] },
    { title: "Monetary Policy", items: ["Federal Reserve dynamics", "Interest rates and policy", "Rate expectations and guidance", "Reaction functions"] },
    { title: "Inflation", items: ["CPI and PCE", "Core inflation trends", "Disinflation scenarios", "Expectations analysis"] },
    { title: "Labour Market", items: ["NFP and unemployment", "Hourly earnings", "Jobless claims", "Labour-market strength"] },
    { title: "Yields & The Dollar", items: ["Treasury yields", "Real vs nominal yields", "DXY dynamics", "Rate differentials"] },
    { title: "Gold & Silver", items: ["Monetary sensitivity", "Real yields", "Dollar relationships", "Macro scenarios"] },
    { title: "Global Risk", items: ["Geopolitical tensions", "Risk sentiment flows", "Safe-haven dynamics", "Cross-asset relationships"] },
    { title: "Thesis Building", items: ["Connecting data", "Expectations vs reality", "Scenario construction", "Catalyst identification"] }
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-xl font-semibold tracking-wide">THE DATA THESIS</div>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className={`hidden md:flex items-center gap-12`}>
            <a href="#framework" className="text-gray-300 hover:text-white transition-colors text-sm">Framework</a>
            <a href="#curriculum" className="text-gray-300 hover:text-white transition-colors text-sm">Curriculum</a>
            <a href="#faq" className="text-gray-300 hover:text-white transition-colors text-sm">FAQ</a>
            <button className="bg-white text-black px-6 py-2 rounded text-sm font-medium hover:bg-gray-200 transition-colors">
              JOIN NOW
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-800 bg-black/98 py-4 px-4">
            <a href="#framework" className="block text-gray-300 hover:text-white py-2 text-sm">Framework</a>
            <a href="#curriculum" className="block text-gray-300 hover:text-white py-2 text-sm">Curriculum</a>
            <a href="#faq" className="block text-gray-300 hover:text-white py-2 text-sm">FAQ</a>
            <button className="w-full bg-white text-black px-6 py-2 rounded text-sm font-medium hover:bg-gray-200 transition-colors mt-4">
              JOIN NOW
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-12">
          {/* Main headline */}
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              Stop Trading <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">the Chart</span>.
            </h1>
            <h2 className="text-4xl sm:text-5xl font-light text-gray-300 leading-tight">
              Start Understanding What Moves the Market.
            </h2>
            
            <div className="pt-6 space-y-4">
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                A one-on-one, 8-week macro trading mentorship designed to teach you how to build a structured thesis from economic data, central-bank expectations, yields, currencies, commodities, and global risk—then translate that thesis into disciplined trade hypotheses.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <button className="bg-white text-black px-8 py-4 rounded font-semibold hover:bg-gray-200 transition-colors w-full sm:w-auto flex items-center justify-center gap-2">
                  STEP INSIDE THE DATA THESIS <ArrowRight size={18} />
                </button>
                <button className="border border-gray-600 text-white px-8 py-4 rounded font-semibold hover:border-white hover:bg-white/5 transition-colors w-full sm:w-auto">
                  SEE HOW THE FRAMEWORK WORKS
                </button>
              </div>

              <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-400">
                <span>One-on-one mentorship</span>
                <span className="hidden sm:inline">•</span>
                <span>8 weeks</span>
                <span className="hidden sm:inline">•</span>
                <span className="font-semibold text-white">₦100,000</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Opening Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-950 to-black max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="space-y-6">
            <p className="text-2xl sm:text-3xl font-light text-gray-300 leading-relaxed italic">
              "The glowing screen in front of me was a graveyard."
            </p>
            
            <div className="border-l-2 border-gray-700 pl-6 space-y-4 text-gray-400">
              <p>I had studied them all. Candlestick patterns. Support and resistance. Indicators. Trendlines. Breakouts. Multiple strategies. Multiple educators.</p>
              
              <p>I had a hammer at support. Bullish divergence on the RSI. A trendline break. The setup looked technically perfect. I entered long.</p>
              
              <p>The stop was triggered.</p>
              
              <p>Then the market moved in the expected direction without me.</p>
              
              <p>This became the recurring experience. More information did not create more clarity.</p>
            </div>

            <p className="text-xl font-semibold text-white pt-6">
              I had become a cartographer of the past.
            </p>
            
            <div className="border-l-2 border-gray-700 pl-6 space-y-4 text-gray-400 pt-4">
              <p>The charts were showing what had already happened. They could not tell me what came next.</p>
              
              <p className="italic">Then the question changed.</p>
              
              <p className="font-semibold text-white not-italic">Instead of: "What pattern is forming?"</p>
              <p>I asked: "Why did the market move?"</p>
              
              <p className="pt-4">I began asking different questions entirely:</p>
              <ul className="space-y-2 ml-4">
                <li>What is happening in the global economy?</li>
                <li>What are markets expecting from the Federal Reserve?</li>
                <li>Is inflation accelerating or cooling?</li>
                <li>What is happening to Treasury yields?</li>
                <li>How might those conditions affect gold, silver, the dollar?</li>
              </ul>
            </div>

            <div className="bg-gray-900/30 border border-gray-800 rounded px-6 py-8 mt-8">
              <p className="text-2xl font-light text-gray-200">
                I was looking at the puppet show,<br />
                <span className="text-gray-400">completely oblivious to the puppeteer.</span>
              </p>
              <p className="text-sm text-gray-500 mt-4">*A metaphor for understanding underlying drivers, not literal conspiracy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Major Realization */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="space-y-8">
            <h2 className="text-5xl sm:text-6xl font-bold">
              You Were Studying<br />
              <span className="text-gray-500">the Output.</span>
            </h2>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Price is an output of a much larger system.
              </p>
              
              <p>
                Markets respond to changing information and expectations around things such as interest rates, inflation, economic growth, employment, central-bank policy, Treasury yields, currency valuations, risk sentiment, and global capital allocation.
              </p>

              <div className="bg-gray-900/50 border border-gray-800 rounded p-6 mt-8">
                <p className="text-white font-semibold mb-2">The key insight:</p>
                <p className="text-gray-300">
                  Markets are forward-looking. New information matters not because of the headline itself, but because of what it changes about expectations of what comes next.
                </p>
              </div>

              <p className="pt-6">
                Most traders spend their time studying the visible output—price—while macro traders attempt to understand the economic and policy forces that may be contributing to that output.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Five-Layer Framework */}
      <section id="framework" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-950 to-black max-w-7xl mx-auto">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-5xl sm:text-6xl font-bold">THE DATA THESIS</h2>
            <p className="text-xl text-gray-400">A 5-layer framework for turning macroeconomic information into a structured market thesis</p>
          </div>

          <div className="space-y-6">
            {/* Layer 01 */}
            <div className="border-l-4 border-blue-500/50 pl-6 py-4 hover:border-blue-400 transition-colors">
              <h3 className="text-2xl font-semibold mb-2">LAYER 01 — THE LIQUIDITY ANCHOR</h3>
              <p className="text-gray-400 mb-3">Understand the cost of money.</p>
              <p className="text-gray-300 text-sm">
                Interest rates. Real vs nominal yields. Funding conditions. Monetary policy. Rate differentials. Where might capital be attracted or discouraged by changing conditions?
              </p>
            </div>

            {/* Layer 02 */}
            <div className="border-l-4 border-green-500/50 pl-6 py-4 hover:border-green-400 transition-colors">
              <h3 className="text-2xl font-semibold mb-2">LAYER 02 — THE ECONOMIC PULSE</h3>
              <p className="text-gray-400 mb-3">Read the economy beneath the headline.</p>
              <p className="text-gray-300 text-sm">
                CPI. PCE. Core inflation. NFP. Unemployment. Earnings. A number matters in context. Learn to compare actual vs expectations vs previous vs trend.
              </p>
            </div>

            {/* Layer 03 */}
            <div className="border-l-4 border-amber-500/50 pl-6 py-4 hover:border-amber-400 transition-colors">
              <h3 className="text-2xl font-semibold mb-2">LAYER 03 — THE RISK MATRIX</h3>
              <p className="text-gray-400 mb-3">Understand how risk changes the flow of capital.</p>
              <p className="text-gray-300 text-sm">
                Geopolitical tensions. Risk-on / risk-off conditions. Safe-haven demand. Global uncertainty. How is the market's perception of risk changing—and which assets could be affected?
              </p>
            </div>

            {/* Layer 04 */}
            <div className="border-l-4 border-purple-500/50 pl-6 py-4 hover:border-purple-400 transition-colors">
              <h3 className="text-2xl font-semibold mb-2">LAYER 04 — THE CENTRAL BANK REACTION FUNCTION</h3>
              <p className="text-gray-400 mb-3">Understand how policymakers may respond.</p>
              <p className="text-gray-300 text-sm">
                Federal Reserve. ECB. BoJ. Monetary policy. Forward guidance. Rate expectations. What policy response might markets be pricing?
              </p>
            </div>

            {/* Layer 05 */}
            <div className="border-l-4 border-red-500/50 pl-6 py-4 hover:border-red-400 transition-colors">
              <h3 className="text-2xl font-semibold mb-2">LAYER 05 — THE EXECUTION</h3>
              <p className="text-gray-400 mb-3">Translate the macro narrative into a trade hypothesis.</p>
              <p className="text-gray-300 text-sm">
                Move from Data → Context → Expectations → Policy → Transmission → Market → Trade hypothesis → Risk. Learn to define thesis, catalyst, transmission, instrument, scenario, invalidation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Macro Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">THE MACRO PROCESS</h2>
          
          <div className="space-y-4">
            {[
              { step: "01", title: "OBSERVE", desc: "What is happening in the economic data?" },
              { step: "02", title: "CONTEXTUALIZE", desc: "How does the data compare with expectations and the broader trend?" },
              { step: "03", title: "MAP EXPECTATIONS", desc: "What are markets pricing for future policy and economic conditions?" },
              { step: "04", title: "TRACE THE TRANSMISSION", desc: "How could those expectations influence yields, dollar, commodities, risk sentiment?" },
              { step: "05", title: "FORM A THESIS", desc: "What is the most coherent market hypothesis?" },
              { step: "06", title: "CHOOSE THE EXPRESSION", desc: "Which instrument best expresses the thesis?" },
              { step: "07", title: "DEFINE INVALIDATION", desc: "What would make the thesis wrong?" },
              { step: "08", title: "MANAGE RISK", desc: "Structure the trade without pretending certainty exists." }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-6 pb-8">
                <div className="min-w-fit">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center border border-gray-600">
                    <span className="text-lg font-bold text-gray-200">{item.step}</span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                  {idx < 7 && <div className="mt-8 h-12 w-0.5 bg-gradient-to-b from-gray-700 to-gray-900 ml-8"></div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-950 to-black max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">The Transformation</h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Before */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-red-400 mb-6">BEFORE</h3>
            <div className="space-y-3">
              {[
                "Chasing setups",
                "Switching strategies after losses",
                "Conflicting indicator signals",
                "Reacting emotionally to news",
                "Trading without understanding the environment",
                "Entering because a pattern 'looks good'",
                "Searching for certainty",
                "Asking what the chart will do next"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-red-500/50 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-400">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* After */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-green-400 mb-6">AFTER</h3>
            <div className="space-y-3">
              {[
                "Building a macro thesis",
                "Understanding economic releases",
                "Monitoring policy expectations",
                "Interpreting inflation and employment",
                "Tracking yields and the dollar",
                "Understanding relevant market relationships",
                "Building scenarios",
                "Knowing when the environment supports a trade"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-green-500/50 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-gray-900/50 border border-gray-800 rounded p-8">
          <h3 className="text-2xl font-semibold mb-4">STOP TRADING REACTIONS</h3>
          <p className="text-gray-300 mb-6">You stop setup hopping, treating every candle as a signal, changing strategy after every loss, trading headlines without context.</p>
          <h3 className="text-2xl font-semibold mb-4">START THINKING IN THESIS</h3>
          <p className="text-gray-300">You start asking what changed, what markets expected, comparing data with expectations, understanding policy implications, mapping transmission mechanisms, building scenarios, defining invalidation, respecting uncertainty.</p>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">What You Will Learn</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {curriculumModules.map((module, idx) => (
            <div key={idx} className="border border-gray-800 rounded p-6 hover:border-gray-700 transition-colors">
              <h3 className="text-lg font-semibold mb-4 text-gray-100">{module.title}</h3>
              <ul className="space-y-2">
                {module.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="text-gray-400 text-sm flex items-start gap-2">
                    <span className="text-gray-600 mt-1">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-blue-950/30 border border-blue-900/50 rounded p-8">
          <p className="text-gray-300 text-center leading-relaxed">
            The curriculum is organized around the Data Thesis framework—not as a generic pile of lectures, but as a coherent system for understanding macro-driven markets.
          </p>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-950 to-black max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* For */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-green-400 mb-6">THIS IS FOR YOU IF:</h3>
            <div className="space-y-3">
              {[
                "You've spent time studying charts",
                "You understand basic trading concepts",
                "You want to understand macroeconomic drivers",
                "You trade or want to trade gold/silver/USD markets",
                "You want structured research process",
                "You're willing to study economic data",
                "You want to develop independent thinking",
                "You understand markets are uncertain"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Not For */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-red-400 mb-6">THIS IS NOT FOR YOU IF:</h3>
            <div className="space-y-3">
              {[
                "You want guaranteed profits",
                "You want buy/sell signals",
                "You want someone to trade for you",
                "You refuse to study economic data",
                "You expect a shortcut",
                "You want a 'magic indicator'",
                "You expect a '100% win-rate strategy'",
                "You're unwilling to manage risk"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mentor Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12">Learn the Framework Directly</h2>
          
          <div className="bg-gradient-to-b from-gray-900 to-gray-950 border border-gray-800 rounded p-8 sm:p-12">
            <h3 className="text-2xl font-semibold mb-2">[MENTOR NAME]</h3>
            <div className="space-y-4 text-gray-400 text-sm">
              <p><strong className="text-gray-300">[INSERT VERIFIED CREDENTIALS]</strong></p>
              <p className="border-t border-gray-800 pt-4 mt-4">[INSERT VERIFIED EXPERIENCE]</p>
              <p className="border-t border-gray-800 pt-4 mt-4">[INSERT VERIFIED RELEVANT BACKGROUND]</p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-amber-950/20 border border-amber-900/30 rounded">
            <p className="text-sm text-gray-400">
              <strong className="text-gray-300">Note:</strong> All credentials, experience, and background will be verified before publication. No fabricated achievements.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-950 to-black max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">Student Results</h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[1, 2, 3].map((idx) => (
            <div key={idx} className="border border-gray-800 rounded p-8 hover:border-gray-700 transition-colors">
              <p className="text-gray-400 italic mb-6">
                "[INSERT VERIFIED STUDENT TESTIMONIAL]"
              </p>
              <div>
                <p className="text-white font-semibold">[Student Name]</p>
                <p className="text-gray-500 text-sm">[Location / Background]</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto p-6 bg-amber-950/20 border border-amber-900/30 rounded text-center">
          <p className="text-sm text-gray-400">
            <strong className="text-gray-300">Testimonials:</strong> Placeholders for verified student results. All testimonials must be authentic before publication.
          </p>
        </div>
      </section>

      {/* The Offer */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-5xl sm:text-6xl font-bold">THE DATA THESIS MENTORSHIP</h2>
          
          <div className="space-y-3 text-xl text-gray-400">
            <p>8 Weeks • One-on-One • Intensive</p>
          </div>

          <div className="space-y-6 text-gray-300">
            <p className="text-lg">
              You are not buying another collection of indicators or video courses.
            </p>
            <p className="text-lg font-semibold text-white">
              You are investing in a framework for understanding markets.
            </p>
            <p className="text-gray-400">
              Bring the ambition. Bring the willingness to do the work. The mentorship provides the framework.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded p-8 my-8">
            <p className="text-3xl font-bold text-white mb-2">₦100,000</p>
            <p className="text-gray-400">8-week one-on-one intensive mentorship</p>
          </div>

          <button className="bg-white text-black px-8 py-4 rounded font-semibold text-lg hover:bg-gray-200 transition-colors w-full sm:w-auto">
            STEP INSIDE THE DATA THESIS
          </button>

          <p className="text-gray-500 text-sm pt-4">
            [INSERT PAYMENT / CHECKOUT URL]
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-950 to-black max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <div key={idx} className="border border-gray-800 rounded overflow-hidden hover:border-gray-700 transition-colors">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-900/50 transition-colors"
                >
                  <span className="text-lg font-medium text-left text-white">{item.q}</span>
                  <ChevronDown 
                    size={20} 
                    className={`text-gray-500 flex-shrink-0 transition-transform ${expandedFaq === idx ? 'rotate-180' : ''}`}
                  />
                </button>
                
                {expandedFaq === idx && (
                  <div className="px-6 py-4 border-t border-gray-800 bg-gray-900/30">
                    <p className="text-gray-300 leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Disclaimer */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-800">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Risk Disclaimer</h3>
          <div className="text-gray-400 text-sm space-y-4">
            <p>
              Trading and investing involve substantial risk, and losses are possible. Nothing on this website or within the mentorship should be interpreted as financial, investment, or personalized trading advice.
            </p>
            <p>
              Past performance, examples, or hypothetical scenarios do not guarantee future results. The purpose of the program is education and the development of analytical and risk-management skills.
            </p>
            <p>
              Participants remain responsible for their own trading decisions and risk. Understanding macro analysis does not eliminate market risk or guarantee profitable outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            Stop Asking the Chart for Permission
          </h2>
          
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            <p>
              Start asking better questions.
            </p>
            <p>
              Stop letting every candle dictate your emotions. Learn to investigate the economic conditions, expectations, policy decisions, yields, currencies, commodities, and risks that may be shaping the environment around the market.
            </p>
            <p>
              Then build your thesis. Define your risk. And make your decision.
            </p>
          </div>

          <div className="pt-8 space-y-4">
            <button className="bg-white text-black px-8 py-4 rounded font-semibold text-lg hover:bg-gray-200 transition-colors w-full sm:w-auto">
              STEP INSIDE THE DATA THESIS
            </button>
            <p className="text-gray-400 text-sm">₦100,000 • 8-week • One-on-one • Intensive mentorship</p>
          </div>

          <div className="pt-8 border-t border-gray-800">
            <p className="text-gray-400 italic">
              You bring the ambition. I'll teach you the blueprint.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-semibold mb-4">THE DATA THESIS</h4>
              <p className="text-gray-500 text-sm">Macro Trading Mentorship</p>
              <p className="text-gray-600 text-sm mt-2">₦100,000 • 8 Weeks • One-on-One</p>
            </div>
            <div>
              <h5 className="text-sm font-semibold mb-4">Links</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#framework" className="hover:text-white transition-colors">Framework</a></li>
                <li><a href="#curriculum" className="hover:text-white transition-colors">Curriculum</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-sm font-semibold mb-4">Legal</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">[INSERT PRIVACY POLICY]</a></li>
                <li><a href="#" className="hover:text-white transition-colors">[INSERT TERMS]</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs text-gray-600">
                © 2026 The Data Thesis. All rights reserved.
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-600">
            <p>This is an educational program, not financial advice. Trading involves risk.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DataThesisWebsite;
