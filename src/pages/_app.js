import Layout from '@/components/layouts/Layout';
import '@/styles/globals.css';
import { Vazirmatn } from 'next/font/google';

const vazir = Vazirmatn({ subsets: ['arabic'] });

export default function App({ Component, pageProps }) {
  return (
    <main className={vazir.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
