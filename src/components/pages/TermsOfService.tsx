import React from 'react';
import { locationInfo } from '../../data/location';
import { ArrowLeft } from 'lucide-react';

const TermsOfService: React.FC = () => {
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

          <h1 className="text-3xl font-bold mb-8">Terms of Service - CraftBurger PB Shop</h1>
          
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-bold mb-3">1. Use of Service</h2>
              <p className="text-gray-700">
                By using our service, you agree to:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Be at least 13 years of age</li>
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account</li>
                  <li>Accept responsibility for all activities under your account</li>
                </ul>
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold mb-3">2. Orders and Payments</h2>
              <p className="text-gray-700">
                When placing orders:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>All orders are subject to availability</li>
                  <li>Prices are in THB and include applicable taxes</li>
                  <li>Payment must be made in full at the time of ordering</li>
                  <li>We reserve the right to refuse service</li>
                </ul>
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold mb-3">3. Food Allergies</h2>
              <p className="text-gray-700">
                Regarding allergies and dietary restrictions:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>You must inform us of any severe allergies</li>
                  <li>We take reasonable precautions but cannot guarantee against cross-contamination</li>
                  <li>You accept responsibility for managing your dietary requirements</li>
                </ul>
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold mb-3">4. Intellectual Property</h2>
              <p className="text-gray-700">
                Our intellectual property:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>All content and trademarks are owned by CraftBurger PB Shop</li>
                  <li>No reproduction or distribution without permission</li>
                  <li>Unauthorized use may result in legal action</li>
                </ul>
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold mb-3">5. Liability</h2>
              <p className="text-gray-700">
                Limitation of liability:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>We're not liable for damages from service use</li>
                  <li>You indemnify us against claims arising from your use</li>
                  <li>We maintain appropriate insurance coverage</li>
                </ul>
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold mb-3">6. Changes</h2>
              <p className="text-gray-700">
                Regarding terms modifications:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>We may modify these terms without notice</li>
                  <li>Changes are effective immediately upon posting</li>
                  <li>Continued use implies acceptance of changes</li>
                </ul>
              </p>
            </section>
            
            <section className="pt-6 border-t">
              <h2 className="text-xl font-bold mb-3">Contact Us</h2>
              <p className="text-gray-700">For any questions about these terms:</p>
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

export default TermsOfService;