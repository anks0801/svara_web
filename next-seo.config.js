export const DefaultSEO = {
  titleTemplate: '%s | Svara',
  defaultTitle: 'Svara - Your Trusted Partner',
  description: 'Svara offers high-quality services and solutions for your needs.',
  canonical: 'https://svara.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://svara.com',
    site_name: 'Svara',
    images: [
      {
        url: 'https://svara.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Svara',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    handle: '@svara',
    site: '@svara',
    cardType: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
