// src/app/Footer/page.tsx
import Link from 'next/link';
import { FacebookIcon, InstagramIcon, MessageSquareIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-inherit text-inherit py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Footer Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              We are a social platform that connects people, builds communities, and fosters engagement. Our mission is to make social interactions meaningful.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-gray-400">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-gray-400">About</Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-gray-400">Contact</Link>
              </li>
              <li>
                <Link href="/privacypolicy" className="text-sm hover:text-gray-400">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm">Email: <a href="mailto:info@ragonsolutions.com" className="hover:text-gray-400">info@ragonsolutions.com</a></p>
            <p className="text-sm">Phone: <a href="tel:+923193240345" className="hover:text-gray-400">+92 319 3240345</a></p>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61571102878536" target="_blank" rel="noopener noreferrer">
                <FacebookIcon className="w-6 h-6 text-inherit hover:text-gray-400" />
              </a>
              <a href="https://chat.whatsapp.com/K5RfC2ZoJEV9usnDVZDAZ1" target="_blank" rel="noopener noreferrer">
                <MessageSquareIcon className="w-6 h-6 text-inherit hover:text-gray-400" />
              </a>
              <a href="https://www.instagram.com/ragon_solutions/" target="_blank" rel="noopener noreferrer">
                <InstagramIcon className="w-6 h-6 text-inherit hover:text-gray-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Social Ragon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
