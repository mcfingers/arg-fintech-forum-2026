import { createContext, useState } from "react";
import TRANSLATIONS from "../lib/translations";

const LanguageContext = createContext({
  locale: "",
  setLocale: () => {},
  translate: () => {},
  translateArray: () => {},
});

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState("es");

  const translate = (key) => {
    return TRANSLATIONS[locale]?.[key] || key;
  };

  const translateArray = (keyArr) => {
    const translatedArray = [];
    keyArr.map((key) =>
      translatedArray.push(TRANSLATIONS[locale]?.[key] || key),
    );
    return translatedArray;
  };

  return (
    <LanguageContext.Provider
      value={{ locale, setLocale, translate, translateArray }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageContext;
