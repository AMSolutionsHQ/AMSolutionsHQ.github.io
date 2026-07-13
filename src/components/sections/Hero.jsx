import { company } from "../../data/company";
import Container from "../ui/Container";
import { motion } from "framer-motion";
import developerHero from "@/assets/illustrations/developer-hero.svg";

function Hero() {
  return (
    <section
      id="home"
      className="bg-gray-900 text-white flex items-center pt-24 lg:pt-0 min-h-screen"
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center py-12 lg:min-h-screen">

          {/* Left Side */}
          <div className="space-y-6">

            {/* Badge */}
            <span className="inline-flex items-center rounded-full bg-blue-600/20 px-4 py-2 text-xs sm:text-sm font-medium text-blue-400">
              🚀 Full-Service Software Company
            </span>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              {company.name}
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-300 max-w-xl">
              {company.description}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">

              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:-translate-y-1"
              >
                View Our Work
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border-2 border-white px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-slate-900 hover:-translate-y-1"
              >
                Contact Us
              </a>

            </div>

          </div>

          {/* Right Side */}
          <div className="flex justify-center order-first lg:order-last">

            <motion.img
              src={developerHero}
              alt="NovaTech software development"
              className="w-full max-w-xs sm:max-w-md lg:max-w-xl"
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

          </div>

        </div>
      </Container>
    </section>
  );
}

export default Hero;