import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center" 
      style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.pexels.com/photos/3738730/pexels-photo-3738730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' 
      }}
    >
      <div className="container-custom text-center text-white py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-4">
            Handcrafted Burgers <br />
            <span className="text-primary-500">Unforgettable</span> Taste
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            Premium ingredients, artisanal craftsmanship, and bold flavors that 
            elevate the classic American burger to gourmet heights.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#menu" 
              className="btn-primary group"
            >
              Explore Our Menu
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
            </a>
            
            <a 
              href="#order" 
              className="btn-accent group"
            >
              Order Now
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
            </a>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <motion.div
          animate={{ 
            y: [0, -10, 0],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 1.5,
          }}
        >
          <a 
            href="#featured" 
            className="text-white hover:text-primary-400 transition-colors"
            aria-label="Scroll down"
          >
            <svg 
              width="40" 
              height="40" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current"
            >
              <path 
                d="M12 5V19M12 19L5 12M12 19L19 12" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;