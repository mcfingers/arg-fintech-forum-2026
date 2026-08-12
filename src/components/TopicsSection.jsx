import { useContext, useRef } from "react";
import LanguageContext from "../store/LanguageContext";

import "./TopicsSection.css";

import iconTopic1 from "../assets/icon-topics-1.svg";
import iconTopic2 from "../assets/icon-topics-2.svg";
import iconTopic3 from "../assets/icon-topics-3.svg";
import iconTopic4 from "../assets/icon-topics-4.svg";
import iconTopic5 from "../assets/icon-topics-5.svg";
import topicsBg from "../assets/topic-bg.jpg";
import TabsTopics from "./TabsTopics";

export default function TopicsSection() {
  const langCtx = useContext(LanguageContext);
  const sectionRef = useRef();

  const panels = [
    {
      iconTopic: iconTopic1,
      title: langCtx.translate("topic1Title"),
      topics: langCtx.translateArray([
        "topics1Item1",
        "topics1Item2",
        "topics1Item3",
      ]),
    },
    {
      iconTopic: iconTopic2,
      title: langCtx.translate("topic2Title"),
      topics: langCtx.translateArray([
        "topics2Item1",
        "topics2Item2",
        "topics2Item3",
        "topics2Item4",
        "topics2Item5",
      ]),
    },
    {
      iconTopic: iconTopic3,
      title: langCtx.translate("topic3Title"),
      topics: langCtx.translateArray([
        "topics3Item1",
        "topics3Item2",
        "topics3Item3",
        "topics3Item4",
      ]),
    },
    {
      iconTopic: iconTopic4,
      title: langCtx.translate("topic4Title"),
      topics: langCtx.translateArray([
        "topics4Item1",
        "topics4Item2",
        "topics4Item3",
        "topics4Item4",
      ]),
    },
    {
      iconTopic: iconTopic5,
      title: langCtx.translate("topic5Title"),
      topics: langCtx.translateArray([
        "topics5Item1",
        "topics5Item2",
        "topics5Item3",
        "topics5Item4",
      ]),
    },
  ];

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
      <div className="tabs-container">
        <TabsTopics panels={panels} />
      </div>
    </section>
  );
}
