import Filters from '../modules/blogs/Filters';
import { gql, useQuery } from '@apollo/client';
import BlogCards from '../modules/blogs/BlogCards';
import Loader from '../modules/blogs/Loader';
import { useState } from 'react';
import Pagination from '../modules/blogs/Pagination';

const Query = gql`
  query Blog {
    blog {
      author
      createdAt
      description {
        markdown
      }
      images {
        url
      }
      slug
      title
      shortDesc
      id
      tags
    }
  }
`;

export default function BlogsPage() {
  const { data, loading, error } = useQuery(Query);
  // const [currentPage, setCurrentPage] = useState(3);
  // const postPerPage = 3;
  // const nextPage = currentPage * postPerPage;
  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  if (error) {
    return <p>در دست تعمیر</p>;
  }
  const start = data.blog;

  return (
    <>
      <section className='grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto relative min-h-screen max-w-6xl'>
        <div className='row-span-6'>
          <Filters />
        </div>
        {/* articles */}
        {data ? (
          start.map((blog) => {
            return (
              <div key={blog.id}>
                <BlogCards blog={blog} />
              </div>
            );
          })
        ) : (
          <></>
        )}

        {/* <Pagination blog={data.blog} /> */}
      </section>
      {/* <button
        onClick={() => setCurrentPage((prev) => prev + 1)}
        className='bg-main_txt_color px-4 py-2 m-3 rounded-md  text-main_logo_color'
      >
        بعدی
      </button>
      {currentPage}
      <button
        onClick={() => setCurrentPage((prev) => prev - 1)}
        className='bg-main_txt_color px-4 py-2 m-3 rounded-md  text-main_logo_color'
      >
        قبلی
      </button> */}
    </>
  );
}
