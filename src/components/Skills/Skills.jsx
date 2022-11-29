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
// import {DiIllustrator} from 'react-icons/di'

export default function Skills() {
  return (
    <div className="h-full bg-greenish p-5">
      <h3 className="text-night text-5xl font-extrabold text-center m-3 pb-4">
        Technical Skills
      </h3>
      <div className="flex lg:flex-row flex-col items-center justify-around m-7">
        <p className="text-whitish text-xl font-semibold">
          HTML5
          <SiHtml5 className="inline w-10 mb-1 text-beige" />
        </p>
        <p className="text-whitish text-xl font-semibold">
          CSS3
          <SiCss3 className="inline w-10 mb-1 text-beige" />
        </p>
        <p className="text-whitish text-xl font-semibold">
          JavaScript
          <SiJavascript className="inline w-10 mb-1 text-beige" />
        </p>
        <p className="text-whitish text-xl font-semibold">
          React
          <SiReact className="inline w-10 mb-1 text-beige" />
        </p>
        <p className="text-whitish text-xl font-semibold">
          Tailwind CSS
          <SiTailwindcss className="inline w-10 mb-1 text-beige" />
        </p>
        <p className="text-whitish text-xl font-semibold">
          Bootstrap
          <SiBootstrap className="inline w-10 mb-1 text-beige" />
        </p>
      </div>
      <h3 className="text-night text-5xl font-extrabold text-center m-3 pb-4">
        Experience In
      </h3>
      <div className="flex lg:flex-row flex-col items-center justify-around m-7">
        <p className="text-whitish text-xl font-semibold">Redux Toolkit</p>
        <p className="text-whitish text-xl font-semibold">Firebase</p>
        <p className="text-whitish text-xl font-semibold">
          Object Oriented Programming
        </p>
        <p className="text-whitish text-xl font-semibold">Git & Github</p>
        <p className="text-whitish text-xl font-semibold">
          Responsive Web Design
        </p>
      </div>
      <h3 className="text-night text-5xl font-extrabold text-center m-3 pb-4">
        Also Knows
      </h3>
      <div className="flex lg:flex-row flex-col items-center justify-around m-7">
        <p className="text-whitish text-xl font-semibold">
          Adobe Illustrator
          <SiAdobeillustrator className="inline w-10 mb-1 text-beige" />
        </p>
        <p className="text-whitish text-xl font-semibold">
          Adobe Photoshop
          <SiAdobephotoshop className="inline w-10 mb-1 text-beige" />
        </p>
        <p className="text-whitish text-xl font-semibold">
          Figma
          <SiFigma className="inline w-10 mb-1 text-beige" />
        </p>
        <p className="text-whitish text-xl font-semibold">
          Canva
          <SiCanva className="inline w-10 mb-1 text-beige" />
        </p>
      </div>
    </div>
  );
}
