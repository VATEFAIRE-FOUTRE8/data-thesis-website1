import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold">The Data Thesis</h1>
            <div className="space-x-6">
              <Link href="/" className="hover:text-blue-400">Home</Link>
              <Link href="/about" className="hover:text-blue-400">About</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-5xl font-bold mb-4">
            Premium Macro Trading Mentorship
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Learn advanced trading strategies and master the markets
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg">
            Get Started
          </button>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold mb-8">Why Choose Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-4">Expert Mentorship</h4>
              <p className="text-gray-300">Learn from experienced traders with years of market expertise</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-4">Real Strategies</h4>
              <p className="text-gray-300">Proven trading strategies that work in real market conditions</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-4">24/7 Support</h4>
              <p className="text-gray-300">Get help whenever you need it from our dedicated support team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400">
            © 2024 The Data Thesis. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
