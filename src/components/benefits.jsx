import { icon } from "../assets/icons";
import Title from "./title";
import { useTranslation } from "react-i18next";

export default function Benefits() {
  const { t, i18n } = useTranslation();
  const icons = icon;
  // const benefitData = [
  //   {
  //     id: "01",
  //     title: "Adaptive",
  //     text: "The websites we create will be flexible. That is, they will have a tablet and mobile version...",
  //     icon: icons.nout,
  //   },
  //   {
  //     id: "02",
  //     title: "Admin",
  //     text: "Your website will have a convenient and simple admin panel...",
  //     icon: icons.admin,
  //   },
  //   {
  //     id: "03",
  //     title: "Protection",
  //     text: "Our websites are protected by anti-virus and firewalls to resist attacks.",
  //     icon: icons.shield,
  //   },
  //   {
  //     id: "04",
  //     title: "Monitoring 24/7",
  //     text: "Your website is monitored online 24/7 to keep it running.",
  //     icon: icons.headset,
  //   },
  //   {
  //     id: "05",
  //     title: "Domain and Hosting",
  //     text: "We offer domain and hosting free for 6 months...",
  //     icon: icons.server,
  //   },
  //   {
  //     id: "06",
  //     title: "Unique",
  //     text: "Each site we create will be unique and different from others.",
  //     icon: icons.planet,
  //   },
  // ];
//  console.log(i18n?.language,"t")
  const benefitData = [
    {
      id: "01",
      title: t("benefits.adaptive.title"),
      text: t("benefits.adaptive.text"),
      icon: icons.nout,
    },
    {
      id: "02",
      title: t("benefits.admin.title"),
      text: t("benefits.admin.text"),
      icon: icons.admin,
    },
    {
      id: "03",
      title: t("benefits.protection.title"),
      text: t("benefits.protection.text"),
      icon: icons.shield,
    },
    {
      id: "04",
      title: t("benefits.monitoring.title"),
      text: t("benefits.monitoring.text"),
      icon: icons.headset,
    },
    {
      id: "05",
      title: t("benefits.domain.title"),
      text: t("benefits.domain.text"),
      icon: icons.server,
    },
    {
      id: "06",
      title: t("benefits.unique.title"),
      text: t("benefits.unique.text"),
      icon: icons.planet,
    },
  ];
  return (
    <div id="ourServices" className="bg-[#161616] py-[30px]">
      <div className="container">
        <Title
          size="large"
          textLeft="center"
          text={t("choose")}
        />
        <h2 className=" mx-auto font-montserrat font-bold text-[rgb(108,45,186)] text-[40px] text-center mb-[70px] mt-[30px] max-md:text-[30px] max-sm:text-[21px]">
         {t("benefits")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitData.map((item) => (
            <div key={item.id} className="bg-[rgb(18,17,17)] p-[35px] max-[1200px]:p-[20px] rounded-[15px] flex items-start gap-[20px] w-full max-md:flex-col">
              <div className="max-md:w-full max-md:flex max-md:items-end max-md:justify-between max-md:gap-[50px] ">
                <div>{item.icon}</div>
                <p className="text-[24px] font-montserrat font-semibold text-white mt-[24px] max-md:mt-[0]">
                  {item.id}
                </p>
              </div>

              <div>
                <p className="text-[22px] font-montserrat font-bold text-white max-[1200px]:text-[18px]">
                  {item.title}
                </p>
                <p className="text-[12px] font-montserrat font-bold text-[rgb(177,177,177)] my-[12px] max-[1200px]:text-[13px]">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
