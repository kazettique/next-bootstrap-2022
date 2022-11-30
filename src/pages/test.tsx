import Icon from '@/components/Icon';
import LayoutB from '@/components/LayoutB';
import { NextPageWithLayout } from '@/types';
import Head from 'next/head';
import Link from 'next/link';
import { ReactElement } from 'react';

const Test: NextPageWithLayout = () => {
  return (
    <div>
      <Head>
        <title>Test Page</title>
      </Head>
      <h1 className="text-2xl font-bold">this is test page</h1>
      <div>
        <Link href="/" className="p-2 m-2 rounded bg-neutral-300 block">
          Back to home
        </Link>
        <Icon iconId="vuejs-original" className="text-blue-400 text-4xl" />
        <Icon iconId="react-original" className="text-blue-600 text-2xl" />
        <Icon iconId="nodejs-plain" className="text-blue-700 text-6xl" />
      </div>
    </div>
  );
};

Test.getLayout = function getLayout(page: ReactElement) {
  return <LayoutB>{page}</LayoutB>;
};

export default Test;
