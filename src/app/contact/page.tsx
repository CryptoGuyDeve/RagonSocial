// src/app/contact.tsx
import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
      <p className="text-lg mb-4">
        For important inquiries, please reach out to us at{' '}
        <a
          href="mailto:info@ragonsolutions.com"
          className="text-blue-500 hover:underline"
        >
          info@ragonsolutions.com
        </a>{' '}
        or call us at{' '}
        <a
          href="tel:+923193240345"
          className="text-blue-500 hover:underline"
        >
          +92 319 3240345
        </a>
        .
      </p>
      <p className="text-sm text-gray-500">
        Please note: We do not entertain prank calls or non-essential communications. Legal action may be taken against such activities.
      </p>
    </div>
  );
};

export default Contact;
