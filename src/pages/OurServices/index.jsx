import Benefits from "../../components/benefits";
import ContactMap from "../../components/contactMap";
import Contact from "../../components/contaxct";
import TopButton from "../../components/topButton";
import { useTranslation } from "react-i18next";


export default function OurServices(){
    const { t } = useTranslation();
    
    return(
        <div className="pt-[70px] bg-[#161616]">
            <TopButton text={t("services")}/>
            <Benefits/>
            <Contact/>
            <ContactMap/>
        </div>
    )
}