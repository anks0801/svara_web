export default function Features() {
  const features = [
    {
      title: 'Mobile First Design',
      description: 'Optimized for iOS and Android devices with touch-friendly interface.',
      icon: '📱',
    },
    {
      title: 'SEO Optimized',
      description: 'Built with best SEO practices to rank high in Google search results.',
      icon: '🔍',
    },
    {
      title: 'Lightning Fast',
      description: 'Optimized performance ensures quick loading times on all devices.',
      icon: '⚡',
    },
    {
      title: 'Easy to Maintain',
      description: 'Simple structure connected with GitHub for easy updates and versioning.',
      icon: '🛠️',
    },
    {
      title: 'Custom Domain Ready',
      description: 'Supports custom DNS and domain configuration for your brand.',
      icon: '🌐',
    },
    {
      title: 'Static Content',
      description: 'Secure, reliable, and cost-effective static website hosting.',
      icon: '📄',
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
          Why Choose Svara?
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Svara combines modern web technologies with SEO best practices to create a website that works perfectly across all devices and ranks high in search results.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
