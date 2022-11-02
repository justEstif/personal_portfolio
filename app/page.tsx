import Header from "./(components)/header";
import Hero from "./(components)/hero";

export default function Page() {
  return (
    <div className="overflow-scroll z-0 h-screen text-white bg-stone-800 snap-y snap-mandatory">
      <Header />
      <section id="hero" className="snap-center">
        <Hero />
      </section>
    </div>
  );
}
