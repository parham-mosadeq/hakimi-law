import React from 'react';
import BlogDetail from '../modules/blogs/BlogDetail';

export default function BlogDetailsPage({ blog }) {
  console.log(blog);
  return (
    <div className=''>
      {blog.map((i) => (
        <div key={i.id}>
          <BlogDetail blog={i} />
        </div>
      ))}
    </div>
  );
}
