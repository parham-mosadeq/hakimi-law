import Layout from '@/components/layouts/Layout';
import '@/styles/globals.css';
import { Vazirmatn } from 'next/font/google';
import {
  ApolloClient,
  ApolloProvider,
  ApolloCache,
  InMemoryCache,
} from '@apollo/client';

const vazir = Vazirmatn({ subsets: ['arabic'] });

const client = new ApolloClient({
  uri: 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clmj6wxqg1kjz01tccrua7fso/master',
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <main className={vazir.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </ApolloProvider>
  );
}
