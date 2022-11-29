import { BsCartFill } from 'react-icons/bs';

export default function Project() {
  return (
    <div className="bg-beige py-8 flex flex-row justify-center">
      <div className="max-w-md p-6 bg-whitish border border-gray-200 rounded-lg shadow-md">
        <BsCartFill className="w-10 h-10 mb-2 text-greenish" />

        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-greenish">
            Dilmun
          </h5>
        </a>
        <p className="mb-3 font-normal text-night ">
          Capstone team project built at Re:Coded bootcamp. Dilmun allows people
          to sell, buy, and even donate products with a click of a button. With
          it's availability in 3 different languages, it also helps people to
          meet and connect online. By signing up with either your email, Google,
          or Facebook account, you'll get to see the world we built in Dilmun.
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
    </div>
  );
}
