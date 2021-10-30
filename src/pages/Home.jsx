import ConceptExplanation from "../components/ConceptExplanation";
import Hero from "../components/Hero";
import Team from "../components/Team";
import SvgTransition from "../components/SvgTransition";

const Home = () => {
  return (
    <main className="leading-normal tracking-normal text-white gradient">
      <Hero />
      <SvgTransition version={1} />
      <ConceptExplanation />
      <Team />
    </main>
  );
};

export default Home;
