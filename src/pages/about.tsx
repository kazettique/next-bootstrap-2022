import LayoutB from '@/components/LayoutB';
import { NextPageWithLayout } from '@/types';
import Head from 'next/head';
import Link from 'next/link';
import { ReactElement } from 'react';

const About: NextPageWithLayout = () => {
  return (
    <div>
      <Head>
        <title>
          iPhone 12 XS Max For Sale in Colorado - Big Discounts | Apple
        </title>
        <meta
          name="description"
          content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
          key="desc"
        />
        <meta name="description" content="Checkout our cool page" key="desc" />
        <meta property="og:title" content="Social Title for Cool Page" />
        <meta
          property="og:description"
          content="And a social description for our cool page"
        />
        <meta
          property="og:image"
          content="https://example.com/images/cool-page.jpg"
        />
      </Head>
      <div>this is about page</div>
      <div>
        <Link href="/" className="p-2 m-2 rounded bg-neutral-300 block">
          Back to home
        </Link>
      </div>
    </div>
  );
};

About.getLayout = function getLayout(page: ReactElement) {
  return <LayoutB>{page}</LayoutB>;
};

export default About;
