import { useContext, useEffect } from "react";
import { ScrollSmoother } from "../lib/gsap";
import LanguageContext from "../store/LanguageContext";
import "./StagePanels.css";
import sectionPanelsBg from "../assets/stage-panels-bg.jpg";
import stage1 from "../assets/stage-1.jpg";
import stage2 from "../assets/stage-2.jpg";
import stage3 from "../assets/stage-3.jpg";
import featureIcon1 from "../assets/ic-ws-1.png";
import featureIcon2 from "../assets/ic-ws-2.png";
import featureIcon3 from "../assets/ic-ws-3.png";
import StagePanelItem from "./StagePanelItem";
import StagePanelFeaturedItem from "./StagePanelFeaturedItem";

export default function StagePanels() {
  const langCtx = useContext(LanguageContext);
  const features = [
    {
      id: 1,
      iconUrl: featureIcon1,
      text: langCtx.translate("featureText1"),
    },
    {
      id: 2,
      iconUrl: featureIcon2,
      text: langCtx.translate("featureText2"),
    },
    {
      id: 3,
      iconUrl: featureIcon3,
      text: langCtx.translate("featureText3"),
    },
  ];

  useEffect(() => {
    // ScrollTrigger.refresh();
    ScrollSmoother.get()?.refresh();
  }, []);

  return (
    <section
      id="sectionEvent"
      className="section-stage-panels"
      style={{ backgroundImage: `url(${sectionPanelsBg})` }}
    >
      <h2 className="title">{langCtx.translate("stagePanelsTitle")}</h2>
      <p className="text">{langCtx.translate("stagePanelsText")}</p>
      <div>
        <div className="stage-panel-container">
          <StagePanelItem
            id={1}
            stagePic={stage1}
            stageTitle="stagePanelRoom1"
            attendees="+2000"
            panels="15"
            speakers="55"
            dataSpeed="1.1"
          />
          <StagePanelItem
            id={2}
            stagePic={stage2}
            stageTitle="stagePanelRoom2"
            attendees="+500"
            panels="10"
            speakers="30"
            dataSpeed="1.05"
          />
          <StagePanelFeaturedItem
            id={3}
            stagePic={stage3}
            stageTitle="stagePanelRoom3"
            features={features}
            dataSpeed="0.95"
            stageSubtitle="stagePanelSubtitle"
          />
        </div>
      </div>
      <div className="stage-footer" data-speed="0.9">
        <p>{langCtx.translate("stageFooter")}</p>
      </div>
    </section>
  );
}
