import { Tooltip } from "react-tooltip";
import playIcon from "../assets/play-icon.png";
export default function VideoThumbnail({
  tooltipId,
  tooltipContent,
  videoThumb,
  onClick,
}) {
  return (
    <>
      <div
        className="video-thumb"
        data-tooltip-id={tooltipId}
        data-tooltip-content={tooltipContent}
        data-tooltip-float={true}
        data-tooltip-class-name="video-tooltip"
        onClick={onClick}
      >
        <div className="video-border"></div>
        <div className="video-play">
          <img src={playIcon} alt="" />
        </div>
        <img src={videoThumb} alt="" className="video-thumb-img" />
      </div>
      <Tooltip
        id={tooltipId}
        style={{
          backgroundColor: "white",
          width: "12rem",
          color: "var(--main-blue)",
          fontWeight: "600",
          fontSize: "1rem",
        }}
      />
    </>
  );
}
