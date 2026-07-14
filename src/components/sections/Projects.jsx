import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-[#0B1120] text-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-blue-400 font-medium">
            Featured Projects
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
            Solutions we have built
          </h2>

          <p className="mt-6 text-slate-400 text-lg">
            Explore examples of software solutions
            covering AI, web platforms, and connected systems.
          </p>
        </div>


        {/* Projects Grid */}
        <div className="mt-16 grid lg:grid-cols-3 gap-8">

          {projects.map((project) => (

            <a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="
                group
                rounded-2xl
                border
                border-white/10
                bg-white/5
                overflow-hidden
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-blue-500/40
                block
            "
            >

              {/* Image Placeholder */}
             <div
                className="
                    h-48
                    bg-gradient-to-br
                    from-blue-600/20
                    to-cyan-500/10
                    flex
                    items-center
                    justify-center
                    p-8
                "
                >
                {project.image ? (
                    <img
                    src={project.image}
                    alt={project.title}
                    className="max-h-28 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                ) : (
                    <span className="text-slate-300">
                    Project Preview
                    </span>
                )}
                </div>

              <div className="p-8">

                <div className="flex justify-between items-start">

                  <span
                    className="
                    text-sm
                    text-blue-400
                    font-medium
                    "
                  >
                    {project.category}
                  </span>

                  <ArrowUpRight
                    className="
                    text-slate-400
                    group-hover:text-white
                    transition
                    "
                  />

                </div>


                <h3 className="mt-4 text-2xl font-semibold">
                  {project.title}
                </h3>


                <p className="mt-4 text-slate-400 leading-relaxed">
                  {project.description}
                </p>


                <div className="mt-6 flex flex-wrap gap-2">

                  {project.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="
                      px-3
                      py-1
                      rounded-full
                      text-sm
                      bg-white/10
                      text-slate-300
                      "
                    >
                      {tech}
                    </span>

                  ))}

                </div>

              </div>

            </a>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;