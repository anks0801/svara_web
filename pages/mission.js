import { NextSeo } from 'next-seo';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Mission() {
  const values = [
    {
      title: 'Innovation',
      description: 'Continuously advancing aerospace technology and solutions through research and development.',
      icon: '🚀'
    },
    {
      title: 'Safety',
      description: 'Uncompromising commitment to the highest safety standards in all operations and deliverables.',
      icon: '🛡️'
    },
    {
      title: 'Excellence',
      description: 'Delivering superior quality in every project, service, and interaction with our clients.',
      icon: '⭐'
    },
    {
      title: 'Integrity',
      description: 'Operating with transparency, honesty, and accountability in all business relationships.',
      icon: '🤝'
    },
    {
      title: 'Collaboration',
      description: 'Working together with partners and clients to achieve shared goals and success.',
      icon: '👥'
    },
    {
      title: 'Sustainability',
      description: 'Committed to environmentally responsible practices and sustainable aerospace operations.',
      icon: '🌍'
    }
  ];

  return (
    <>
      <NextSeo
        title="Our Mission"
        description="Learn about Svara's mission, vision, and core values in aerospace innovation and excellence."
        openGraph={{
          url: 'https://svara.com/mission',
          title: 'Our Mission | Svara',
          description: 'Svara mission and core values',
          type: 'website',
        }}
      />
      <Header />
      <main className="bg-white">
        {/* Mission Header */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl">
              To be the leading provider of innovative aerospace solutions, delivering exceptional value through advanced
              technology, expert services, and unwavering commitment to safety and excellence.
            </p>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
                <p className="text-lg text-gray-700 mb-6">
                  We envision a world where aerospace innovation drives progress, safety is paramount, and businesses
                  can rely on Svara as their trusted partner for all their aviation needs.
                </p>
                <p className="text-lg text-gray-700">
                  Our commitment extends beyond business success to encompassing environmental responsibility and
                  sustainable practices that benefit future generations in aviation and aerospace.
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Strategic Goals</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-blue-600 rounded-full mr-4 mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">Lead innovation in aerospace technology and solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-blue-600 rounded-full mr-4 mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">Expand global reach and market presence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-blue-600 rounded-full mr-4 mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">Enhance operational efficiency and sustainability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-blue-600 rounded-full mr-4 mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">Build lasting partnerships with clients and stakeholders</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition duration-300">
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Story</h2>

            <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
              <p>
                Founded with a passion for aerospace excellence, Svara has grown from a small specialized team to a
                global leader in aviation services and solutions. Our journey is built on a foundation of technical
                expertise, unwavering safety standards, and a deep commitment to innovation.
              </p>

              <p>
                Over the years, we've worked with leading airlines, aircraft manufacturers, and aviation operators,
                earning a reputation for reliability, quality, and forward-thinking solutions. Our team brings decades of
                combined experience in aircraft maintenance, engineering, and aerospace operations.
              </p>

              <p>
                Today, Svara stands at the intersection of tradition and innovation, honoring the heritage of aviation
                excellence while embracing new technologies like artificial intelligence, advanced analytics, and
                sustainable practices. We believe in pushing boundaries and setting new standards for the industry.
              </p>

              <p>
                Our success is measured not just in business metrics, but in the trust our clients place in us and the
                positive impact we create in the aviation community. We're committed to continuous improvement, employee
                development, and environmental stewardship.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-8 mt-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Looking Forward</h3>
              <p className="text-gray-700 text-lg">
                As the aviation industry evolves, Svara is positioned to lead the transformation toward more sustainable,
                efficient, and innovative aerospace solutions. We're investing in emerging technologies, talent development,
                and strategic partnerships to shape the future of aviation.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-600 text-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Journey</h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Be part of a company that's transforming aerospace and pushing boundaries of innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/services"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                Explore Services
              </a>
              <a
                href="/contact"
                className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
