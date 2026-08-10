import { useContext } from "react";
import LanguageContext from "../store/LanguageContext";
import "./Countdown.css";

export default function Countdown() {
  const langCtx = useContext(LanguageContext);
  const targetDate = new Date("2026-10-29T00:00:00").getTime();
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  return (
    <section className="countdown-section">
      {distance <= 0 && <p>{langCtx.translate("countdownFinalize")}</p>}
      {distance > 0 && (
        <div className="cd-container">
          <div className="days">
            <p className="number">{days}</p>
            <p className="text">{langCtx.translate("countdownDays")}</p>
          </div>
          <div className="hours">
            <p className="number">{hours}</p>
            <p className="text">{langCtx.translate("countdownHours")}</p>
          </div>
          <div className="minutes">
            <p className="number">{minutes}</p>
            <p className="text">{langCtx.translate("countdownMinutes")}</p>
          </div>
        </div>
      )}
    </section>
  );
}
