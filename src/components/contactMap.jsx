import Title from "./title";
import { icon } from "../assets/icons";
import { useTranslation } from "react-i18next";

export default function ContactMap() {
  const { t } = useTranslation();
  const icons = icon;

  return (
    <div className="bg-[#161616] py-[70px]">
      <div className="container">
        <Title text={t("contacts")} size="large" textLeft="left" />
        <div className="mt-[52px] flex items-center justify-between max-lg:flex-col  max-lg:gap-[30px]">
          <div className="grid grid-cols-2 gap-[30px] w-[40%] max-lg:w-[70%] max-sm:grid-cols-1 max-sm:w-full">
            <div className="flex items-center gap-[20px] max-sm:w-full max-sm:border border-[#ddd] max-sm:p-[20px] max-sm:flex-col">
              {icons.adress}
              <div>
                <p className="font-montserrat font-bold text-[18px] mb-[14px] text-white max-sm:text-center">
                  {t("contact.address.title")}
                </p>
                <p className="font-montserrat font-bold text-[14px] mb-[14px] text-[rgb(161,161,161)] max-sm:text-center">
                  {t("contact.address.text")}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-[20px] max-sm:w-full max-sm:border border-[#ddd] max-sm:p-[20px] max-sm:flex-col">
              {icons.phone}
              <div>
                <p className="font-montserrat font-bold text-[18px] mb-[14px] text-white max-sm:text-center">
                  {t("contact.phone.title")}
                </p>
                <a
                  href="tel:+998 (33) 258 73 58"
                  className="font-montserrat font-bold text-[14px] mb-[14px] text-[rgb(161,161,161)] max-sm:text-center"
                >
                  +998 (33) 258 73 58
                </a>
              </div>
            </div>

            <div className="flex items-center gap-[20px] max-sm:w-full max-sm:border border-[#ddd] max-sm:p-[20px] max-sm:flex-col">
              {icons.clock}
              <div>
                <p className="font-montserrat font-bold text-[18px] mb-[14px] text-white max-sm:text-center">
                  {t("contact.hours.title")}
                </p>
                <p className="font-montserrat font-bold text-[14px] mb-[14px] text-[rgb(161,161,161)] max-sm:text-center">
                  {t("contact.hours.text")}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-[20px] max-sm:w-full max-sm:border border-[#ddd] max-sm:p-[20px] max-sm:flex-col">
              {icons.shere}
              <div>
                <p className="font-montserrat font-bold text-[18px] mb-[14px] text-white max-sm:text-center">
                  {t("contact.social.title")}
                </p>
                <div className="flex items-center gap-2.5">
                  <a href="https://www.linkedin.com/company/limsa-2021/">
                    {icon.linkined}
                  </a>
                  <a href="https://www.linkedin.com/company/limsa-2021/">
                    {icon.insta}
                  </a>
                  <a href="https://www.linkedin.com/company/limsa-2021/">
                    {icon.tg}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <iframe
            className="w-[50%] max-lg:w-full rounded-[20px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.6554713030578!2d69.28311557514922!3d41.338104599052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b5f1f5cfd49%3A0x110bc2a5ed9856b7!2sLIMSA!5e0!3m2!1sru!2s!4v1744781890035!5m2!1sru!2s"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="LIMSA Map"
          />
        </div>
      </div>
    </div>
  );
}
