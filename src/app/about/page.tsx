// src/app/about.tsx
import React from 'react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-4">About Us</h1>
      <p className="text-lg mb-4">
        We are a social platform that connects people, builds communities, and fosters engagement. Our mission is to make social interactions meaningful.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold">CEO: Ali Raza</h3>
          <p className="text-sm">
            Ali Raza leads our company with a vision to revolutionize social interactions through innovative technology.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Head Developer: FaizuRrehman</h3>
          <p className="text-sm">
            FaizuRrehman oversees our development team, ensuring the delivery of high-quality and user-friendly applications.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Managed by: Ragon Solution</h3>
          <p className="text-sm">
            Ragon Solution provides strategic direction and support, driving our mission forward.
          </p>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold">User Statistics</h3>
        <p className="text-sm">
          As of January 2025, we have successfully onboarded over 100 users, with a target of reaching 10,000 by the end of the year.
        </p>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold">Our Values</h3>
        <ul className="list-disc pl-5">
          <li>Innovation: Continuously seeking new ways to enhance user experience.</li>
          <li>Community: Building a supportive and engaging environment for all users.</li>
          <li>Integrity: Upholding transparency and honesty in all our interactions.</li>
        </ul>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold">Contact Us</h3>
        <p className="text-sm">
          Have questions or feedback? Reach out to us at <a href="mailto:info@ragonsolutions.com" className="text-blue-500">info@ragonsolutions.com</a>.
        </p>
      </div>
    </div>
  );
};

export default About;
