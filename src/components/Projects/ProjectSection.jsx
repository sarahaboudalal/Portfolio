import projects from './projects.json';
import Projects from './Projects';

export default function ProjectSection() {
  return (
    <div className="bg-whitish py-14 md:px-4 px-6  dark:bg-greenish">
      <h3 className="mb-10 text-center overline text-greenish text-4xl font-bold dark:text-beige">
        My Work
      </h3>
      <div className="grid lg:grid-cols-3 grid-cols-1 content-center justify-evenly justify-items-center gap-y-9 gap-x-5">
        {projects.map((project) => (
          <Projects key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
