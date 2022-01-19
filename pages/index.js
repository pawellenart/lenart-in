import Head from 'next/head';

import Header from '../components/Header';
import Blog from '../components/Blog';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pawel Lenart</title>
      </Head>

      {/* header */}
      <Header />

      {/* blog */}
      <Blog />
    </div>
  );
}
