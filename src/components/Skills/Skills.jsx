import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiTailwindcss,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiCanva,
  SiFigma,
} from 'react-icons/si';
import { ImGit, ImGithub } from 'react-icons/im';

export default function Skills() {
  return (
    <div className="h-full bg-whitish py-16 dark:bg-greenish px-3">
      <p className="mb-10 text-center overline text-greenish text-4xl font-bold dark:text-beige">
        My Skills
      </p>
      <div className="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 content-center justify-evenly justify-items-center gap-y-9 gap-x-5">
        <p className="text-greenish text-xl text-center font-semibold dark:text-beige">
          React
          <SiReact className="inline w-10 mb-1 text-night dark:text-whitish" />
        </p>
        <p className="text-greenish text-xl text-center font-semibold dark:text-beige">
          JavaScript
          <SiJavascript className="inline w-10 mb-1 text-night dark:text-whitish" />
        </p>
        <p className="text-greenish text-xl text-center font-semibold dark:text-beige">
          HTML 5
          <SiHtml5 className="inline w-10 mb-1 text-night dark:text-whitish" />
        </p>
        <p className="text-greenish text-xl text-center font-semibold dark:text-beige">
          CSS 3
          <SiCss3 className="inline w-10 mb-1 text-night dark:text-whitish" />
        </p>
        <p className="text-greenish text-xl text-center font-semibold dark:text-beige">
          Tailwind CSS
          <SiTailwindcss className="inline w-10 mb-1 text-night dark:text-whitish" />
        </p>
        <p className="text-greenish text-xl text-center font-semibold dark:text-beige">
          Bootstrap
          <SiBootstrap className="inline w-10 mb-1 text-night dark:text-whitish" />
        </p>
        <p className="text-greenish text-xl text-center font-semibold dark:text-beige">
          Git
          <ImGit className="inline w-10 mb-1 text-night dark:text-whitish" />
        </p>
        <p className="text-greenish text-xl text-center font-semibold dark:text-beige">
          Github
          <ImGithub className="inline w-10 mb-1 text-night dark:text-whitish" />
        </p>
        <p className="text-greenish text-xl text-center font-semibold dark:text-beige">
          Redux Toolkit
        </p>
        <p className="text-greenish text-xl text-center font-semibold dark:text-beige">
          Firebase
        </p>
        <p className="text-greenish text-xl font-semibold  text-center dark:text-beige">
          Object Oriented Programming
        </p>
        <p className="text-greenish text-xl text-center font-semibold dark:text-beige">
          Responsive Web Design
        </p>
        <p className="text-greenish text-xl text-center font-semibold dark:text-beige">
          Jest
        </p>
        <p className="text-greenish text-xl text-center font-semibold dark:text-beige">
          React Testing Library
        </p>
        <p className="text-greenish text-xl text-center font-semibold dark:text-beige">
          Adobe Illustrator
          <SiAdobeillustrator className="inline w-10 mb-1 text-night dark:text-whitish" />
        </p>
        <p className="text-greenish text-xl text-center font-semibold dark:text-beige">
          Adobe Photoshop
          <SiAdobephotoshop className="inline w-10 mb-1 text-night dark:text-whitish" />
        </p>
        <p className="text-greenish text-xl text-center font-semibold dark:text-beige ">
          Figma
          <SiFigma className="inline w-10 mb-1 text-night dark:text-whitish" />
        </p>
        <p className="text-greenish text-xl text-center font-semibold dark:text-beige ">
          Canva
          <SiCanva className="inline w-10 mb-1 text-night dark:text-whitish" />
        </p>
      </div>
    </div>
  );
}

// <div className="h-full bg-whitish py-16 dark:bg-greenish">
//   <h3 className="text-night  text-5xl font-extrabold text-center m-3 pb-4 dark:text-whitish">
//     Technical Skills
//   </h3>
//   <div className="flex lg:flex-row flex-col items-center justify-around m-7">
//     <p className="text-greenish text-xl font-semibold dark:text-beige">
//       HTML 5
//       <SiHtml5 className="inline w-10 mb-1 text-night dark:text-whitish" />
//     </p>
//     <p className="text-greenish text-xl font-semibold dark:text-beige">
//       CSS 3
//       <SiCss3 className="inline w-10 mb-1 text-night dark:text-whitish" />
//     </p>
//     <p className="text-greenish text-xl font-semibold dark:text-beige">
//       JavaScript
//       <SiJavascript className="inline w-10 mb-1 text-night dark:text-whitish" />
//     </p>
//     <p className="text-greenish text-xl font-semibold dark:text-beige">
//       React.js
//       <SiReact className="inline w-10 mb-1 text-night dark:text-whitish" />
//     </p>
//     <p className="text-greenish text-xl font-semibold dark:text-beige">
//       Tailwind CSS
//       <SiTailwindcss className="inline w-10 mb-1 text-night dark:text-whitish" />
//     </p>
//     <p className="text-greenish text-xl font-semibold dark:text-beige">
//       Bootstrap
//       <SiBootstrap className="inline w-10 mb-1 text-night dark:text-whitish" />
//     </p>
//   </div>
//   <h3 className="text-night  text-5xl font-extrabold text-center m-3 pb-4 dark:text-whitish">
//     Experienced In
//   </h3>
//   <div className="flex lg:flex-row flex-col items-center justify-around m-7">
//   </div>
//   <h3 className="text-night  text-5xl font-extrabold text-center m-3 pb-4 dark:text-whitish">
//     Knowledge In
//   </h3>
//   <div className="flex lg:flex-row flex-col items-center justify-around m-7">
//   </div>
// </div>
