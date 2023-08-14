import ContactUsPage from '@/components/templates/ContactUsPage';
import Head from 'next/head';

function ContactUs() {
  return (
    <main className='min-h-screen'>
      <Head>
        <title>تماس با ما | مؤسسه حکیمی‌نژاد</title>
      </Head>
      <ContactUsPage />
    </main>
  );
}

export default ContactUs;
