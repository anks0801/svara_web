import { NextSeo } from 'next-seo';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('Message received! We\'ll get back to you soon.');
    e.target.reset();
  };

  return (
    <>
      <NextSeo
        title="Contact Us"
        description="Get in touch with Svara. We'd love to hear from you."
        openGraph={{
          url: 'https://svara.com/contact',
          title: 'Contact Svara',
          description: 'Get in touch with Svara',
          type: 'website',
        }}
      />
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-2xl mx-auto px-4 py-12 md:py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 text-center">Contact Us</h1>

          <div className="bg-gray-50 rounded-lg p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
              >
                Send Message
              </button>

              {formStatus && (
                <p className="text-green-600 text-center font-medium">{formStatus}</p>
              )}
            </form>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Other Ways to Reach Us</h2>
              <p className="text-gray-700">
                <strong>Email:</strong> info@svara.com
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
