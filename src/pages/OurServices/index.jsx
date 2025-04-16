import Benefits from "../../companents/benefits";
import ContactMap from "../../companents/contactMap";
import Contact from "../../companents/contaxct";
import TopButton from "../../companents/topButton";


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