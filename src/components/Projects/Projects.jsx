// import './projects.json'

export default function Projects({ project }) {
  return (
    <div className="flex flex-col max-w-lg bg-whitish border border-beige dark:border-greenish rounded-lg shadow-lg hover:shadow-beige dark:hover:shadow-night hover:shadow-xl hover:scale-105 duration-300">
      <a href={project.siteUrl} rel="noreferrer" target="_blank">
        <img
          src={project.image}
          alt={project.name}
          className="rounded-t-lg mb-1"
        />
        <h5 className="mb-2 text-2xl px-4 font-bold tracking-tight text-greenish">
          {project.name}
        </h5>
      </a>
      <p className="mb-3 font-medium text-night px-4">{project.description}</p>
      <p className="text-greenish px-4 pb-6">
        <a
          href={project.codeUrl}
          rel="noreferrer"
          target="_blank"
          className="inline-flex items-center underline hover:font-semibold"
        >
          Check Code
        </a>{' '}
        |{' '}
        <a
          href={project.siteUrl}
          rel="noreferrer"
          target="_blank"
          className="inline-flex items-center underline hover:font-semibold"
        >
          Visit Site
        </a>
      </p>
    </div>
  );
}
