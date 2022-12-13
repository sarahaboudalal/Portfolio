import { BsCodeSlash, BsCode } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="bg-whitish h-full py-4 md:px-0 px-4 font-poppins border-b-2 border-beige dark:bg-greenish dark:border-night dark:border-opacity-20">
      <div className="flex flex-col justify-center items-center py-5">
        <h3 className="text-greenish font-extrabold md:text-5xl text-3xl py-3 text-center dark:text-beige">
          Welcom to Sarah's Portfolio
        </h3>
        <h3 className="text-greenish font-bold text-2xl py-3 text-center dark:text-beige">
          Hi! I'm Sarah Abou Dalal, a
          <BsCode className="md:inline hidden text-greenish w-12 dark:text-beige" />
          <p className="inline italic mx-2 md:mx-0">
            Front End Web Developer
          </p>
          <BsCodeSlash className="md:inline hidden text-greenish w-12 dark:text-beige" />
        </h3>
        <h3 className="text-greenish font-bold text-xl py-1 text-center dark:text-beige">
          I'm passionate about programming and development.
          <br /> I can make user friendly and functional websites come to life,{' '}
          <br />
          and I have a strong skill-set in problem solving, <br/>creative thinking, and effective
          communication.
        </h3>
        <h3 className="text-greenish font-bold text-xl py-1 dark:text-beige">
          Find more about me{' '}
          <Link to="/about" className="text-night hover:underline dark:text-whitish">
            here
          </Link>
          .
        </h3>
      </div>
    </div>
  );
}
