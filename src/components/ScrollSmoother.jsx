import { useLayoutEffect } from "react";
import {
  ScrollTrigger,
  ScrollSmoother as ScrollSmootherPlugin,
} from "../lib/gsap";

export default function ScrollSmoother({ children }) {
  useLayoutEffect(() => {
    const smoother = ScrollSmootherPlugin.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 2,
      effects: true,
      smoothTouch: 0.1,
      normalizeScroll: true,
    });

    ScrollTrigger.refresh();
    // ScrollSmootherPlugin.get()?.refresh();

    return () => {
      if (smoother) smoother.kill();
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}
