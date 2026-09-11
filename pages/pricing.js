import React, { useState } from 'react';
import Link from 'next/link';

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState('pro');

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
              <Link href="/pricing" className="text-blue-400">Course</Link>
              <Link href="/about" className="hover:text-blue-400">About</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-900 to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Enrol in the Macro Framework</h1>
          <p className="text-xl text-gray-300">
            Join traders who've stopped guessing and started trading with institutional-grade methodology
          </p>
        </div>
      </section>

      {/* Why I'm Selling This Section */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Why I'm Selling This Course</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black p-8 rounded-lg border-2 border-red-500">
              <h3 className="text-2xl font-bold text-red-400 mb-4">❌ The Problem I'm Solving</h3>
              <p className="text-gray-300 mb-4">
                <strong>90% of traders fail</strong> because they lack a systematic framework. They trade patterns, emotions, and noise—not institutional capital flows.
              </p>
              <p className="text-gray-300">
                I've watched countless traders lose money because they didn't understand how central banks, yields, and currency flows actually work together.
              </p>
            </div>

            <div className="bg-black p-8 rounded-lg border-2 border-green-500">
              <h3 className="text-2xl font-bold text-green-400 mb-4">✅ What I'm Offering</h3>
              <p className="text-gray-300 mb-4">
                <strong>A complete macro trading methodology</strong> that took me years to develop and refine.
              </p>
              <p className="text-gray-300">
                The same framework that institutional traders and macro hedge funds use. Not retail indicators. Not chart psychology. Real economics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* My Philosophy */}
      <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">My Philosophy: Monetizing Expertise (Like the Billionaires Do)</h2>
          
          <div className="bg-gray-900 border-l-4 border-blue-400 p-8 rounded-lg mb-8">
            <p className="text-lg text-gray-300 mb-6">
              <strong>Warren Buffett charges $250,000+ for lunch meetings.</strong>
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Why? Because his time and expertise are valuable. People pay to access his knowledge.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              <strong>I'm doing the same thing—just at a price accessible to traders like you.</strong>
            </p>
            <p className="text-lg text-gray-300">
              This course isn't a side hustle for me to get rich quick. It's a way to:
            </p>
            <ul className="text-lg text-gray-300 mt-6 space-y-3">
              <li>✓ <strong>Create sustainable, non-trading income</strong> (like billionaires do)</li>
              <li>✓ <strong>Help traders avoid the expensive failures</strong> I've seen firsthand</li>
              <li>✓ <strong>Share knowledge that actually works</strong> instead of keeping it secret</li>
              <li>✓ <strong>Prove my methodology works</strong> by having students use it successfully</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Course Options */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Course Options</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Standard Plan */}
            <div className={`bg-black p-8 rounded-lg border-2 transition-all ${selectedPlan === 'standard' ? 'border-blue-400' : 'border-gray-800'}`}
              onClick={() => setSelectedPlan('standard')}
            >
              <h3 className="text-2xl font-bold mb-2">The Framework Essentials</h3>
              <p className="text-gray-400 mb-6">Perfect for traders getting started</p>
              
              <div className="text-4xl font-bold text-blue-400 mb-2">₦50,000</div>
              <p className="text-gray-400 mb-6">One-time payment</p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-gray-300">The Complete 6-Part Macro Engine (Video)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-gray-300">3 Real Case Studies (Walkthrough)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-gray-300">Economic Calendar Trading Guide</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-gray-300">Templates & Playbook (PDF)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-gray-400 text-xl">✗</span>
                  <span className="text-gray-500">Live Group Sessions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-gray-400 text-xl">✗</span>
                  <span className="text-gray-500">1-on-1 Mentorship</span>
                </li>
              </ul>
              
              <button className={`w-full py-3 px-6 rounded-lg font-bold transition-all ${
                selectedPlan === 'standard' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}>
                {selectedPlan === 'standard' ? 'Select Plan' : 'View Details'}
              </button>
            </div>

            {/* Pro Plan - Recommended */}
            <div className={`bg-black p-8 rounded-lg border-2 relative transition-all ${selectedPlan === 'pro' ? 'border-green-400' : 'border-gray-800'}`}
              onClick={() => setSelectedPlan('pro')}
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-400 text-black px-4 py-1 rounded-full font-bold text-sm">
                MOST POPULAR
              </div>
              
              <h3 className="text-2xl font-bold mb-2">The Framework Pro</h3>
              <p className="text-gray-400 mb-6">For serious traders ready to master macro</p>
              
              <div className="text-4xl font-bold text-green-400 mb-2">₦100,000</div>
              <p className="text-gray-400 mb-6">One-time payment</p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-gray-300">Everything in Essentials +</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-gray-300">Live Monthly Group Training Sessions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-gray-300">4 Weekly Market Analysis Breakdowns</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-gray-300">Access to Private Trading Community</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-gray-300">Email Support (48-hour response)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-gray-400 text-xl">✗</span>
                  <span className="text-gray-500">1-on-1 Mentorship</span>
                </li>
              </ul>
              
              <button className={`w-full py-3 px-6 rounded-lg font-bold transition-all ${
                selectedPlan === 'pro' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}>
                {selectedPlan === 'pro' ? 'Select Plan' : 'View Details'}
              </button>
            </div>

            {/* Elite Plan - Coming Soon */}
            <div className="bg-gray-900 p-8 rounded-lg border-2 border-gray-700 opacity-75 col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-2">The Framework Elite (1-on-1)</h3>
              <p className="text-gray-400 mb-6">Personal mentorship & market analysis - Coming Soon</p>
              <p className="text-gray-400 italic">Limited spots available. DM for early interest.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">What You'll Learn (Pro Plan)</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold text-blue-400 mb-4">📊 Module 1: The Macro Engine</h3>
              <ul className="text-gray-300 space-y-2">
                <li>✓ How economic data flows through markets</li>
                <li>✓ Central bank reaction functions decoded</li>
                <li>✓ The yield transmission mechanism</li>
                <li>✓ Capital flow patterns</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold text-green-400 mb-4">💹 Module 2: Trading The Thesis</h3>
              <ul className="text-gray-300 space-y-2">
                <li>✓ Setting up your macro thesis</li>
                <li>✓ Economic calendar strategy</li>
                <li>✓ Entry & exit mechanics</li>
                <li>✓ Risk management framework</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">📈 Module 3: Reading Institutional Flows</h3>
              <ul className="text-gray-300 space-y-2">
                <li>✓ How to identify capital flow shifts</li>
                <li>✓ Spotting central bank policy changes early</li>
                <li>✓ Using real-time economic data</li>
                <li>✓ Positioning with the smart money</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold text-pink-400 mb-4">🎯 Module 4: Real Case Studies</h3>
              <ul className="text-gray-300 space-y-2">
                <li>✓ 3+ real market examples (2022-2024)</li>
                <li>✓ How the framework predicted each move</li>
                <li>✓ Entry prices & profit targets</li>
                <li>✓ Lessons from each trade</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <h3 className="text-lg font-bold mb-3">Do I need trading experience?</h3>
              <p className="text-gray-300">
                No. This course teaches you to think like an institutional macro trader from the ground up. If you understand how currencies work, you're ready.
              </p>
            </div>

            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <h3 className="text-lg font-bold mb-3">What if I lose money?</h3>
              <p className="text-gray-300">
                This framework teaches you *how* to think, not *when* to trade. Trading carries risk. You'll learn risk management, but results depend on your execution.
              </p>
            </div>

            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <h3 className="text-lg font-bold mb-3">How long do I have access?</h3>
              <p className="text-gray-300">
                Lifetime access to all materials. Updates included. The macro framework doesn't change—only the specific data and markets do.
              </p>
            </div>

            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <h3 className="text-lg font-bold mb-3">Is this for forex only?</h3>
              <p className="text-gray-300">
                The framework is universal. It applies to FX, commodities, bonds, equities—anywhere capital flows. We focus on FX & precious metals as the clearest expression.
              </p>
            </div>

            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <h3 className="text-lg font-bold mb-3">Do you offer refunds?</h3>
              <p className="text-gray-300">
                This is a digital course, so refunds aren't available once enrolled. However, the framework works—if you study it seriously, you'll see why.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Stop Guessing?</h2>
          <p className="text-xl text-blue-100 mb-2">
            Choose your course and start trading with institutional-grade methodology.
          </p>
          <p className="text-lg text-blue-100 mb-8">
            {selectedPlan === 'standard' ? 'Essentials Package: ₦50,000' : 'Pro Package: ₦100,000 (Recommended)'}
          </p>
          
          <button className="bg-white text-green-600 font-bold py-4 px-12 rounded-lg hover:bg-gray-100 text-lg">
            Enrol Now →
          </button>
          
          <p className="text-blue-100 mt-8 text-sm">
            Payment methods: Bank Transfer (Nigeria), Crypto, PayPal<br/>
            Questions? Email support@thedatathesis.com
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400">
            © 2024 The Data Thesis. All course materials are proprietary. Trading involves risk.
          </p>
        </div>
      </footer>
    </div>
  );
}
