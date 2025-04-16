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
          welcome: "Xush kelibsiz",
          order: "Buyurtma berish",
          negotiate: "Kelishish",
        },
      },
      en: {
        translation: {
          welcome: "Welcome",
          order: "Place Order",
          negotiate: "Negotiate",
        },
      },
      ru: {
        translation: {
          welcome: "Добро пожаловать",
          order: "Сделать заказ",
          negotiate: "Договориться",
        },
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
