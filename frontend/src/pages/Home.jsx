import '../index.css'
import Navbar from '../components/Navbar';
import Marquee from 'react-fast-marquee';
import Footer from '../components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Home = () => {

    const notifySuc = () => toast.success('Berhasil dikirim!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
    });

    const notifyErr = () => toast.error('Gagal dikirim!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    });

    const [loading, setLoading] = useState(false)

    // WEB3FORM CODE
    const onSubmit = async (event) => {
        event.preventDefault();
        setLoading(true)

        const formData = new FormData(event.target);

        formData.append("access_key", "bdec0953-c5eb-4f0f-98c1-5cfa6e42889b");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            }).then((res) => res.json());
    
            if (res.success) {
                notifySuc()
            }
        } catch (error) {
            notifyErr()
        } finally {
            setLoading(false)
        }
    };

    return (
        <>  
            <ToastContainer/>
            {/* HERO SECTION */}
            <section className="relative h-screen bg-[url('/assets/HeroBG_M2.png')] md:bg-[url('/assets/HeroBG_D.png')] xl:shadow-2xl bg-center">
                <Navbar />

                <div className='flex flex-col gap-16 mt-32 xl:mt-52'>
                    <div className='flex flex-col justify-center text-white px-10'>
                        <h1 className='text-center montserrat-Black text-3xl xl:text-5xl font-bold'>Solusi Tepat untuk Kebutuhan <span className='text-[#FF6F00]'>Bisnis</span> Anda</h1>
                        <p className='text-center montserrat-regular xl:text-lg'>Aman, cepat, dan terpercaya bersama tim profesional kami.</p>
                    </div>
                    <div className='flex gap-3 justify-center'>
                        <button className='p-2 xl:p-3 rounded-md bg-[#FF6F00] text-white montserrat-bold text-xl'>Konsultasi Sekarang</button>
                        <button className='p-2 xl:p-3 rounded-md bg-[#FF6F00] text-white montserrat-bold text-xl'>Lihat Layanan Kami</button>
                    </div>
                </div>

                {/* SERVICE */}
                <div className='z-0 absolute bottom-5 xl:-bottom-36 left-1/2 -translate-x-1/2 bg-white px-6 py-5 shadow-2xl rounded-xl w-[90%] max-w-md xl:max-w-xl xl:w-[90%]'>   
                    <div className='text-center'>
                        <h1 className='montserrat-semibold text-[#FF6F00] text-4xl'>SERVICES</h1>
                    </div>  
                    <div className='flex gap-8 xl:gap-20 justify-center pt-4'>
                        <div className='bg-white rounded-lg shadow-1 w-max p-8 text-center'>
                            <div className='p-5 xl:p-6 shadow-xl rounded-full'>
                                <img src="/assets/ilustras/Book_Gavel.png" alt="" className='xl:w-20 w-44'/>
                            </div>
                            <h1 className='text-xl xl:text-3xl montserrat-bold pt-2'>Legalitas</h1>
                        </div>
                        <div className='bg-white rounded-lg shadow-1 w-max p-8 text-center '>
                            <div className='flex justify-center p-5 xl:p-6 shadow-xl rounded-full'>
                                <img src="/assets/ilustras/digitalMarketing_Ilus.png" alt="" className='xl:w-20 w-44'/>
                            </div>
                            <h1 className='text-xl xl:text-3xl montserrat-bold'>Digital <br /> Marketing</h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* PENCAPAIAN */}
            <section className='flex justify-center bg-white mt-20 xl:mt-56'>
                <div className='flex flex-col xl:flex-row gap-16'>
                    
                    <div data-aos="fade-up" className='flex flex-col gap-5 bg-white shadow-1 p-5 min-w-72 rounded-lg'>
                        <img src="/assets/ilustras/gear_Ilus.png" alt="" className=''/>
                        <div className='flex flex-col justify-center items-center h-full'>
                            <h1 className='montserrat-semibold text-5xl'>1000+</h1>
                            <h1 className='montserrat-regular text-3xl'>Projek</h1>
                        </div>
                    </div>

                    <div data-aos="fade-up" className='flex flex-col items-center gap-5 bg-white shadow-1 p-5 min-w-72 rounded-lg'>
                        <img src="/assets/ilustras/star_Ilus.png" alt="" className='w-52'/>
                        <div className='flex flex-col justify-center items-center h-full'>
                            <h1 className='montserrat-semibold text-5xl'>5 Tahun</h1>
                            <h1 className='montserrat-regular text-3xl'>Pengalaman</h1>
                        </div>
                    </div>

                    <div data-aos="fade-up" className='flex flex-col items-center gap-5 bg-white shadow-1 p-5 min-w-72 rounded-lg'>
                        <img src="/assets/ilustras/headset_Ilus.png" alt="" className='w-52'/>
                        <div className='flex flex-col justify-center items-center h-full'>
                            <h1 className='montserrat-semibold text-5xl'>24/7</h1>
                            <h1 className='montserrat-regular text-3xl'>Bantuan</h1>
                        </div>
                    </div>

                    <div data-aos="fade-up" className='flex flex-col items-center gap-5 bg-white shadow-1 p-5 min-w-72 rounded-lg'>
                        <img src="/assets/ilustras/client_Ilus.png" alt="" className='w-52'/>
                        <div className='flex flex-col justify-center items-center h-full'>
                            <h1 className='montserrat-semibold text-5xl'>???%</h1>
                            <h1 className='montserrat-regular text-3xl'>Kepuasana Klien</h1>
                        </div>
                    </div>

                </div>
            </section>
            
            {/* Client Gallery */}
            <section className='mt-32'>

                <h1 className='text-5xl montserrat-bold text-[#FF6F00] text-center mb-10'>Klien Kami</h1>
                <div data-aos="fade-up">
                    <Marquee speed={150} autoFill>
                        <div className='px-10'>
                            <img src="/assets/logo/1.jpg" alt="" className='w-72 shadow-xl'/>
                        </div>
                        <div className='px-10'>
                            <img src="/assets/logo/2.jpg" alt="" className='w-72 shadow-xl'/>
                        </div>
                        <div className='px-10'>
                            <img src="/assets/logo/3.jpg" alt="" className='w-72 shadow-xl'/>
                        </div>
                        <div className='px-10'>
                            <img src="/assets/logo/4.jpg" alt="" className='w-72 shadow-xl'/>
                        </div>
                        <div className='px-10'>
                            <img src="/assets/logo/5.jpg" alt="" className='w-72 shadow-xl'/>
                        </div>
                    </Marquee>
                </div>
            </section>
            
            {/* About Us */}
            <section className="relative flex flex-col justify-center mt-20 xl:mt-0">
                <svg className='block w-full -mb-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FF6F00" fillOpacity="1" d="M0,192L40,170.7C80,149,160,107,240,117.3C320,128,400,192,480,224C560,256,640,256,720,261.3C800,267,880,277,960,256C1040,235,1120,181,1200,154.7C1280,128,1360,128,1400,128L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
                <div className='text-white bg-[#FF6F00] w-full flex flex-col items-center py-5'>
                    <h1 className='montserrat-bold text-5xl xl:text-6xl'>About us</h1>
                    <div className='flex flex-col xl:flex-row-reverse'>
                        <div data-aos="fade-up" className='flex justify-center xl:mt-8 xl:w-1/4'>
                            <img src="/assets/kantor_JAB.jpeg" alt="" className='xl:hidden w-96 rounded-xl mt-8'/>
                            <img src="/assets/kantor_JAB_M.png" alt="" className='w-96 h-auto mt-8 hidden xl:block rounded-md shadow-1'/>
                        </div>
                        <div className='mt-8 xl:w-3/4 xl:px-48'>
                            <div className='text-center px-6'>
                                <p data-aos="fade-right" className='xl:hidden'>
                                    PT Jasa Amanah Berkah adalah perusahaan yang bergerak di bidang layanan legalitas badan usaha, digitalisasi bisnis, dan pengembangan produk digital, dengan komitmen mengedepankan kejujuran, kecepatan layanan, dan hasil yang optimal. Kami hadir sebagai solusi bagi pelaku usaha yang ingin legal, go digital, dan bertumbuh secara berkelanjutan.
                                </p>
                                <p data-aos="fade-right" className='hidden xl:block'>
                                    PT Jasa Amanah Berkah adalah mitra terpercaya dalam mendampingi pelaku usaha dan individu untuk melangkah lebih pasti di era digital dan legal formal. Sejak awal berdiri, kami berkomitmen memberikan layanan yang amanah, cepat, dan profesional di bidang legalitas badan usaha, digitalisasi bisnis, dan pengembangan produk digital.

                                    Bermula dari sebuah tim kecil yang memiliki visi besar, kami tumbuh menjadi perusahaan yang dipercaya oleh ratusan klien dari berbagai daerah di Indonesia. Kami percaya bahwa setiap usaha – sekecil apapun – layak mendapatkan akses terhadap layanan legal dan digital yang mudah, transparan, dan berorientasi hasil.

                                    Dengan mengedepankan nilai integritas, kejelasan proses, dan pelayanan personal, kami siap menjadi partner strategis dalam mewujudkan ide-ide besar Anda menjadi bisnis yang sah dan berkembang secara berkelanjutan.

                                    Mari bertumbuh bersama kami – karena kami tidak hanya melayani, tapi juga membersamai.

                                </p>
                            </div>

                            <div className='flex flex-col xl:flex-row gap-10 mt-10'>

                                <div data-aos="fade-up" className='flex items-center xl:flex-col-reverse xl:gap-3'>
                                    <div className='text-center'>
                                        <p className='montserrat-bold text-xl xl:text-3xl'>Visi Kami</p>
                                        <p className='px-2 xl:hidden'>Menjadi mitra terpercaya dalam digitalisasi dan legalitas usaha di Indonesia, serta berkontribusi membangun ekosistem bisnis yang profesional, modern, dan bertanggung jawab.</p>
                                        <p className='hidden xl:block'>
                                            Menjadi perusahaan terpercaya di Indonesia dalam mendampingi proses legalitas dan digitalisasi bisnis, dengan menghadirkan solusi yang amanah, terintegrasi, dan berdampak nyata bagi pertumbuhan pelaku usaha dari berbagai lapisan masyarakat.

                                            Kami ingin menjadi bagian dari perjalanan setiap individu dan perusahaan menuju kemandirian usaha yang sah, profesional, dan relevan di era digital, tanpa meninggalkan nilai-nilai etika dan kepercayaan.
                                        </p>
                                    </div>
                                    <div className='mr-5'>
                                        <img src="/assets/ilustras/binoc_Ilus.png" alt="" className='rounded-full w-96 xl:w-48'/>
                                    </div>
                                </div>

                                <div data-aos="fade-up" className='flex flex-row-reverse items-center xl:flex-col-reverse'>
                                    <div className='text-center'>
                                        <p className='montserrat-bold text-xl xl:text-3xl'>Misi Kami</p>
                                        <p className='px-2 xl:hidden'>Menjadi mitra terpercaya dalam digitalisasi dan legalitas usaha di Indonesia, serta berkontribusi membangun ekosistem bisnis yang profesional, modern, dan bertanggung jawab.</p>
                                        <p className='hidden xl:block'>
                                            Kami hadir dengan misi untuk memberikan pelayanan terbaik dalam bidang legalitas badan usaha dan digitalisasi bisnis. Kami percaya bahwa setiap usaha layak mendapatkan akses terhadap layanan profesional yang mudah, terjangkau, dan transparan.

                                            Melalui pendekatan yang humanis dan berbasis teknologi, kami berupaya mendampingi klien sejak tahap awal pendirian hingga proses pengembangan usahanya secara menyeluruh. Kami juga terus belajar, berinovasi, dan membangun hubungan jangka panjang yang dilandasi kepercayaan dan tanggung jawab.
                                        </p>
                                    </div>
                                    <div className='ml-5'>
                                        <img src="/assets/ilustras/target_Ilus.png" alt="" className='rounded-full w-96 xl:w-48'/>
                                    </div>
                                </div>

                            </div>
                        </div>  
                    </div>
                </div>
                <svg className='block w-full -mt-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FF6F00" fillOpacity="1" d="M0,192L40,170.7C80,149,160,107,240,117.3C320,128,400,192,480,224C560,256,640,256,720,261.3C800,267,880,277,960,256C1040,235,1120,181,1200,154.7C1280,128,1360,128,1400,128L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
            </section>
            
            {/* Contact Us */}
            <section className='xl:flex xl:items-center mt-20'>
                
                <div className='w-full flex xl:flex-col justify-center xl:ml-[10%]'>
                    <div data-aos="fade-up">
                        <h1 className='montserrat-bold text-5xl mb-16'>Siap berdiskusi<br /> dengan <span className='text-[#FF6F00]'>Anda.</span></h1>
                    </div>
                    <div data-aos="fade-up" className='text-[#FF6F00] pr-80 hidden xl:block'>
                        <p className='montserrat-bold text-3xl'>Feedback</p>
                        <p>Setiap saran dan masukan dari Anda sangat berharga bagi kami. Kami percaya bahwa layanan yang baik tumbuh dari mendengarkan pelanggan. Jangan ragu untuk berbagi pengalaman, kritik, atau ide demi perbaikan bersama.</p>
                    </div>
                    <div data-aos="fade-up" className='text-[#FF6F00] pr-80 hidden xl:block mt-8'>
                        <p className='montserrat-bold text-3xl'>Customer Service</p>
                        <p>Kami hadir untuk membantu Anda. Tim Customer Service kami siap menjawab pertanyaan, memberikan panduan, dan menyelesaikan kendala dengan cepat dan ramah. Hubungi kami melalui WhatsApp, email, atau form kontak yang tersedia.</p>
                    </div>
                </div>

                <div data-aos="fade-up" className='bg-white shadow-1 p-5 mx-5 rounded-xl xl:mr-36'>
                    <p className='montserrat-bold text-[#FF6F00] text-3xl text-center mb-10 mt-5'>Hubungi Kami!</p>

                    <form action="" className='flex flex-col' onSubmit={onSubmit}>
                        <div className='flex gap-5 mb-5'>
                            <input required type="text" name='nama_depan' placeholder='Nama Depan' className='rounded-md py-1 px-2 montserrat-semibold w-2/4 border border-[#FF6F00] bg-transparent'/>
                            <input required type="text" name='nama_belakang' placeholder='Nama Belakang' className='rounded-md py-1 px-2 montserrat-semibold w-2/4 border border-[#FF6F00] bg-transparent'/>
                        </div>
                        <div className='flex flex-col gap-5 mb-5'>
                            <input required type="text" placeholder='Email Anda' name='email' className='rounded-md py-1 px-2 montserrat-semibold w-full border border-[#FF6F00] bg-transparent' />
                            <input required type="text" placeholder='Nomor Telepon' name='no_hp' className='rounded-md py-1 px-2 montserrat-semibold w-full border border-[#FF6F00] bg-transparent' />
                        </div>
                        <div className='flex mb-5'>
                            <textarea required name="pesan" id="" placeholder='Pesan Anda!' className='rounded-md py-1 px-2 montserrat-semibold w-full border border-[#FF6F00] bg-transparent'></textarea>
                        </div>
                        <div className='flex'>
                            <button type='submit' className='bg-[#FF6F00] flex flex-col justify-center items-center h-10 w-full text-white montserrat-bold text-2xl rounded-md'>
                                {/* <img src="/assets/loading2.gif" alt="" className='w-7'/> */}
                                {loading ? <img src="/assets/loading2.gif" alt="" className='w-7' /> : "Kirim!"}
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            <Footer/>
        </>
    )   
}

export default Home;