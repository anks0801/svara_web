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
    { number: '25+', label: 'Years of Experience', icon: '📅' },
    { number: '500+', label: 'Aircraft Serviced', icon: '✈️' },
    { number: '99.8%', label: 'On-Time Delivery', icon: '⏱️' },
    { number: '100+', label: 'Certified Experts', icon: '👨‍🔧' }
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
        <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Our Capabilities</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Advanced technology, expertise, and infrastructure to handle your most demanding aerospace requirements.
            </p>
          </div>
        </section>

        {/* Key Metrics - Redesigned */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <span className="text-4xl">{metric.icon}</span>
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      {metric.number}
                    </div>
                    <div className="text-sm md:text-base text-gray-600 font-medium">{metric.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Grid - Redesigned */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Core Competencies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover:shadow-lg transition-all border border-blue-100">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white text-xl font-bold mr-4">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{capability.category}</h3>
                  </div>
                  <ul className="space-y-3">
                    {capability.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology & Innovation - Redesigned */}
        <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
              Technology & Innovation
            </h2>
            <p className="text-center text-blue-100 mb-12 max-w-2xl mx-auto">
              Cutting-edge solutions driving aerospace excellence
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Advanced Testing</h3>
                <p className="text-blue-100">
                  Latest diagnostic equipment and simulation technology for accurate testing and validation.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Data Analytics</h3>
                <p className="text-blue-100">
                  Predictive maintenance and real-time monitoring using cutting-edge data analytics.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Continuous Improvement</h3>
                <p className="text-blue-100">
                  Ongoing research and development to stay at the forefront of aerospace innovation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action - Redesigned */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Experience Our Excellence</h2>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Partner with Svara to leverage our advanced capabilities and expertise.
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
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
