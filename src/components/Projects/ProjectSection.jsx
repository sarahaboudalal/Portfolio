import projects from './projects.json';
import Projects from './Projects';

export default function PorjectSection() {
  return (
    <div className="bg-whitish py-8 md:px-2 px-4 dark:bg-greenish">
      <h3 className="mb-10 text-center overline text-greenish text-4xl font-bold dark:text-beige">
        My Work
          </h3>
          <div className="grid lg:grid-cols-2 grid-cols-1 content-center justify-items-center gap-y-9 gap-x-3">
          {projects.map((project) => (
            <Projects project={project} />
          ))}
          </div>
    </div>
  );
}
