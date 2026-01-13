import "./App.css";
import { useEffect, useState } from "react";
import SplashCursor from "./ui/SplashCursor";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import IntroAnimation from "./components/IntroAnimation";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  useEffect(() => {
    // Prevent browser restoring previous scroll position
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    // Force small scroll first to trigger smooth animation
    window.scrollTo(0, 10);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  }, []);

  return (
    <>
      {showIntro && <IntroAnimation onFinish={() => setShowIntro(false)} />}
      {!showIntro && (
        <>
          <SplashCursor />
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </>
      )}
    </>
  );
}

export default App;
