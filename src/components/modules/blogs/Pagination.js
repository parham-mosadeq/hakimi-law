import React, { useState } from 'react';

export default function Pagination({ blog }) {
  const [currentPage, setCurrentPage] = useState(3);
  const postPerPage = 3;
  const nextPage = currentPage * postPerPage;
  const start = blog.slice(currentPage, nextPage);
  return (
    <div className='flex justify-center items-center'>
      <button
        onClick={() => setCurrentPage((prev) => prev + postPerPage)}
        className='bg-main_txt_color px-4 py-2 m-3 rounded-md  text-main_logo_color'
      >
        بعدی
      </button>
      {currentPage}
      <button
        onClick={() => setCurrentPage((prev) => prev - postPerPage)}
        className='bg-main_txt_color px-4 py-2 m-3 rounded-md  text-main_logo_color'
      >
        قبلی
      </button>
    </div>
  );
}
