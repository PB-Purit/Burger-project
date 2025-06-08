import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Featured from './components/sections/Featured';
import Menu from './components/sections/Menu';
import About from './components/sections/About';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Order from './components/sections/Order';
import TermsOfService from './components/pages/TermsOfService';
import PrivacyPolicy from './components/pages/PrivacyPolicy';

function App() {
  const path = window.location.pathname;

  if (path === '/terms-of-service') {
    return (
      <>
        <Header />
        <TermsOfService />
        <Footer />
      </>
    );
  }

  if (path === '/privacy-policy') {
    return (
      <>
        <Header />
        <PrivacyPolicy />
        <Footer />
      </>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Featured />
        <Menu />
        <About />
        <Testimonials />
        <Order />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;