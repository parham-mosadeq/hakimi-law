import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Filters from '../modules/blogs/Filters';

export default function BlogsPage() {
  return (
    <section className='grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto relative min-h-screen max-w-6xl'>
      <div className='row-span-6'>
        <Filters />
      </div>
      {/* articles */}

      {/* articles */}
      <article className='flex my-10 max-w-lg mx-auto shadow-lg flex-col justify-center items-center'>
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
            <p className=''>نویسنده: امیر حکیمی نژاد</p>
            <p className=''>23 شهریور 1402</p>
          </div>
          <div className='px-4 py-2 text-sm flex items-center '>
            <p>تگ ها: </p>
            <span>#وکالت</span>
          </div>
          {/* short desc */}
          <div>
            <p className='text-justify p-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              perferendis alias magni architecto deleniti. Nostrum, sapiente.
              Soluta corporis culpa veniam. Error fugiat recusandae,
            </p>
          </div>
          <Link className='text-center block py-3' href='/'>
            بیشتر بخوانید
          </Link>
        </div>
      </article>
      {/* articles */}
      <article className='flex my-10 max-w-lg mx-auto shadow-lg flex-col justify-center items-center'>
        <div className='w-auto h-[190px] max-w-lg '>
          <Image
            className='mx-auto h-full w-full object-cover rounded-t-lg '
            src='/icons/contact-us.png'
            width={400}
            height={400}
            alt='header'
          />
        </div>
        <div className='w-full mx-auto bg-gray-100 '>
          {/* info */}
          <div className='flex justify-between px-1 items-center'>
            <p>نویسنده: امیر حکیمی نژاد</p>
            <p>23 شهریور 1402</p>
          </div>
          {/* short desc */}
          <div>
            <p className='text-justify p-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              perferendis alias magni architecto deleniti. Nostrum, sapiente.
              Soluta corporis culpa veniam. Error fugiat recusandae,
              perspiciatis iusto voluptatem beatae nesciunt officiis magnam?
              Dolore porro ullam aliquid voluptates eveniet reiciendis minus
              voluptas hic dignissimos ex. Eum quae similique quia ipsum! Quos,
              quas ut.
            </p>
          </div>
          <Link className='text-center block py-3' href='/'>
            بیشتر بخوانید
          </Link>
        </div>
      </article>
    </section>
  );
}
