import ServiceCard from "../../components/affordable";
import ContactMap from "../../components/contactMap";
import Contact from "../../components/contaxct";
import Title from "../../components/title";
import TopButton from "../../components/topButton";
import { useTranslation } from "react-i18next";


export default function Prices() {
  const { t } = useTranslation();

  const cards = [
    {
      title: t("cards.landing.title"),
      description: t("cards.landing.description"),
      features: t("cards.landing.features", { returnObjects: true }),
    },
    {
      title: t("cards.siteCard.title"),
      description: t("cards.siteCard.description"),
      features: t("cards.siteCard.features", { returnObjects: true }),
    },
    {
      title: t("cards.exclusive.title"),
      description: t("cards.exclusive.description"),
      features: t("cards.exclusive.features", { returnObjects: true }),
    },
  ];
  return (
    <div className="bg-[#161616] pt-[70px]">
      <div className="container">
        <TopButton text={t("ourprice")}/>
        <Title text={t("ouraffordable")} size="large" textLeft="center"/>
        <div className="min-h-[400px] mt-[80px] bg-[#161616] text-white grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, idx) => (
            <ServiceCard key={idx} {...card} />
          ))}
        </div>
      </div>

      <div id="contac"><Contact/></div>
      <ContactMap/>
    </div>
  );
}
