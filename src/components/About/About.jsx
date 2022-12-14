import resume from '../../assets/Files/SarahAbouDalal.pdf';
export default function About() {
  return (
    <div className="bg-whitish py-16 px-12 dark:bg-greenish">
      <h3 className="mb-10 text-center overline text-greenish text-4xl font-bold dark:text-beige">
        About Me
      </h3>
      <div className="flex lg:flex-row flex-col md:text-start text-center">
        <img
          src="https://cdn.discordapp.com/attachments/1035620424366698537/1040399760936407140/20221111_005321.jpg"
          alt="profile"
          className="w-72 h-72 lg:self-start self-center md:inline hidden lg:my-0 my-6 rounded-md shadow-lg"
        />
        <div className="px-6 text-2xl my-1 font-medium text-night dark:text-whitish">
          <p className="pb-3">
            I'm a Front End Web Developer with basic knowledge in graphic
            designing. I'm passionate about expanding my knowledge in the tech
            field and solving problems. Well-versed in debugging and building
            responsive and functional web applications, with a strong skill set
            in effective communication and creative thinking, and a background
            in teamwork and collaboration.
          </p>
          <p>
            As for my former education, I studied Nursing at the Lebanese
            University and graduated in 2020. It took me 1 year after graduation
            to realise that I don't want nursing as a career anymore, and that's
            how my career switching journey began. I found myself so fund with
            coding and tech, and I started looking for an opportunity to learn
            more. Eventually I applied to one of{' '}
            <a
              href="https://www.re-coded.com/"
              className="inline underline dark:text-beige text-greenish"
              rel="noreferrer"
              target="_blank"
            >
              Re:Coded
            </a>
            's Front-End bootcamps, and I was one of the lucky people who were
            accepted there. In a period of 5 months, I jumped from someone who
            knows nothing about coding, to a really confident Front End Web
            Developer who's even more ready to learn new things and discover the
            world of tech more profoundly. You can check my success story at
            Re:Coded{' '}
            <a
              className="inline underline dark:text-beige text-greenish"
              href="https://www.re-coded.com/blog/Sarah-success-story"
              rel="noreferrer"
              target="_blank"
            >
              here
            </a>
            .
          </p>
          <p className="pt-3">
            Outside the coding world, I love reading, photography, hiking, and
            embroidering.
          </p>
          <p className="pt-3">
            Click
            <button className="px-2 dark:text-beige text-greenish rounded-lg dark:hover:text-whitish hover:text-night text-center underline">
              <a href={resume} download>
                here
              </a>
            </button>
            to download my resume.
          </p>
        </div>
      </div>
    </div>
  );
}
