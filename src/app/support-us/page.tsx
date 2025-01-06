'use client';

import { useState, useEffect } from 'react';

export default function SupportUs() {
  const [loading, setLoading] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(false);

  useEffect(() => {
    // Ensure this runs only on the client
    if (typeof window !== 'undefined') {
      setIsDarkBackground(
        document.body.style.backgroundColor === 'black' ||
        window.matchMedia('(prefers-color-scheme: dark)').matches
      );
    }
  }, []);

  const handleCheckout = () => {
    setLoading(true);
    // Redirect to the Stripe payment link
    window.location.href = 'https://donate.stripe.com/test_5kA2ab4M2dBc1gI3cc';
  };

  return (
    <div className="p-8 rounded-lg shadow-lg max-w-md mx-auto">
      <h1 className={`text-3xl font-semibold text-center ${isDarkBackground ? 'text-white' : 'text-black'} mb-4`}>
        Support Us
      </h1>
      <p className={`text-center ${isDarkBackground ? 'text-white' : 'text-black'} mb-6`}>
        Your support helps us continue our mission to make a difference.
      </p>
      <div className="flex justify-center space-x-4 mb-6">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-blue-400 disabled:bg-gray-400"
          onClick={handleCheckout}
          disabled={loading}
        >
          {loading ? 'Processing...' : 'Donate $2'}
        </button>
        <button
          className="bg-green-500 text-white py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-green-400 disabled:bg-gray-400"
          onClick={handleCheckout}
          disabled={loading}
        >
          {loading ? 'Processing...' : 'Donate $5'}
        </button>
        <button
          className="bg-yellow-500 text-white py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-yellow-400 disabled:bg-gray-400"
          onClick={handleCheckout}
          disabled={loading}
        >
          {loading ? 'Processing...' : 'Donate $10'}
        </button>
      </div>
      <div className="text-center">
        <label className={`inline-flex items-center ${isDarkBackground ? 'text-white' : 'text-black'}`}>
          <input type="checkbox" className="form-checkbox" />
          <span className="ml-2">Make this a monthly donation</span>
        </label>
      </div>
    </div>
  );
}
