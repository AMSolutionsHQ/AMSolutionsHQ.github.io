import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Projects from "./components/sections/Projects";
import Team from "./components/sections/Team";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      {/* <Team /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;