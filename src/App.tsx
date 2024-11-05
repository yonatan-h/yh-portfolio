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
    </main>
  );
}

export default App;
