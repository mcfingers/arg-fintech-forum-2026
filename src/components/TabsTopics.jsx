import { useState } from "react";
import styles from "./TabsTopics.module.css";
export default function TabsTopics({ panels }) {
  const [activeTab, setActiveTab] = useState(0);

  function handleActiveTab(index) {
    setActiveTab(index);
  }
  return (
    <div className={styles.tabsWrapper} data-speed="1.15">
      <div
        role="tablist"
        aria-label="My Tabs"
        className={styles.tabsButtonsContainer}
      >
        {panels.map((panel, index) => (
          <button
            role="tab"
            id={`tab-${index + 1}`}
            tabIndex={index}
            onFocus={() => handleActiveTab(index)}
            onMouseEnter={() => handleActiveTab(index)}
            className={`${styles.panelButton} ${activeTab === index ? styles.ButtonActive : null}`}
            key={panel.title}
          >
            <img src={panel.iconTopic} alt="" />
            <p>{panel.title}</p>
          </button>
        ))}
      </div>
      <div className={styles.tabsPanelContainer}>
        {panels.map((panel, index) => (
          <div
            id={`$tabpanel-${index + 1}`}
            role="tabpanel"
            aria-labelledby={`$tab-${index + 1}`}
            tabIndex="0"
            className={`${styles.tabPanel} ${activeTab === index ? styles.active : null}`}
            key={index}
            hidden={activeTab === index ? false : true}
          >
            <h3 className={styles.panelTitle}>{panel.title}</h3>
            <ul className={styles.panelTopicList}>
              {panel.topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
