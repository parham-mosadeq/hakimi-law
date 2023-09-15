import React from 'react';
import law from '../../../data/db';
import Image from 'next/image';

export default function LawyersPage() {
  const { lawyers } = law.data;
  const pronoun = {
    male: 'جناب آقای',
    female: 'سرکار خانم',
  };
  return (
    <section className='min-h-screen max-w-4xl mx-auto px-3  md:px-1'>
      <article className='mt-10  '>
        {lawyers.map((i) => {
          return (
            <div
              key={i.id}
              className={`${
                i.id % 2 === 0
                  ? 'bg-main_logo_color flex-row-reverse'
                  : 'bg-main_footer_color'
              } rounded-lg w-full flex justify-between mx-auto my-6 `}
            >
              <Image
                className='w-auto h-60 rounded-md object-cover'
                src={i.img}
                width={250}
                height={250}
              />
              <h2
                className={`${
                  i.id % 2 === 0 ? '' : ' text-main_logo_color'
                } text-xl font-bold`}
              >
                {pronoun[i.sex]} {i.name}
              </h2>
            </div>
          );
        })}
      </article>
    </section>
  );
}
