import "./Hero.css";
import { gsap, useGSAP, SplitText, ScrollSmoother } from "../lib/gsap";
import { useContext, useEffect, useRef } from "react";
import LanguageContext from "../store/LanguageContext";
import parse from "html-react-parser";
import imageSequence from "../lib/imageSequence";
import { useCanvasResize } from "../hooks/useCanvasResize";
import logoPresented from "../assets/logo-presented.png";

function Hero() {
  const heroTitleRef = useRef(null);
  const heroTextRef = useRef(null);
  const langCtx = useContext(LanguageContext);
  const _heroTitle = parse(langCtx.translate("heroTitle"));
  const _heroText = parse(langCtx.translate("heroText"));
  let heroBgFrameCount = 97;
  let heroBgFramesUrl = Array.from(
    { length: heroBgFrameCount },
    (_, i) =>
      new URL(
        `../assets/fintech-bg-frames/fintech-bg-frame${(i + 1)
          .toString()
          .padStart(4, "0")}.png`,
        import.meta.url,
      ).href,
  );
  const heroSectionRef = useRef(null);
  const { canvasRef, height, width } = useCanvasResize();

  useEffect(() => {
    const canvas = canvasRef.current;
    const heroSection = heroSectionRef.current;
    if (!canvas || !heroSection || width === 0 || height === 0) return;

    const sequenceTween = imageSequence({
      urls: heroBgFramesUrl,
      canvas,
      scrollTrigger: {
        trigger: heroSection,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
    });

    // ScrollTrigger.refresh();
    ScrollSmoother.get()?.refresh();

    return () => {
      if (sequenceTween) {
        if (sequenceTween.scrollTrigger) sequenceTween.scrollTrigger.kill();
        sequenceTween.kill();
      }
    };
  }, [width, height, canvasRef, heroBgFramesUrl, langCtx.locale]);

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
      type: "lines, words",
    });

    const textAnim = gsap.from(splitHeroText.lines, {
      y: "100",
      stagger: 0.1,
      ease: "power3",
      opacity: 0,
      duration: 1,
      delay: 1.5,
    });

    return () => {
      if (titleAnim) titleAnim.kill();
      if (textAnim) textAnim.kill();
      splitHeroTitle.revert();
      splitHeroText.revert();
    };
  }, [langCtx.locale]);

  return (
    <section className="hero-container" ref={heroSectionRef} id="sectionHome">
      <canvas id="heroBgCanvas" ref={canvasRef} />
      <h1 className="hero-title" key={langCtx.locale} ref={heroTitleRef}>
        {_heroTitle}
      </h1>
      <p className="hero-text" key={`${langCtx.locale}-text`} ref={heroTextRef}>
        {_heroText}
      </p>
      <div className="logo-presented">
        <img src={logoPresented} alt="" />
      </div>
    </section>
  );
}

export default Hero;
