import ContactUsPage from '@/components/templates/ContactUsPage';
import Head from 'next/head';

function ContactUs() {
  return (
    <main className='min-h-screen'>
      <Head>
        <title>تماس با ما | موسسه حقوقی داوری بین اللمللی حکیمی‌نژاد </title>
        <meta charset='utf-8' />
        <meta
          name='google-site-verification'
          content='+nxGUDJ4QpAZ5l9Bsjdi102tLVC21AIh5d1Nl23908vVuFHs34='
        ></meta>
        <meta
          name='description'
          content='راه های ارتباطی با موسسه ما به شرح زیر میباشد'
        />
        <meta property='og:title' content='با تماس بگیرید' />
        <meta
          property='og:description'
          content='از طریق ایمیل و شماره تماس های زیر با تماس بگیرید'
        />
        <meta property='og:image' content='/icons/landing-page-logo.png' />
        <meta name='robots' content='index,follow' />
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
      <ContactUsPage />
    </main>
  );
}

export default ContactUs;
