import IntroSection from "./components/IntroSection";
import Techs from "./components/Techs";

function App() {
  return (
    <main className="flex flex-col gap-12 py-12 text-foreground/80">
      <IntroSection />
      <hr className="container" />
      <Techs />
    </main>
  );
}

export default App;
