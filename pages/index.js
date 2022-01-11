import Head from 'next/head';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';

import profilePic from '../public/pawel_small.jpg';
import postData from '../lib/postData';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pawel Lenart</title>
      </Head>

      <div
        className="h-screen bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: 'url(header-background.jpg)' }}
      >
        {/* header */}
        <div className="flex items-center h-screen justify-center">
          <div className="text-center">
            <div className="text-4xl md:text-6xl lg:text-8xl font-bold text-white text-shadow-xl font-catamaran">
              <div className="flex justify-center">
                <div className="relative h-36 w-36 mb-12 rounded-full ring-8">
                  <Image
                    className="rounded-full"
                    src={profilePic}
                    alt="Profile picture of Pawel Lenart"
                  />
                </div>
              </div>
              <div>I&apos;m Pawel Lenart.</div>
              <div className="inline-flex">
                A React&nbsp;
                <div className="bg-red-500 rounded-md pb-1 md:pb-3 px-1">
                  <Typewriter
                    options={{
                      strings: [
                        'Developer.',
                        'Engineer.',
                        'Guy.',
                        'Ninja.',
                        'Hacker.',
                      ],
                      autoStart: true,
                      loop: true,
                      pauseFor: 10000,
                      cursor: '',
                    }}
                  />
                </div>
              </div>
            </div>

            {/* menu */}
            <div className="space-x-8 text-xl text-gray-300 mt-10">
              <button className="ex-menu-item">ABOUT</button>
              <button className="ex-menu-item">PORTFOLIO</button>
              <button className="ex-menu-item">BLOG</button>
              <button className="ex-menu-item">CONTACT</button>
            </div>
          </div>
        </div>
      </div>

      {/* blog */}
      <div>
        <h1 className="text-center font-poppins font-bold text-6xl my-12 text-gray-800">
          Blog
        </h1>
        <div className="flex justify-center">
          {/* posts */}
          {postData.map((post, index) => (
            <div key={index} className="mx-20 w-full max-w-6xl">
              {/* post image */}
              <div className="w-full h-96 relative rounded-lg">
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
          ))}
        </div>
      </div>
    </div>
  );
}
