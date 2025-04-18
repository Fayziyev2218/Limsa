import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language); // <--- o‘zgarish shu yerda

  useEffect(() => {
    setLanguage(i18n.language); // refresh bo‘lganda ham tanlangan tilni aks ettiradi
  }, [i18n.language]);

  const handleChange = (e) => {
    const selectedLang = e.target.value;
    setLanguage(selectedLang);
    i18n.changeLanguage(selectedLang);
    console.log("Tanlangan til:", selectedLang);
  };

  return (
    <div className="inline-block">
      <select
        value={language}
        onChange={handleChange}
        className="appearance-none bg-[#1e1e1e] text-white font-montserrat font-light px-4 py-1 rounded-md border border-[#444] shadow-sm hover:bg-[#2b2b2b] focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
      >
        <option value="uz">Uzb</option>
        <option value="en">Eng</option>
        <option value="ru">Рус</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
