export default function About() {
  return (
    <div className="bg-whitish py-16 px-12 dark:bg-greenish">
      <h3 className="mb-10 text-center overline text-greenish text-4xl font-bold dark:text-beige">
        About Me
      </h3>
      <div className="flex lg:flex-row flex-col">
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
          responsive and functional websites, with a strong skill set in
          effective communication and creative thinking, and a background in
          teamwork and collaboration.
          </p>
          <p>
          As for my former education, I studied Nursing at the Lebanese
          University and graduated in 2020. It took me 1 year after graduation
          to realise that I don't want nursing as a career anymore, and that's
          how my career switching journey began. I found myself so fund with
          coding and tech, and I started looking for an oportunity to learn
          more. Eventually I applied to one of Re:Coded's Front-End
          bootcamps, and I was one of the lucky people who were accepted there.
          In a period of 5 months, I jumped from someone who knew nothing about
          coding, to a really confident Front End Web Developer who's even more
          ready to learn new things and discover the world of tech more deeply.
          </p>
          <p className="pt-3">
          Outside the coding world, I love reading, photography, hiking, and
            embroidering.
          </p>
        </div>
      </div>
    </div>
  );
}
