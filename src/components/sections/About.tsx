import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="about"
      className="section bg-wood-pattern bg-cover bg-center relative"
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="container-custom relative z-10 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-primary-500">Story</span>
            </h2>

            <p className="text-gray-200 mb-6">
              CraftBurger began in 1999 with a simple mission: to create the
              perfect burger using only the highest quality ingredients. Our
              founder, CEO "PB" , spent years perfecting recipes and sourcing
              the finest local ingredients.
            </p>

            <p className="text-gray-200 mb-6">
              What started as a small food truck has grown into a beloved
              restaurant, but our commitment to quality and craft hasn't
              changed. We still hand-form each patty, bake our buns fresh daily,
              and make all our sauces from scratch.
            </p>

            <p className="text-gray-200">
              Every burger tells our story of passion for exceptional food and
              unforgettable dining experiences. When you bite into a
              CraftBurger, you're tasting our dedication to the craft of
              burger-making.
            </p>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-secondary-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-accent-500">
                Our Values
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold mb-2">
                    Quality Ingredients
                  </h4>
                  <p className="text-gray-300">
                    We partner with local farmers and premium suppliers to
                    source the freshest, highest-quality ingredients for every
                    component of our burgers.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-2">Craftsmanship</h4>
                  <p className="text-gray-300">
                    Each burger is handcrafted with precision and care by our
                    trained chefs, ensuring consistency and excellence in every
                    bite.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-2">Innovation</h4>
                  <p className="text-gray-300">
                    While respecting tradition, we constantly explore new flavor
                    combinations and techniques to create unique burger
                    experiences.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center">
              <span className="font-display text-2xl font-black">PB</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
