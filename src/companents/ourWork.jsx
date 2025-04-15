import Title from "./title";
import workPhotos from "/workPhotos.jpg";
import workPhotos2 from "/workPhotos2.jpg";
import workPhotos4 from "/workPhotos4.jpg";
import workPhotos5 from "/workPhotos5.jpg";
import workPhotos6 from "/workPhotos6.jpg";
import workPhotos7 from "/workPhotos7.jpg";
import workPhotos8 from "/8.jpg";
import workPhotos3 from "/workPhotos3.png";
import Contact from "./contaxct";

export default function Ourwork() {
  const ourWorkData = [
    {
      id: "01",
      link: "https://www.autozoomrental.com/",
      title: "ataevbahodirbuild.uz",
      img: workPhotos,
      text: "Ataev Bahadir Build - quality construction and repair services! Choose us, create the house of your dreams.",
    },
    {
      id: "02",
      link: "https://www.autozoomrental.com/",
      title: "autozoomrental.com",
      img: workPhotos2,
      text: "AutoZoomRental - convenient and reliable car rental! Make your trip more pleasant with our cars.",
    },
    {
      id: "03",
      link: "https://www.it-time-academy.uz/",
      title: "it-time-academy.uz",
      img: workPhotos3,
      text: "IT Time Academy is the destination of modern IT knowledge! Take the professions of the future with us.",
    },
    {
      id: "04",
      link: "https://www.it-time-academy.uz/",
      title: "homekit.uz",
      img: workPhotos4,
      text: "HomeKit – modern and convenient smart home solutions! Ensure the safety and comfort of your home with us.",
    },
    {
      id: "05",
      link: "https://www.uzloyal.uz/",
      title: "uzloyal.uz",
      img: workPhotos5,
      text: "UzLoyal is a reliable and convenient loyalty system! The most effective way to motivate your customers.",
    },
    {
      id: "06",
      link: "https://www.uzloyal.uz/",
      title: "namanganoits.uz",
      img: workPhotos6,
      text: "Namangan ITS is a center of modern IT knowledge and skills! Get new opportunities at every step.",
    },
    {
      id: "07",
      link: "https://propartnyor.uz/",
      title: "propartnyor.uz",
      img: workPhotos7,
      text: "ProPartnyor is the address of reliable and effective cooperation! We will work together for the success of your business.",
    },
    {
      id: "08",
      link: "https://zamontour.uz/",
      title: "zamontour.uz",
      img: workPhotos8,
      text: "ZamonTour – experience a happy tourist experience with us! Your trip with us is guaranteed to be more pleasant.",
    },
  ];

  return (
    <div className="bg-[#161616] pt-[100px] pb-[50px] max-sm:pt-[50px]">
      <div className="container">
        <Title size="medium" text={"Our Recent Projects"} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[40px] mt-[40px]">
          {ourWorkData.map((item) => {
            return (
              <a key={item.id} href="https://www.autozoomrental.com/">
                <div className="min-h-[400px] py-[16px] border-b-2 border-gray-700">
                  <p className="text-white font-montserrat font-bold text-[16px] mb-[16px]">
                    {item.title}
                  </p>
                  <img
                    className="w-full h-auto object-cover transition-transform duration-500 hover:scale-110"
                    src={item.img}
                    alt="workPhotos   "
                  />
                  <p className="text-white font-montserrat font-bold text-[16px] mt-[30px] mb-[16px]">
                    {item.text}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
      {/* <Contact/> */}
    </div>
  );
}
