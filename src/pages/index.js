import HomePage from '@/components/templates/HomePage';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>خانه | موسسه حقوقی داوری بین اللمللی حکیمی‌نژاد</title>
        <meta charset='utf-8' />
        <meta
          name='google-site-verification'
          content='+nxGUDJ4QpAZ5l9Bsjdi102tLVC21AIh5d1Nl23908vVuFHs34='
        ></meta>
        <meta
          name='description'
          content='موسسه حقوقی داوری بین اللمللی حکیمی‌نژاد'
        />
        <meta
          property='og:title'
          content='موسسه حقوقی داوری بین اللمللی حکیمی‌نژاد'
        />
        <meta
          property='og:description'
          content='هر آنچه که باید راجب خدمات و خود ما بدانید.'
        />
        <meta property='og:image' content='/icons/landing-page-logo.png' />
        {/* <meta name="robots" content="noindex,nofollow"/> */}
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/icons/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/icons/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/icons/favicon-16x16.png'
        />
        <link rel='manifest' href='/icons/site.webmanifest' />
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
