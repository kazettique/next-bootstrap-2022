import LayoutA from '@/components/LayoutA';
import { NextPageWithLayout } from '@/types';
import Link from 'next/link';
import { ReactElement } from 'react';

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <div>this is about page</div>
      <div>
        <Link href="/about" className="p-2 m-2 rounded bg-neutral-300 block">
          Go to about page
        </Link>
      </div>
    </div>
  );
  // return (
  //   <div className={styles.container}>
  //     <Head>
  //       <title>TypeScript starter for Next.js</title>
  //       <meta
  //         name="description"
  //         content="TypeScript starter for Next.js that includes all you need to build amazing apps"
  //       />
  //       <link rel="icon" href="/favicon.ico" />
  //     </Head>

  //     <main className={styles.main}>
  //       <h1 className={styles.title}>
  //         Welcome to <a href="https://nextjs.org">Next.js!</a>
  //       </h1>

  //       <p className={styles.description}>
  //         Get started by editing{` `}
  //         <code className={styles.code}>src/pages/index.tsx</code>
  //       </p>

  //       <div className={styles.grid}>
  //         <a href="https://nextjs.org/docs" className={styles.card}>
  //           <h2>Documentation &rarr;</h2>
  //           <p>Find in-depth information about Next.js features and API.</p>
  //         </a>

  //         <a href="https://nextjs.org/learn" className={styles.card}>
  //           <h2>Learn &rarr;</h2>
  //           <p>Learn about Next.js in an interactive course with quizzes!</p>
  //         </a>

  //         <a
  //           href="https://github.com/vercel/next.js/tree/canary/examples"
  //           className={styles.card}
  //         >
  //           <h2>Examples &rarr;</h2>
  //           <p>Discover and deploy boilerplate example Next.js projects.</p>
  //         </a>

  //         <a
  //           href="https://vercel.com/new?utm_source=typescript-nextjs-starter"
  //           className={styles.card}
  //         >
  //           <h2>Deploy &rarr;</h2>
  //           <p>
  //             Instantly deploy your Next.js site to a public URL with Vercel.
  //           </p>
  //         </a>
  //       </div>
  //     </main>

  //     <footer className={styles.footer}>
  //       <a
  //         href="https://vercel.com?utm_source=typescript-nextjs-starter"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Powered by{` `}
  //         <span className={styles.logo}>
  //           <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
  //         </span>
  //       </a>
  //     </footer>
  //   </div>
  // );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <LayoutA>{page}</LayoutA>;
};

export default Home;
