import "./Venue.css";
import venueBg from "../assets/numbers-section-bg.png";
import venuePic from "../assets/cec_convenciones_exposiciones1200.jpg";
import LanguageContext from "../store/LanguageContext";
import { useContext } from "react";
import { gsap, useGSAP } from "../lib/gsap";

export default function Venue() {
  const langCtx = useContext(LanguageContext);
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".venue-container",
        start: "top bottom",
        end: "+=800",
        scrub: 1,
        // pin: true,
      },
      defaults: {
        x: "100vw",
        ease: "power2.inOut",
      },
    });
    tl.from(".venue-name", {});
    tl.from(".venue-data", {
      stagger: 0.1,
    });
  });
  return (
    <section
      className="venue-section"
      style={{ backgroundImage: `url(${venueBg})` }}
      id="sectionVenue"
    >
      <h2>Venue</h2>

      <div className="venue-container">
        <div
          className="venue-pic"
          style={{ backgroundImage: `url(${venuePic})` }}
          data-speed="1.1"
        >
          <div className="venue-pic-border"></div>
        </div>
        <div className="venue-info" data-speed="0.95">
          <div className="venue-name">
            CEC Centro de Convenciones de Bs. As.
          </div>
          <div className="venue-data">
            <ul>
              <li>{langCtx.translate("venueDate")}</li>
            </ul>
          </div>
          <div className="venue-data">
            <ul>
              <li>{langCtx.translate("venueTime")}</li>
            </ul>
          </div>
          <div className="venue-data">
            <ul>
              <li>{langCtx.translate("venueAddress")}</li>
            </ul>
          </div>
          <div className="venue-data">
            <ul>
              <li>{langCtx.translate("venueDirections")}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
