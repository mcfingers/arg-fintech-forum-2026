import parse from "html-react-parser";
import LanguageContext from "../store/LanguageContext";
import { useContext } from "react";
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
      <div className="panel-data" data-speed={dataSpeed}>
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
