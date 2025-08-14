import '../index.css';
import Navbar_B from '../components/Navbar_B'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faUserTie, faRegistered, faTag, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Footer from '../components/Footer';
import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const DigitalMarketing = () => {
    
    const [IG, setIG] = useState(true)
    const [TT, setTT] = useState(false)

    return (
        <>
            <Navbar_B />

            {/* Hero Section */}
            <section className='flex flex-col xl:flex-row-reverse xl:mx-80 xl:px-40 mt-14'>

                <div className='flex xl:w-2/4 justify-center pl-14 xl:pl-0 bg'>
                    <img src="/assets/ilustras/digitalMarketing2_Ilus.png" alt="" className='h-80' />
                </div>

                <div className='xl:w-2/4'>
                    <div className='text-center xl:text-left  xl:px-0 space-y-2 px-6'>
                        <h1 className='text-[#FF6F00] montserrat-bold text-4xl'>Digital Marketing</h1>
                        <p className='montserrat-semibold text-[#FF6F00]'>Tingkatkan visibilitas dan pertumbuhan bisnis Anda melalui layanan Digital Marketing yang terintegrasi. Mulai dari manajemen media sosial, strategi iklan online, hingga optimasi SEO – semua dilakukan secara profesional dan transparan.</p>
                    </div>

                    <div className='flex gap-3 xl:justify-start justify-center mt-8'>
                        <button className='p-2 xl:p-3 rounded-md bg-[#FF6F00] text-white montserrat-bold'>Konsultasi Sekarang</button>
                        <button className='p-2 xl:p-3 rounded-md bg-[#FF6F00] text-white montserrat-bold'><a href="#pricing" className='p-3 xl:p-3'>Lihat Paket</a></button>
                    </div>
                </div>
            </section>

            {/* Kenapa Kami Section */}
            <section className='mt-20'>
                <div className='text-center'>
                    <h1 className='text-[#FF6F00] text-4xl montserrat-bold'>Kenapa Kami?</h1>
                </div>

                <div className='grid grid-cols-2 xl:flex xl:justify-center xl:gap-32 gap-y-10 place-items-center mt-10'>

                    <div data-aos="fade-up" className='bg-[#FF6F00] shadow-1 flex flex-col items-center justify-center gap-6 px-3 py-5 w-40 rounded-md'>
                        <FontAwesomeIcon icon={faUserTie} color='white' className='h-20' />

                        <h1 className='text-xl montserrat-semibold text-white text-center'>Tim Profesional</h1>
                    </div>

                    <div data-aos="fade-up" className='bg-[#FF6F00] shadow-1 flex flex-col items-center justify-center gap-6 px-3 py-5 w-40 rounded-md'>
                        <FontAwesomeIcon icon={faBolt} color='white' className='h-20' />

                        <h1 className='text-xl montserrat-semibold text-white text-center'>Proses Transparan</h1>
                    </div>

                    <div data-aos="fade-up" className='bg-[#FF6F00] shadow-1 flex flex-col items-center justify-center gap-6 px-3 py-5 w-40 rounded-md'>
                        <FontAwesomeIcon icon={faRegistered} color='white' className='h-20' />

                        <h1 className='text-xl montserrat-semibold text-white text-center'>Laporan <br /> Secara Berkala</h1>
                    </div>

                    <div data-aos="fade-up" className='bg-[#FF6F00] shadow-1 flex flex-col items-center justify-center gap-6 px-3 py-5 w-40 rounded-md'>
                        <FontAwesomeIcon icon={faTag} color='white' className='h-20' />

                        <h1 className='text-xl montserrat-semibold text-white text-center'>Dukungan <br /> Konsultasi 24/7</h1>
                    </div>

                </div>
            </section>

            {/* Service Section */}
            <section className='mt-20'>
                <div className='text-center'>
                    <h1 className='text-[#FF6F00] text-4xl montserrat-bold'>Layanan Digital Marketing</h1>
                </div>

                <div className='flex flex-col xl:flex-wrap xl:flex-row xl:justify-center xl:px-80 gap-7 items-center mt-14'>

                    <div data-aos="fade-up" className='bg-[#FF6F00] flex flex-col justify-center items-center gap-2 shadow-1 text-white w-96 h-52 text-center px-2 rounded-md'>
                        <h1 className='montserrat-bold text-3xl'>Optimasi Instragam</h1>

                        <p className='montserrat-semibold'>
                            Bangun akun Instagram profesional dan aktif. Kami bantu tingkatkan engagement, followers berkualitas, dan branding visual agar bisnis Anda makin dipercaya dan dikenal.
                        </p>
                    </div>

                    <div data-aos="fade-up" className='bg-[#FF6F00] flex flex-col justify-center items-center gap-2 shadow-1 text-white w-96 h-52 text-center px-2 rounded-md'>
                        <h1 className='montserrat-bold text-3xl'>Optimasi Tik Tok</h1>

                        <p className='montserrat-semibold'>
                            Manfaatkan potensi viral TikTok untuk menjangkau lebih banyak audiens. Kami bantu dengan strategi konten, hashtag, dan optimasi profil agar lebih maksimal.
                        </p>
                    </div>

                    <div data-aos="fade-up" className='bg-[#FF6F00] flex flex-col justify-center items-center gap-2 shadow-1 text-white w-96 h-52 text-center px-2 rounded-md'>
                        <h1 className='montserrat-bold text-3xl'>SEO & Optimasi Website</h1>

                        <p className='montserrat-semibold'>
                            Tingkatkan peringkat website Anda di Google. Dengan optimasi SEO teknis dan konten, website Anda akan lebih mudah ditemukan oleh calon pelanggan.
                        </p>
                    </div>

                    <div data-aos="fade-up" className='bg-[#FF6F00] flex flex-col justify-center items-center gap-2 shadow-1 text-white w-96 h-52 text-center px-2 rounded-md'>
                        <h1 className='montserrat-bold text-3xl'>Optimasi FB Ads</h1>

                        <p className='montserrat-semibold'>
                            Jangkau target pasar dengan iklan Facebook yang tepat sasaran. Kami bantu dari strategi, copywriting, hingga manajemen anggaran iklan secara efisien.
                        </p>
                    </div>

                    <div data-aos="fade-up" className='bg-[#FF6F00] flex flex-col justify-center items-center gap-2 shadow-1 text-white w-96 h-52 text-center px-2 rounded-md'>
                        <h1 className='montserrat-bold text-3xl'>Manajemen Sosial Media</h1>

                        <p className='montserrat-semibold'>
                            Tidak sempat mengurus sosial media bisnis? Serahkan pada tim kami. Konten rutin, desain menarik, dan interaksi dengan audiens kami kelola untuk Anda.
                        </p>
                    </div>

                </div>
            </section>

            {/* Pricing Section*/}
            <section className='mt-20' id='pricing'>
                <div className='mt-20'>
                    <div className='flex flex-col items-center gap-8'>
                        <h1 className='montserrat-semibold text-[#000] text-4xl'>Pricing</h1>
                        <div className='bg-white w-max shadow-1 p-3 flex gap-3 rounded-xl'>
                            <button className={IG ? 'bg-[#FF6F00] text-white duration-300 all py-2 px-3 rounded-full montserrat-semibold' : 'bg-[#EAEAEA] duration-300 py-2 px-3 rounded-full montserrat-semibold'} onClick={() => {
                                if (IG === false) {
                                    setIG(true)
                                    setTT(false)
                                }
                            }}>Optimasi Instragram</button>
                            <button className={TT ? 'bg-[#FF6F00] text-white duration-300 all py-2 px-3 rounded-full montserrat-semibold' : 'bg-[#EAEAEA] duration-300 py-2 px-3 rounded-full montserrat-semibold'} onClick={() => {
                                if (TT === false) {
                                    setIG(false)
                                    setTT(true)
                                }
                            }}>Optimasi Tik Tok</button>
                        </div>
                    </div>

                    {/* Pricing Card Optimasi Instragram */}
                    {IG &&
                        <div className='flex flex-col xl:flex-row xl:justify-center items-center gap-16 mt-20'>

                            <div className='border border-[#559EFF] w-72 rounded-lg shadow-1 bg-white z-0'>
                                <div className='relative flex bg-[#559EFF] justify-center py-4 px-16 rounded-t-lg shadow-1'>
                                    <FontAwesomeIcon icon={faInstagram} className='absolute top-2 left-2 w-5 h-auto text-white rounded-full' />
                                    <p className='montserrat-semibold text-white text-center text-4xl'>Starter IG Boost</p>
                                </div>

                                <div className='p-5'>
                                    <div className='flex flex-col items-center'>
                                        <p className='montserrat-semibold text-xl mb-4'>Optimasi Instagram</p>
                                        <h1 className='montserrat-bold text-4xl mb-5'><span className='text-xl montserrat-regular'>Rp</span>95.000<span className='text-xl'>/Bln</span></h1>
                                        <a href="https://wa.me/6281323244573?text=Halo%20kak%2C%20saya%20tertarik%20dengan%20Optimasi%20Instagram%2C%20paket%20Starter%20IG%20Boost.%20Mohon%20info%20lebih%20lengkapnya%20ya%20https://pasteboard.co/BqTIxEfdHiix.jpg" target="_blank" className='border border-[#559EFF] py-1 px-16 montserrat-bold text-xl rounded-lg'>Pilih</a>
                                    </div>
                                    <div className='mt-5'>
                                        <div className='flex gap-2 items-center'>
                                            <FontAwesomeIcon icon={faCheck} className='text-[#559EFF]'/>
                                            <p className='montserrat-semibold'>Konten Feed (12 Post)</p>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                            <FontAwesomeIcon icon={faCheck} className='text-[#559EFF]'/>
                                            <p className='montserrat-semibold'>Konten Story (4 Post)</p>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                            <FontAwesomeIcon icon={faCheck} className='text-[#559EFF]'/>
                                            <p className='montserrat-semibold'>Caption & Hashtag</p>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                            <FontAwesomeIcon icon={faCheck} className='text-[#559EFF]'/>
                                            <p className='montserrat-semibold'>Admin Posting & Jadwal</p>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                            <FontAwesomeIcon icon={faCheck} className='text-[#559EFF]'/>
                                            <p className='montserrat-semibold'>Copywriting</p>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                            <FontAwesomeIcon icon={faCheck} className='text-[#559EFF]'/>
                                            <p className='montserrat-semibold'>100% Ori Design</p>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                            <FontAwesomeIcon icon={faCheck} className='text-[#559EFF]'/>
                                            <p className='montserrat-semibold'>Revisi Ide 1x</p>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                            <FontAwesomeIcon icon={faCheck} className='text-[#559EFF]'/>
                                            <p className='montserrat-semibold'>Revisi Visual 1x</p>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                            <FontAwesomeIcon icon={faXmark} className='text-[#559EFF]'/>
                                            <p className='line-through decoration-2 montserrat-semibold'>Audit Akun IG</p>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                            <FontAwesomeIcon icon={faXmark} className='text-[#559EFF]'/>
                                            <p className='line-through decoration-2 montserrat-semibold'>Konten Reels (2 Reels)</p>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                            <FontAwesomeIcon icon={faXmark} className='text-[#559EFF]'/>
                                            <p className='line-through decoration-2 montserrat-semibold'>Strategi Konten Bulanan</p>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                            <FontAwesomeIcon icon={faXmark} className='text-[#559EFF]'/>
                                            <p className='line-through decoration-2 montserrat-semibold'>Laporan Insight</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='border border-[#3FDF72] w-72 rounded-lg shadow-1 bg-white'>
                                <div className='relative flex bg-[#3FDF72] justify-center py-4 px-16 rounded-t-lg shadow-1'>
                                    <FontAwesomeIcon icon={faInstagram} className='absolute top-2 left-2 w-5 h-auto text-white rounded-full' />
                                    <p className='montserrat-semibold text-white text-center text-4xl'>Grow & Engage</p>
                                </div>

                                <div className='p-5'>
                                    <div className='flex flex-col items-center'>
                                        <p className='montserrat-semibold text-xl mb-4'>Optimasi Instagram</p>
                                        <h1 className='montserrat-bold text-4xl mb-5'><span className='text-xl montserrat-regular'>Rp</span>1.700.000<span className='text-xl'>/Bln</span></h1>
                                        <a href="https://wa.me/6281323244573?text=Halo%20kak%2C%20saya%20tertarik%20dengan%20Optimasi%20Instagram%2C%20paket%20Grow%20%26%20Engage.%20Mohon%20info%20lebih%20lengkapnya%20ya%20https://pasteboard.co/BqTIxEfdHiix.jpg" target="_blank" className='border border-[#3DFD72] py-1 px-16 montserrat-bold text-xl rounded-lg'>Pilih</a>
                                    </div>
                                    <div className='mt-5'>
                                        <div className='flex gap-2 items-center'>
                                            <FontAwesomeIcon icon={faCheck} className='text-[#3DFD72]' />
                                            <p className='montserrat-semibold'>Konten Feed (16 Post)</p>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                            <FontAwesomeIcon icon={faCheck} className='text-[#3DFD72]' />
                                            <p className='montserrat-semibold'>Konten Story (8 Post)</p>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                            <FontAwesomeIcon icon={faCheck} className='text-[#3DFD72]' />
                                            <p className='montserrat-semibold'>Caption & Hashtag</p>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                            <FontAwesomeIcon icon={faCheck} className='text-[#3DFD72]' />
                                            <p className='montserrat-semibold'>Admin Posting & Jadwal</p>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                            <FontAwesomeIcon icon={faCheck} className='text-[#3DFD72]' />
                                            <p className='montserrat-semibold'>Copywriting</p>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                            <FontAwesomeIcon icon={faCheck} className='text-[#3DFD72]' />
                                            <p className='montserrat-semibold'>100% Ori Design</p>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                            <FontAwesomeIcon icon={faCheck} className='text-[#3DFD72]' />
                                            <p className='montserrat-semibold'>Revisi Ide 2x</p>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                            <FontAwesomeIcon icon={faCheck} className='text-[#3DFD72]' />
                                            <p className='montserrat-semibold'>Revisi Visual 2x</p>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                            <FontAwesomeIcon icon={faCheck} className='text-[#3DFD72]' />
                                            <p className='montserrat-semibold'>Audit Akun IG</p>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                            <FontAwesomeIcon icon={faCheck} className='text-[#3DFD72]' />
                                            <p className='montserrat-semibold'>Konten Reels (2 Reels)</p>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                            <FontAwesomeIcon icon={faCheck} className='text-[#3DFD72]' />
                                            <p className='montserrat-semibold'>Strategi Konten Bulanan</p>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                            <FontAwesomeIcon icon={faCheck} className='text-[#3DFD72]' />
                                            <p className='montserrat-semibold'>Laporan Insight</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='border border-[#FF6F00] w-72 rounded-lg shadow-1 bg-white'>
                                <div className='relative flex bg-[#FF6F00] justify-center py-4 px-16 rounded-t-lg shadow-1'>
                                    <FontAwesomeIcon icon={faInstagram} className='absolute top-2 left-2 w-5 h-auto text-white rounded-full' />
                                    <p className='montserrat-semibold text-white text-center text-4xl'>Brand Authority</p>
                                </div>

                                <div className='p-5'>
                                    <div className='flex flex-col items-center'>
                                        <p className='montserrat-semibold text-xl mb-4'>Optimasi Instagram</p>
                                        <h1 className='montserrat-bold text-4xl mb-5'><span className='text-xl montserrat-regular'>Rp</span>3.250.000<span className='text-xl'>/Bln</span></h1>
                                        <a href="https://wa.me/6281323244573?text=Halo%20kak%2C%20saya%20tertarik%20dengan%20Optimasi%20Instagram%2C%20paket%20Brand%20Authority.%20Mohon%20info%20lebih%20lengkapnya%20ya%20https://pasteboard.co/BqTIxEfdHiix.jpg" target="_blank" className='border border-[#FF6F00] py-1 px-16 montserrat-bold text-xl rounded-lg'>Pilih</a>
                                    </div>
                                    <div className='mt-5'>
                                        <div className='flex gap-2 items-center'>
                                            <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                            <p className='montserrat-semibold'>Konten Feed (20 Post)</p>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                            <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                            <p className='montserrat-semibold'>Konten Story (16 Post)</p>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                            <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                            <p className='montserrat-semibold'>Caption & Hashtag</p>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                            <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                            <p className='montserrat-semibold'>Admin Posting & Jadwal</p>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                            <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                            <p className='montserrat-semibold'>Copywriting</p>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                            <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                            <p className='montserrat-semibold'>100% Ori Design</p>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                            <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                            <p className='montserrat-semibold'>Revisi Ide 3x</p>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                            <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                            <p className='montserrat-semibold'>Revisi Visual 3x</p>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                            <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                            <p className='montserrat-semibold'>Audit Akun IG</p>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                            <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                            <p className='montserrat-semibold'>Konten Reels (4 Reels)</p>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                            <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                            <p className='montserrat-semibold'>Strategi Konten Bulanan</p>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                            <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                            <p className='montserrat-semibold'>Laporan Insight</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    }

                    {/* Pricing Card Optimasi Tik Tok */}
                    {TT &&
                        <div className='flex flex-col xl:flex-row xl:justify-center items-center gap-16 mt-20'>

                            <div className='border border-[#559EFF] w-72 rounded-lg shadow-1 bg-white z-0'>
                                <div className='relative flex bg-[#559EFF] justify-center py-4 px-16 rounded-t-lg shadow-1'>
                                    <FontAwesomeIcon icon={faTiktok} className='absolute top-2 left-2 w-5 h-auto text-white rounded-full' />
                                    <p className='montserrat-semibold text-white text-center text-4xl'>Basic</p>
                                </div>

                                <div className='p-5'>
                                    <div className='flex flex-col items-center'>
                                        <p className='montserrat-semibold text-xl mb-4'>Optimasi Tik Tok</p>
                                        <h1 className='montserrat-bold text-4xl mb-5'><span className='text-xl montserrat-regular'>Rp</span>750.000<span className='text-xl'>/Bln</span></h1>
                                        <a href="https://wa.me/6281323244573?text=Halo%20kak%2C%20saya%20tertarik%20dengan%20Optimasi%20Tik%20Tok%2C%20paket%20Basic.%20Mohon%20info%20lebih%20lengkapnya%20ya%20https://pasteboard.co/1WSZqXWrVkT7.jpg" target="_blank" className='border border-[#559EFF] py-1 px-16 montserrat-bold text-xl rounded-lg'>Pilih</a>
                                    </div>
                                    <div className='mt-5'>
                                        <div className='flex gap-2 items-top'>
                                            <FontAwesomeIcon icon={faCheck} className='text-[#559EFF]' />
                                            <p className='montserrat-semibold'>Audit Akun Tik Tok</p>
                                        </div>
                                        <div className='flex gap-2 items-top'>
                                            <FontAwesomeIcon icon={faCheck} className='text-[#559EFF]' />
                                            <p className='montserrat-semibold'>6 Video (15-30 Detik)</p>
                                        </div>
                                        <div className='flex gap-2 items-top'>
                                            <FontAwesomeIcon icon={faCheck} className='text-[#559EFF]' />
                                            <p className='montserrat-semibold'>Riset Hashtag & Caption Siap Pakai</p>
                                        </div>
                                        <div className='flex gap-2 items-top'>
                                            <FontAwesomeIcon icon={faCheck} className='text-[#559EFF]' />
                                            <p className='montserrat-semibold'>1X Laporan Performa Sederhana per Bulan</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='border border-[#3FDF72] w-72 rounded-lg shadow-1 bg-white'>
                                <div className='relative flex bg-[#3FDF72] justify-center py-4 px-16 rounded-t-lg shadow-1'>
                                    <FontAwesomeIcon icon={faTiktok} className='absolute top-2 left-2 w-5 h-auto text-white rounded-full' />
                                    <p className='montserrat-semibold text-white text-center text-4xl'>Pro</p>
                                </div>

                                <div className='p-5'>
                                    <div className='flex flex-col items-center'>
                                        <p className='montserrat-semibold text-xl mb-4'>Optimasi Tik Tok</p>
                                        <h1 className='montserrat-bold text-4xl mb-5'><span className='text-xl montserrat-regular'>Rp</span>1.500.000<span className='text-xl'>/Bln</span></h1>
                                        <a href="https://wa.me/6281323244573?text=Halo%20kak%2C%20saya%20tertarik%20dengan%20Optimasi%20Tik%20Tok%2C%20paket%20Pro.%20Mohon%20info%20lebih%20lengkapnya%20ya%20https://pasteboard.co/1WSZqXWrVkT7.jpg" target="_blank" className='border border-[#3DFD72] py-1 px-16 montserrat-bold text-xl rounded-lg'>Pilih</a>
                                    </div>
                                    <div className='mt-5'>
                                        <div className='flex gap-2 items-top'>
                                            <FontAwesomeIcon icon={faCheck} className='text-[#3DFD72]' />
                                            <p className='montserrat-semibold'>Semua dari Paket Basic</p>
                                        </div>
                                        <div className='flex gap-2 items-top'>
                                            <FontAwesomeIcon icon={faCheck} className='text-[#3DFD72]' />
                                            <p className='montserrat-semibold'>12 Video (15-45 Detik)</p>
                                        </div>
                                        <div className='flex gap-2 items-top'>
                                            <FontAwesomeIcon icon={faCheck} className='text-[#3DFD72]' />
                                            <p className='montserrat-semibold'>Video Diedit Secara Profesional</p>
                                        </div>
                                        <div className='flex gap-2 items-top'>
                                            <FontAwesomeIcon icon={faCheck} className='text-[#3DFD72]' />
                                            <p className='montserrat-semibold'>Upload Konten ke Akun Tik Tok</p>
                                        </div>
                                        <div className='flex gap-2 items-top'>
                                            <FontAwesomeIcon icon={faCheck} className='text-[#3DFD72]' />
                                            <p className='montserrat-semibold'>Balas Komentar</p>
                                        </div>
                                        <div className='flex gap-2 items-top'>
                                            <FontAwesomeIcon icon={faCheck} className='text-[#3DFD72]' />
                                            <p className='montserrat-semibold'>1x Konsutasi Strategi per Bulan</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='border border-[#FF6F00] w-72 rounded-lg shadow-1 bg-white'>
                                <div className='relative flex bg-[#FF6F00] justify-center py-4 px-16 rounded-t-lg shadow-1'>
                                    <FontAwesomeIcon icon={faTiktok} className='absolute top-2 left-2 w-5 h-auto text-white rounded-full' />
                                    <p className='montserrat-semibold text-white text-center text-4xl'>Premium</p>
                                </div>

                                <div className='p-5'>
                                    <div className='flex flex-col items-center'>
                                        <p className='montserrat-semibold text-xl mb-4'>Optimasi Tik Tok</p>
                                        <h1 className='montserrat-bold text-4xl mb-5'><span className='text-xl montserrat-regular'>Rp</span>2.500.000<span className='text-xl'>/Bln</span></h1>
                                        <a href="https://wa.me/6281323244573?text=Halo%20kak%2C%20saya%20tertarik%20dengan%20Optimasi%20Tik%20Tok%2C%20paket%20Premium.%20Mohon%20info%20lebih%20lengkapnya%20ya%20https://pasteboard.co/1WSZqXWrVkT7.jpg" target="_blank" className='border border-[#FF6F00] py-1 px-16 montserrat-bold text-xl rounded-lg'>
                                        Pilih
                                        <img src="/assets/paketImage/OPIG_1.png" alt="" className='hidden'/>
                                        </a>
                                    </div>
                                    <div className='mt-5'>
                                        <div className='flex gap-2 items-top'>
                                            <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                            <p className='montserrat-semibold'>Semua dari Paket Pro</p>
                                        </div>
                                        <div className='flex gap-2 items-top'>
                                            <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                            <p className='montserrat-semibold'>Tik Tok Ads Setup (Iklan Brand Awareness/Conversion)</p>
                                        </div>
                                        <div className='flex gap-2 items-top'>
                                            <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                            <p className='montserrat-semibold'>Rekomendasi Strategi Campaign Bulanan</p>
                                        </div>
                                        <div className='flex gap-2 items-top'>
                                            <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                            <p className='montserrat-semibold'>Optimasi Profile Bio & Link</p>
                                        </div>
                                        <div className='flex gap-2 items-top'>
                                            <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                            <p className='montserrat-semibold'>2x Konsultasi per bulan</p>
                                        </div>
                                        <div className='flex gap-2 items-top'>
                                            <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                            <p className='montserrat-semibold'>1x Konsutasi Strategi per Bulan</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    }

                </div>
            </section>

            <Footer />
        </>
    )
}

export default DigitalMarketing
