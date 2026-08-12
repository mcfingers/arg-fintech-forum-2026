import { Tooltip } from "react-tooltip";
import playIcon from "../assets/play-icon.png";
import { useEffect, useState } from "react";
export default function VideoThumbnail({
  tooltipId,
  tooltipContent,
  videoThumb,
  onClick,
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
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
      {!isMobile && (
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
      )}
    </>
  );
}
