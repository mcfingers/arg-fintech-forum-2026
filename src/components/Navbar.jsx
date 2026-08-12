import { useContext, useState } from "react";
import LanguageContext from "../store/LanguageContext";
import "./Navbar.css";
import LogoMenu from "../assets/logo-menu.png";
import { BsLinkedin, BsInstagram, BsTwitterX, BsYoutube } from "react-icons/bs";

export default function Navbar() {
  const langCtx = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleLang = (lng) => {
    langCtx.setLocale(lng);
  };

  const menuItems = [
    {
      content: "menuHome",
      section: "#sectionHome",
    },
    {
      content: "menuEvent",
      section: "#sectionEvent",
    },
    {
      content: "menuTickets",
      section: "#sectionTickets",
    },
    {
      content: "menuKeyTopics",
      section: "#sectionTopics",
    },
    {
      content: "menuVenue",
      section: "#sectionVenue",
    },
  ];

  const socialLinks = [
    {
      url: "https://www.linkedin.com/company/camara-argentina-de-fintech/",
      icon: <BsLinkedin />,
    },
    {
      url: "https://www.instagram.com/camarafintechar/",
      icon: <BsInstagram />,
    },
    {
      url: "https://x.com/CamaraFintechAr",
      icon: <BsTwitterX />,
    },
    {
      url: "https://www.youtube.com/@camaraargentinafintech",
      icon: <BsYoutube />,
    },
  ];

  function handleMenuClick() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className="navbar-header">
      <nav className="navbar">
        <div>
          <img
            src={LogoMenu}
            alt="Logo de Argentina Fintech Forum 2026"
            className="logo-menu"
          />
        </div>
        <div
          className={`navbar-menu ${isOpen ? "menu-mobile-open" : "menu-mobile-close"}`}
        >
          <ul className="menu-container">
            {menuItems.map((item) => (
              <li key={item.content}>
                <a href={item.section} onClick={handleMenuClick}>
                  {langCtx.translate(item.content)}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="lang-switch">
          <button
            onClick={() => handleLang("es")}
            className={langCtx.locale === "es" ? "active" : null}
          >
            ES
          </button>
          <button
            onClick={() => handleLang("en")}
            className={langCtx.locale === "en" ? "active" : null}
          >
            EN
          </button>
        </div>
        <div className="navbar-social">
          <ul className="social-links">
            {socialLinks.map((social) => (
              <li key={social.url}>
                <a href={social.url} target="_blank" className="social-link">
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hamburger-icon" onClick={handleMenuClick}>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </div>
      </nav>
    </div>
  );
}
