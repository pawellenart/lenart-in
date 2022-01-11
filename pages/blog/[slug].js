import Head from 'next/head';
import DefaultErrorPage from 'next/error';

import { useRouter } from 'next/router';
import postData from '../../lib/postData';

const Post = () => {
  const router = useRouter();
  const { slug } = router.query;

  // very primitive post finder
  const post =
    postData.find((obj) => {
      return obj.slug === slug;
    }) ?? null;

  if (!post) {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <DefaultErrorPage statusCode={404} />
      </>
    );
  }

  return <div>Post: {post?.title}</div>;
};

export default Post;
