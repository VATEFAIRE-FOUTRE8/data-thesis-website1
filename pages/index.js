import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold">The Data Thesis</h1>
            <div className="space-x-6">
              <Link href="/" className="hover:text-blue-400">Home</Link>
              <Link href="/framework" className="hover:text-blue-400">Framework</Link>
              <Link href="/pricing" className="hover:text-blue-400">Course</Link>
              <Link href="/about" className="hover:text-blue-400">About</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-5xl font-bold mb-4">
            Stop Trading Patterns.<br/>Start Trading Capital Flows.
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Learn institutional-grade macro trading methodology. Understand how central banks, yields, and currency flows actually work together.
          </p>
          <Link href="/framework" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-lg text-lg mb-4">
            See How The Framework Works →
          </Link>
          <p className="text-gray-400 mt-4">Or scroll to learn the core principles below</p>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Most Traders Fail</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black p-6 rounded-lg border-l-4 border-red-500">
              <h3 className="text-lg font-bold mb-3 text-red-400">❌ They Trade Patterns</h3>
              <p className="text-gray-300">
                Support, resistance, moving averages. But these are symptoms, not causes. They don't explain *why* markets move.
              </p>
            </div>
            <div className="bg-black p-6 rounded-lg border-l-4 border-red-500">
              <h3 className="text-lg font-bold mb-3 text-red-400">❌ They Ignore Macro Context</h3>
              <p className="text-gray-300">
                Central bank policy shifts, yield repricing, capital flows—these move markets more than any chart pattern ever will.
              </p>
            </div>
            <div className="bg-black p-6 rounded-lg border-l-4 border-red-500">
              <h3 className="text-lg font-bold mb-3 text-red-400">❌ They Guess Constantly</h3>
              <p className="text-gray-300">
                Without a thesis, they're just guessing. Some trades work, some don't. No edge. No consistency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Preview */}
      <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">The Solution: The 6-Part Macro Engine</h2>
          
          <div className="bg-gray-900 p-12 rounded-lg border border-gray-800 mb-8">
            <div className="space-y-4 font-mono text-sm text-center">
              <div className="text-blue-400">[ Economic Data Release ]</div>
              <div className="text-gray-500">↓</div>
              <div className="text-cyan-400">[ Central Bank Reaction Shift ]</div>
              <div className="text-gray-500">↓</div>
              <div className="text-green-400">[ Yield & Rate Path Repricing ]</div>
              <div className="text-gray-500">↓</div>
              <div className="text-yellow-400">[ Relative Global Yield Advantage ]</div>
              <div className="text-gray-500">↓</div>
              <div className="text-orange-400">[ Capital Flows & USD Demand ]</div>
              <div className="text-gray-500">↓</div>
              <div className="text-pink-400">[ FX Cross & Precious Metals Trade ]</div>
            </div>
          </div>

          <p className="text-gray-300 text-center text-lg mb-8">
            This isn't random. This is how institutional capital actually flows through markets. Once you understand it, you stop guessing.
          </p>

          <div className="text-center">
            <Link href="/framework" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg">
              Learn the Complete Framework →
            </Link>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Core Principles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Data Drives Everything</h3>
              <p className="text-gray-300">
                CPI, employment, GDP—these are the signals. They tell you whether central banks will change policy.
              </p>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Central Bank Reaction is Key</h3>
              <p className="text-gray-300">
                Markets don't move on data—they move on how central banks will react to that data. That's the transmission point.
              </p>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold text-green-400 mb-4">Yields Are the Bridge</h3>
              <p className="text-gray-300">
                When policy changes, Treasury yields reprice first. This creates the relative advantage that moves currencies globally.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">Relative Yields = Capital</h3>
              <p className="text-gray-300">
                Higher yields attract global capital. Lower yields push it elsewhere. This is institutional behavior, predictable and repeatable.
              </p>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold text-orange-400 mb-4">USD is the Demand Gauge</h3>
              <p className="text-gray-300">
                When capital wants US assets, it needs dollars. When it leaves, the dollar weakens. Track capital, not sentiment.
              </p>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold text-pink-400 mb-4">Trade the Expression</h3>
              <p className="text-gray-300">
                EUR/USD, USD/JPY, and Gold are your primary vehicles. They move when the macro engine above shifts. Execute there.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose The Data Thesis?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h4 className="text-xl font-bold text-blue-400 mb-4">✓ Institutional-Grade</h4>
              <p className="text-gray-300">
                This is how macro hedge funds and central banks think. Not retail psychology. Real economics.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h4 className="text-xl font-bold text-green-400 mb-4">✓ Proven Framework</h4>
              <p className="text-gray-300">
                Tested across bull markets, bear markets, and crisis periods. Real case studies from 2022-2024.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h4 className="text-xl font-bold text-yellow-400 mb-4">✓ No Guessing</h4>
              <p className="text-gray-300">
                Once you understand the framework, you trade with conviction based on economic data and capital flows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Case Studies Teaser */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">How This Framework Actually Predicted Market Moves</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold text-blue-400 mb-2">November 2022: CPI Surprise</h3>
              <p className="text-gray-300 mb-4">
                Soft CPI → Rate Expectations Drop → Treasury Yields Fall → Yield Advantage Narrows → USD Sells Off
              </p>
              <p className="text-gray-400 italic text-sm">EUR/USD rallied 500+ pips. Gold surged. USD/JPY collapsed.</p>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold text-green-400 mb-2">September 2024: Easing Cycle</h3>
              <p className="text-gray-300 mb-4">
                Fed 50bp Cut → Easing Confidence → Long-Term Rates Reprice → USD Path Determined by Global Yields
              </p>
              <p className="text-gray-400 italic text-sm">EUR/USD supported. Gold rallied. Real yields compressed.</p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/framework" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg">
              See All Case Studies →
            </Link>
          </div>
        </div>
      </section>

      {/* Course Info */}
      <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Learn at Your Level</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold text-blue-400 mb-3">Framework Essentials</h3>
              <p className="text-gray-300 mb-4">Self-paced video course + templates</p>
              <p className="text-2xl font-bold text-blue-400 mb-4">₦50,000</p>
              <Link href="/pricing" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
                Learn More
              </Link>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border-2 border-green-400">
              <h3 className="text-xl font-bold text-green-400 mb-3">Framework Pro (Recommended)</h3>
              <p className="text-gray-300 mb-4">Everything + live sessions + community</p>
              <p className="text-2xl font-bold text-green-400 mb-4">₦100,000</p>
              <Link href="/pricing" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded">
                Enrol Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Master Macro Trading?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Start by learning the complete framework for free. Then enrol when you're ready.
          </p>
          <Link href="/framework" className="inline-block bg-white text-blue-600 font-bold py-4 px-10 rounded-lg hover:bg-gray-100 text-lg mr-4">
            Learn the Framework
          </Link>
          <Link href="/pricing" className="inline-block bg-blue-800 text-white font-bold py-4 px-10 rounded-lg hover:bg-blue-900 text-lg">
            View Course Pricing
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400">
            © 2024 The Data Thesis. Master macro trading with institutional-grade methodology.
          </p>
        </div>
      </footer>
    </div>
  );
}
