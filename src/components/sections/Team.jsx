import { team } from "@/data/team";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Team() {
  return (
    <section
      id="team"
      className="py-24 bg-[#0B1120] text-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">

          <span className="text-blue-400 font-medium">
            Our Team
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
            Meet the engineers behind AM Solutions
          </h2>

          <p className="mt-6 text-slate-400 text-lg">
            A passionate team building innovative software,
            AI, cloud, and embedded solutions.
          </p>

        </div>


        {/* Team Cards */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {team.map((member) => (

            <div
              key={member.name}
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-8
                text-center
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-blue-500/40
              "
            >

              {/* Image */}
              <img
                src={member.image}
                alt={member.name}
                className="
                  mx-auto
                  h-32
                  w-32
                  rounded-full
                  object-cover
                  border
                  border-white/10
                "
              />


              <h3 className="mt-6 text-xl font-semibold">
                {member.name}
              </h3>


              <p className="mt-2 text-blue-400">
                {member.role}
              </p>


              <p className="mt-4 text-slate-400 leading-relaxed">
                {member.description}
              </p>


              <div className="mt-6 flex justify-center gap-4">

                <a
                  href={member.github}
                  className="text-slate-400 hover:text-white transition"
                >
                  <FaGithub size={22} />
                </a>


                <a
                  href={member.linkedin}
                  className="text-slate-400 hover:text-white transition"
                >
                  <FaLinkedin size={22} />
                </a>

              </div>


            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Team;