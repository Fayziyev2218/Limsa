import Benefits from "../../components/benefits";
import ContactMap from "../../components/contactMap";
import Contact from "../../components/contaxct";
import TopButton from "../../components/topButton";


export default function OurServices(){
    return(
        <div className="pt-[70px] bg-[#161616]">
            <TopButton text={"Our Services"}/>
            <Benefits/>
            <Contact/>
            <ContactMap/>
        </div>
    )
}