import React from 'react';
import { useQuery } from '@apollo/client';
import { Query } from '../../../lib/lib';
import { useRouter } from 'next/router';
import Loader from '../modules/blogs/Loader';
import BlogCards from '../modules/blogs/BlogCards';

export default function BlogTagsPage() {
  const dictionary = {
    justice: 'عدالت',
    law: 'حقوقی',
    bank: 'بانکی',
    punishment: 'کیفری',
  };

  const {
    query: { tags },
  } = useRouter();
  const { data, loading, error } = useQuery(Query);

  if (error) {
    <>منتظر بمانید</>;
  }
  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }
  const postsPerTag = data.blog.filter((i) => i.tags === dictionary[tags]);
  return <div>{/* <BlogCards blog={postsPerTag} /> */}</div>;
}
