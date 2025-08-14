import '../index.css';
import { useState } from 'react';
import { motion, AnimatePresence } from "motion/react"
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp, faInstagram, faTiktok, faFacebook, faYoutube} from '@fortawesome/free-brands-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {

    const [trig1, setTrig1] = useState(false)
    const [trig2, setTrig2] = useState(false)
    const [trig3, setTrig3] = useState(false)
    const [trig4, setTrig4] = useState(false)

    return (
        <div className='mt-24'>
            <div className='bg-[#111827] py-3 xl:py-5 flex flex-col items-center xl:flex-row gap-10'>
                <div className='flex flex-col xl:w-2/5 items-center text-center'>
                    <img src="/assets/JAB_Logo_W.png" alt="" className='w-40 xl:w-48'/>

                    <p className='text-white px-6 mt-3 xl:px-40'>PT. Jasa Amanah Berkah bergerak di bidang layanan legalitas usaha, digitalisasi, dan pengembangan produk digital. Amanah, Profesional, dan Terpercaya.</p>

                    <div className='flex gap-3 mt-5'>
                        <Link to={"https://wa.me/081323244573"} target='blank'><FontAwesomeIcon icon={faWhatsapp} color='white' className='h-7'/></Link>
                        <Link to={"https://www.instagram.com/jasa.amanah.official/"} target='blank'><FontAwesomeIcon icon={faInstagram} color='white' className='h-7' /></Link>
                        <Link to={"https://www.facebook.com/p/PT-Jasa-Amanah-Berkah-100083770658632/"} target='blank'><FontAwesomeIcon icon={faFacebook} color='white' className='h-7' /></Link>
                        <Link target='blank'><FontAwesomeIcon icon={faTiktok} color='white' className='h-7' /></Link>
                        <Link to={"https://web.whatsapp.com/"} target='blank'><FontAwesomeIcon icon={faYoutube} color='white' className='h-7' /></Link>
                    </div>
                </div>

                <div className='w-3/5 items-top gap-24 hidden xl:flex h-max'>

                    <div className='text-white flex flex-col'>
                        <p className='montserrat-bold text-2xl mb-1'>Perusahaan</p>
                        <Link to={'/aboutUs'}>Tentang Kami</Link>
                        <Link to={'/aboutUs'}>Visi & Misi</Link>
                        <p>Tim Kami</p>
                        <Link to={'/aboutUs'}>Karir Kami</Link>
                    </div>

                    <div className='text-white'>
                        <p className='montserrat-bold text-2xl mb-1'>Layanan</p>
                        <p>Jasa Legalitas</p>
                        <p>Digital Marketing</p>
                        <p>Konsultasi Bisnis</p>
                        <p>Pembuatan Website</p>
                    </div>

                    <div className='text-white'>
                        <p className='montserrat-bold text-2xl mb-1'>Bantuan</p>
                        <p>FAQ</p>
                        <p>Syarat & Ketentuan</p>
                        <p>Kebijakan Privasi</p>
                    </div>

                    <div className='text-white'>
                        <p className='montserrat-bold text-2xl mb-1'>Lainnnya</p>
                        <p>Kantor Kami</p>
                        <Link to={'/login'}>Login</Link>
                    </div>
                </div>

                <div className='flex flex-col w-full xl:hidden'>

                    <button onClick={() => {setTrig1(!trig1)}} className='flex items-center justify-between w-full px-3 py-1 border border-t-1 border-b-1 border-x-0 border-[#5f5f5f]'>
                        <p className='text-white text-xl'>Perusahaan</p>
                        <FontAwesomeIcon icon={faChevronDown} color='white' size='xl'/>
                    </button>
                    <AnimatePresence>
                        { trig1 && 
                            <motion.div
                            key="dropdown"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: .5, y: -20, transition: { duration: 0.1 }}}
                            transition={{ duration: 0.2 }}
                            className='bg-[#1c263a] text-white flex flex-col gap-5 pl-4 py-3 '>
                                <a href="#">Tentang Kami</a>
                                <a href="#">Visi & Misi</a>
                                <a href="#">Tim Kami</a>
                                <a href="#">Karir Kami</a>
                            </motion.div>
                        }
                    </AnimatePresence>

                    <button onClick={() => { setTrig2(!trig2) }} className='flex items-center justify-between w-full px-3 py-1 border border-t-1 border-b-1 border-x-0 border-[#5f5f5f]'>
                        <p className='text-white text-xl'>Layanan</p>
                        <FontAwesomeIcon icon={faChevronDown} color='white' size='xl' />
                    </button>
                    <AnimatePresence>
                        {trig2 &&
                            <motion.div
                                key="dropdown"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: .5, y: -20, transition: { duration: 0.1 } }}
                                transition={{ duration: 0.2 }}
                                className='bg-[#1c263a] text-white flex flex-col gap-5 pl-4 py-3 '>
                                <a href="#">Jasa Legalitas</a>
                                <a href="#">Digital Marketing</a>
                                <a href="#">Konsultasi Bisnis</a>
                                <a href="#">Pembuatan Website</a>
                            </motion.div>
                        }
                    </AnimatePresence>

                    <button onClick={() => { setTrig3(!trig3) }} className='flex items-center justify-between w-full px-3 py-1 border border-t-1 border-b-1 border-x-0 border-[#5f5f5f]'>
                        <p className='text-white text-xl'>Bantuan</p>
                        <FontAwesomeIcon icon={faChevronDown} color='white' size='xl' />
                    </button>
                    <AnimatePresence>
                        {trig3 &&
                            <motion.div
                                key="dropdown"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: .5, y: -20, transition: { duration: 0.1 } }}
                                transition={{ duration: 0.2 }}
                                className='bg-[#1c263a] text-white flex flex-col gap-5 pl-4 py-3 '>
                                <a href="#">FAQ</a>
                                <a href="#">Syarat & Ketentuan</a>
                                <a href="#">Kebijakan Privasi</a>
                            </motion.div>
                        }
                    </AnimatePresence>

                    <button onClick={() => { setTrig4(!trig4) }} className='flex items-center justify-between w-full px-3 py-1 border border-t-1 border-b-1 border-x-0 border-[#5f5f5f]'>
                        <p className='text-white text-xl'>Lainnya</p>
                        <FontAwesomeIcon icon={faChevronDown} color='white' size='xl' />
                    </button>
                    <AnimatePresence>
                        {trig4 &&
                            <motion.div
                                key="dropdown"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: .5, y: -20, transition: { duration: 0.1 } }}
                                transition={{ duration: 0.2 }}
                                className='bg-[#1c263a] text-white flex flex-col gap-5 pl-4 py-3 '>
                                <a href="#">Lokasi Kantor</a>
                                <Link to={'/login'}>Login</Link>
                            </motion.div>
                        }
                    </AnimatePresence>

                </div>
            </div>
            <div className='bg-[#FF6F00] w-full py-1 text-center'>
                <p className='text-white text-sm xl:text-md'>Copyright © 2025, Jasa Amanah Berkah, All Right Reserved</p>
            </div>
        </div>
    )
}

export default Footer;