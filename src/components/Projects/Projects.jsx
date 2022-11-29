import { BsCartFill, BsFilm } from 'react-icons/bs';
import { TfiWrite } from 'react-icons/tfi';
import { BiMoviePlay, BiGame } from 'react-icons/bi';

export default function Project() {
    return (
      <div className="bg-beige py-8">
      <h3 className="mb-10 text-center underline text-greenish text-4xl font-bold">My Work
          </h3>
        <div className="grid lg:grid-cols-2 grid-cols-1 content-center justify-items-center gap-y-9 gap-x-3">
            
          <div className="flex flex-col max-w-lg p-6 bg-whitish border border-gray-200 rounded-lg shadow-md">
            <BsCartFill className="w-10 h-10 mb-2 text-greenish" />

            <a
              href="https://capstone-dilmun.netlify.app"
              rel="noreferrer"
              target="_blank"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-greenish">
                Dilmun
              </h5>
            </a>
            <p className="mb-3 font-normal text-night ">
              Capstone team project built at Re:Coded bootcamp. Dilmun allows
              people to sell, buy, and even donate products with a click of a
              button. With it's availability in 3 different languages, it also
              helps people to meet and connect online. By signing up with either
              your email, Google, or Facebook account, you'll get to see the
              world we built in Dilmun.
            </p>
            <p className="text-greenish">
              <a
                href="https://github.com/sarahaboudalal/capstone-IQLBPS-Dilmun"
                rel="noreferrer"
                target="_blank"
                className="inline-flex items-center underline"
              >
                Check Code
              </a>{' '}
              |{' '}
              <a
                href="https://capstone-dilmun.netlify.app/"
                rel="noreferrer"
                target="_blank"
                className="inline-flex items-center underline"
              >
                Go to site
              </a>
            </p>
          </div>
          <div className=" flex flex-col max-w-lg p-6 bg-whitish border border-gray-200 rounded-lg shadow-md">
            <TfiWrite className="w-10 h-10 mb-2 text-greenish" />

            <a
              href="https://firebase-react-blog.netlify.app"
              rel="noreferrer"
              target="_blank"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-greenish">
                Firebase Blog
              </h5>
            </a>
            <p className="mb-3 font-normal text-night ">
              A blog website built using firebase authentication and cloud
              store. By signing in using your Google account, you can start
              writing blogs, and you're allowed to delete them later.
            </p>
            <p className="text-greenish align-text-bottom">
              <a
                href="https://github.com/sarahaboudalal/Firebase-Blog"
                rel="noreferrer"
                target="_blank"
                className="inline-flex items-center underline"
              >
                Check Code
              </a>{' '}
              |{' '}
              <a
                href="https://firebase-react-blog.netlify.app"
                rel="noreferrer"
                target="_blank"
                className="inline-flex items-center underline"
              >
                Go to site
              </a>
            </p>
          </div>
          <div className=" flex flex-col max-w-lg p-6 bg-whitish border border-gray-200 rounded-lg shadow-md">
            <BsFilm className="w-10 h-10 mb-2 text-greenish" />

            <a
              href="https://firebase-react-blog.netlify.app"
              rel="noreferrer"
              target="_blank"
            >
              <h5 className="mb-2 text-2xl font-bold text-greenish">
                Shopify Challenge
              </h5>
            </a>
            <p className="mb-3 text-night ">
              A website to search for your favorite movies, nominate the top 5,
              and let the website choose a winner movie for you. Built using
              React.js and styled with Tailwind CSS.
            </p>
            <p className="text-greenish align-text-bottom">
              <a
                href="https://github.com/sarahaboudalal/Shopify-Challenge"
                rel="noreferrer"
                target="_blank"
                className="inline-flex items-center underline"
              >
                Check Code
              </a>{' '}
              |{' '}
              <a
                href="https://shopify-react-challenge.netlify.app"
                rel="noreferrer"
                target="_blank"
                className="inline-flex items-center underline"
              >
                Go to site
              </a>
            </p>
          </div>
          <div className=" flex flex-col max-w-lg p-6 bg-whitish border border-gray-200 rounded-lg shadow-md">
            <BiMoviePlay className="w-10 h-10 mb-2 text-greenish" />

            <a
              href="https://firebase-react-blog.netlify.app"
              rel="noreferrer"
              target="_blank"
            >
              <h5 className="mb-2 text-2xl font-bold text-greenish">
                OOP Movie Project
              </h5>
            </a>
            <p className="mb-3 text-night ">
              A project to practice object-oriented programming in JavaScript.
              Utilizing TMDB API to get movies' and actors' details.
            </p>
            <p className="text-greenish align-text-bottom">
              <a
                href="https://github.com/sarahaboudalal/OOP-Movie-Project"
                rel="noreferrer"
                target="_blank"
                className="inline-flex items-center underline"
              >
                Check Code
              </a>{' '}
              |{' '}
              <a
                href="https://sarahaboudalal.github.io/OOP-Movie-Project/"
                rel="noreferrer"
                target="_blank"
                className="inline-flex items-center underline"
              >
                Go to site
              </a>
            </p>
          </div>
          <div className=" flex flex-col max-w-lg p-6 bg-whitish border border-gray-200 rounded-lg shadow-md">
            <BiGame className="w-10 h-10 mb-2 text-greenish" />

            <a
              href="https://firebase-react-blog.netlify.app"
              rel="noreferrer"
              target="_blank"
            >
              <h5 className="mb-2 text-2xl font-bold text-greenish">
                Mad Libs
              </h5>
            </a>
            <p className="mb-3 text-night ">
              A prohect to practive JavaScript. A game where you fill in the
              blanks of an incomplete story and see your version updating as you
              type.
            </p>
            <p className="text-greenish align-text-bottom">
              <a
                href="https://github.com/sarahaboudalal/Mad-Libs-Project"
                rel="noreferrer"
                target="_blank"
                className="inline-flex items-center underline"
              >
                Check Code
              </a>{' '}
              |{' '}
              <a
                href="https://sarahaboudalal.github.io/Mad-Libs-Project/"
                rel="noreferrer"
                target="_blank"
                className="inline-flex items-center underline"
              >
                Go to site
              </a>
            </p>
          </div>
        </div>
      </div>
    );
}
