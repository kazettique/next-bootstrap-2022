import LayoutA from '@/components/LayoutA';
import { NextPageWithLayout } from '@/types';
import Link from 'next/link';
import { ReactElement } from 'react';

const Home: NextPageWithLayout = () => {
  return (
    <div>
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
