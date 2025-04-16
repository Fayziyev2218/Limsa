import ContactMap from "../../companents/contactMap";
import Contact from "../../companents/contaxct";
import Ourwork from "../../companents/ourWork";
import TopButton from "../../companents/topButton";


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