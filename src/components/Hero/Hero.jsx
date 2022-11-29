import { BsCodeSlash, BsCode } from 'react-icons/bs';

export default function Hero() {
  return (
    <div className="bg-beige h-full p-4">
      <div className="flex flex-col justify-center md:items-center text-start py-5">
        <h3 className="text-greenish font-extrabold text-5xl py-3">
          Welcome to My Portfolio
        </h3>
        <h3 className="text-greenish font-bold text-3xl py-3">
          I'm Sarah, a<BsCode className="inline text-night w-12" />
          <p className="inline underline">Front End Web Developer</p>
          <BsCodeSlash className="inline text-night w-12" />
        </h3>
        <h3 className="text-greenish font-bold text-2xl py-3">
          And honestly... I used to be a Registered Nurse.
        </h3>
        <h3 className="text-greenish font-bold text-xl py-3">
          Find more about me{' '}
          <a
            href="#"
            className="text-greenish hover:underline hover:text-night"
          >
            here
          </a>
          .
        </h3>
      </div>
    </div>
  );
}
