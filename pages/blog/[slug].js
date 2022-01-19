import Head from 'next/head';
import DefaultErrorPage from 'next/error';

import { useRouter } from 'next/router';
import postData from '../../lib/postData';
import BlogPost from '../../components/BlogPost';

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

  return (
    <div className="mt-10">
      <BlogPost post={post} />;
    </div>
  );
};

export default Post;
