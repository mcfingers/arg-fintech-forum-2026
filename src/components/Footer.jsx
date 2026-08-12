import { useContext } from "react";
import LanguageContext from "../store/LanguageContext";
import "./Footer.css";
import { BsLinkedin, BsInstagram, BsTwitterX, BsYoutube } from "react-icons/bs";
import footerListLinksIcon from "../assets/chevron.png";
import footerListLocationIcon from "../assets/location-icon.png";
import footerListDateIcon from "../assets/clock-icon.png";

export default function Footer() {
  const langCtx = useContext(LanguageContext);
  const socials = [
    {
      social: "Linkedin",
      icon: <BsLinkedin />,
      url: "https://www.linkedin.com/company/camara-argentina-de-fintech/",
    },
    {
      social: "Instagram",
      icon: <BsInstagram />,
      url: "https://www.instagram.com/camarafintechar/",
    },
    {
      social: "Twitter",
      icon: <BsTwitterX />,
      url: "https://x.com/CamaraFintechAr",
    },
    {
      social: "Youtube",
      icon: <BsYoutube />,
      url: "https://www.youtube.com/@camaraargentinafintech",
    },
  ];
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-col">
          <h3 className="footer-title">Argentina Fintech Forum</h3>
          <p className="footer-subtitle">
            {langCtx.translate("footerSubtitle")}
          </p>
          <div className="footer-social">
            {socials.map((social) => (
              <a href={social.url} key={social.social} className="social-link">
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-col">
          <h4>{langCtx.translate("footerSectionsTitle")}</h4>
          <ul>
            <li
              className="footer-list links"
              style={{ "--links-icon": `url(${footerListLinksIcon})` }}
            >
              <a href="#sectionHome">{langCtx.translate("footerLinkHome")}</a>
            </li>
            <li
              className="footer-list links"
              style={{ "--links-icon": `url(${footerListLinksIcon})` }}
            >
              <a href="#sectionEvent">{langCtx.translate("footerLinkEvent")}</a>
            </li>
            <li
              className="footer-list links"
              style={{ "--links-icon": `url(${footerListLinksIcon})` }}
            >
              <a href="#sectionVenue">{langCtx.translate("footerLinkVenue")}</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>{langCtx.translate("footerSectionsTitle2")}</h4>
          <ul>
            <li
              className="footer-list location"
              style={{ "--location-icon": `url(${footerListLocationIcon})` }}
            >
              CEC Centro de Convenciones de Bs. As.
              <br />
              Av. Figueroa Alcorta 2099, CABA
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>{langCtx.translate("footerSectionsTitle3")}</h4>
          <ul>
            <li
              className="footer-list date"
              style={{ "--date-icon": `url(${footerListDateIcon})` }}
            >
              {langCtx.translate("footerDate")}
            </li>
          </ul>
        </div>
        <div className="footer-copyright">
          <p>
            &copy; Copyright <span>Argentina Fintech Forum</span>{" "}
            {langCtx.translate("footerCopyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
