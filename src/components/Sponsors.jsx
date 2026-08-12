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
      logoImg: logoVisa,
      logoUrl: "https://www.visa.com.ar/",
    },
    {
      logoImg: logoBind,
      logoUrl: "https://bind.com.ar/",
    },
    {
      logoImg: logoPoincenot,
      logoUrl: "https://poincenot.com/",
    },
  ];

  const MasterLogos = [
    {
      logoImg: logoClevertap,
      logoUrl: "https://clevertap.com/",
    },
    {
      logoImg: logoPagBrasil,
      logoUrl: "https://www.pagbrasil.com/",
    },
  ];

  const PremierLogos = [
    {
      logoImg: logoNave,
      logoUrl: "https://navenegocios.ar/home",
    },
    {
      logoImg: logoIntive,
      logoUrl: "https://www.intive.com/",
    },
    {
      logoImg: logoComplif,
      logoUrl: "https://www.complif.com/",
    },
    {
      logoImg: logoMastercard,
      logoUrl: "https://www.mastercard.com/",
    },
    {
      logoImg: logoEpagos,
      logoUrl: "https://www.epagos.com/",
    },
    {
      logoImg: logoSuga,
      logoUrl: "https://www.sugaway.com/",
    },
    {
      logoImg: logoPss,
      logoUrl: "https://psscorp.tech/",
    },
  ];

  const startupLogos = [
    {
      logoImg: logoLigoPay,
      logoUrl: "https://ligopay.pe/",
    },
    {
      logoImg: logoAkua,
      logoUrl: "https://akua.la/",
    },
    {
      logoImg: logoNosis,
      logoUrl: "https://www.nosis.com/",
    },
  ];
  return (
    <section className="sponsors-section">
      <h2>Sponsors 2026</h2>
      <div className="logos-container">
        <h3>Presented by</h3>
        <div className="presented-by category">
          {presentedByLogos.map((logo) => (
            <a href={logo.logoUrl} target="_blank">
              <img src={logo.logoImg} />
            </a>
          ))}
        </div>
        <h3>Master</h3>
        <div className="master category">
          {MasterLogos.map((logo) => (
            <a href={logo.logoUrl} target="_blank">
              <img src={logo.logoImg} />
            </a>
          ))}
        </div>
        <h3>Premier</h3>
        <div className="premier category">
          {PremierLogos.map((logo) => (
            <a href={logo.logoUrl} target="_blank">
              <img src={logo.logoImg} />
            </a>
          ))}
        </div>
        <h3>Startup</h3>
        <div className="startup category">
          {startupLogos.map((logo) => (
            <a href={logo.logoUrl} target="_blank">
              <img src={logo.logoImg} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
