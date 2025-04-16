import ServiceCard from "../../companents/affordable";
import ContactMap from "../../companents/contactMap";
import Contact from "../../companents/contaxct";
import Title from "../../companents/title";
import TopButton from "../../companents/topButton";

export default function Prices() {
  const cards = [
    {
      title: "Landing Page",
      description:
        "Another name for a one-page site is a Landing Page. The page is easy to use and introduces the customer to the information they need.",
      features: [
        "Domain UZ",
        "Protection 24/7",
        "Duration 3 days",
        "Number of pages 1",
      ],
    },
    {
      title: "Site Card",
      description:
        "It is the 'business card' of the company on the Internet. The site is to introduce the company's services or products to the people visiting the business page.",
      features: [
        "Domain UZ",
        "Protection 24/7",
        "Duration 3-7 days",
        "Number of pages 2-4",
      ],
    },
    {
      title: "Exclusive",
      description:
        "This website is created based on your order. You can order any website you want.",
      features: [
        "Domain UZ",
        "Protection 24/7",
        "Number of languages - Desired",
        "High Design Level",
      ],
    },
  ];
  return (
    <div className="bg-[#161616] pt-[70px]">
      <div className="container">
        <TopButton text="Our prices"/>
        <Title text={"Our affordable websites for you"} size="large" textLeft="center"/>
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
