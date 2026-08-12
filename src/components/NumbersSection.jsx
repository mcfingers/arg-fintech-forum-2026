import NumberItem from "./NumberItem";
import iconParticipants from "../assets/trabajo-en-equipo.png";
import iconSponsors from "../assets/fama.png";
import iconPanels from "../assets/conferencia.png";
import iconSpeakers from "../assets/orador-publico.png";
import "./NumbersSection.css";
import LanguageContext from "../store/LanguageContext";
import { useContext } from "react";

export default function NumbersSection() {
  const langCtx = useContext(LanguageContext);
  return (
    <section className="numbers-section">
      <div className="numbers-container">
        <NumberItem
          number="500"
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
