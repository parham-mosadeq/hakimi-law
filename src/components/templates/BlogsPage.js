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
      <article className='flex my-10 bg-gray-100 py-10 flex-col justify-center items-center'>
        <div className='w-auto h-auto '>
          <Image
            className='mx-auto  object-cover '
            src='/icons/contact-us.png'
            width={400}
            height={400}
            alt='header'
          />
        </div>
        <div className='w-full mx-auto'>
          {/* info */}
          <div className='flex justify-around items-center'>
            <p>title</p>
            <p>author</p>
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
          <Link className='text-center block' href='/'>
            بیشتر بخوانید
          </Link>
        </div>
      </article>
      {/* articles */}
      <article className='flex my-10 bg-gray-100 py-10 flex-col justify-center items-center'>
        <div className='w-auto h-auto '>
          <Image
            className='mx-auto  object-cover '
            src='/icons/contact-us.png'
            width={400}
            height={400}
            alt='header'
          />
        </div>
        <div className='w-full mx-auto'>
          {/* info */}
          <div className='flex justify-around items-center'>
            <p>title</p>
            <p>author</p>
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
          <Link className='text-center block' href='/'>
            بیشتر بخوانید
          </Link>
        </div>
      </article>
      {/* articles */}
      <article className='flex my-10 bg-gray-100 py-10 flex-col justify-center items-center'>
        <div className='w-auto h-auto '>
          <Image
            className='mx-auto  object-cover '
            src='/icons/contact-us.png'
            width={400}
            height={400}
            alt='header'
          />
        </div>
        <div className='w-full mx-auto'>
          {/* info */}
          <div className='flex justify-around items-center'>
            <p>title</p>
            <p>author</p>
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
          <Link className='text-center block' href='/'>
            بیشتر بخوانید
          </Link>
        </div>
      </article>
      {/* articles */}
      <article className='flex my-10 bg-gray-100 py-10 flex-col justify-center items-center'>
        <div className='w-auto h-auto '>
          <Image
            className='mx-auto  object-cover '
            src='/icons/contact-us.png'
            width={400}
            height={400}
            alt='header'
          />
        </div>
        <div className='w-full mx-auto'>
          {/* info */}
          <div className='flex justify-around items-center'>
            <p>title</p>
            <p>author</p>
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
          <Link className='text-center block' href='/'>
            بیشتر بخوانید
          </Link>
        </div>
      </article>
    </section>
  );
}
