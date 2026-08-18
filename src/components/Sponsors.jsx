import "./Sponsors.css";
import logoAkua from "../assets/logos/akua.png";
import logoBind from "../assets/logos/bind.jpg";
import logoClevertap from "../assets/logos/clevertap.jpg";
import logoComplif from "../assets/logos/complif.jpg";
import logoEpagos from "../assets/logos/epagos.jpg";
import logoIntive from "../assets/logos/intive.jpg";
import logoLigoPay from "../assets/logos/ligo-pay.png";
import logoMastercard from "../assets/logos/mastercard.jpg";
import logoNave from "../assets/logos/nave.jpg";
import logoNosis from "../assets/logos/nosis.png";
import logoPagBrasil from "../assets/logos/pagbrasil.jpg";
import logoPoincenot from "../assets/logos/poincenot.jpg";
import logoPss from "../assets/logos/pss.jpg";
import logoSuga from "../assets/logos/suga.jpg";
import logoVisa from "../assets/logos/visa.jpg";

export default function Sponsors() {
  const presentedByLogos = [
    {
      id: 1,
      logoImg: logoVisa,
      logoUrl: "https://www.visa.com.ar/",
      imgAlt: "Visa logo",
    },
    {
      id: 2,
      logoImg: logoBind,
      logoUrl: "https://bind.com.ar/",
      imgAlt: "Bind logo",
    },
    {
      id: 3,
      logoImg: logoPoincenot,
      logoUrl: "https://poincenot.com/",
      imgAlt: "Poincenot logo",
    },
  ];

  const MasterLogos = [
    {
      id: 4,
      logoImg: logoClevertap,
      logoUrl: "https://clevertap.com/",
      imgAlt: "Clevertap logo",
    },
    {
      id: 5,
      logoImg: logoPagBrasil,
      logoUrl: "https://www.pagbrasil.com/",
      imgAlt: "PagBrasil logo",
    },
  ];

  const PremierLogos = [
    {
      id: 6,
      logoImg: logoNave,
      logoUrl: "https://navenegocios.ar/home",
      imgAlt: "Nave logo",
    },
    {
      id: 7,
      logoImg: logoIntive,
      logoUrl: "https://www.intive.com/",
      imgAlt: "Intive logo",
    },
    {
      id: 8,
      logoImg: logoComplif,
      logoUrl: "https://www.complif.com/",
      imgAlt: "Complif logo",
    },
    {
      id: 9,
      logoImg: logoMastercard,
      logoUrl: "https://www.mastercard.com/",
      imgAlt: "Mastercard logo",
    },
    {
      id: 10,
      logoImg: logoEpagos,
      logoUrl: "https://www.epagos.com/",
      imgAlt: "Complif logo",
    },
    {
      id: 11,
      logoImg: logoSuga,
      logoUrl: "https://www.sugaway.com/",
      imgAlt: "Suga logo",
    },
    {
      id: 12,
      logoImg: logoPss,
      logoUrl: "https://psscorp.tech/",
      imgAlt: "Pss logo",
    },
  ];

  const startupLogos = [
    {
      id: 13,
      logoImg: logoLigoPay,
      logoUrl: "https://ligopay.pe/",
      imgAlt: "LigoPay logo",
    },
    {
      id: 14,
      logoImg: logoAkua,
      logoUrl: "https://akua.la/",
      imgAlt: "Akua logo",
    },
    {
      id: 15,
      logoImg: logoNosis,
      logoUrl: "https://www.nosis.com/",
      imgAlt: "Nosis logo",
    },
  ];
  return (
    <section className="sponsors-section">
      <h2>Sponsors 2026</h2>
      <div className="logos-container">
        <h3>Presented by</h3>
        <div className="presented-by category">
          {presentedByLogos.map((logo) => (
            <a
              href={logo.logoUrl}
              target="_blank"
              aria-label="Link to sponsor website"
              key={logo.id}
            >
              <img src={logo.logoImg} alt={logo.imgAlt} />
            </a>
          ))}
        </div>
        <h3>Master</h3>
        <div className="master category">
          {MasterLogos.map((logo) => (
            <a
              href={logo.logoUrl}
              target="_blank"
              aria-label="Link to sponsor website"
              key={logo.id}
            >
              <img src={logo.logoImg} alt={logo.imgAlt} />
            </a>
          ))}
        </div>
        <h3>Premier</h3>
        <div className="premier category">
          {PremierLogos.map((logo) => (
            <a
              href={logo.logoUrl}
              target="_blank"
              aria-label="Link to sponsor website"
              key={logo.id}
            >
              <img src={logo.logoImg} alt={logo.imgAlt} />
            </a>
          ))}
        </div>
        <h3>Startup</h3>
        <div className="startup category">
          {startupLogos.map((logo) => (
            <a
              href={logo.logoUrl}
              target="_blank"
              aria-label="Link to sponsor website"
              key={logo.id}
            >
              <img src={logo.logoImg} alt={logo.imgAlt} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
