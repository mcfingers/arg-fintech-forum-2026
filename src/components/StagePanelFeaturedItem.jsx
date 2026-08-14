import parse from "html-react-parser";
import LanguageContext from "../store/LanguageContext";
import { useContext, useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap";

export default function StagePanelFeaturedItem({
  id,
  dataSpeed,
  stagePic,
  stageTitle,
  stageSubtitle,
  features,
  variant,
}) {
  const langCtx = useContext(LanguageContext);
  const featureRef = useRef();

  useGSAP(() => {
    const triggerRef = featureRef.current;
    const features = triggerRef.querySelectorAll(".feature");

    const tween = gsap.from(features, {
      scrollTrigger: {
        trigger: triggerRef,
        start: "top bottom",
        end: "+=800",
        // scrub: 1,
      },
      y: "-50%",
      opacity: 0,
      stagger: 0.5,
    });

    return () => {
      if (tween) {
        if (tween.scrollTrigger) tween.kill();
        tween.kill();
      }
    };
  });

  return (
    <div className={`panel-feature panel-${id}`}>
      <div className="panel-data-title" data-speed={dataSpeed}>
        <h2>{parse(langCtx.translate(stageTitle))}</h2>
        <h3>{langCtx.translate(stageSubtitle)}</h3>
      </div>
      <div
        className="panel-pic"
        style={{ backgroundImage: `url(${stagePic})` }}
        data-speed={dataSpeed}
      >
        <div
          className={!variant ? "panel-pic-border" : "panel-pic-border variant"}
        ></div>
      </div>
      <div
        className={
          !variant ? "features-container" : "features-container-variant"
        }
        ref={featureRef}
      >
        {features.map((feature) => (
          <div key={feature.id} className="feature">
            <img src={feature.iconUrl} alt={feature.text} />
            <p>{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
