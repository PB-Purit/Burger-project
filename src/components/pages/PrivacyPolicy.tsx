import React from 'react';
import { locationInfo } from '../../data/location';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container-custom">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="mb-8">
            <a 
              href="/" 
              className="inline-flex items-center text-gray-600 hover:text-primary-500 transition-colors"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Home
            </a>
          </div>

          <h1 className="text-3xl font-bold mb-8">Privacy Policy - CraftBurger PB Shop</h1>
          
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-bold mb-3">1. Data Collection</h2>
              <p className="text-gray-700">
                We collect personal data when you order or create an account with us. This includes:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Delivery address</li>
                  <li>Order history</li>
                </ul>
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold mb-3">2. Data Use</h2>
              <p className="text-gray-700">
                Your data helps us:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Process and fulfill your orders</li>
                  <li>Improve our services and menu offerings</li>
                  <li>Send promotional offers (with your consent)</li>
                  <li>Maintain and improve our website</li>
                  <li>Communicate important updates about your orders</li>
                </ul>
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold mb-3">3. Data Sharing</h2>
              <p className="text-gray-700">
                We value your privacy and:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Never sell your personal data</li>
                  <li>Only share data with trusted delivery partners when necessary</li>
                  <li>Require partners to maintain strict confidentiality</li>
                </ul>
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold mb-3">4. Data Security</h2>
              <p className="text-gray-700">
                We protect your data through:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Encrypted connections</li>
                  <li>Secure payment processing</li>
                  <li>Regular security audits</li>
                  <li>Limited staff access to personal information</li>
                </ul>
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold mb-3">5. Your Rights</h2>
              <p className="text-gray-700">
                You have the right to:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Access your personal data</li>
                  <li>Update or correct your information</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </p>
            </section>
            
            <section className="pt-6 border-t">
              <h2 className="text-xl font-bold mb-3">Contact Us</h2>
              <p className="text-gray-700">For privacy-related inquiries:</p>
              <p className="text-gray-700">Email: {locationInfo.email}</p>
              <p className="text-gray-700">Phone: {locationInfo.phone}</p>
            </section>
            
            <p className="italic mt-8 text-gray-600">Last updated: May 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;