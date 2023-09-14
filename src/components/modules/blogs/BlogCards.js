import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
export default function BlogCards({ blog }) {
  const persianDate = new Date(blog.createdAt).toLocaleDateString('fa');
  return (
    <article
      key={blog.id}
      className='flex my-10 max-w-lg mx-auto shadow-lg flex-col justify-center items-center'
    >
      <div className='w-auto h-[190px] max-w-lg'>
        <Image
          className='mx-auto h-full w-full rounded-t-lg object-cover '
          src='/icons/contact-us.png'
          width={400}
          height={400}
          alt='header'
        />
      </div>
      <div className='w-full mx-auto bg-gray-100'>
        {/* info */}
        <div className='flex justify-between flex-wrap px-1 items-center'>
          <p className=''>نویسنده: {blog.author}</p>
          <p className=''> {persianDate}</p>
        </div>
        <div className='px-4 py-2 text-sm flex items-center '>
          <p>تگ ها: </p>
          <span>#وکالت</span>
        </div>
        {/* short desc */}
        <div>
          <p className='text-justify p-5'>{blog.shortDesc}</p>
        </div>
        <Link className='text-center block py-3' href={`/blogs/${blog.slug}`}>
          بیشتر بخوانید
        </Link>
      </div>
    </article>
  );
}
