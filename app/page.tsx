import About from "./(components)/about";
import Experience from "./(components)/experience";
import Header from "./(components)/header";
import Hero from "./(components)/hero";
import Skills from "./(components)/skills";

export default function Page() {
  return (
    <div className="overflow-scroll z-0 h-screen text-white bg-stone-800 snap-y snap-mandatory">
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      <section id="skills" className="snap-center">
        <Skills />
      </section>
    </div>
  );
}
