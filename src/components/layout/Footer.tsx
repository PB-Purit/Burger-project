import React from 'react';
import { Facebook, Instagram, X } from 'lucide-react';
import Logo from './Logo';
import { locationInfo } from '../../data/location';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Logo />
            <p className="mt-4 text-gray-300">
              Crafting premium burgers with locally sourced ingredients since
              1999. Every bite tells our story of quality and passion.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="X (formerly Twitter)"
              >
                <X size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Hours</h3>
            <ul className="space-y-2">
              {locationInfo.hours.map((hour) => (
                <li key={hour.day} className="flex justify-between">
                  <span>{hour.day}</span>
                  <span className="text-gray-300">
                    {hour.open} - {hour.close}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <address className="not-italic">
              <p>{locationInfo.address}</p>
              <p>
                {locationInfo.city}, {locationInfo.state} {locationInfo.zip}
              </p>
              <p className="mt-4">{locationInfo.phone}</p>
              <p>{locationInfo.email}</p>
            </address>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              {[
                'Home',
                'Menu',
                'About',
                'Contact',
                'Order Online',
                'Privacy Policy',
                'Terms of Service',
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-gray-400">
          <p>&copy; {currentYear} CraftBurger. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;