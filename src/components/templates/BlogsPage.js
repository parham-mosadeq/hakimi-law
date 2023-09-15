import Filters from '../modules/blogs/Filters';
import { gql, useQuery } from '@apollo/client';
import BlogCards from '../modules/blogs/BlogCards';
import Loader from '../modules/blogs/Loader';

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

  return (
    <section className='grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto relative min-h-screen max-w-6xl'>
      <div className='row-span-6'>
        <Filters />
      </div>
      {/* articles */}
      {data ? (
        data.blog.map((blog) => {
          return (
            <div key={blog.id}>
              <BlogCards blog={blog} />
            </div>
          );
        })
      ) : (
        <></>
      )}
    </section>
  );
}
