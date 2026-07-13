import { company } from "../../data/company";
import { Button } from "@/components/ui/button";
import Container from "../ui/Container";
import { motion } from "framer-motion";
import developerHero from "@/assets/illustrations/developer-hero.svg";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gray-900 text-white flex items-center"
    >
     <Container>    
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">

        {/* Left Side */}
        <div>
            <span className="inline-block bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
            🚀 Full-Service Software Company
            </span>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mt-6">
            {company.name}
            </h1>

            <p className="mt-6 text-xl text-gray-300 max-w-xl">
            {company.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
                <Button size="lg" asChild>
                    <a href="#projects">View Our Work</a>
                </Button>

                <Button variant="outline" size="lg" asChild>
                    <a href="#contact">Contact Us</a>
                </Button>
                </div>
        </div>

        {/* Right Side */}
            <div className="flex justify-center">
            <motion.img
                src={developerHero}
                alt="NovaTech software development"
                className="w-[420px] lg:w-[520px]"
                animate={{
                y: [0, -15, 0],
                }}
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