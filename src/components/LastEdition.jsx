import { useContext, useState, useRef } from "react";
import LastEditionBg from "../assets/last-edition-bg.jpg";
import LanguageContext from "../store/LanguageContext";
import vidThumb1 from "../assets/vid-1.jpg";
import vidThumb2 from "../assets/vid-2.jpg";
import vidThumb3 from "../assets/vid-3.jpg";
import vidThumb4 from "../assets/vid-4.jpg";
import vidThumb5 from "../assets/vid-5.jpg";
import vidThumb6 from "../assets/vid-6.jpg";
import vidThumb7 from "../assets/vid-7.jpg";
import vidThumb8 from "../assets/vid-8.jpg";
import imgGallery1 from "../assets/img-1.jpg";
import imgGallery2 from "../assets/img-2.jpg";
import imgGallery3 from "../assets/img-3.jpg";
import imgGallery4 from "../assets/img-4.jpg";
import imgGallery5 from "../assets/img-5.jpg";
import imgGallery6 from "../assets/img-6.jpg";
import imgGallery7 from "../assets/img-7.jpg";
import imgGallery8 from "../assets/img-8.jpg";
import parse from "html-react-parser";

import "./LastEdition.css";
import VideoThumbnail from "./VideoThumbnail";
import VideoModal from "./VideoModal";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";

export default function LastEdition() {
  const langCtx = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrlOpen, setVideoUrlOpen] = useState(null);
  const videosThumbnails = [
    {
      id: 1,
      vidThumb: vidThumb1,
      videoUrl:
        "https://www.youtube.com/embed/-n65iOfhejw?si=Eb-tBcX3edUYPIdg&autoplay=1",
    },
    {
      id: 2,
      vidThumb: vidThumb2,
      videoUrl:
        "https://www.youtube.com/embed/hfsRf-RZT58?si=1n4EuF_TBpBAV1M2&autoplay=1",
    },
    {
      id: 3,
      vidThumb: vidThumb3,
      videoUrl:
        "https://www.youtube.com/embed/hfsRf-RZT58?si=0GvMHVcmwzXCMBye&autoplay=1",
    },
    {
      id: 4,
      vidThumb: vidThumb4,
      videoUrl:
        "https://www.youtube.com/embed/_Pg5c906SXU?si=zdmA_PxJBAxT1OLm&autoplay=1",
    },
    {
      id: 5,
      vidThumb: vidThumb5,
      videoUrl:
        "https://www.youtube.com/embed/vYO1fZiMP6U?si=BsNvgnxmCb-rzdO1&autoplay=1",
    },
    {
      id: 6,
      vidThumb: vidThumb6,
      videoUrl:
        "https://www.youtube.com/embed/D8mU4AoRAz0?si=JkqiiUCUfrTVqyTD&autoplay=1",
    },
    {
      id: 7,
      vidThumb: vidThumb7,
      videoUrl:
        "https://www.youtube.com/embed/irRkTR2Cygs?si=Qq56Z6Xv4BaZKBw2&autoplay=1",
    },
    {
      id: 8,
      vidThumb: vidThumb8,
      videoUrl:
        "https://www.youtube.com/embed/4SWoaNoBGfQ?si=SAmSdMpjSmkWVkSr&autoplay=1",
    },
  ];

  function handleClickVideo(url) {
    setIsOpen(true);
    setVideoUrlOpen(url);
  }

  function handleClose() {
    setIsOpen((prev) => !prev);
  }

  const items = [
    {
      original: imgGallery1,
      thumbnail: imgGallery1,
    },
    {
      original: imgGallery2,
      thumbnail: imgGallery2,
    },
    {
      original: imgGallery3,
      thumbnail: imgGallery3,
    },
    {
      original: imgGallery4,
      thumbnail: imgGallery4,
    },
    {
      original: imgGallery5,
      thumbnail: imgGallery5,
    },
    {
      original: imgGallery6,
      thumbnail: imgGallery6,
    },
    {
      original: imgGallery7,
      thumbnail: imgGallery7,
    },
    {
      original: imgGallery8,
      thumbnail: imgGallery8,
    },
  ];

  const galleryRef = useRef(null);

  return (
    <section
      className="lastedition-section"
      style={{ backgroundImage: `url(${LastEditionBg})` }}
    >
      <h2>{parse(langCtx.translate("lastEditionTitle"))}</h2>
      <p>{langCtx.translate("lastEditionSubtitle")}</p>

      <div className="video-gallery" data-speed="0.9">
        {videosThumbnails.map((video) => (
          <>
            <VideoThumbnail
              key={video.id}
              tooltipContent={langCtx.translate(`videoTooltip${video.id}`)}
              tooltipId={String(video.id)}
              videoThumb={video.vidThumb}
              onClick={() => handleClickVideo(video.videoUrl)}
            />
          </>
        ))}
      </div>
      <VideoModal
        isOpen={isOpen}
        videoUrl={videoUrlOpen}
        onClose={handleClose}
      />
      <div className="pic-gallery-container">
        <ImageGallery
          ref={galleryRef}
          items={items}
          infinite={true}
          showThumbnails={true}
          showFullscreenButton={false}
          showPlayButton={false}
        />
      </div>
    </section>
  );
}
