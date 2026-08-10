import { useContext, useRef } from "react";
import LanguageContext from "../store/LanguageContext";

import "./TopicsSection.css";
import { gsap, useGSAP } from "../lib/gsap";

import iconTopic1 from "../assets/icon-topics-1.svg";
import iconTopic2 from "../assets/icon-topics-2.svg";
import iconTopic3 from "../assets/icon-topics-3.svg";
import iconTopic4 from "../assets/icon-topics-4.svg";
import iconTopic5 from "../assets/icon-topics-5.svg";
import topicsBg from "../assets/topic-bg.jpg";
import TopicPanel from "./TopicPanel";

export default function TopicsSection() {
  const langCtx = useContext(LanguageContext);
  const trackRef = useRef();
  const sectionRef = useRef();
  const topics1 = ["topics1Item1", "topics1Item2", "topics1Item3"];
  const topics2 = [
    "topics2Item1",
    "topics2Item2",
    "topics2Item3",
    "topics2Item4",
    "topics2Item5",
  ];
  const topics3 = [
    "topics3Item1",
    "topics3Item2",
    "topics3Item3",
    "topics3Item4",
  ];
  const topics4 = [
    "topics4Item1",
    "topics4Item2",
    "topics4Item3",
    "topics4Item4",
  ];
  const topics5 = [
    "topics5Item1",
    "topics5Item2",
    "topics5Item3",
    "topics5Item4",
  ];

  useGSAP(
    () => {
      const track = trackRef.current;

      gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${track.scrollWidth - window.innerWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true, // recalcula el "end" si cambia el tamaño de ventana/contenido
          //   snap: {
          //     snapTo: 1 / (gsap.utils.toArray(".h-panel", track).length - 1),
          //     duration: { min: 0.2, max: 0.6 },
          //     ease: "power1.inOut",
          //     delay: 0.15,
          //   },
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="sectionTopics"
      className="topics-section"
      ref={sectionRef}
      style={{ backgroundImage: `url(${topicsBg})` }}
    >
      <h2>
        {langCtx.translate("topicsSectionTitle")} <span>2026</span>
      </h2>
      <div className="horizontal-track" ref={trackRef}>
        <TopicPanel
          icon={iconTopic1}
          title={langCtx.translate("topic1Title")}
          topics={langCtx.translateArray(topics1)}
        />
        <TopicPanel
          icon={iconTopic2}
          title={langCtx.translate("topic2Title")}
          topics={langCtx.translateArray(topics2)}
        />
        <TopicPanel
          icon={iconTopic3}
          title={langCtx.translate("topic3Title")}
          topics={langCtx.translateArray(topics3)}
        />
        <TopicPanel
          icon={iconTopic4}
          title={langCtx.translate("topic4Title")}
          topics={langCtx.translateArray(topics4)}
        />
        <TopicPanel
          icon={iconTopic5}
          title={langCtx.translate("topic5Title")}
          topics={langCtx.translateArray(topics5)}
        />
      </div>
    </section>
  );
}
