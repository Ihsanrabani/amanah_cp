import '../index.css'
import Navbar_W from '../components/Navbar_w'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoltLightning, faUserTie, faRegistered, faTag, faCheck } from '@fortawesome/free-solid-svg-icons';

const PricingL = () => {

    

    return (
        <>  <section className='h-screen bg-[url("/assets/gradientPricing_M.png")] md:bg-[url("/assets/gradientPricing_D.png")]'>
                <Navbar_W/>

                <div className='text-center text-white px-5 flex flex-col gap-4 mt-28'>
                <h1 className='montserrat-semibold text-2xl xl:text-3xl'>Pricing Legalitas</h1>
                    <h1 className='montserrat-bold text-3xl xl:text-5xl'>Layanan Berkualitas Tak <br /> Harus Mahal</h1>
                    <p className='montserrat-semibold xl:text-xl xl:px-96'>Mulai dari kebutuhan dasar hingga layanan lengkap—semua kami sediakan dengan harga yang transparan dan proses yang profesional. Pilih paket yang paling sesuai dengan kebutuhan bisnis Anda.</p>
                </div>

                <section className='mt-20' id='pricing'>

                    <div className='flex flex-col xl:flex-row xl:flex-wrap xl:justify-center xl:px-52 items-center gap-16 mt-10'>

                        <div className='border border-[#FF6F00] w-72 rounded-lg shadow-xl bg-white z-0'>
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
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Cek Nama PT</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>SK Kemenkumham</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Akta Notaris</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>NPWP PT</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>SKT Pajak</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>NIB PT</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Surat SPPL</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Surat K3L</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Surat Tata Ruang</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Sertifikat Standard*</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Email PT</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Hak Akses OSS</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='border border-[#FF6F00] w-72 rounded-lg shadow-xl bg-white z-0'>
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
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Cek Nama PT</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>SK Kemenkumham</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Akta Notaris</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>NPWP PT</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>SKT Pajak</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>NIB PT</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Surat SPPL</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Surat K3L</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Surat Tata Ruang</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Sertifikat Standard*</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Email PT</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Hak Akses OSS</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='border border-[#FF6F00] w-72 rounded-lg shadow-xl bg-white z-0'>
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
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Cek Nama CV</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>SK Kemenkumham</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Akta Notaris</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>NPWP CV</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>SKT Pajak</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>NIB CV</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Surat SPPL</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Surat K3L</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Surat Tata Ruang</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Sertifikat Standard*</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Email CV</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Hak Akses OSS</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='border border-[#FF6F00] w-72 rounded-lg shadow-xl bg-white z-0'>
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
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Cek Nama Yayasan</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>SK Kemenkumham</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Akta Notaris</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>NPWP Yayasan</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>SKT Pajak</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>NIB Yayasan</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Surat SPPL</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Surat K3L</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Surat Tata Ruang</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Sertifikat Standard*</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Email Yayasan</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Hak Akses OSS</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='border border-[#FF6F00] w-72 rounded-lg shadow-xl bg-white z-0'>
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
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Cek Nama Perkumpulan</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>SK Kemenkumham</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Akta Notaris</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>NPWP Perkumpulan</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>SKT Pajak</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>NIB Perkumpulan</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Surat SPPL</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Surat K3L</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Surat Tata Ruang</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Sertifikat Standard*</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Email Perkumpulan</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Hak Akses OSS</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='border border-[#FF6F00] w-72 rounded-lg shadow-xl bg-white z-0'>
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
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Cek Nama Koperasi</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>SK Kemenkumham</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Akta Notaris</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>NPWP Koperasi</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>SKT Pajak</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>NIB Koperasi</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Surat SPPL</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Surat K3L</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Surat Tata Ruang</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Sertifikat Standard*</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Email Koperasi</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Hak Akses OSS</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='border border-[#FF6F00] w-72 rounded-lg shadow-xl bg-white z-0'>
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
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Cek Nama Firma</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>SK Kemenkumham</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Akta Notaris</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>NPWP Firma</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>SKT Pajak</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>NIB Firma</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Surat SPPL</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Surat K3L</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Surat Tata Ruang</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Sertifikat Standard*</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Email Firma</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='text-[#FF6F00]' />
                                        <p className='montserrat-semibold'>Hak Akses OSS</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <Footer/>
            </section>
        </>
    )
}       

export default PricingL