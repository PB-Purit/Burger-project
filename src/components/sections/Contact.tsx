import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { locationInfo } from '../../data/location';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  
  const [nameRef, nameInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [mapRef, mapInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    setSubmitted(true);
    // In a real app, you would submit the form data to a server here
  };

  return (
    <section id="contact" className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-primary-500">Touch</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Reach out using the form below or visit us in person.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            ref={nameRef}
            initial={{ opacity: 0, y: 30 }}
            animate={nameInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            
            {submitted ? (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-4">
                <p className="font-medium">Thank you for your message!</p>
                <p>We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="Reservation">Reservation</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Catering">Catering</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
          
          <motion.div
            ref={mapRef}
            initial={{ opacity: 0, y: 30 }}
            animate={mapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">Our Location</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="text-primary-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Address</h4>
                    <p>{locationInfo.address}, {locationInfo.city}, {locationInfo.state} {locationInfo.zip}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-primary-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Phone</h4>
                    <p>{locationInfo.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-primary-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <p>{locationInfo.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-primary-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Hours</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {locationInfo.hours.map((hour) => (
                        <p key={hour.day}>
                          <span className="font-medium">{hour.day}:</span> {hour.open} - {hour.close}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-80 bg-gray-200 rounded-xl overflow-hidden">
              {/* In a real implementation, this would be a Google Maps embed */}
              <div className="h-full bg-dark-pattern bg-center bg-cover flex items-center justify-center">
                <div className="bg-white bg-opacity-80 p-4 rounded-lg text-center">
                  <h4 className="font-bold text-xl">CraftBurger</h4>
                  <p className="text-gray-700">{locationInfo.address}</p>
                  <p className="text-gray-700">{locationInfo.city}, {locationInfo.state} {locationInfo.zip}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;