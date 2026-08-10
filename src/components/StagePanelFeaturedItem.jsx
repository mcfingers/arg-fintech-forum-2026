import parse from "html-react-parser";
import LanguageContext from "../store/LanguageContext";
import { useContext } from "react";

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
