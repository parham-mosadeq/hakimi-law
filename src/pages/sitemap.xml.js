const EXTERNAL_DATA_URL = 'https://hakiminejad.com/blogs';

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://hakiminejad.com</loc>
     </url>
     <url>
       <loc>https://hakiminejad.com/blogs</loc>
     </url>
     ${posts
       .map(({ title, createdAt }) => {
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/${title}`}</loc>
           <lastmod>${createdAt}</lastmod>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

export async function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await fetch(
    'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clmj6wxqg1kjz01tccrua7fso/master',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
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
`,
      }),
    }
  );
  const posts = await request.json();
  const {
    data: { blog },
  } = await posts;

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(blog);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();
  return {
    props: {},
  };
}

export default SiteMap;
