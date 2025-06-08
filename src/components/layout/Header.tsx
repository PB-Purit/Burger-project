import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';
import CartModal from '../ui/CartModal';
import LanguageSwitch from '../ui/LanguageSwitch';
import SearchBar from '../ui/SearchBar';
import LoginModal from '../auth/LoginModal';
import RegisterModal from '../auth/RegisterModal';
import ForgotPasswordModal from '../auth/ForgotPasswordModal';
import { useCart } from '../../hooks/useCart';
import { MenuItem } from '../../types';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { getTotalItems, addToCart } = useCart();
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

  const handleSearchItemSelect = (item: MenuItem) => {
    addToCart(item);
    // Optionally scroll to the item or show a notification
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSwitchToRegister = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
  };

  const handleSwitchToLogin = () => {
    setIsRegisterOpen(false);
    setIsLoginOpen(true);
  };

  const handleForgotPassword = () => {
    setIsLoginOpen(false);
    setIsForgotPasswordOpen(true);
  };

  const handleBackToLogin = () => {
    setIsForgotPasswordOpen(false);
    setIsLoginOpen(true);
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
            <SearchBar
              isExpanded={isSearchExpanded}
              onToggle={() => setIsSearchExpanded(!isSearchExpanded)}
              onItemSelect={handleSearchItemSelect}
            />
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
            
            {isLoggedIn ? (
              <div className="relative">
                <button 
                  className={`p-2 rounded-full ${
                    isScrolled ? 'text-gray-800 hover:text-primary-600' : 'text-white hover:text-accent-400'
                  }`}
                >
                  <User size={24} />
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setIsLoginOpen(true)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  isScrolled 
                    ? 'bg-primary-500 text-white hover:bg-primary-600' 
                    : 'bg-white text-gray-800 hover:bg-gray-100'
                }`}
              >
                {t('auth.login.title')}
              </button>
            )}
            
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
                <div className="flex items-center justify-between">
                  <SearchBar
                    isExpanded={isSearchExpanded}
                    onToggle={() => setIsSearchExpanded(!isSearchExpanded)}
                    onItemSelect={handleSearchItemSelect}
                  />
                  <LanguageSwitch />
                </div>
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
                
                {!isLoggedIn && (
                  <button 
                    onClick={() => {
                      setIsLoginOpen(true);
                      setIsOpen(false);
                    }}
                    className="text-left py-2 text-gray-800 hover:text-primary-600 font-medium text-lg"
                  >
                    {t('auth.login.title')}
                  </button>
                )}
                
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
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)}
        onSwitchToRegister={handleSwitchToRegister}
        onForgotPassword={handleForgotPassword}
      />
      <RegisterModal 
        isOpen={isRegisterOpen} 
        onClose={() => setIsRegisterOpen(false)}
        onSwitchToLogin={handleSwitchToLogin}
      />
      <ForgotPasswordModal 
        isOpen={isForgotPasswordOpen} 
        onClose={() => setIsForgotPasswordOpen(false)}
        onBackToLogin={handleBackToLogin}
      />
    </>
  );
};

export default Header;