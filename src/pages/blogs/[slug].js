import Loader from '@/components/modules/blogs/Loader';
import BlogDetailsPage from '@/components/templates/BlogDetailsPage';

import { gql, useQuery } from '@apollo/client';

const Blog_Query = gql`
  query Blog($slug: String!) {
    blog(where: { slug: $slug }) {
      author
      createdAtw
      description {
        html
      }
      images {
        url
      }
      slug
      title
      id
      tags
      shortDesc
    }
  }
`;

export default function BlogDetails({ slug }) {
  const { data, loading } = useQuery(Blog_Query, {
    variables: { slug },
  });
  if (loading) {
    return (
      <div className='min-h-screen'>
        <Loader />
      </div>
    );
  }
  return (
    <div className='min-h-screen'>
      <BlogDetailsPage blog={data} />
    </div>
  );
}

export async function getServerSideProps({ resolvedUrl }) {
  const slug = resolvedUrl.split('/')[2];
  return {
    props: { slug },
  };
}
