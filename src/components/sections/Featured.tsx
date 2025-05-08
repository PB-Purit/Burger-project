import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { getFeaturedItems } from '../../data/menu';
import { ArrowRight } from 'lucide-react';
import MenuItemCard from '../ui/MenuItemCard';

const Featured: React.FC = () => {
  const featuredItems = getFeaturedItems();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="featured" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary-500">Featured</span> Burgers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our chef's selection of premium signature burgers that showcase the best of CraftBurger's culinary creativity and dedication to quality.
          </p>
        </div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredItems.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <a 
            href="#menu" 
            className="btn-secondary inline-flex items-center group"
          >
            View Full Menu
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Featured;