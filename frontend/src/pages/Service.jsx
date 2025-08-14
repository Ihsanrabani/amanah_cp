import '../index.css'
import Navbar_B from '../components/Navbar_B';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faTag, faComments, faArrowUpFromBracket, faPhone, faEye, faHandshake, faRegistered } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Service = () => {

    return (
        <>
            <Navbar_B />
            <div className='xl:mx-96'>
                <section className='mt-10'>
                    <div className='bg-[#FF6F00] flex flex-col xl:flex-row items-center text-center mx-10 py-6 px-4 rounded-xl shadow-1'>
                        <div className='xl:w-1/4 red-500 xl:flex xl:justify-center'>
                            <img src="/assets/ilustras/chat_Ilus.png" alt="" className='w-96 ' />
                        </div>
                        <div className='text-white mt-8 flex flex-col gap-3 px-4 xl:w-3/4 xl:text-left blue-500'>
                            <p className='text-4xl montserrat-black'>Kami Dengarkan, Kami Wujudkan</p>
                            <p className=''>Setiap layanan yang kami berikan dimulai dari pemahaman yang mendalam terhadap kebutuhan Anda. Melalui diskusi yang terbuka dan komunikatif, tim kami akan membantu Anda menjelaskan tujuan, menjawab pertanyaan, dan memberikan solusi terbaik sesuai kebutuhan legalitas usaha Anda. Kami percaya bahwa proses yang sukses dimulai dari komunikasi yang baik—itulah mengapa kami selalu mengedepankan kejelasan, transparansi, dan profesionalisme di setiap langkah kerja.</p>
                        </div>
                    </div>
                </section>

                <section className='mt-10'>
                    <div className='text-center'>
                        <p className='montserrat-bold text-4xl text-[#FF6F00]'>Keunggulan Kami</p>
                    </div>
                    <div className='grid grid-cols-2 xl:grid-cols-4 grid-flow-row mt-9 gap-y-10 justify-items-center'>

                        <div data-aos="fade-up" className='flex flex-col items-center justify-center gap-2 text-center py-3 px-3 bg-[#FF6F00] w-40 rounded-lg shadow-1'>
                            <FontAwesomeIcon icon={faBolt} color='white' className='h-20'/>
                            <p className='montserrat-bold text-white text-xl'>Proses Cepat <br /> & Efisien</p>
                        </div>

                        <div data-aos="fade-up" className='flex flex-col items-center justify-center gap-2 text-center py-5 px-3 bg-[#FF6F00] w-40 rounded-lg shadow-1'>
                            <FontAwesomeIcon icon={faTag} color='white' className='h-20' />
                            <p className='montserrat-bold text-white text-xl'>Harga <br />Transparan</p>
                        </div>

                        <div data-aos="fade-up" className='flex flex-col items-center justify-center gap-2 text-center py-5 px-3 bg-[#FF6F00] w-40 rounded-lg shadow-1'>
                            <FontAwesomeIcon icon={faRegistered} color='white' className='h-20' />
                            <p className='montserrat-bold text-white text-xl mt-3'>Terdaftar &<br /> Terpercaya</p>
                        </div>

                        <div data-aos="fade-up" className='flex flex-col items-center justify-center gap-2 text-center py-5 px-3 bg-[#FF6F00] w-40 rounded-lg shadow-1'>
                            <FontAwesomeIcon icon={faPhone} color='white' className='h-20'/>
                            <p className='montserrat-bold text-white text-xl'>Resposif & <br /> Mudah Dihubungi</p>
                        </div>

                        <div data-aos="fade-up" className='flex flex-col items-center justify-center gap-2 text-center py-5 px-3 bg-[#FF6F00] w-40 rounded-lg shadow-1'>
                            <FontAwesomeIcon icon={faComments} color='white' className='h-20' />
                            <p className='montserrat-bold text-white text-xl'>Layanan Konsultansi Gratis</p>
                        </div>

                        <div data-aos="fade-up" className='flex flex-col items-center justify-center gap-2 text-center py-5 px-2 bg-[#FF6F00] w-40 rounded-lg shadow-1'>
                            <FontAwesomeIcon icon={faArrowUpFromBracket} color='white' className='h-20' />
                            <p className='montserrat-bold text-white text-xl'>Update <br /> Proses Secara <br /> Berkala</p>
                        </div>

                        <div data-aos="fade-up" className='flex flex-col items-center justify-center gap-2 text-center py-5 px-2 bg-[#FF6F00] w-40 rounded-lg shadow-1'>
                            <FontAwesomeIcon icon={faEye} color='white' className='h-20' />
                            <p className='montserrat-bold text-white text-xl'>Mudah <br /> Dipantau <br /> Melalui Sistem</p>
                        </div>

                        <div data-aos="fade-up" className='flex flex-col items-center justify-center gap-2 text-center py-5 px-2 bg-[#FF6F00] w-40 rounded-lg shadow-1'>
                            <FontAwesomeIcon icon={faHandshake} color='white' className='h-20' />
                            <p className='montserrat-bold text-white text-xl'>Komitmen <br /> Amanah dalam <br /> Pelayanan</p>
                        </div>

                    </div>
                </section>

                <section data-aos="fade-right" className='mt-16'>
                    <div className='bg-[#FF6F00] flex flex-col xl:flex-row-reverse items-center xl:text-left text-center mx-10 py-10 px-4 rounded-xl shadow-1'>
                        <div className='xl:w-1/4 w-full flex justify-center'>
                            <img src="/assets/ilustras/scaleGavel_Ilus.png" alt="" className='w-80'/>
                        </div>
                        <div className='text-white mt-8 flex flex-col gap-3 px-5 xl:w-3/4'>
                            <p className='text-4xl montserrat-black'>Legalitas</p>
                            <p>Kami menyediakan layanan pengurusan legalitas usaha secara lengkap dan terpercaya, mulai dari pendirian PT/CV, pembuatan NPWP, perizinan OSS, hingga sertifikasi usaha. Dengan pengalaman dan pemahaman mendalam terhadap regulasi yang berlaku, kami memastikan setiap proses berjalan sesuai hukum dan kebutuhan bisnis Anda. Tim kami akan mendampingi Anda dari awal hingga akhir, sehingga Anda dapat fokus pada pengembangan usaha tanpa harus khawatir dengan urusan administrasi dan birokrasi.</p>
                        </div>
                    </div>
                </section>

                <section data-aos="fade-left" className='mt-16'>
                    <div className='bg-[#FF6F00] flex flex-col xl:flex-row items-center xl:text-left text-center mx-10 py-10 px-1 rounded-xl shadow-1'>
                        <div className='xl:w-1/4'>
                            <img src="/assets/ilustras/digitalMarketing2_Ilus.png" alt="" className='w-96 '/>
                        </div>
                        <div className='text-white mt-3 flex flex-col gap-3 w-3/4'>
                            <p className='text-4xl montserrat-black xl:hidden'>Digital <br /> Marketing</p>
                            <p className='text-4xl montserrat-black hidden xl:flex'>Digital Marketing</p>
                            <p>Kami menyediakan layanan pengurusan legalitas usaha secara lengkap dan terpercaya, mulai dari pendirian PT/CV, pembuatan NPWP, perizinan OSS, hingga sertifikasi usaha. Dengan pengalaman dan pemahaman mendalam terhadap regulasi yang berlaku, kami memastikan setiap proses berjalan sesuai hukum dan kebutuhan bisnis Anda. Tim kami akan mendampingi Anda dari awal hingga akhir, sehingga Anda dapat fokus pada pengembangan usaha tanpa harus khawatir dengan urusan administrasi dan birokrasi.</p>
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </>
    )
}

export default Service