import { NextSeo } from 'next-seo';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Capabilities() {
  const capabilities = [
    {
      category: 'Technical Expertise',
      items: [
        'Aircraft systems design and optimization',
        'Engine performance analysis',
        'Structural analysis and testing',
        'Electrical and avionics systems',
        'Hydraulics and pneumatics',
        'Flight control systems'
      ]
    },
    {
      category: 'Certifications & Standards',
      items: [
        'FAA compliance and certification',
        'EASA approvals',
        'ISO 9001:2015 quality management',
        'AS9100 aerospace quality standard',
        'Safety and environmental regulations',
        'Industry best practices'
      ]
    },
    {
      category: 'Equipment & Infrastructure',
      items: [
        'State-of-the-art testing facilities',
        'Advanced diagnostic equipment',
        'Precision machine shops',
        'Climate-controlled workspaces',
        'Full MRO capabilities',
        'In-service support network'
      ]
    },
    {
      category: 'Team & Resources',
      items: [
        'Certified aircraft technicians',
        'Licensed engineers',
        'Industry specialists',
        'Dedicated project managers',
        ' 24/7 support availability',
        'Global partnerships'
      ]
    }
  ];

  const metrics = [
    { number: '25+', label: 'Years of Experience' },
    { number: '500+', label: 'Aircraft Serviced' },
    { number: '99.8%', label: 'On-Time Delivery' },
    { number: '100+', label: 'Certified Experts' }
  ];

  return (
    <>
      <NextSeo
        title="Capabilities"
        description="Discover Svara's extensive capabilities in aerospace engineering, maintenance, and aviation services."
        openGraph={{
          url: 'https://svara.com/capabilities',
          title: 'Capabilities | Svara',
          description: 'Advanced aerospace capabilities and expertise',
          type: 'website',
        }}
      />
      <Header />
      <main className="bg-white">
        {/* Capabilities Header */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Capabilities</h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
              Advanced technology, expertise, and infrastructure to handle your most demanding aerospace requirements.
            </p>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="bg-gray-50 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{metric.number}</div>
                  <div className="text-gray-700 font-semibold">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{capability.category}</h3>
                  <ul className="space-y-4">
                    {capability.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology & Innovation */}
        <section className="bg-blue-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Technology & Innovation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Advanced Testing</h3>
                <p className="text-gray-700">
                  Latest diagnostic equipment and simulation technology for accurate testing and validation.
                </p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Data Analytics</h3>
                <p className="text-gray-700">
                  Predictive maintenance and real-time monitoring using cutting-edge data analytics.
                </p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Continuous Improvement</h3>
                <p className="text-gray-700">
                  Ongoing research and development to stay at the forefront of aerospace innovation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Our Excellence</h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Partner with Svara to leverage our advanced capabilities and expertise.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
