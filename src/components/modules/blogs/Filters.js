import React from 'react';

export default function Filters() {
  return (
    <aside className=' flex flex-col justify-center items-center shadow-lg w-3/4 md:w-full mx-auto h-80 rounded-lg mt-20'>
      <h3 className='-mt-20'> فیلترها</h3>
      <section className=''>
        <div className='py-3 flex justify-center items-center'>
          <label htmlFor='bank'>بانکی</label>
          <input type='checkbox' id='bank' />
        </div>
        <div className='py-3 flex justify-center items-center'>
          <label htmlFor='justice'>دیوان عدالت اداری</label>
          <input type='checkbox' id='justice' />
        </div>
        <div className='py-3 flex justify-center items-center'>
          <label htmlFor='law'>حقوقی</label>
          <input type='checkbox' id='law' />
        </div>
        <div className='py-3 flex justify-center items-center'>
          <label htmlFor='punishment'>کیفری</label>
          <input type='checkbox' id='punishment' />
        </div>
      </section>
    </aside>
  );
}
