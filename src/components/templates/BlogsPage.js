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
    }
  }
`;

export default function BlogsPage() {
  const { data } = useQuery(Query);
  return (
    <section className='grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto relative min-h-screen max-w-6xl'>
      <div className='row-span-6'>
        <Filters />
      </div>
      {/* articles */}
      {data ? (
        data.blog.map((blog) => {
          // return <BlogCards blog={blog} />;
        })
      ) : (
        <Loader />
      )}
    </section>
  );
}
