import React from 'react';
import Link from 'next/link';

export default function Framework() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold hover:text-blue-400">The Data Thesis</Link>
            <div className="space-x-6">
              <Link href="/" className="hover:text-blue-400">Home</Link>
              <Link href="/framework" className="text-blue-400">Framework</Link>
              <Link href="/pricing" className="hover:text-blue-400">Course</Link>
              <Link href="/about" className="hover:text-blue-400">About</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-900 to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">The Macro Framework</h1>
          <p className="text-xl text-gray-300">
            Master the 6-Part Macro Engine That Moves Global Markets
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Why Most Traders Fail</h2>
          <div className="bg-gray-900 border-l-4 border-red-500 p-8 rounded">
            <p className="text-lg text-gray-300 mb-4">
              ❌ They trade chart patterns without understanding the macro context
            </p>
            <p className="text-lg text-gray-300 mb-4">
              ❌ They ignore central bank policy shifts that reprice markets overnight
            </p>
            <p className="text-lg text-gray-300">
              ❌ They lack a systematic framework to read institutional capital flows
            </p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">The Solution: The 6-Part Macro Engine</h2>
          
          {/* Engine Diagram */}
          <div className="bg-black p-8 rounded-lg border border-gray-800 mb-12">
            <div className="space-y-4 font-mono text-sm">
              <div className="text-blue-400">[ Economic Data Release ]</div>
              <div className="text-center text-gray-500">│</div>
              <div className="text-center text-gray-500">▼</div>
              <div className="text-cyan-400">[ Central Bank Reaction Shift ]</div>
              <div className="text-center text-gray-500">│</div>
              <div className="text-center text-gray-500">▼</div>
              <div className="text-green-400">[ Yield & Rate Path Repricing ]</div>
              <div className="text-center text-gray-500">│</div>
              <div className="text-center text-gray-500">▼</div>
              <div className="text-yellow-400">[ Relative Global Yield Advantage ]</div>
              <div className="text-center text-gray-500">│</div>
              <div className="text-center text-gray-500">▼</div>
              <div className="text-orange-400">[ Capital Flows & USD Demand ]</div>
              <div className="text-center text-gray-500">│</div>
              <div className="text-center text-gray-500">▼</div>
              <div className="text-pink-400">[ FX Cross & Precious Metals Trade ]</div>
            </div>
          </div>

          <p className="text-gray-300 mb-12">
            This isn't guesswork. This is how institutional capital actually flows through markets. Once you understand this chain, you can trade with conviction.
          </p>
        </div>
      </section>

      {/* Core Principles */}
      <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Core Principles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold text-blue-400 mb-4">1. Economic Data Drives Everything</h3>
              <p className="text-gray-300">
                CPI, employment, GDP, and inflation data are the starting point. They signal whether central banks will change policy.
              </p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">2. Central Bank Reaction is Key</h3>
              <p className="text-gray-300">
                Markets don't care about the data itself—they care about how central banks will REACT to it. That reaction function shifts everything.
              </p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold text-green-400 mb-4">3. Yields Are the Bridge</h3>
              <p className="text-gray-300">
                When central bank policy changes, Treasury yields reprice first. This creates the relative yield advantage that moves currencies.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">4. Relative Yields = Capital Flows</h3>
              <p className="text-gray-300">
                Higher US yields attract global capital. Lower yields push capital elsewhere. This is institutional behavior, not sentiment.
              </p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold text-orange-400 mb-4">5. USD is the Demand Gauge</h3>
              <p className="text-gray-300">
                When capital wants US assets, it needs dollars. When capital leaves, the dollar weakens. Track this, not opinions.
              </p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold text-pink-400 mb-4">6. Execution in FX & Metals</h3>
              <p className="text-gray-300">
                EUR/USD, USD/JPY, and Gold are your primary expressions. They move when the macro engine above shifts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Real Case Studies: How The Framework Predicted Market Moves</h2>
          
          {/* Case Study 1 */}
          <div className="bg-black p-8 rounded-lg border border-gray-800 mb-8">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Case Study 1: November 2022 - The CPI Data Surprise</h3>
            <p className="text-gray-400 mb-4 italic">How a Single Report Reprices Markets</p>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-bold mb-2">What Happened:</h4>
                <p className="text-gray-300">
                  A lower-than-expected US CPI print in November 2022 caused a sharp shift in rate expectations, sending Treasury yields and the Dollar down instantly.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-2">📊 The Macro Transmission Chain:</h4>
                <p className="text-cyan-400 font-mono">Soft CPI → Terminal Rate Expectations Drop → Treasury Yields Decline → Yield Advantage Narrows → Broad USD Sell-off</p>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-2">Market Expression (What Actually Moved):</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>✅ EUR/USD: Strong Bullish Repricing</li>
                  <li>✅ Gold: Powerful Rally</li>
                  <li>✅ USD/JPY: Bearish</li>
                </ul>
              </div>
              
              <div className="bg-gray-800 p-4 rounded border-l-4 border-blue-400">
                <p className="text-gray-200">
                  <strong>The Macro Lesson:</strong> Data releases trigger central bank repricing, which drives yield adjustments and FX movement. No chart pattern needed.
                </p>
              </div>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="bg-black p-8 rounded-lg border border-gray-800 mb-8">
            <h3 className="text-2xl font-bold text-green-400 mb-4">Case Study 2: September 2024 - Easing Cycle Initiation</h3>
            <p className="text-gray-400 mb-4 italic">Policy Rates vs. Future Expectations</p>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-bold mb-2">What Happened:</h4>
                <p className="text-gray-300">
                  The Fed initiated its easing cycle with a 50 bps cut to 4.75–5.00%. The broader market direction was determined by growth expectations and terminal rate projections rather than the initial cut itself.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-2">📊 The Macro Transmission Chain:</h4>
                <p className="text-cyan-400 font-mono">Cooling Inflation & Labour → Easing Confidence → Long-Term Rates Reprice → USD Path Determined by Global Relatives</p>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-2">Market Expression (What Actually Moved):</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>✅ EUR/USD & Gold: Supported on lower real yields</li>
                  <li>✅ USD/JPY: Sensitive to US Treasury yield adjustments</li>
                </ul>
              </div>
              
              <div className="bg-gray-800 p-4 rounded border-l-4 border-green-400">
                <p className="text-gray-200">
                  <strong>The Macro Lesson:</strong> The policy rate is the headline; the expected path is the trade.
                </p>
              </div>
            </div>
          </div>

          {/* Case Study 3 */}
          <div className="bg-black p-8 rounded-lg border border-gray-800">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Case Study 3: Currency Market Expression</h3>
            <p className="text-gray-400 mb-4 italic">How Market Expressions Reflect the Macro Engine</p>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-bold mb-2">Market Expression During Macro Shifts:</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>📍 <strong>EUR/USD: Parity Breakdown (Bearish)</strong> - When USD yield advantage widens</li>
                  <li>📍 <strong>USD/JPY: Historic Bullish Rally</strong> - When US rates diverge from Japan's</li>
                  <li>📍 <strong>Gold: Powerful Rally</strong> - When real yields compress on rate cut expectations</li>
                </ul>
              </div>
              
              <div className="bg-gray-800 p-4 rounded border-l-4 border-yellow-400">
                <p className="text-gray-200">
                  <strong>The Macro Lesson:</strong> Inflation is a currency catalyst when it changes the central bank's reaction function.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Works */}
      <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Why This Framework Actually Works</h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="text-2xl text-blue-400 flex-shrink-0">✓</div>
              <div>
                <h3 className="text-xl font-bold mb-2">It's Mechanical, Not Emotional</h3>
                <p className="text-gray-300">
                  You're reading economic flows, not interpreting price action. Central banks react to data predictably. Capital flows mechanically toward higher yields.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="text-2xl text-green-400 flex-shrink-0">✓</div>
              <div>
                <h3 className="text-xl font-bold mb-2">It Works Across Market Cycles</h3>
                <p className="text-gray-300">
                  Bull markets, bear markets, sideways chop—the 6-part engine operates the same way. You're always watching the same transmission chain.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="text-2xl text-yellow-400 flex-shrink-0">✓</div>
              <div>
                <h3 className="text-xl font-bold mb-2">It's Institutional Grade</h3>
                <p className="text-gray-300">
                  This is how macro hedge funds and central banks think about markets. You're learning their playbook, not retail psychology.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="text-2xl text-pink-400 flex-shrink-0">✓</div>
              <div>
                <h3 className="text-xl font-bold mb-2">It Stops Guessing</h3>
                <p className="text-gray-300">
                  No more wondering "why did EUR/USD move?" You'll know. You'll have the economic thesis before the move happens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Master Macro Trading?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Stop guessing chart patterns. Learn to trade global capital flows using proven economic thesis modeling, central bank analysis, and institutional transmission channels.
          </p>
          <Link href="/pricing" className="inline-block bg-white text-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 text-lg">
            Enrol in the Macro Framework Today
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
