import LayoutA from '@/components/LayoutA';
import { NextPageWithLayout } from '@/types';
import Head from 'next/head';
import Link from 'next/link';
import { ReactElement } from 'react';

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <Head>
        <title>Meta Tag Example</title>
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta name="google" content="notranslate" key="notranslate" />
        <link
          rel="canonical"
          href="https://example.com/blog/original-post"
          key="canonical"
        />
      </Head>
      <div>this is home page</div>
      <div>
        <Link href="/about" className="p-2 m-2 rounded bg-neutral-300 block">
          Go to about page
        </Link>
      </div>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <LayoutA>{page}</LayoutA>;
};

export default Home;
