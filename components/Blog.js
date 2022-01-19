import postData from '../lib/postData';
import BlogPost from './BlogPost';

const Blog = () => {
  return (
    <section name="blog">
      <h1 className="text-center font-poppins font-bold text-6xl my-12 text-gray-800">
        Blog
      </h1>
      <div className="flex flex-col items-center">
        {/* posts */}
        {postData.map((post, index) => (
          <BlogPost key={index} post={post} />
        ))}
      </div>
    </section>
  );
};

export default Blog;
