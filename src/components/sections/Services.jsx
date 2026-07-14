import { services } from "@/data/services";
import {
  Globe,
  Smartphone,
  Brain,
  Cloud,
  Cpu,
  Code,
} from "lucide-react";

const icons = {
  Globe,
  Smartphone,
  Brain,
  Cloud,
  Cpu,
  Code,
};

function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-[#0B1120] text-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-blue-400 font-medium">
            Our Services
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
            Building solutions for the digital world
          </h2>

          <p className="mt-6 text-slate-400 text-lg">
            AM Solutions provides complete software solutions
            from web applications to AI, cloud, and embedded systems.
          </p>
        </div>


        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => {

            const Icon = icons[service.icon];

            return (
              <div
                key={service.title}
                className="
                  group
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-blue-500/50
                  hover:bg-white/10
                "
              >

                <div className="
                  w-14 h-14
                  rounded-xl
                  bg-blue-600/20
                  flex items-center justify-center
                  text-blue-400
                  mb-6
                ">
                  <Icon size={28}/>
                </div>


                <h3 className="text-xl font-semibold">
                  {service.title}
                </h3>


                <p className="mt-4 text-slate-400 leading-relaxed">
                  {service.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Services;