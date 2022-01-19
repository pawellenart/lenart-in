import Image from 'next/image';
import Link from 'next/link';

const BlogPost = ({ post }) => {
  return (
    <article className="mx-20 mb-16">
      <div className="max-w-6xl">
        {/* post image */}
        <div className="h-96 relative rounded-lg">
          <Image
            className="rounded-lg hover:opacity-90 transition"
            src={post.img}
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>

        {/* post details */}
        <div className="mx-auto max-w-4xl">
          {/* post title */}
          <div className="pt-8 mb-4">
            <Link href={`/blog/${encodeURIComponent(post.slug)}`}>
              <a className="font-poppins font-bold text-3xl  text-gray-800 hover:text-camayana transition">
                {post.title}
              </a>
            </Link>
          </div>
          {/* date & category */}
          <div className="flex font-poppins text-sm text-gray-400 space-x-4 uppercase mb-4">
            <div>{post.published}</div>
            <div>{post.categories.join(', ')}</div>
          </div>
          {/* post excerpt */}
          <div className="font-poppins text-gray-500 mb-4 text-justify">
            {post.text}
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
