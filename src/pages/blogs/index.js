import Head from 'next/head';

function Blogs() {
  return (
    <div>
      <Head>
        <title>مقالات | موسسه حقوقی داوری بین اللمللی حکیمی‌نژاد</title>

        <meta charset='utf-8' />
        <meta
          name='google-site-verification'
          content='+nxGUDJ4QpAZ5l9Bsjdi102tLVC21AIh5d1Nl23908vVuFHs34='
        ></meta>
        <meta
          name='description'
          content='مقالات مرتبط با مسائل حقوقی را از اینجا بخوانید، در تمامی زمینه های حقوقی'
        />
        <meta property='og:title' content='آرشیو مقالات منتشر شده توسط موسسه' />
        <meta
          property='og:description'
          content='مقالات مرتبط با مسائل حقوقی را از اینجا بخوانید، در تمامی زمینه های حقوقی'
        />
        <meta property='og:image' content='/icons/landing-page-logo.png' />
        <meta name='robots' content='noindex,nofollow' />
      </Head>
      <h1 className='text-3xl mt-24 h-screen text-center'>به زودی</h1>
    </div>
  );
}

export default Blogs;
