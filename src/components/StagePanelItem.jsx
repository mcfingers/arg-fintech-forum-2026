import parse from "html-react-parser";
import LanguageContext from "../store/LanguageContext";
import { useContext, useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap";
import "./StagePanelItem.css";

export default function StagePanelItem({
  id,
  dataSpeed,
  stagePic,
  stageTitle,
  attendees,
  panels,
  speakers,
  picHeight = "30rem",
  borderHeight = "30rem",
}) {
  const langCtx = useContext(LanguageContext);

  const panelDataRef = useRef();

  useGSAP(() => {
    const triggerEl = panelDataRef.current;
    if (!triggerEl) return;

    const tags = triggerEl.querySelectorAll(".panel-data-tag");

    const tween = gsap.from(tags, {
      scrollTrigger: {
        trigger: triggerEl,
        start: "top bottom",
        end: "+=800",
        scrub: 1,
      },
      x: "50%",
      ease: "power2.inOut",
      opacity: 0,
      stagger: 0.5,
    });

    return () => {
      if (tween) {
        if (tween.scrollTrigger) tween.scrollTrigger.kill();
        tween.kill();
      }
    };
  });
  return (
    <div className={`panel panel-${id}`}>
      <div>
        <div
          className="panel-pic"
          style={{ backgroundImage: `url(${stagePic})`, height: picHeight }}
          data-speed={dataSpeed}
        >
          <div
            className="panel-pic-border"
            style={{ height: borderHeight }}
          ></div>
        </div>
      </div>
      <div className="panel-data" data-speed={dataSpeed} ref={panelDataRef}>
        <div className="panel-data-title">
          <h2>{parse(langCtx.translate(stageTitle))}</h2>
        </div>
        <div className="panel-data-tag">
          <span>{attendees}</span> {langCtx.translate("panelDataAttendees")}
        </div>
        <div className="panel-data-tag">
          <span>{panels}</span> {langCtx.translate("panelDataPanels")}
        </div>
        <div className="panel-data-tag">
          <span>{speakers}</span> {langCtx.translate("panelDataSpeakers")}
        </div>
      </div>
    </div>
  );
}
