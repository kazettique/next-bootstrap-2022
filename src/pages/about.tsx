import LayoutB from '@/components/LayoutB';
import { NextPageWithLayout } from '@/types';
import Link from 'next/link';
import { ReactElement } from 'react';

const About: NextPageWithLayout = () => {
  return (
    <div>
      <div>this is about page</div>
      <div>
        <Link href="/">Back to home</Link>
      </div>
    </div>
  );
};

About.getLayout = function getLayout(page: ReactElement) {
  return <LayoutB>{page}</LayoutB>;
};

export default About;
