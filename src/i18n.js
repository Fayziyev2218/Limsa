// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      uz: {
        translation: {
          home: "Бош саҳифа",
          services: "Хизматларимиз",
          works: "Бизнинг ишлар",
          prices:"Нархлар",
        },
      },
      en: {
        translation: {
          home: "Home",
          services: "Our Services",
          works: "Our works",
          prices:"Prices",
        },
      },
      ru: {
        translation: {
          home: "Главная",
          services: "Наши услуги",
          works: "Наша работа",
          prices:"Цены",
        },
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
