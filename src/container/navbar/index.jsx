import { useState } from 'react';
import HamburgerButton from '../../companents/hamburgerButton';
import logo from '/logo.png'
import { NavLink } from 'react-router-dom';
// from-[#24183d]

export default function Navbar(){
    const [burger,setBurger] = useState(false)
    const handBurger = ()=>{
        setBurger(!burger)
    }
    return(
        <>
        <div className='sticky top-0 z-40 bg-gradient-to-r from-[#1d1c1f] to-[rgb(12,10,10)] py-[15px] border border-b-[#464646]'>
            <div className='container flex items-center justify-between'>
                <div className='flex items-center gap-[40px]'>
                    <NavLink to={"/"}><img className='w-[120px] h-[30px] max-md:w-[150px] max-md:h-[37px]' src={logo} alt="logo" /></NavLink>

                    <ul className='flex items-center gap-[30px] max-lg:hidden'>
                        <li><NavLink to={"/"} className={({isActive})=>isActive ? "font-montserrat font-light text-white text-[16px] rounded-[6px] border-b-2 border-[rgb(108,45,186)] py-[5px] px-[8px]" : "font-montserrat font-light text-white text-[16px] py-[5px] px-[8px]"}>home</NavLink></li>
                        <li><NavLink to={"/ourworks"} className={({isActive})=>isActive ? "font-montserrat font-light text-white text-[16px] rounded-[6px] border-b-2 border-[rgb(108,45,186)] py-[5px] px-[8px]" : "font-montserrat font-light text-white text-[16px] py-[5px] px-[8px]"}>Our works</NavLink></li>
                        <li><NavLink to={"/services"} className={({isActive})=>isActive ? "font-montserrat font-light text-white text-[16px] rounded-[6px] border-b-2 border-[rgb(108,45,186)] py-[5px] px-[8px]" : "font-montserrat font-light text-white text-[16px] py-[5px] px-[8px]"}>Our Services</NavLink></li>
                        {/* <li><NavLink to={"/prices"} className={({isActive})=>isActive ? "font-montserrat font-light text-white text-[16px] rounded-[6px] border-b-2 border-[rgb(108,45,186)] py-[5px] px-[8px]" : "font-montserrat font-light text-white text-[16px] py-[5px] px-[8px]"}>Prices</NavLink></li> */}
                    </ul>
                </div>

                <a  className='max-lg:hidden text-[14px] font-montserrat font-medium text-white bg-[#6c2dba] rounded-[15px] border border-[#6c2dba] py-[13px] px-[25px] hover:bg-[rgb(12,10,10)]' href="tel:+998 (94) 605 22 18">tel:+998 (94) 605 22 18</a>
                <HamburgerButton open={burger} toggle={handBurger} />
            </div>

            <div className={`navrespons bg-[rgb(22,22,22)] hidden max-lg:block w-[70%] ml-auto z-20 h-screen  p-[20px] fixed duration-500 top-[68px] right-0 ease ${
            burger ? "translate-x-[0%]" : "translate-x-[200%]"
          }`}>
                    <ul className='flex items-start flex-col gap-[30px] '>
                        <li><NavLink onClick={handBurger} to={"/"} className={({isActive})=>isActive ? "font-montserrat font-light text-white text-[16px] rounded-[6px] border-b-2 border-[rgb(108,45,186)] py-[5px] px-[8px]" : "font-montserrat font-light text-white text-[16px] py-[5px] px-[8px]"}>home</NavLink></li>
                        <li><NavLink onClick={handBurger} to={"/ourworks"} className={({isActive})=>isActive ? "font-montserrat font-light text-white text-[16px] rounded-[6px] border-b-2 border-[rgb(108,45,186)] py-[5px] px-[8px]" : "font-montserrat font-light text-white text-[16px] py-[5px] px-[8px]"}>Our works</NavLink></li>
                        <li><NavLink onClick={handBurger} to={"/services"} className={({isActive})=>isActive ? "font-montserrat font-light text-white text-[16px] rounded-[6px] border-b-2 border-[rgb(108,45,186)] py-[5px] px-[8px]" : "font-montserrat font-light text-white text-[16px] py-[5px] px-[8px]"}>Our Services</NavLink></li>
                        {/* <li><NavLink onClick={handBurger} to={"/prices"} className={({isActive})=>isActive ? "font-montserrat font-light text-white text-[16px] rounded-[6px] border-b-2 border-[rgb(108,45,186)] py-[5px] px-[8px]" : "font-montserrat font-light text-white text-[16px] py-[5px] px-[8px]"}>Prices</NavLink></li> */}
                    </ul>
            </div>

            <div
          onClick={handBurger}
          className={` ${
            burger
              ? "opacity-100 bg-[rgba(0,0,0,0.337)] overlay w-full  h-screen z-10 max-md:block  fixed top-0 duration-0 ease"
              : "opacity-0 hidden ease"
          }`}
        ></div>
        </div>
        </>
    )
}