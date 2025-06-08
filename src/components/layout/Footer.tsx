import React from 'react';
import { Facebook, Instagram, X } from 'lucide-react';
import Logo from './Logo';
import { locationInfo } from '../../data/location';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="bg-secondary-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Logo />
            <p className="mt-4 text-gray-300">
              {t('about.story')}
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="X (formerly Twitter)"
              >
                <X size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.hours')}</h3>
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
            <h3 className="text-xl font-bold mb-4">{t('footer.contact')}</h3>
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
            <h3 className="text-xl font-bold mb-4">{t('footer.links.title')}</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('footer.links.home')}
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('footer.links.menu')}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('footer.links.about')}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('footer.links.contact')}
                </a>
              </li>
              <li>
                <a
                  href="#order"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('footer.links.order')}
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('footer.links.privacy')}
                </a>
              </li>
              <li>
                <a
                  href="/terms-of-service"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('footer.links.terms')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-gray-400">
          <p>&copy; {currentYear} CraftBurger.PB {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;