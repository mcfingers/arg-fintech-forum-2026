import "./App.css";
import { Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogosSlider from "./components/LogosSlider";
import StagePanels from "./components/StagePanels";
import ScrollSmoother from "./components/ScrollSmoother";
import ExpoSection from "./components/ExpoSection";
import NumbersSection from "./components/NumbersSection";
import TopicsSection from "./components/TopicsSection";
import LastEdition from "./components/LastEdition";
import Sponsors from "./components/Sponsors";
import Venue from "./components/Venue";
import Footer from "./components/Footer";

function App() {
  return (
    <Suspense>
      <>
        <Navbar />
        <ScrollSmoother>
          <Hero />
          <LogosSlider />
          <StagePanels />
          <ExpoSection />
          <NumbersSection />
          <TopicsSection />
          <LastEdition />
          <Sponsors />
          <Venue />
          <Footer />
        </ScrollSmoother>
      </>
    </Suspense>
  );
}

export default App;
