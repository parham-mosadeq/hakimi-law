import Link from 'next/link';
import React from 'react';

export default function Filters() {
  return (
    <aside className=' flex flex-col justify-center items-center shadow-lg w-3/4 md:w-full mx-auto h-80 rounded-lg mt-20'>
      <h3 className='-mt-20'> فیلترها</h3>
      <section className=''>
        <div className='py-3 flex justify-center items-center'>
          <Link href={'/blogs/tags/bank'}>بانکی</Link>
        </div>
        <div className='py-3 flex justify-center items-center'>
          <Link href={'/blogs/tags/justice'}>دیوان عدالت اداری</Link>
        </div>
        <div className='py-3 flex justify-center items-center'>
          <Link href={'/blogs/tags/law'}>حقوقی</Link>
        </div>
        <div className='py-3 flex justify-center items-center'>
          <Link href={'/blogs/tags/punishment'}>کیفری</Link>
        </div>
      </section>
    </aside>
  );
}
