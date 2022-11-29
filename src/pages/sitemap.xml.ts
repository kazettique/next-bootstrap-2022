// sitemap example code from Next's doc

import { GetServerSideProps } from 'next';

// Ref: https://nextjs.org/learn/seo/crawling-and-indexing/xml-sitemaps
const EXTERNAL_DATA_URL = `https://jsonplaceholder.typicode.com/posts`;

function generateSiteMap(posts: any) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <!--We manually set the two URLs we know already-->
      <url>
        <loc>https://jsonplaceholder.typicode.com</loc>
      </url>
      <url>
        <loc>https://jsonplaceholder.typicode.com/guide</loc>
      </url>
      ${posts
        .map((post: any) => {
          const { id } = post;
          return `
        <url>
            <loc>${`${EXTERNAL_DATA_URL}/${id}`}</loc>
        </url>
      `;
        })
        .join(``)}
    </urlset>`;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // We make an API call to gather the URLs for our site
  const request = await fetch(EXTERNAL_DATA_URL);
  const posts = await request.json();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader(`Content-Type`, `text/xml`);
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
