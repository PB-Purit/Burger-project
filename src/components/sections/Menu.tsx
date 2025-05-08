import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { getMenuItemsByCategory } from '../../data/menu';
import MenuItemCard from '../ui/MenuItemCard';

const categories = [
  { id: 'burger', name: 'Burgers' },
  { id: 'side', name: 'Sides' },
  { id: 'drink', name: 'Drinks' },
  { id: 'dessert', name: 'Desserts' },
] as const;

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'burger' | 'side' | 'drink' | 'dessert'>('burger');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const menuItems = getMenuItemsByCategory(activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const scrollToSection = (categoryId: string) => {
    const element = document.getElementById(`menu-${categoryId}`);
    if (element) {
      const headerOffset = 100; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="menu" className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-primary-500">Menu</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our carefully crafted menu featuring premium ingredients and bold flavors that will satisfy your cravings.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12 sticky top-20 bg-gray-50 py-4 z-30">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                scrollToSection(category.id);
              }}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-secondary-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <AnimatePresence mode="wait">
            {categories.map((category) => (
              <div
                key={category.id}
                id={`menu-${category.id}`}
                className={`space-y-8 ${category.id !== activeCategory ? 'hidden' : ''}`}
              >
                <h3 className="text-2xl font-bold text-center mb-8">{category.name}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {getMenuItemsByCategory(category.id).map((item) => (
                    <MenuItemCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;