import projects from './projects.json';
import Projects from './Projects';

export default function ProjectSection() {
  return (
    <div className="bg-whitish py-14 md:px-2 px-4 ">
      <h3 className="mb-10 text-center overline text-greenish text-4xl font-bold">
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
