import About from "../About/About";
import ContactForm from "../Contact/Contact";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
// import DisplayService from "../Services/displayService";
import Skills from "../Skills/Skills";
import { LayoutGridDemo } from "../test/testing";

const MainPage = () => {
  return (
    <main className="flex flex-col flex-1 p-4">
      <Hero/>
      <About />
      <Skills/>
      <LayoutGridDemo />
      <Projects />
      <ContactForm/>
    </main>
  );
};

export default MainPage;
