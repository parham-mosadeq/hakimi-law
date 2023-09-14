import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import sanitizeHtml from 'sanitize-html';

export default function BlogDetail({ blog }) {
  const persianDate = new Date(blog.createdAt).toLocaleDateString('fa');
  const { description } = blog;
  console.log(description);
  return (
    <>
      <Head>
        <title>{blog.title} | موسسه حقوقی داوری بین اللمللی حکیمی‌نژاد</title>

        <meta charset='utf-8' />
        <meta
          name='google-site-verification'
          content='+nxGUDJ4QpAZ5l9Bsjdi102tLVC21AIh5d1Nl23908vVuFHs34='
        ></meta>
        <meta name='description' content={blog.shortDesc} />
        <meta property='og:title' content={blog.title} />
        <meta property='og:description' content={blog.shortDesc} />
        <meta property='og:image' content='/icons/landing-page-logo.png' />
        <meta name='robots' content='noindex,follow' />
      </Head>
      <article
        key={blog.id}
        className=' flex my-10 max-w-[460px]  md:max-w-3xl lg:max-w-6xl mx-auto   flex-col justify-center items-center'
      >
        <div className=' h-[300px]  md:max-w-3xl lg:max-w-6xl max-w-lg'>
          <img
            className='mx-auto h-full w-screen rounded-t-lg object-cover '
            src={blog.images[0].url}
            width={500}
            height={500}
            alt={blog.title}
          />
        </div>
        <div className='w-full min-h-screen mx-auto bg-gray-100'>
          {/* short desc */}
          <div>
            <h1 className='text-2xl p-4'>{blog.title}</h1>
            <div
              className='text-justify p-5 text-lg'
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(description.html),
              }}
            />
          </div>

          {/* info */}
          <div className='flex justify-between flex-wrap px-1 md:px-5 items-center'>
            <p className=''>نویسنده: {blog.author}</p>
            <p className=''> {persianDate}</p>
          </div>
          <div className='px-4 py-2 text-sm flex items-center '>
            <p>تگ ها: </p>
            {/* <RenderTags blog={blog} /> */}
          </div>
        </div>
      </article>
    </>
  );
}
