import CTA from "./components/CTA";
import IntroSection from "./components/IntroSection";
import Projects from "./components/Projects";
import Techs from "./components/Techs";

function App() {
  return (
    <main className="flex flex-col gap-12 py-12 text-foreground/80">
      <IntroSection />
      <hr className="container" />
      <Techs />
      <hr className="container" />
      <Projects />
      <hr className="container" />
      <CTA />
      <hr className="container" />
    </main>
  );
}

export default App;
