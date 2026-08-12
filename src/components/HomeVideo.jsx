import HeroVideo from "./HeroVideo";
import Navbar from "./Navbar";
import LogosSlider from "./LogosSlider";
import StagePanels from "./StagePanels";
import ExpoSection from "./ExpoSection";
import NumbersSection from "./NumbersSection";
import TopicsSection from "./TopicsSection";
import ScrollSmoother from "./ScrollSmoother";
import LastEdition from "./LastEdition";
import Sponsors from "./Sponsors";
import Venue from "./Venue";
import Footer from "./Footer";

export default function HomeVideo() {
  return (
    <>
      <Navbar />
      <ScrollSmoother>
        <HeroVideo />
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
  );
}
