import '../index.css';
import Navbar_B from '../components/Navbar_B'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoltLightning, faUserTie, faRegistered, faTag, faCheck} from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Legalitas = () => {

        const [IG, setIG] = useState(true)
        const [TT, setTT] = useState(false)

    return (
        <>
            <Navbar_B/>

            {/* HERO SECTION */}
            <section className='flex flex-col xl:flex-row-reverse xl:mx-80 xl:px-40 mt-14'>

                <div className='flex xl:w-2/4 justify-center pl-14 xl:pl-0 bg'>
                    <img src="/assets/ilustras/scaleGavel_Ilus.png" alt="" className='h-80'/>
                </div>

                <div className='xl:w-2/4'>
                    <div className='text-center xl:text-left  xl:px-0 space-y-2 px-6'>
                        <h1 className='text-[#FF6F00] montserrat-bold text-4xl'>Legalitas</h1>
                        <p className='montserrat-semibold text-[#FF6F00]'>Urus semua kebutuhan legalitas bisnis Anda mulai dari pendirian PT, pembuatan NIB, hingga perizinan lainnya secara online dan transparan. Dengan dukungan tim profesional berpengalaman, kami pastikan prosesnya aman, cepat, dan sesuai regulasi yang berlaku.</p>
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

                    <div data-aos="fade-up" className='bg-[#FF6F00] shadow-1 flex flex-col items-center justify-center gap-6 px-3 py-3 rounded-md'>
                        <FontAwesomeIcon icon={faBoltLightning} color='white' className='h-20'/>

                        <h1 className='text-xl montserrat-semibold text-white text-center'>Proses Cepat <br /> & Efisien</h1>
                    </div>

                    <div data-aos="fade-up" className='bg-[#FF6F00] shadow-1 flex flex-col items-center justify-center gap-6 px-3 py-3 rounded-md'>
                        <FontAwesomeIcon icon={faUserTie} color='white' className='h-20'/>

                        <h1 className='text-xl montserrat-semibold text-white text-center'>Didampingi <br /> Tim Profesional</h1>
                    </div>

                    <div data-aos="fade-up" className='bg-[#FF6F00] shadow-1 flex flex-col items-center justify-center gap-6 px-3 py-3 rounded-md'>
                        <FontAwesomeIcon icon={faRegistered} color='white' className='h-20'/>

                        <h1 className='text-xl montserrat-semibold text-white text-center'>Proses Cepat <br /> & Efisien</h1>
                    </div>

                    <div data-aos="fade-up" className='bg-[#FF6F00] shadow-1 flex flex-col items-center justify-center gap-6 px-3 py-3 rounded-md'>
                        <FontAwesomeIcon icon={faTag} color='white' className='h-20'/>

                        <h1 className='text-xl montserrat-semibold text-white text-center'>Proses Cepat <br /> & Efisien</h1>
                    </div>

                </div>
            </section>

            {/* Services Section */}
            <section className='mt-20'>
                <div className='text-center'>
                    <h1 className='text-[#FF6F00] text-4xl montserrat-bold'>Layanan Legalitas</h1>
                </div>

                <div className='flex flex-col xl:flex-wrap xl:flex-row xl:justify-center xl:px-80 gap-7 items-center mt-14'>

                    <div data-aos="fade-up" className='bg-[#FF6F00] flex flex-col justify-center items-center gap-2 shadow-1 text-white w-96 h-48 text-center px-2 py-3 rounded-md'>
                        <h1 className='montserrat-bold text-3xl'>Pendirian PT</h1>

                        <p className='montserrat-semibold'>
                            Urus pendirian Perseroan Terbatas (PT) secara online, cepat, dan legal. Dokumen lengkap dan proses transparan sesuai regulasi pemerintah.
                        </p>
                    </div>

                    <div data-aos="fade-up" className='bg-[#FF6F00] flex flex-col justify-center items-center gap-2 shadow-1 text-white w-96 h-48 text-center px-2 py-3 rounded-md'>
                        <h1 className='montserrat-bold text-3xl'>CV & Firma</h1>

                        <p className='montserrat-semibold'>
                            Butuh bentuk usaha yang lebih sederhana? Kami bantu proses pendirian CV dan Firma dengan aman, hemat waktu, dan sah secara hukum.
                        </p>
                    </div>

                    <div data-aos="fade-up" className='bg-[#FF6F00] flex flex-col justify-center items-center gap-2 shadow-1 text-white w-96 h-48 text-center px-2 py-3 rounded-md'>
                        <h1 className='montserrat-bold text-3xl'>Yayasan</h1>

                        <p className='montserrat-semibold'>
                            Bangun organisasi sosial atau pendidikan secara resmi. Pendirian Yayasan jadi mudah dengan pendampingan hukum dari tim profesional.
                        </p>
                    </div>

                    <div data-aos="fade-up" className='bg-[#FF6F00] flex flex-col justify-center items-center gap-2 shadow-1 text-white w-96 h-48 text-center px-2 py-3 rounded-md'>
                        <h1 className='montserrat-bold text-3xl'>Koperasi</h1>

                        <p className='montserrat-semibold'>
                            Ingin membentuk koperasi yang legal dan terpercaya? Kami bantu proses pendirian koperasi sesuai aturan Kementerian, lengkap dengan akta dan izin resmi.
                        </p>
                    </div>

                    <div data-aos="fade-up" className='bg-[#FF6F00] flex flex-col justify-center items-center gap-2 shadow-1 text-white w-96 h-48 text-center px-2 py-3 rounded-md'>
                        <h1 className='montserrat-bold text-3xl'>Perkumpulan</h1>

                        <p className='montserrat-semibold'>
                            Legalitas untuk komunitas, asosiasi, atau organisasi non-profit. Kami bantu proses pendaftaran perkumpulan agar diakui secara hukum.
                        </p>
                    </div>

                    <div data-aos="fade-up" className='bg-[#FF6F00] flex flex-col justify-center items-center gap-2 shadow-1 text-white w-96 h-48 text-center px-2 py-3 rounded-md'>
                        <h1 className='montserrat-bold text-3xl'>Haki</h1>

                        <p className='montserrat-semibold'>
                            Lindungi merek, karya, atau produk usahamu dengan Hak Kekayaan Intelektual (HAKI). Proses cepat dan resmi langsung ke instansi terkait.
                        </p>
                    </div>

                </div>
            </section>

            {/* Pricing Section */}
            <section className='mt-20' id='pricing'>

                <div className='flex flex-col items-center gap-8'>
                    <h1 className='montserrat-bold text-[#FF6F00] text-4xl'>Pricing</h1>
                </div>

                <div className='flex flex-col xl:flex-row xl:flex-wrap xl:justify-center xl:px-52 items-center gap-16 mt-10'>

                    <div className='border border-[#FF6F00] w-72 rounded-lg shadow-1 bg-white z-0'>
                        <div className='relative flex bg-[#FF6F00] justify-center py-4 px-16 rounded-t-lg shadow-1'>
                            <div className='absolute top-2 left-2 w-3 h-3 bg-white rounded-full'></div>
                            <p className='montserrat-semibold text-white text-center text-4xl'>PT Umum</p>
                        </div>

                        <div className='p-5'>
                            <div className='flex flex-col items-center'>
                                <p className='montserrat-semibold text-xl mb-4'>Legalitas</p>
                                <h1 className='montserrat-bold text-4xl mb-5'><span className='text-xl montserrat-regular'>Rp</span>3.000.000</h1>
                                <a href="https://wa.me/6281323244573?text=Halo kak, saya tertarik dengan layanan legalitas, pendirian PT Umum. Mohon info lebih lengkapnya ya. https://pasteboard.co/8wVkXZLNDXEZ.jpg" target="_blank" className='border border-[#FF6F00] py-1 px-16 montserrat-bold text-xl rounded-lg'>Pilih</a>
                            </div>
                            <div className='mt-5'>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Cek Nama PT</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>SK Kemenkumham</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Akta Notaris</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>NPWP PT</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>SKT Pajak</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>NIB PT</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Surat SPPL</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Surat K3L</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Surat Tata Ruang</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Sertifikat Standard*</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Email PT</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Hak Akses OSS</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='border border-[#FF6F00] w-72 rounded-lg shadow-1 bg-white z-0'>
                        <div className='relative flex bg-[#FF6F00] justify-center py-4 px-16 rounded-t-lg shadow-1'>
                            <div className='absolute top-2 left-2 w-3 h-3 bg-white rounded-full'></div>
                            <p className='montserrat-semibold text-white text-center text-4xl'>PT Perorangan</p>
                        </div>

                        <div className='p-5'>
                            <div className='flex flex-col items-center'>
                                <p className='montserrat-semibold text-xl mb-4'>Legalitas</p>
                                <h1 className='montserrat-bold text-4xl mb-5'><span className='text-xl montserrat-regular'>Rp</span>750.000</h1>
                                <a href="https://wa.me/6281323244573?text=Halo kak, saya tertarik dengan layanan legalitas, pendirian PT Perorangan. Mohon info lebih lengkapnya ya. https://pasteboard.co/Xr7FJNXlHMaH.jpg" target="_blank" className='border border-[#FF6F00] py-1 px-16 montserrat-bold text-xl rounded-lg'>Pilih</a>
                            </div>
                            <div className='mt-5'>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Cek Nama PT</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>SK Kemenkumham</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Akta Notaris</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>NPWP PT</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>SKT Pajak</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>NIB PT</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Surat SPPL</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Surat K3L</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Surat Tata Ruang</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Sertifikat Standard*</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Email PT</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Hak Akses OSS</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='border border-[#FF6F00] w-72 rounded-lg shadow-1 bg-white z-0'>
                        <div className='relative flex bg-[#FF6F00] justify-center py-4 px-16 rounded-t-lg shadow-1'>
                            <div className='absolute top-2 left-2 w-3 h-3 bg-white rounded-full'></div>
                            <p className='montserrat-semibold text-white text-center text-4xl'>CV</p>
                        </div>

                        <div className='p-5'>
                            <div className='flex flex-col items-center'>
                                <p className='montserrat-semibold text-xl mb-4'>Legalitas</p>
                                <h1 className='montserrat-bold text-4xl mb-5'><span className='text-xl montserrat-regular'>Rp</span>2.000.000</h1>
                                <a href="https://wa.me/6281323244573?text=Halo kak, saya tertarik dengan layanan legalitas, pendirian CV. Mohon info lebih lengkapnya ya. https://pasteboard.co/09rU2MH4Q3gi.jpg" target="_blank" className='border border-[#FF6F00] py-1 px-16 montserrat-bold text-xl rounded-lg'>Pilih</a>
                            </div>
                            <div className='mt-5'>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Cek Nama CV</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>SK Kemenkumham</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Akta Notaris</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>NPWP CV</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>SKT Pajak</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>NIB CV</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Surat SPPL</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Surat K3L</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Surat Tata Ruang</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Sertifikat Standard*</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Email CV</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Hak Akses OSS</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='border border-[#FF6F00] w-72 rounded-lg shadow-1 bg-white z-0'>
                        <div className='relative flex bg-[#FF6F00] justify-center py-4 px-16 rounded-t-lg shadow-1'>
                            <div className='absolute top-2 left-2 w-3 h-3 bg-white rounded-full'></div>
                            <p className='montserrat-semibold text-white text-center text-4xl'>Yayasan</p>
                        </div>

                        <div className='p-5'>
                            <div className='flex flex-col items-center'>
                                <p className='montserrat-semibold text-xl mb-4'>Legalitas</p>
                                <h1 className='montserrat-bold text-4xl mb-5'><span className='text-xl montserrat-regular'>Rp</span>2.100.000</h1>
                                <a href="https://wa.me/6281323244573?text=Halo kak, saya tertarik dengan layanan legalitas, pendirian Yayasan. Mohon info lebih lengkapnya ya. https://pasteboard.co/8q3G3QSzMRVo.jpg" target="_blank" className='border border-[#FF6F00] py-1 px-16 montserrat-bold text-xl rounded-lg'>Pilih</a>
                            </div>
                            <div className='mt-5'>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Cek Nama Yayasan</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>SK Kemenkumham</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Akta Notaris</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>NPWP Yayasan</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>SKT Pajak</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>NIB Yayasan</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Surat SPPL</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Surat K3L</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Surat Tata Ruang</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Sertifikat Standard*</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Email Yayasan</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Hak Akses OSS</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='border border-[#FF6F00] w-72 rounded-lg shadow-1 bg-white z-0'>
                        <div className='relative flex bg-[#FF6F00] justify-center py-4 px-16 rounded-t-lg shadow-1'>
                            <div className='absolute top-2 left-2 w-3 h-3 bg-white rounded-full'></div>
                            <p className='montserrat-semibold text-white text-center text-4xl'>Perkumpulan</p>
                        </div>

                        <div className='p-5'>
                            <div className='flex flex-col items-center'>
                                <p className='montserrat-semibold text-xl mb-4'>Legalitas</p>
                                <h1 className='montserrat-bold text-4xl mb-5'><span className='text-xl montserrat-regular'>Rp</span>4.500.000</h1>
                                <a href="https://wa.me/6281323244573?text=Halo kak, saya tertarik dengan layanan legalitas, pendirian Perkumpulan. Mohon info lebih lengkapnya ya. https://pasteboard.co/mcCBj0vBRlJC.jpg" target="_blank" className='border border-[#FF6F00] py-1 px-16 montserrat-bold text-xl rounded-lg'>Pilih</a>
                            </div>
                            <div className='mt-5'>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Cek Nama Perkumpulan</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>SK Kemenkumham</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Akta Notaris</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>NPWP Perkumpulan</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>SKT Pajak</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>NIB Perkumpulan</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Surat SPPL</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Surat K3L</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Surat Tata Ruang</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Sertifikat Standard*</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Email Perkumpulan</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Hak Akses OSS</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='border border-[#FF6F00] w-72 rounded-lg shadow-1 bg-white z-0'>
                        <div className='relative flex bg-[#FF6F00] justify-center py-4 px-16 rounded-t-lg shadow-1'>
                            <div className='absolute top-2 left-2 w-3 h-3 bg-white rounded-full'></div>
                            <p className='montserrat-semibold text-white text-center text-4xl'>Koperasi</p>
                        </div>

                        <div className='p-5'>
                            <div className='flex flex-col items-center'>
                                <p className='montserrat-semibold text-xl mb-4'>Legalitas</p>
                                <h1 className='montserrat-bold text-4xl mb-5'><span className='text-xl montserrat-regular'>Rp</span>4.500.000</h1>
                                <a href="https://wa.me/6281323244573?text=Halo kak, saya tertarik dengan layanan legalitas, pendirian Koperasi. Mohon info lebih lengkapnya ya. https://pasteboard.co/SGi8To6zUhek.jpg " target="_blank" className='border border-[#FF6F00] py-1 px-16 montserrat-bold text-xl rounded-lg'>Pilih</a>
                            </div>
                            <div className='mt-5'>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Cek Nama Koperasi</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>SK Kemenkumham</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Akta Notaris</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>NPWP Koperasi</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>SKT Pajak</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>NIB Koperasi</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Surat SPPL</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Surat K3L</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Surat Tata Ruang</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Sertifikat Standard*</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Email Koperasi</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Hak Akses OSS</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='border border-[#FF6F00] w-72 rounded-lg shadow-1 bg-white z-0'>
                        <div className='relative flex bg-[#FF6F00] justify-center py-4 px-16 rounded-t-lg shadow-1'>
                            <div className='absolute top-2 left-2 w-3 h-3 bg-white rounded-full'></div>
                            <p className='montserrat-semibold text-white text-center text-4xl'>Firma</p>
                        </div>

                        <div className='p-5'>
                            <div className='flex flex-col items-center'>
                                <p className='montserrat-semibold text-xl mb-4'>Legalitas</p>
                                <h1 className='montserrat-bold text-4xl mb-5'><span className='text-xl montserrat-regular'>Rp</span>2.500.000</h1>
                                <a href="https://wa.me/6281323244573?text=Halo kak, saya tertarik dengan layanan legalitas, pendirian Firma. Mohon info lebih lengkapnya ya. https://pasteboard.co/4ENSExGCgSpJ.jpg" target="_blank" className='border border-[#FF6F00] py-1 px-16 montserrat-bold text-xl rounded-lg'>Pilih</a>
                            </div>
                            <div className='mt-5'>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Cek Nama Firma</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>SK Kemenkumham</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Akta Notaris</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>NPWP Firma</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>SKT Pajak</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>NIB Firma</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Surat SPPL</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Surat K3L</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Surat Tata Ruang</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Sertifikat Standard*</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Email Firma</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]'/>
                                    <p className='montserrat-semibold'>Hak Akses OSS</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Testimonial Section */}
            <section className='mt-20'>
                <div className='flex flex-col items-center'>
                    <h1 className='montserrat-bold text-[#FF6F00] text-4xl'>Testimoni</h1>
                </div>
                <div className='px-14 mt-10 xl:flex justify-center gap-10'>

                    <div className='relative text-white flex text-center flex-col justify-end items-center h-80 w-72'>
                        <div className='absolute top-0'>
                            <img src="/assets/acep.png" alt="" className='rounded-full border-white border-8 w-24'/>
                        </div>
                        <div className='bg-[#FF6F00] rounded-lg text-white flex flex-col text-center justify-center items-center h-64 pb-4 pt-10 w-full px-5 gap-2'>
                            <p className='text-xl montserrat-bold mb-2'>Acep Holik</p>
                            <p><em>Apapun yang anda butuhkan untuk pengembangan usaha bisnis anda, Jasa Amanah adalah solusi yang terpercaya 👍👍👍👍👍 …</em></p>
                        </div>
                    </div>

                    <div className='relative text-white flex text-center flex-col justify-end items-center h-80 w-72'>
                        <div className='absolute top-0'>
                            <img src="/assets/alvin.png" alt="" className='rounded-full border-white border-8 w-24'/>
                        </div>
                        <div className='bg-[#FF6F00] rounded-lg text-white flex flex-col text-center justify-center items-center h-64 pb-4 pt-10 w-full px-5 gap-2'>
                            <p className='text-xl montserrat-bold mb-2'>Alvin Prabowo</p>
                            <p><em>Sesuai nama, jasa yang amanah sesuai dengan yang ditawarkan. Semoga segalanya menjadi berkah dan melimpah</em></p>
                        </div>
                    </div>

                    <div className='relative text-white flex text-center flex-col justify-end items-center h-80 w-72'>
                        <div className='absolute top-0'>
                            <img src="/assets/urban.png" alt="" className='rounded-full border-white border-8 w-24'/>
                        </div>
                        <div className='bg-[#FF6F00] rounded-lg text-white flex flex-col text-center justify-center items-center h-64 pb-4 pt-10 w-full px-5 gap-2'>
                            <p className='text-xl montserrat-bold mb-2'>Urban Society</p>
                            <p><em>Pengerjaan pembuatan PT baru kurang lebih 7 hari kerja dengan biaya yang affordable!.</em></p>
                        </div>
                    </div>

                </div>
            </section>

            <Footer/>
        </>
    )
}

export default Legalitas