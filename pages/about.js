import { NextSeo } from 'next-seo';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <NextSeo
        title="About Us"
        description="Learn more about Svara and our mission to provide quality services."
        openGraph={{
          url: 'https://svara.com/about',
          title: 'About Svara',
          description: 'Learn more about Svara',
          type: 'website',
        }}
      />
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">About Svara</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              At Svara, we're committed to delivering high-quality services and solutions that help our customers succeed.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Values</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Quality and Excellence</li>
              <li>Customer Focus</li>
              <li>Innovation and Continuous Improvement</li>
              <li>Integrity and Transparency</li>
              <li>Collaboration and Teamwork</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Get in Touch</h2>
            <p className="text-gray-700">
              Have questions? We'd love to hear from you. Contact us at{' '}
              <a href="mailto:info@svara.com" className="text-blue-600 hover:text-blue-800 font-semibold">
                info@svara.com
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
