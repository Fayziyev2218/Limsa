import ContactMap from "../../components/contactMap";
import Contact from "../../components/contaxct";
import Ourwork from "../../components/ourWork";
import TopButton from "../../components/topButton";


export default function OurWorks(){
    return(
        <>
        <div className="bg-[#161616]">
              <Ourwork/>
              <Contact/>
              <ContactMap/>
        </div>
        </>
    )
}