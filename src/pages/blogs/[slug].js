import Loader from '@/components/modules/blogs/Loader';
import BlogDetailsPage from '@/components/templates/BlogDetailsPage';

import { gql, useQuery } from '@apollo/client';

// ! does not work
// const Query = gql`
//   query Blog($slug: String!) {
//     blog(where: { slug: $slug }) {
//       author
//       createdAtw
//       description {
//         html
//       }
//       images {
//         url
//       }
//       slug
//       title
//       id
//       tags
//       shortDesc
//     }
//   }
// `;
// ! does not work

const Query_ = gql`
  query Blog {
    blog {
      author
      createdAt
      description {
        html
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

export default function BlogDetails({ slug }) {
  const { data, loading } = useQuery(Query_);
  if (loading) {
    return (
      <div className='min-h-screen'>
        <Loader />
      </div>
    );
  }
  if (!loading) {
    const exactBlog = data.blog.filter((i) => i.slug === slug);
    return (
      <div className='min-h-screen'>
        <BlogDetailsPage blog={exactBlog} />
      </div>
    );
  }
}

export async function getServerSideProps({ resolvedUrl }) {
  const slug = await resolvedUrl.split('/')[2];
  return {
    props: { slug },
  };
}
