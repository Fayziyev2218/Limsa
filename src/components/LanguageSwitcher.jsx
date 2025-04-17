import React, { useState } from "react";
import { useTranslation } from "react-i18next";
const LanguageSwitcher = () => {
  const [language, setLanguage] = useState("en");
  const { i18n } = useTranslation();
  

  const handleChange = (e) => {
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
    console.log("Tanlangan til:", e.target.value);
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
