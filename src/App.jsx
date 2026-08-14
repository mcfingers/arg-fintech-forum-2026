import "./App.css";
import { Suspense, lazy } from "react";

import Navbar from "./components/Navbar";
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

const Hero = lazy(() => import("./components/Hero"));

function App() {
  return (
    <Suspense fallback={<div className="loader">Cargando...</div>}>
      <>
        <title>Argentina Fintech Forum 2026</title>
        <meta
          name="description"
          content="Argentina Fintech Forum 2026 es el espacio para discutir las tecnologías, las regulaciones y los modelos de colaboración que harán posible la próxima etapa de evolución de la economía. Un lugar para debatir cómo construir esa infraestructura."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
