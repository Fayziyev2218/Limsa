import limsalogo from '/limsalogo.png'
import { NavLink } from 'react-router-dom';


export default function Footer(){
    return(
        <>
        <div className='bg-[rgb(12,10,10)] py-[20px]'>
            <div className='container flex items-center justify-between gap-[16px] max-sm:flex-col max-sm:items-start'>
                <NavLink to={"/"}><img className='w-[150px] h-[37px]' src={limsalogo} alt="limsalogo" /></NavLink>
                <p className='font-montserrat font-normal text-[16px] text-white'>© 2024 Limsa. All rights reserved.</p>
            </div>
        </div>
        </>
    )
}