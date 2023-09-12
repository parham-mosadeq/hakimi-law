import React from 'react';
import law from '../../../data/db';

export default function LawyersPage() {
  const { lawyers } = law.data;
  const pronoun = {
    male: 'جناب آقای',
    female: 'سرکار خانم',
  };
  return (
    <section className='min-h-screen max-w-4xl mx-auto'>
      <article className='mt-10 md:grid lg:grid-cols-3  gap-5 '>
        {lawyers.map((i) => {
          return (
            <div
              key={i.id}
              className={`${
                i.id % 2 === 0 ? 'bg-main_logo_color' : 'bg-main_footer_color'
              } rounded-lg w-72 mx-auto my-6 `}
            >
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
