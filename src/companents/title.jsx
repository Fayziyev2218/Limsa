export default function Title({ text, textLeft = "center", size = "medium" }) {
    let FontSizeClass = "";
    let textPosition = "";
  
    if (textLeft === "center") {
      textPosition = "text-center";
    } else if (textLeft === "left") {
      textPosition = "text-left"; // BU YERDA = ishlatiladi
    }
  
    if (size === "large") {
      FontSizeClass = "text-[40px]";
    } else if (size === "medium") {
      FontSizeClass = "text-[35px]"; // Bu o‘zgarishi kerak
    } else {
      FontSizeClass = "text-[30px]";
    }
  
    return (
      <h3 className={`${FontSizeClass} ${textPosition} mx-auto font-montserrat font-bold text-white max-md:text-[30px] max-sm:text-[21px]`}>
        {text}
      </h3>
    );
  }
  