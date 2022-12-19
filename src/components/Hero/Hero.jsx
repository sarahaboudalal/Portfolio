import { BsCodeSlash, BsCode } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import resume from '../../assets/Files/SarahAbouDalal.pdf';

export default function Hero() {
  return (
    <div className="bg-whitish h-full py-8 drop-shadow-md md:px-0 px-4 font-poppins dark:bg-greenish">
      <div className="flex flex-col justify-center items-center py-5">
        <h3 className="text-night font-extrabold md:text-5xl text-3xl py-3 text-center dark:text-whitish">
          Welcome to Sarah's Portfolio
        </h3>
        <h3 className="text-greenish font-bold md:text-2xl text-xl py-3 text-center dark:text-beige">
          Hi! I'm Sarah Abou Dalal, a
          <BsCode className="md:inline hidden text-greenish w-12 dark:text-beige" />
          <p className="inline italic mx-2 md:mx-0">Front End Web Developer</p>
          <BsCodeSlash className="md:inline hidden text-greenish w-12 dark:text-beige" />
        </h3>
        <h3 className="text-greenish font-bold md:text-xl text-lg py-1 text-center dark:text-beige">
          I'm passionate about programming and development,
          <br />
          and I love to make user-friendly web applications come to life.
        </h3>
        <h3 className="text-greenish font-bold text-xl py-1 dark:text-beige text-center">
          Find more about me{' '}
          <Link
            to="/about"
            className="text-night hover:underline dark:text-whitish"
          >
            here
          </Link>
          .
        </h3>
        <button className="bg-greenish font-semibold px-3 dark:bg-beige text-beige dark:text-greenish rounded-full hover:bg-night hover:text-whitish dark:hover:text-night dark:hover:bg-whitish py-1">
          <a href={resume} download>
            Download Resume
          </a>
        </button>
      </div>
    </div>
  );
}
