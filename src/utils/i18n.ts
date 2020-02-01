import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import XHR from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-chained-backend";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    ns: ["basicInfo", "header", "banner", "content"],
    backend: {
      backends: [XHR],
      backendOptions: [
        {
          prefix: "i18next_res_"
        },
        {
          loadPath: "/locales/{{lng}}/{{ns}}.json"
        }
      ]
    },
    react: {
      useSuspense: false
    },
    interpolation: {
      escapeValue: false
    },
    fallbackLng: "en-US",
    preload: ["en-US"],
    load: "all"
  });

export default i18n;
