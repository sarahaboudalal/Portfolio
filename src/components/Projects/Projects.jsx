// import './projects.json'

export default function Projects({ project }) {
  return (
    <div className="flex flex-col max-w-lg bg-beige border border-gray-200 rounded-lg shadow-md">
      <a href={project.siteUrl} rel="noreferrer" target="_blank">
        <img src={project.image} alt={project.name} className='rounded-t-lg mb-1'/>
        <h5 className="mb-2 text-2xl px-4 font-bold tracking-tight text-greenish">
          {project.name}
        </h5>
      </a>
      <p className="mb-3 font-normal text-night px-4">{project.description}</p>
      <p className="text-greenish px-4 pb-3">
        <a
          href={project.codeUrl}
          rel="noreferrer"
          target="_blank"
          className="inline-flex items-center underline"
        >
          Check Code
        </a>{' '}
        |{' '}
        <a
          href={project.siteUrl}
          rel="noreferrer"
          target="_blank"
          className="inline-flex items-center underline"
        >
          Visit Site
        </a>
      </p>
    </div>
  );
}
