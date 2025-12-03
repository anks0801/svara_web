import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Features from '../components/Features';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const missionHighlights = [
    {
      title: 'Innovation',
      description: 'Continuously advancing aerospace technology and solutions.',
      icon: '🚀'
    },
    {
      title: 'Safety',
      description: 'Uncompromising commitment to the highest safety standards.',
      icon: '🛡️'
    },
    {
      title: 'Excellence',
      description: 'Delivering superior quality in every project and service.',
      icon: '⭐'
    }
  ];

  const servicesHighlight = [
    {
      title: 'Aircraft Maintenance',
      description: 'Comprehensive maintenance and repair services.',
      icon: '🔧'
    },
    {
      title: 'Engineering Solutions',
      description: 'Expert design and consultation for aerospace projects.',
      icon: '⚙️'
    },
    {
      title: 'Training & Support',
      description: 'Professional programs for maintenance and operations teams.',
      icon: '📚'
    }
  ];

  const capabilitiesHighlight = [
    { number: '25+', label: 'Years of Experience' },
    { number: '500+', label: 'Aircraft Serviced' },
    { number: '99.8%', label: 'On-Time Delivery' },
    { number: '100+', label: 'Certified Experts' }
  ];

  return (
    <>
      <NextSeo
        title="Home"
        description="Svara Aerotech Solutions - Leading provider of aerospace engineering, aircraft maintenance, and aviation consulting services with cutting-edge technology and industry expertise."
        openGraph={{
          url: 'https://svara.com',
          title: 'Svara Aerotech Solutions - Aviation Excellence',
          description: 'Premier aerospace engineering, aircraft maintenance, and aviation consulting services',
          type: 'website',
        }}
      />
      <Header />
      <main className="bg-white">
        <Hero />

        {/* Our Mission Section - Soft Blue with Parallax */}
        <section className="py-24 md:py-32 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
          {/* Decorative elements with parallax */}
          <div 
            className="absolute top-0 right-0 w-96 h-96 bg-blue-200/8 rounded-full blur-3xl"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          ></div>
          <div 
            className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/6 rounded-full blur-3xl"
            style={{ transform: `translateY(${scrollY * -0.3}px)` }}
          ></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section header */}
            <div className="mb-16">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-blue-500/10 border border-blue-400/30 rounded-full text-blue-700 text-sm font-semibold backdrop-blur-sm">
                  OUR FOUNDATION
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">Our Mission</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {missionHighlights.map((item, index) => (
                <div
                  key={index}
                  className="group relative"
                >
                  {/* Card background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-300/8 to-blue-300/8 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  
                  {/* Card content */}
                  <div className="relative bg-white/70 backdrop-blur-lg border border-blue-200/30 rounded-xl p-8 hover:border-blue-300/50 transition duration-300 shadow-sm hover:shadow-md">
                    <div className="text-6xl mb-6 group-hover:scale-110 transition duration-300 origin-left">{item.icon}</div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-700 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link
                href="/mission"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg hover:from-blue-600 hover:to-blue-700 transition duration-300 shadow-lg hover:shadow-blue-500/20"
              >
                Explore Our Mission →
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section - Light & Clean */}
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section header */}
            <div className="mb-16">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-blue-500/10 border border-blue-400/30 rounded-full text-blue-700 text-sm font-semibold">
                  WHAT WE OFFER
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">Our Services</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"></div>
              <p className="text-lg text-slate-600 max-w-3xl mt-6">
                Comprehensive solutions tailored to meet the diverse needs of the aerospace and aviation industry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {servicesHighlight.map((service, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl"
                >
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50 group-hover:from-blue-50 group-hover:to-blue-100 transition duration-300"></div>
                  
                  {/* Border gradient */}
                  <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-br from-blue-300/15 to-blue-300/15 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  
                  {/* Content */}
                  <div className="relative p-8 h-full flex flex-col">
                    <div className="text-5xl mb-6 group-hover:scale-125 transition duration-300 origin-top-left">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-700 flex-grow">{service.description}</p>
                    <a href="/services" className="text-blue-600 hover:text-blue-700 font-bold mt-6 group-hover:translate-x-2 transition duration-300 inline-block">
                      Learn More →
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg hover:from-blue-600 hover:to-blue-700 transition duration-300 shadow-lg hover:shadow-blue-500/20"
              >
                Explore All Services →
              </Link>
            </div>
          </div>
        </section>
        <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
          {/* Animated background elements with parallax */}
          <div 
            className="absolute top-20 right-10 w-72 h-72 bg-blue-200/6 rounded-full blur-3xl animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.6}px)` }}
          ></div>
          <div 
            className="absolute bottom-20 left-10 w-72 h-72 bg-blue-200/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '1s', transform: `translateY(${scrollY * -0.4}px)` }}
          ></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section header */}
            <div className="mb-16 text-center">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-blue-500/10 border border-blue-400/30 rounded-full text-blue-700 text-sm font-semibold backdrop-blur-sm">
                  BY THE NUMBERS
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">Our Capabilities</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mx-auto"></div>
              <p className="text-lg text-slate-700 max-w-3xl mx-auto mt-6">
                Advanced technology, expertise, and infrastructure to handle your most demanding aerospace requirements.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {capabilitiesHighlight.map((capability, index) => (
                <div 
                  key={index} 
                  className="group text-center p-8 bg-gradient-to-br from-white to-slate-50 rounded-xl border border-blue-200/30 hover:border-blue-300/50 transition duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition duration-300">
                    {capability.number}
                  </div>
                  <div className="text-slate-700 font-semibold">{capability.label}</div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/capabilities"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg hover:from-blue-600 hover:to-blue-700 transition duration-300 shadow-lg hover:shadow-blue-500/20"
              >
                Discover Full Capabilities →
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action Section - Inviting */}
        <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600">
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Ready to Transform Your Aerospace Operations?</h2>
            <p className="text-lg md:text-xl text-white/95 mb-12 max-w-3xl mx-auto leading-relaxed">
              Partner with Svara to leverage our advanced capabilities, expertise, and unwavering commitment to excellence in aviation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition duration-300 shadow-xl"
              >
                Get In Touch
              </Link>
              <Link
                href="/mission"
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/15 transition duration-300 backdrop-blur-sm"
              >
                Learn Our Story
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}