import NumberItem from "./NumberItem";
import iconParticipants from "../assets/trabajo-en-equipo.png";
import iconSponsors from "../assets/fama.png";
import iconPanels from "../assets/conferencia.png";
import iconSpeakers from "../assets/orador-publico.png";
import "./NumbersSection.css";
import LanguageContext from "../store/LanguageContext";
import { useContext, useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap";

export default function NumbersSection() {
  const langCtx = useContext(LanguageContext);
  const numbersRef = useRef();
  useGSAP(
    () => {
      gsap.from(numbersRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: numbersRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: numbersRef },
  );
  return (
    <section className="numbers-section">
      <div className="numbers-container" ref={numbersRef}>
        <NumberItem
          number="5000"
          text={langCtx.translate("numbersParticipants")}
          icon={iconParticipants}
        />
        <NumberItem
          number="64"
          text={langCtx.translate("numbersSponsors")}
          icon={iconSponsors}
        />
        <NumberItem
          number="23"
          text={langCtx.translate("numbersPanels")}
          icon={iconPanels}
        />
        <NumberItem
          number="127"
          text={langCtx.translate("numbersSpeakers")}
          icon={iconSpeakers}
        />
      </div>
    </section>
  );
}
