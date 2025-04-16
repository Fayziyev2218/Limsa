import { useState } from "react";
import Title from "./title";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from "react-router-dom";

export default function Contact() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const sendMessage =(event)=>{
    event.preventDefault()
    const token = "7238149873:AAEBuK_9Motnu_SFd9X04HjxmG-UaJGO6S4"
    const chatId = "862300228"
    const url = `https://api.telegram.org/bot${token}/sendMessage`
    const name = document.getElementById("name").value
    const phone = document.getElementById("phone").value
    const mail = document.getElementById("mail").value
    const messageName = `Ism :${name} \n Number : ${phone} \n Mail: ${mail}`

    axios({
        url:url,
        method: "POST",
        data:{
            chat_id: chatId,
            text: messageName,
        }
    }).then((res)=>{
        document.getElementById("myForm").reset()
        toast.success("Message sent successfully! 🎉"),{
          position: "top-center",
          autoClose: 3000,
        }
    }).catch((rej)=>{
      toast.error("There was an error. ❌", {
        position: "top-center",
        autoClose: 3000,
      });
    })
  }


  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // faqat raqam
    if (value.length <= 9) {
      setPhone(value);
      setError(""); // xatolik yo'q
    }
  };
  const handleBlur = () => {
    if (phone.length !== 9) {
      setError("The number is incomplete");
    } else {
      setError("");
    }
  };

  return (
    <div id="contact" className="pt-[150px] max-[900px]:pt-[50px] pb-[50px] bg-[#161616]">
      <div className="container flex justify-between gap-[50px] max-[900px]:flex-col">
        <div className="w-[50%] max-[900px]:w-full">
          <p className={`text-[35px]  mx-auto font-montserrat font-bold text-white max-md:text-[30px] max-sm:text-[21px] max-[900px]:text-center`}>Order a website for your business now, And get a small gift from us 10% off!</p>
          <p className="font-montserrat text-[#6c2dba] font-medium text-[16px] my-[16px] max-[900px]:text-center">
            Satisfying every customer is our highest goal - LIMSA
          </p>
          <p className="font-montserrat text-white font-semibold text-[18px] mb-[16px] max-[900px]:text-center">
            Pages
          </p>
          <div className="max-[900px]:text-center">
          <NavLink
          to={"/"}
            className="font-montserrat text-[#6c6c6c] font-medium text-[16px] max-[900px]:text-center"
          >
            Home
          </NavLink>
          <br />
          <NavLink
          to={"/services"}
            className="font-montserrat text-[#6c6c6c] font-medium text-[16px] max-[900px]:text-center"
          >
            Our Services
          </NavLink>
          </div>
        </div>

        <div className="w-[50%] max-[900px]:w-full">
          <p className="font-montserrat text-white font-semibold text-[32px] mb-[32px] max-sm:text-[16px] max-[900px]:text-center">
            Leave your details
          </p>
          <form onSubmit={sendMessage} id="myForm">
            <input
            id="name"
              className="bg-[rgb(54,54,54)] w-full text-white p-[20px] rounded-3xl outline-none mb-[20px]"
              placeholder="your name"
              type="text"
              required
            />
            <div className="w-full">
              <div
                className={`flex items-center bg-[rgb(54,54,54)] p-[20px] rounded-3xl w-full ${
                  error ? "border border-red-500" : ""
                }`}
              >
                <span className="mr-2 text-white select-none">+998</span>
                <input
                id="phone"
                  type="text"
                  value={phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="901234567"
                  required
                  className="bg-transparent outline-none text-white w-full placeholder-gray-400"
                />
              </div>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>
            <textarea
            id="mail"
              rows="4"
              required
              placeholder="Your message..."
              className="w-full bg-[#2d2d2d] text-white placeholder-gray-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 resize-none rounded-3xl outline-none mt-[20px] mb-[30px]"
            />

<div className="flex justify-start max-[900px]:justify-center">
  <button
    type="submit"
    className="w-[151px] bg-[rgba(108,45,186,0.73)] hover:bg-[rgba(136,85,198,0.73)] text-white py-[15px] rounded-[25px] text-[14px] font-medium"
  >
    Send
  </button>
</div>
                
          </form>
        </div>
      </div>
    </div>
  );
}
