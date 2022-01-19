import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import profilePic from '../public/pawel_small.jpg';

const Header = () => {
  return (
    <div
      className="h-screen bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: 'url(header-background.jpg)' }}
    >
      <div className="relative flex items-center h-screen justify-center">
        <div className="text-center">
          <div className="text-4xl md:text-6xl lg:text-8xl font-bold text-white text-shadow-xl font-catamaran">
            <div className="flex justify-center">
              <div className="relative h-20 w-20 md:h-28 md:w-28 lg:h-36 lg:w-36 mb-12 rounded-full ring-8">
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
                      'Builder.',
                      'Maker.',
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
          <nav className="space-x-8 text-xl text-gray-300 mt-10">
            <button className="ex-menu-item">ABOUT</button>
            <button className="ex-menu-item">PORTFOLIO</button>
            <button className="ex-menu-item">BLOG</button>
            <button className="ex-menu-item">CONTACT</button>
          </nav>
        </div>
        {/* arrow down */}
        <div className="text-white absolute bottom-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 ex-menu-item hover:translate-y-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
