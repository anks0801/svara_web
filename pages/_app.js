import '../styles/globals.css';
import { DefaultSeo } from 'next-seo';
import { DefaultSEO } from '../next-seo.config';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...DefaultSEO} />
      <Component {...pageProps} />
    </>
  );
}