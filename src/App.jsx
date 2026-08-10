import "./App.css";
import { Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import LogosSlider from "./components/LogosSlider";
import StagePanels from "./components/StagePanels";
import ScrollSmoother from "./components/ScrollSmoother";
import ExpoSection from "./components/ExpoSection";
import NumbersSection from "./components/NumbersSection";
import TopicsSection from "./components/TopicsSection";

function App() {
  return (
    <Suspense>
      <>
        <Navbar />
        <ScrollSmoother>
          <Hero />
          <Countdown />
          <LogosSlider />
          <StagePanels />
          <ExpoSection />
          <NumbersSection />
          <TopicsSection />
        </ScrollSmoother>
      </>
    </Suspense>
  );
}

export default App;
