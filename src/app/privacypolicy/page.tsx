// src/app/privacy-policy.tsx
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-6 text-white">Privacy Policy</h1>
      <p className="text-sm text-gray-100">
        <strong>Effective Date:</strong> January 6, 2025
      </p>
      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-white">1. Introduction</h2>
        <p className="text-sm text-gray-100">
          Welcome to Ragon Solutions ("we," "our," "us"). We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our services.
        </p>
      </section>
      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-white">2. Information We Collect</h2>
        <ul className="list-disc pl-5 text-sm text-gray-100">
          <li><strong>Personal Information:</strong> Details such as your name, email address, phone number, and other contact information you provide.</li>
          <li><strong>Usage Data:</strong> Information about how you interact with our platform, including IP addresses, browser types, and usage patterns.</li>
          <li><strong>Cookies and Tracking Technologies:</strong> We use cookies to enhance your experience. You can manage cookie settings through your browser.</li>
        </ul>
      </section>
      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-white">3. How We Use Your Information</h2>
        <ul className="list-disc pl-5 text-sm text-gray-100">
          <li><strong>Providing Services:</strong> To deliver and improve our platform's features and functionality.</li>
          <li><strong>Communication:</strong> To send updates, newsletters, and respond to your inquiries.</li>
          <li><strong>Analytics:</strong> To analyze usage patterns and enhance user experience.</li>
        </ul>
      </section>
      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-white">4. Sharing Your Information</h2>
        <p className="text-sm text-gray-100">
          We do not sell your personal information. We may share your data with:
        </p>
        <ul className="list-disc pl-5 text-sm text-gray-100">
          <li><strong>Service Providers:</strong> Third parties that assist in operating our platform.</li>
          <li><strong>Legal Compliance:</strong> When required by law or to protect our rights.</li>
        </ul>
      </section>
      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-white">5. Data Security</h2>
        <p className="text-sm text-gray-100">
          We implement reasonable security measures to protect your data. However, no method of transmission over the internet is 100% secure.
        </p>
      </section>
      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-white">6. Your Rights</h2>
        <ul className="list-disc pl-5 text-sm text-gray-100">
          <li><strong>Access:</strong> Request a copy of your personal data.</li>
          <li><strong>Correction:</strong> Update inaccurate information.</li>
          <li><strong>Deletion:</strong> Request the removal of your data.</li>
          <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications.</li>
        </ul>
      </section>
      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-white">7. Children's Privacy</h2>
        <p className="text-sm text-gray-100">
          Our services are not intended for children under 13. We do not knowingly collect data from children. If we learn we have collected data from a child under 13, we will delete it promptly.
        </p>
      </section>
      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-white">8. Changes to This Policy</h2>
        <p className="text-sm text-gray-100">
          We may update this Privacy Policy. We will notify you of significant changes by posting the new policy on our website with an updated effective date.
        </p>
      </section>
      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-white">9. Contact Us</h2>
        <p className="text-sm text-gray-100">
          For questions or concerns about this Privacy Policy, please contact us at:
        </p>
        <ul className="list-disc pl-5 text-sm text-gray-100">
          <li><strong>Email:</strong> info@ragonsolutions.com</li>
          <li><strong>Phone:</strong> +92 319 3240345</li>
        </ul>
      </section>
      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-white">10. Legal Disclaimer</h2>
        <p className="text-sm text-gray-100">
          Please note: We do not entertain prank calls or non-essential communications. Legal action may be taken against such activities.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
