import { BsCodeSlash, BsCode } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="bg-whitish h-full py-4 md:px-0 px-4 border-b-2 border-beige">
      <div className="flex flex-col justify-center items-center py-5">
        <h3 className="text-greenish font-extrabold md:text-5xl text-3xl py-3 text-center">
          Welcome to My Portfolio
        </h3>
        <h3 className="text-greenish font-bold text-2xl py-3 text-center">
          Hi! I'm Sarah Abou Dalal, a
          <BsCode className="md:inline hidden text-greenish w-12" />
          <p className="inline underline mx-2 md:mx-0">
            Front End Web Developer
          </p>
          <BsCodeSlash className="md:inline hidden text-greenish w-12" />
        </h3>
        <h3 className="text-greenish font-bold text-xl py-1 text-center">
          I'm passionate about programming and development.
          <br /> I can help building user friendly and functional websites.{' '}
          <br />
          Well known for problem solving, creative thinking, and effective
          communication.
        </h3>
        <h3 className="text-greenish font-bold text-xl py-1">
          Find more about me{' '}
          <Link to="/about" className="text-night hover:underline">
            here
          </Link>
          .
        </h3>
      </div>
    </div>
  );
}
