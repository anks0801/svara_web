import { NextSeo } from 'next-seo';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Services() {
  const services = [
    {
      title: 'Aircraft Maintenance',
      description: 'Comprehensive maintenance and repair services for commercial and private aircraft.',
      icon: '🔧',
      details: [
        'Scheduled maintenance',
        'Emergency repairs',
        'Component overhaul',
        'Inspection services'
      ]
    },
    {
      title: 'Engineering Solutions',
      description: 'Expert engineering design and consultation for aerospace projects.',
      icon: '⚙️',
      details: [
        'Technical design',
        'System optimization',
        'Performance analysis',
        'Compliance certification'
      ]
    },
    {
      title: 'Logistics & Supply Chain',
      description: 'Efficient parts management and supply chain solutions.',
      icon: '📦',
      details: [
        'Parts procurement',
        'Inventory management',
        'Distribution network',
        'Just-in-time delivery'
      ]
    },
    {
      title: 'Training & Support',
      description: 'Professional training programs for maintenance and operations teams.',
      icon: '📚',
      details: [
        'Technical training',
        'Certification programs',
        'On-site support',
        'Documentation'
      ]
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control procedures.',
      icon: '✓',
      details: [
        'Compliance testing',
        'Performance verification',
        'Safety audits',
        'Documentation review'
      ]
    },
    {
      title: 'Consulting Services',
      description: 'Strategic consulting for aviation businesses and operations.',
      icon: '💼',
      details: [
        'Business strategy',
        'Process optimization',
        'Cost analysis',
        'Implementation support'
      ]
    }
  ];

  return (
    <>
      <NextSeo
        title="Services"
        description="Explore Svara's comprehensive range of aerospace and aviation services including maintenance, engineering, training, and consulting."
        openGraph={{
          url: 'https://svara.com/services',
          title: 'Services | Svara',
          description: 'Comprehensive aerospace and aviation services',
          type: 'website',
        }}
      />
      <Header />
      <main className="bg-white">
        {/* Services Header */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive solutions tailored to meet the diverse needs of the aerospace and aviation industry.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 p-8"
                >
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-600 text-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact our team to learn how we can help with your specific needs.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Contact Us Today
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
