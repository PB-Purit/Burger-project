import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShoppingBag, Clock, Home } from 'lucide-react';

const Order: React.FC = () => {
  const [orderType, setOrderType] = useState<'pickup' | 'delivery'>('pickup');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  return (
    <section id="order" className="section bg-secondary-900 text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Order <span className="text-primary-500">Online</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Enjoy our delicious burgers at home or on the go. Place your order online for pickup or delivery.
          </p>
        </div>
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="bg-white text-gray-800 p-8 rounded-xl shadow-lg max-w-3xl mx-auto"
        >
          <div className="flex justify-center mb-8">
            <div className="border border-gray-200 rounded-lg p-1 flex">
              <button
                className={`px-6 py-3 rounded-lg transition ${
                  orderType === 'pickup'
                    ? 'bg-secondary-500 text-white'
                    : 'bg-transparent text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setOrderType('pickup')}
              >
                <div className="flex items-center">
                  <Clock size={20} className="mr-2" />
                  <span>Pickup</span>
                </div>
              </button>
              
              <button
                className={`px-6 py-3 rounded-lg transition ${
                  orderType === 'delivery'
                    ? 'bg-secondary-500 text-white'
                    : 'bg-transparent text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setOrderType('delivery')}
              >
                <div className="flex items-center">
                  <Home size={20} className="mr-2" />
                  <span>Delivery</span>
                </div>
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">
              {orderType === 'pickup' ? 'Schedule Pickup' : 'Delivery Details'}
            </h3>
            
            <form>
              {orderType === 'delivery' && (
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">Address</label>
                  <input
                    type="text"
                    placeholder="Street Address"
                    className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="City"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                    <input
                      type="text"
                      placeholder="Zip Code"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>
              )}
              
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  {orderType === 'pickup' ? 'Pickup Time' : 'Delivery Time'}
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                  <option value="">Select a time</option>
                  <option value="asap">As soon as possible</option>
                  <option value="30min">In 30 minutes</option>
                  <option value="1hour">In 1 hour</option>
                  <option value="later">Schedule for later</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Contact Information</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              
              <a 
                href="#menu" 
                className="btn-accent w-full flex justify-center items-center"
              >
                <ShoppingBag size={20} className="mr-2" />
                Start Your Order
              </a>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Order;