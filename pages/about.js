import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold hover:text-blue-400">The Data Thesis</Link>
            <div className="space-x-6">
              <Link href="/" className="hover:text-blue-400">Home</Link>
              <Link href="/framework" className="hover:text-blue-400">Framework</Link>
              <Link href="/pricing" className="hover:text-blue-400">Course</Link>
              <Link href="/about" className="text-blue-400">About</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-900 to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">About The Data Thesis</h1>
          <p className="text-xl text-gray-300">
            Why I'm Building This + My Philosophy on Expertise & Income
          </p>
        </div>
      </section>

      {/* The Problem I Saw */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">The Problem I Saw in Trading</h2>
          
          <div className="space-y-6">
            <div className="bg-black p-8 rounded-lg border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-red-400 mb-3">Most Traders Fail Because They Don't Understand the Macro Thesis</h3>
              <p className="text-gray-300">
                I've watched intelligent, disciplined traders lose money consistently because they were trading in isolation. They'd see a EUR/USD chart move and wonder "why?" But they didn't understand that central bank policy had just shifted yields, which shifted capital flows, which moved the currency.
              </p>
            </div>

            <div className="bg-black p-8 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-yellow-400 mb-3">They Trade Patterns Instead of Economics</h3>
              <p className="text-gray-300">
                Chart patterns are noise. What matters is *why* markets move. When you understand the economic transmission chain—data → central bank → yields → capital flows → currency—you stop guessing. You know.
              </p>
            </div>

            <div className="bg-black p-8 rounded-lg border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-red-400 mb-3">Expensive Losses Teach the Wrong Lessons</h3>
              <p className="text-gray-300">
                Some traders learn through painful losses. That's expensive tuition. I built this framework to skip that pain—to teach you institutional-grade macro thinking from day one, so you can avoid the mistakes that cost money.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* My Journey */}
      <section className="bg-black py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">My Journey to This Framework</h2>
          
          <div className="space-y-6 text-gray-300">
            <p>
              I didn't start as a macro trader. Like most traders, I began with technicals—support, resistance, moving averages. I made money sometimes, lost money other times. No edge.
            </p>
            
            <p>
              The turning point came when I realized: <strong>I was trading the symptom, not the cause.</strong> A currency moved, and I'd look at the chart to explain it. Wrong approach.
            </p>
            
            <p>
              I switched my focus: instead of asking "what did the chart do?", I started asking "why did it move?" That simple shift changed everything. I began tracking:
            </p>
            
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Economic data releases and central bank reactions</li>
              <li>How policy shifts repriced Treasury yields</li>
              <li>Where capital was actually flowing</li>
              <li>How institutional traders positioned around macro theses</li>
            </ul>
            
            <p className="mt-6">
              Over years of studying this, I developed the <strong>6-Part Macro Engine</strong>. It's not revolutionary—institutional traders have used these concepts forever. But I systematized it, tested it across market cycles, and refined it into a teachable framework.
            </p>
            
            <p>
              Now traders who understand this framework don't guess. They know.
            </p>
          </div>
        </div>
      </section>

      {/* My Philosophy */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">My Philosophy: Why I'm Monetizing This</h2>
          
          {/* The Warren Buffett Example */}
          <div className="bg-black p-8 rounded-lg border-2 border-blue-400 mb-8">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Warren Buffett Charges $250,000 for Lunch</h3>
            <p className="text-gray-300 mb-4">
              Every year, Buffett auctions one lunch meeting. The winning bid is typically $250,000-$500,000. Why would anyone pay that?
            </p>
            <p className="text-gray-300 mb-4">
              Because Buffett's *time* and *expertise* are valuable. People pay because they believe access to his thinking can make them money or change their perspective.
            </p>
            <p className="text-gray-300">
              <strong>I'm applying the same principle.</strong> Not at Buffett's scale, obviously. But at a scale accessible to serious traders.
            </p>
          </div>

          {/* Why Expertise Should Be Monetized */}
          <div className="bg-black p-8 rounded-lg border-2 border-green-400 mb-8">
            <h3 className="text-2xl font-bold text-green-400 mb-4">Expertise Should Be Monetized</h3>
            <p className="text-gray-300 mb-4">
              If you're good at something, you should be able to make income from it. That's not greedy—it's the foundation of capitalism.
            </p>
            <p className="text-gray-300 mb-4">
              A surgeon charges for surgeries. A lawyer charges for legal advice. A consultant charges for strategic guidance.
            </p>
            <p className="text-gray-300">
              <strong>I charge for macro framework education because it works, and it saves traders money.</strong>
            </p>
          </div>

          {/* Non-Trading Income */}
          <div className="bg-black p-8 rounded-lg border-2 border-yellow-400 mb-8">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Building Non-Trading Income (Like Successful Investors Do)</h3>
            <p className="text-gray-300 mb-4">
              Most wealthy traders don't just trade. They:
            </p>
            <ul className="text-gray-300 space-y-2 mb-4">
              <li>✓ Run hedge funds (charge management fees)</li>
              <li>✓ Sell trading education (charge for courses)</li>
              <li>✓ Manage other people's money (charge for discretionary trading)</li>
              <li>✓ Speak at conferences (get paid for speaking)</li>
              <li>✓ Write books (earn royalties)</li>
            </ul>
            <p className="text-gray-300">
              <strong>This is called "non-trading income."</strong> It's income generated from your expertise, not from your own P&L.
            </p>
            <p className="text-gray-300 mt-4">
              Why? Because:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>✓ Trading is volatile. One bad month can eliminate income.</li>
              <li>✓ Non-trading income is stable. A course sells consistently.</li>
              <li>✓ Non-trading income scales. You can't trade 1000% more, but you can teach 1000 students.</li>
              <li>✓ Non-trading income provides options. If you want to take a break from trading, you still earn.</li>
            </ul>
          </div>

          {/* The Honest Truth */}
          <div className="bg-black p-8 rounded-lg border-2 border-pink-400">
            <h3 className="text-2xl font-bold text-pink-400 mb-4">The Honest Truth</h3>
            <p className="text-gray-300 mb-4">
              Yes, I'm selling this course to build non-trading income. I'm doing exactly what billionaires and millionaires do—monetizing expertise.
            </p>
            <p className="text-gray-300 mb-4">
              <strong>But the course is only valuable if it actually works.</strong> If traders bought it and lost money, I'd lose credibility and income. So I have every incentive to make sure this framework is legit.
            </p>
            <p className="text-gray-300">
              The best part? Helping traders succeed while building sustainable income for myself. Win-win.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes This Different */}
      <section className="bg-black py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">What Makes The Data Thesis Different</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-lg font-bold text-blue-400 mb-3">✓ Institutional-Grade Methodology</h3>
              <p className="text-gray-300">
                Not retail psychology. Not chart patterns. The actual thinking used by macro hedge funds and central banks.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-lg font-bold text-green-400 mb-3">✓ Tested Across Market Cycles</h3>
              <p className="text-gray-300">
                This framework works in bull markets, bear markets, crisis periods, and range-bound chop. It's been refined across 2020-2024.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-lg font-bold text-yellow-400 mb-3">✓ Real Case Studies</h3>
              <p className="text-gray-300">
                Not hypothetical examples. Real moves from Nov 2022, Sept 2024, and more—with actual entry prices and outcomes.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-lg font-bold text-pink-400 mb-3">✓ Honest About the Business</h3>
              <p className="text-gray-300">
                I'm transparent about why I'm selling this: building non-trading income and helping traders avoid expensive failures.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-lg font-bold text-purple-400 mb-3">✓ Community Over Gatekeeping</h3>
              <p className="text-gray-300">
                Most successful traders gatekeep their methods. I'm sharing mine because I believe in abundance—good ideas rising.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-lg font-bold text-cyan-400 mb-3">✓ Lifetime Access & Updates</h3>
              <p className="text-gray-300">
                Once you enrol, you have permanent access. As the framework evolves with new case studies, you'll get them included.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* My Commitment */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">My Commitment to You</h2>
          
          <div className="bg-black p-8 rounded-lg border-2 border-blue-400">
            <p className="text-lg text-gray-300 mb-4">
              <strong>1. I will not oversell results.</strong> This framework teaches you *how* to think, not *when* to trade. You execute. Results depend on your discipline.
            </p>
            
            <p className="text-lg text-gray-300 mb-4">
              <strong>2. I will keep improving it.</strong> As markets evolve, so will the framework. You'll get updates for life.
            </p>
            
            <p className="text-lg text-gray-300 mb-4">
              <strong>3. I will be accessible.</strong> Email support (48-hour response), community access, and monthly live sessions for Pro members.
            </p>
            
            <p className="text-lg text-gray-300">
              <strong>4. I will make this worth the investment.</strong> You'll learn what took me years to develop. That's value.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Learn the Framework?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Start with the framework page to understand the methodology completely. Then enrol at whatever tier fits your goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/framework" className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100">
              Learn the Framework
            </Link>
            <Link href="/pricing" className="inline-block bg-blue-800 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-900">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400">
            © 2024 The Data Thesis. Trading the macro thesis since 2020.
          </p>
        </div>
      </footer>
    </div>
  );
}
