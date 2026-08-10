import expoBg from "../assets/expo-bg.png";
import expoBackstage from "../assets/expo-backstage.jpg";
import iconExpo1 from "../assets/icon-expo-1.png";
import iconExpo2 from "../assets/icon-expo-2.png";
import iconExpo3 from "../assets/icon-expo-3.png";
import "./ExpoSection.css";
import StagePanelFeaturedItem from "./StagePanelFeaturedItem";
import LanguageContext from "../store/LanguageContext";
import { useContext, useEffect } from "react";
import { ScrollSmoother } from "../lib/gsap";

export default function ExpoSection() {
  const langCtx = useContext(LanguageContext);
  const features = [
    {
      id: 1,
      iconUrl: iconExpo1,
      text: langCtx.translate("expoFeatureText1"),
    },
    {
      id: 2,
      iconUrl: iconExpo2,
      text: langCtx.translate("expoFeatureText2"),
    },
    {
      id: 3,
      iconUrl: iconExpo3,
      text: langCtx.translate("expoFeatureText3"),
    },
  ];

  useEffect(() => {
    //ScrollTrigger.refresh();
    ScrollSmoother.get()?.refresh();
  }, []);
  return (
    <section
      className="expo-section"
      style={{ backgroundImage: `url(${expoBg})` }}
    >
      <StagePanelFeaturedItem
        stageTitle="<span>Expo</span>"
        stagePic={expoBackstage}
        features={features}
        dataSpeed={1.1}
        id={1}
        stageSubtitle="expoPanelSubtitle"
        variant={true}
      />
    </section>
  );
}
