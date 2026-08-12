import "./Hero.css";
import { useContext, useRef } from "react";
import LanguageContext from "../store/LanguageContext";
import parse from "html-react-parser";
import logoPresented from "../assets/logo-presented.png";
import Countdown from "./Countdown";
import videoBg from "../assets/video-hero.mp4";
import videoBgPoster from "../assets/hero-poster.jpg";
import dateIcon from "../assets/time-and-calendar.png";
import locationIcon from "../assets/location.png";
import { useGSAP } from "@gsap/react";
import { SplitText, gsap } from "../lib/gsap";

function HeroVideo() {
  const langCtx = useContext(LanguageContext);
  const _heroTitle = parse(langCtx.translate("heroTitle"));
  const _heroText = parse(langCtx.translate("heroText"));
  const heroTitleRef = useRef();
  const heroTextRef = useRef();

  useGSAP(() => {
    const splitHeroTitle = SplitText.create(heroTitleRef.current, {
      type: "lines",
    });

    const titleAnim = gsap.from(splitHeroTitle.lines, {
      y: "-100vh",
      stagger: 0.3,
      ease: "power3",
      opacity: 0,
      duration: 1.5,
    });

    const splitHeroText = SplitText.create(heroTextRef.current, {
      type: "lines",
      autoSplit: true,
      onSplit: (self) => {
        return gsap.from(self.lines, {
          y: "100",
          stagger: 0.1,
          ease: "power3",
          opacity: 0,
          duration: 1,
          delay: 1.5,
        });
      },
    });

    return () => {
      if (titleAnim) titleAnim.kill();
      // if (textAnim) textAnim.kill();
      splitHeroTitle.revert();
      splitHeroText.revert();
    };
  }, [langCtx.locale]);

  return (
    <section
      className="hero-container"
      id="sectionHome"
      style={{ height: "100vh" }}
    >
      <div className="video-bg-container">
        <video
          className="hero-video-background"
          src={videoBg}
          poster={videoBgPoster}
          autoPlay
          muted
          loop
          playsInline
        ></video>
        <div className="overlay"></div>
      </div>
      <div className="logo-presented">
        <img src={logoPresented} alt="" />
      </div>
      <h1 className="hero-title" key={langCtx.locale} ref={heroTitleRef}>
        {_heroTitle}
      </h1>
      <p className="hero-text" key={`${langCtx.locale}-text`} ref={heroTextRef}>
        {_heroText}
      </p>
      <div className="hero-date-place">
        <img src={dateIcon} alt="" />
        <p>{langCtx.translate("heroDate")}</p>
        <p className="separator">|</p>
        <img src={locationIcon} alt="" />
        <p>CEC Centro de Convenciones de Bs. As.</p>
      </div>
      <Countdown />
    </section>
  );
}

export default HeroVideo;
