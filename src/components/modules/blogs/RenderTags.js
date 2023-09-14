import Link from 'next/link';
import React from 'react';

export default function RenderTags({ blog }) {
  const tags = blog.tags.split('-');
  return (
    <span>
      {tags.map((i) => (
        <Link key={i} href={`/blogs/tags/${i}`}>
          #{i}
        </Link>
      ))}
    </span>
  );
}
