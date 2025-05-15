import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';
import CartModal from '../ui/CartModal';
import LanguageSwitch from '../ui/LanguageSwitch';
import { useCart } from '../../hooks/useCart';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getTotalItems } = useCart();
  const cartItems = getTotalItems();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.menu'), href: '#menu' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          <Logo color={isScrolled ? 'text-secondary-900' : 'text-white'} />
          
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.href} 
                href={item.href}
                className={`font-medium text-lg transition-colors ${
                  isScrolled ? 'text-gray-800 hover:text-primary-600' : 'text-white hover:text-accent-400'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitch />
            <button 
              onClick={() => setIsCartOpen(true)}
              className={`p-2 rounded-full relative ${
                isScrolled ? 'text-gray-800 hover:text-primary-600' : 'text-white hover:text-accent-400'
              }`}
            >
              <ShoppingBag size={24} />
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </button>
            <a 
              href="#order" 
              className="btn-primary"
            >
              {t('nav.orderNow')}
            </a>
          </div>
          
          <button 
            className={`md:hidden p-2 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white"
            >
              <div className="container-custom py-4 flex flex-col space-y-4">
                <LanguageSwitch />
                {navItems.map((item) => (
                  <a 
                    key={item.href} 
                    href={item.href}
                    className="text-gray-800 hover:text-primary-600 font-medium text-lg py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <button
                  onClick={() => {
                    setIsCartOpen(true);
                    setIsOpen(false);
                  }}
                  className="flex items-center justify-between py-2 text-gray-800 hover:text-primary-600 font-medium text-lg"
                >
                  <span>Cart</span>
                  {cartItems > 0 && (
                    <span className="bg-primary-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {cartItems}
                    </span>
                  )}
                </button>
                <a 
                  href="#order" 
                  className="btn-primary w-full text-center"
                  onClick={() => setIsOpen(false)}
                >
                  {t('nav.orderNow')}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;