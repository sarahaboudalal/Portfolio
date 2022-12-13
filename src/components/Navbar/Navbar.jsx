import React, { useState, useEffect } from 'react';
import logo from '../../assets/images/sarah-sad-01.png';
import { twMerge } from 'tailwind-merge';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { SiUpwork } from 'react-icons/si';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

const classNames = (...classes) => {
  return twMerge(classes);
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.key])

  return (
    <nav className="bg-tarnsparent backdrop-blur-lg px-4 sm:px-12 py-2.5 sticky w-full z-20 top-0 left-0 shadow-md ">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="flex items-center">
          <button
            data-collapse-toggle="navbar-hamburger"
            type="button"
            className=""
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <AiOutlineClose className="text-4xl text-greenish absolute right-8 top-5 cursor-pointer md:hidden dark:text-beige" />
            ) : (
              <FaBars className="text-4xl text-greenish absolute right-8 top-5 cursor-pointer md:hidden dark:text-beige" />
            )}
          </button>
          <Link to="/">
            <img src={logo} alt="logo" class="mr-3 h-12" />
          </Link>
          <div
            className={[
              'items-center justify-between md:flex md:w-auto md:order-1',
              open ? 'flex' : 'hidden',
            ].join(' ')}
          >
            <ul
              className={[
                'text-greenish dark:text-beige font-bold md:text-xl bg-whitish dark:bg-greenish dark:md:bg-transparent md:bg-transparent text-2xl md:flex flex-col md:flex-row md:w-auto md:h-auto gap-x-5 h-screen sm:w-72 w-56',
                open
                  ? 'md:shadow-none shadow-xl md:relative absolute top-0 left-0 md:p-0 px-5 pt-8'
                  : 'left-[-700px] top-[96px] hidden',
              ].join(' ')}
            >
              <li className="md:py-0 py-2">
                <NavLink
                  className={({ isActive }) =>
                    classNames(
                      'cursor-pointer hover:text-night duration-300 dark:hover:text-whitish',
                      isActive ? 'underline text-night dark:text-whitish' : ''
                    )
                  }
                  to="/"
                >
                  Work
                </NavLink>
              </li>
              <li className="md:py-0 py-2">
                <NavLink
                  className={({ isActive }) =>
                    classNames(
                      'cursor-pointer hover:text-night duration-300 dark:hover:text-whitish',
                      isActive ? 'underline text-night dark:text-whitish' : ''
                    )
                  }
                  to="/skills"
                >
                  Skills
                </NavLink>
              </li>
              <li className="md:py-0 py-2">
                <NavLink
                  className={({ isActive }) =>
                    classNames(
                      'cursor-pointer hover:text-night duration-300 dark:hover:text-whitish',
                      isActive ? 'underline text-night dark:text-whitish' : ''
                    )
                  }
                  to="about"
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={[
            'md:flex md:justify-end justify-center gap-x-6 md:mt-0 mt-3',
            open
              ? 'flex absolute md:relative inset-y-44 left-0 md:inset-y-0 px-5'
              : 'hidden',
          ].join(' ')}
        >
          <a
            href="https://github.com/sarahaboudalal"
            rel="noreferrer"
            target="_blank"
            className="text-sm font-medium hover:text-night text-greenish duration-300 dark:text-beige dark:hover:text-whitish"
          >
            <BsGithub className="h-8 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/sarah-abou-dalal-977891250/"
            rel="noreferrer"
            target="_blank"
            className="text-sm font-medium hover:text-night text-greenish duration-300 dark:text-beige dark:hover:text-whitish"
          >
            <BsLinkedin className="h-8 w-6" />
          </a>
          <a
            href="https://www.upwork.com/freelancers/~01fe1bf223c6b52e3e"
            rel="noreferrer"
            target="_blank"
            className="text-sm font-medium hover:text-night text-greenish duration-300 dark:text-beige dark:hover:text-whitish"
          >
            <SiUpwork className="h-8 w-6" />
          </a>
          <a
            href="mailto:sarahaboudalal@gmail.com"
            className="text-sm font-medium hover:text-night text-greenish duration-300 dark:text-beige dark:hover:text-whitish"
          >
            <MdEmail className="h-8 w-6" />
          </a>
        </div>
      </div>
    </nav>
  );
}
