import LawyersPage from '@/components/templates/LawyersPage';
import Head from 'next/head';
export default function Lawyers() {
  return (
    <div>
      <Head>
        <title>وکلا | موسسه حقوقی داوری بین اللمللی حکیمی‌نژاد</title>
        <meta charset='utf-8' />
        <meta
          name='google-site-verification'
          content='+nxGUDJ4QpAZ5l9Bsjdi102tLVC21AIh5d1Nl23908vVuFHs34='
        ></meta>
        <meta
          name='description'
          content='همکاران و وکلای مشفول به کار در موسسه حقوقی حکیمی نژاد'
        />
        <meta property='og:title' content='اسامی وکلای موسسه حکیمی نژاد' />
        <meta
          property='og:description'
          content='اسامی وکلای موسسه حکیمی نژاد'
        />
        <meta property='og:image' content='/icons/landing-page-logo.png' />
        {/* <meta name="robots" content="noindex,nofollow"/> */}
      </Head>
      <LawyersPage />
    </div>
  );
}
