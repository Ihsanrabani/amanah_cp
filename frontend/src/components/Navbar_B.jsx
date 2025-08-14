import '../index.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faHouse, faGear, faTag, faCircleInfo, faPhone } from '@fortawesome/free-solid-svg-icons'

const Navbar_B = () => {

    const [menu, setMenu] = useState(false)
    const [dropdown, setDropdown] = useState(false)

    const [menu2, setMenu2] = useState(false)
    const [dropdown2, setDropdown2] = useState(false)

    return(
        <nav className='relative z-10 flex items-center justify-between h-20 py-12 px-3 xl:px-8 drop-shadow-lg'>
            <img src="/assets/JAB_Logo.png" alt="" className='w-auto h-20'/>

            <button onClick={() => {setMenu(!menu)}}><img src="/assets/bars.png" alt="" className="xl:hidden"/></button>
            <div className='hidden xl:flex text-black montserrat-semibold text-xl gap-8'>
                <a href="/" className="hover:text-[#FF6F00] duration-300">Home</a>

                <div className="relative group inline-block">
                    {/* Trigger */}
                    <div className="hover:text-[#FF6F00] duration-300 flex gap-1 items-center cursor-pointer">
                        <Link to="/service">Services</Link>
                        <FontAwesomeIcon
                            icon={faChevronDown}
                            className="text-black duration-300 group-hover:text-[#FF6F00]"
                        />
                    </div>

                    {/* Dropdown */}
                    <div className="absolute left-0 top-full
                  opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto 
                  transition-all duration-500 z-50">
                        <div className='flex flex-col gap-3 rounded-b-lg duration-500 -translate-y-4 group-hover:translate-y-[20px]'>
                            <Link to="/service" className="hover:text-[#FF6F00] duration-200">Our Service</Link>
                            <Link to="/service/legalitas" className="hover:text-[#FF6F00] duration-200">Legalitas</Link>
                            <Link to="/service/digitalMarketing" className="hover:text-[#FF6F00] duration-200">Digital Marketing</Link>
                        </div>
                    </div>
                </div>
                <div className="relative group inline-block">
                    {/* Trigger */}
                    <div className="hover:text-[#FF6F00] duration-300 flex gap-1 items-center cursor-pointer">
                        <Link>Pricing</Link>
                        <FontAwesomeIcon
                            icon={faChevronDown}
                            className="text-black duration-300 group-hover:text-[#FF6F00]"
                        />
                    </div>

                    {/* Dropdown */}
                    <div className="absolute left-0 top-full
                  opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto 
                  transition-all duration-500 z-50">
                        <div className='flex flex-col gap-3 rounded-b-lg duration-500 -translate-y-4 group-hover:translate-y-[20px]'>
                            <Link to="/pricing/legalitas" className="hover:text-[#FF6F00] duration-200">Legalitas</Link>
                            <Link to="/pricing/digitalMarketing" className="hover:text-[#FF6F00] duration-200">Digital Marketing</Link>
                        </div>
                    </div>
                </div>
                
                <a href="/aboutUs" className="hover:text-[#FF6F00] duration-300">About Us</a>
                <a href="/contactUs" className="hover:text-[#FF6F00] duration-300">Contact Us</a>
            </div>

            {menu &&
                <div className='flex z-50'>
                    <button onClick={() => setMenu(!menu)} className='fixed bg-black/40 h-screen top-0 bottom-0 left-0 right-0'></button>
                    <div className='fixed flex flex-col bg-[#111827] top-0 right-0 h-screen w-64 z-50'>
                        <div className='py-2 flex justify-center mb-5'>
                            <img src="/assets/JAB_Logo_W.png" alt="" className='w-48' />
                        </div>

                        <div className='flex flex-col text-2xl gap-4 text-white montserrat-bold pl-2'>
                            <div className='flex items-center gap-2 pl-1 py-1 hover:bg-black/15 rounded'>
                                <FontAwesomeIcon icon={faHouse} color='white' className='h-6' />
                                <a href="/" className="duration-300">Home</a>
                            </div>

                            <div className='flex items-center gap-2 pl-1 py-1 hover:bg-black/15 rounded'>
                                <FontAwesomeIcon icon={faGear} color='white' className='h-6' />
                                <a className="duration-300" onClick={() => {
                                    if (!dropdown) {
                                        setDropdown(true)
                                    } else if (dropdown) {
                                        setDropdown(false)
                                    }
                                }}>Service</a>
                            </div>
                            {dropdown &&
                                <div className='flex flex-col gap-3 ml-9'>
                                    <a href="/service" className='hover:bg-black/15 rounded pl-1 py-1'>Our Service</a>
                                    <a href="/service/legalitas" className='hover:bg-black/15 rounded pl-1 py-1'>Legalitas</a>
                                    <a href="/service/digitalMarketing" className='hover:bg-black/15 rounded pl-1 py-1'>Digital Marketing</a>
                                </div>
                            }

                            <div className='flex items-center gap-2 pl-1 py-1 hover:bg-black/15 rounded'>
                                <FontAwesomeIcon icon={faTag} color='white' className='h-6' />
                                <a className="duration-300" onClick={() => {
                                    if (!dropdown2) {
                                        setDropdown2(true)
                                    } else if (dropdown2) {
                                        setDropdown2(false)
                                    }
                                }}>Pricing</a>
                            </div>
                            {dropdown2 &&
                                <div className='flex flex-col gap-3 ml-9'>
                                    <a href="/pricing/legalitas" className='hover:bg-black/15 rounded pl-1 py-1'>Legalitas</a>
                                    <a href="/pricing/digitalMarketing" className='hover:bg-black/15 rounded pl-1 py-1'>Digital Marketing</a>
                                </div>
                            }

                            <div className='flex items-center gap-2 pl-1 py-1 hover:bg-black/15 rounded'>
                                <FontAwesomeIcon icon={faCircleInfo} color='white' className='h-6' />
                                <a href="/aboutUs" className="duration-300">About Us</a>
                            </div>

                            <div className='flex items-center gap-2 pl-1 py-1 hover:bg-black/15 rounded'>
                                <FontAwesomeIcon icon={faPhone} color='white' className='h-6' />
                                <a href="/contactUs" className="duration-300">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </nav>
    )
}

export default Navbar_B;