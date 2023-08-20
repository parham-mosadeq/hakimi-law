import AboutUsPage from '@/components/templates/AboutUs';
import Head from 'next/head';
function ContactUs() {
  return (
    <main className='min-h-screen'>
      <Head>
        <title>درباره‌ما | موسسه حقوقی داوری بین اللمللی حکیمی‌نژاد</title>
        <meta charset='utf-8' />
        <meta
          name='google-site-verification'
          content='+nxGUDJ4QpAZ5l9Bsjdi102tLVC21AIh5d1Nl23908vVuFHs34='
        ></meta>
        <meta
          name='description'
          content='اگر میخواهید مارا بهتر بشناسید، اینجا را بخوانید.'
        />
        <meta property='og:title' content='درباره ما' />
        <meta
          property='og:description'
          content='اگر میخواهید مارا بهتر بشناسید، اینجا را بخوانید.'
        />
        <meta property='og:image' content='/icons/landing-page-logo.png' />
        <meta name='robots' content='noindex,nofollow' />
      </Head>
      <AboutUsPage />
    </main>
  );
}

export default ContactUs;
