import React from 'react';
import { MdEmail } from 'react-icons/md';
import { SiUpwork } from 'react-icons/si';
import { BsGithub, BsLinkedin} from 'react-icons/bs';

export default function Navbar() {
  return (
    <div>
      <nav className="bg-greenish">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-6">
          <div className="flex items-center">
            <img
              src="https://cdn.discordapp.com/attachments/1031834305703460906/1047509861354700911/sad-01.png"
              className="mr-3 h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center hover:text-redish text-whitish text-3xl font-bold">
              Sarah Abou Dalal
            </span>
          </div>
          <div className="flex items-center">
            <a
              href="https://github.com/sarahaboudalal"
              className="mr-6 text-sm font-medium hover:text-beige text-whitish"
            >
              <BsGithub className="h-8 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/sarah-abou-dalal-977891250/"
              className="mr-6 text-sm font-medium hover:text-beige text-whitish"
            >
              <BsLinkedin className="h-8 w-4" />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01fe1bf223c6b52e3e"
              className="mr-6 text-sm font-medium hover:text-beige text-whitish"
            >
              <SiUpwork className="h-8 w-4" />
            </a>
            <a
              href="mailto:sarahaboudalal@gmail.com"
              className="text-sm font-medium hover:text-beige text-whitish"
            >
              <MdEmail className="h-8 w-4" />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

// <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
