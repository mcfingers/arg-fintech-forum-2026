import "./LogosSlider.css";
import LogoVisa from "../assets/logo-visa.png";
import LogoBind from "../assets/logo-bind.png";
import LogoPoincenot from "../assets/logo-poincenot.png";

export default function LogosSlider() {
  const logos = [
    {
      id: 1,
      url: LogoVisa,
      alt: "Logo Visa",
    },
    {
      id: 2,
      url: LogoBind,
      alt: "Logo Bind",
    },
    {
      id: 3,
      url: LogoPoincenot,
      alt: "Logo Poincenot",
    },
    {
      id: 4,
      url: LogoVisa,
      alt: "Logo Visa",
    },
    {
      id: 5,
      url: LogoBind,
      alt: "Logo Bind",
    },
    {
      id: 6,
      url: LogoPoincenot,
      alt: "Logo Poincenot",
    },
  ];
  return (
    <section className="section-slider">
      <div className="slider">
        <div className="group">
          {logos.map((logo) => (
            <div className="logo" key={logo.id}>
              <img src={logo.url} alt={logo.alt} className="logo-img" />
            </div>
          ))}
        </div>
        <div className="group">
          {logos.map((logo) => (
            <div className="logo" key={logo.id}>
              <img src={logo.url} alt={logo.alt} className="logo-img" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
