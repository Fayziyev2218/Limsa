import According from "../../components/according";
import Benefits from "../../components/benefits";
import ContactMap from "../../components/contactMap";
import Contact from "../../components/contaxct";
import Ourwork from "../../components/ourWork";
import Title from "../../components/title";
import show from "/show.png";
import showbottom from '/showbottom.png'
import showbottom2 from '/showbottom2.png'
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <>
      <div id="home" className="bg-[rgb(12,10,10)]">
        {/* showcase */}
        <div className="bg-gradient-to-r from-[#1f1237] via-[#0f0e16] to-[#0d0d0d] py-[100px]  max-sm:pt-[50px]">
          <div className="container flex items-center justify-between gap-[50px] max-md:flex-col">
            <div className="w-[40%] max-lg:w-[58%] max-md:w-full">
              <h1 className="font-montserrat font-bold text-[28px] max-md:text-[18px] text-white mb-[32px] ">
                Perfect 'IT' solutions to grow your business!
              </h1>
              <h1 className="font-montserrat font-light text-[16px] max-md:text-[14px] text-white mb-[24px] ">
                Entrust your project to experts with more than 10 years of
                experience and achieve high success in a short time.
              </h1>
              <a
                className="text-[14px] font-montserrat font-bold text-white bg-[#6c2dba] rounded-[15px] border-2 border-[#6c2dba] py-[13px] px-[25px] hover:bg-[rgb(12,10,10)] duration-200 ease-in"
                href="#contact"
              >
                Contact
              </a>
            </div>

            <img
              className="w-[60%] h-full object-cover max-lg:w-[40%] max-md:w-full"
              src={show}
              alt="show"
            />
          </div>
        </div>

        <div className="py-[100px] bg-[#161616]">
          <div className="container flex justify-between max-lg:flex-col">
            <div className="flex gap-[20px] max-lg:w-full">
              <img className=" w-[313px] h-[440px] object-cover max-lg:mb-[50px] max-[1140px]:w-[250px] max-[1140px]:h-[350px] max-lg:w-full max-lg:h-auto max-[680px]:hidden" src={showbottom} alt="showbottom" />
              <img className="w-[313px] h-[490px] object-cover mt-[50px] max-[1140px]:w-[250px] max-[1140px]:h-[400px] max-lg:w-full max-lg:h-auto max-[680px]:hidden" src={showbottom2} alt="showbottom2" />
            </div>
            
            <div className="w-[40%] max-lg:w-full">
              <Title text={"Frequently Asked Questions"} size="medium" />
              <div className="mt-[35px] flex flex-col gap-[10px]">
                <According/>
                <According/>
                <According/>
              </div>
            </div>
          </div>
        </div>

        <div className="py-[50px] bg-[#161616]">
          <Marquee direction="right" gradient={false} speed={200}>
            <span className="text-white text-[28px] font-semibold font-montserrat mx-[50px]">DIGITAL SOLUTIONS</span>
            <span className="text-white text-[28px] font-semibold font-montserrat mx-[50px]">AUTOMATION SYSTEMS</span>
            <span className="text-white text-[28px] font-semibold font-montserrat mx-[50px]">WEBSITE BUILDING SERVICE</span>
            <span className="text-white text-[28px] font-semibold font-montserrat mx-[50px]">MOBILE APPS</span>
        </Marquee>
        </div>

        <Ourwork/>
        <Benefits/>
        <Contact/>
        <ContactMap/>
      </div>
    </>
  );
}
