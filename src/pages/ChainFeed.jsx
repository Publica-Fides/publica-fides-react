import ConceptExplanation from "../components/ConceptExplanation";
import Hero from "../components/Hero";
import ProfileCard from "../components/ProfileCard";
import SvgTransition from "../components/SvgTransition";

const ChainFeed = () => {
  return (
    <main className="leading-normal tracking-normal text-white gradient">
      <Hero />
      <SvgTransition version={1} />
      <ConceptExplanation />
      <ProfileCard />
    </main>
  );
};

export default ChainFeed;
