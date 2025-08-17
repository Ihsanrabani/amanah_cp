import '../index.css'
import Navbar_W from '../components/Navbar_W';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';


const AboutUs = () => {

    return (
        <>  
            <section className='bg-cover xl:bg-[url("/assets/kantor_JAB_Fade.png")] bg-[url("/assets/kantor_JAB_FadeM.png")] pb-20 xl:pb-32'>
                <Navbar_W/>

                <div className='text-white text-center px-2 flex flex-col gap-5 justify mt-24 xl:mt-40'>
                    <h1 className='text-3xl xl:hidden montserrat-bold'>Bekerja dengan <span className='text-[#FF6F00]'>Nilai</span>, Melayani dengan <span className='text-[#FF6F00]'>Amanah</span></h1>

                    <h1 className='text-5xl montserrat-bold hidden xl:block'>Bekerja dengan <span className='text-[#FF6F00]'>Nilai</span>, Melayani <br /> dengan <span className='text-[#FF6F00]'>Amanah</span></h1>

                    <p className='xl:px-96'>Jasa Amanah hadir sebagai mitra terpercaya dalam mendampingi kebutuhan bisnis dan personal Anda. Dengan komitmen pada nilai amanah, profesionalisme, dan ketepatan waktu, kami memberikan layanan yang tidak hanya menyelesaikan tugas—tetapi juga membangun kepercayaan jangka panjang. Tim kami terdiri dari tenaga ahli yang berpengalaman, siap memberikan solusi yang relevan, efisien, dan mudah dipahami oleh klien dari berbagai latar belakang. Kami tidak hanya bekerja untuk Anda, tapi juga bersama Anda.</p>
                </div>
            </section>
            
            <section className='p-4 flex flex-col xl:flex-row gap-10'>

                <div data-aos="fade-up" className='bg-[#FF6F00] p-5 text-center rounded-xl'>
                    <h1 className='montserrat-bold text-white text-4xl mb-5'>Visi Kami</h1>
                    <p className='text-white'>Misi kami adalah menjadi mitra terpercaya dalam membantu pelaku usaha mewujudkan impian bisnis mereka melalui layanan legalitas dan digitalisasi yang amanah, transparan, dan mudah dijangkau. Kami percaya bahwa setiap bisnis, sekecil apa pun, berhak mendapatkan fondasi hukum yang kuat dan akses ke teknologi digital yang relevan.
                        Dengan pendekatan berbasis layanan personal dan teknologi, kami terus berinovasi untuk memberikan solusi yang efisien, praktis, dan bernilai. Kami tidak hanya menyediakan layanan, tapi juga menjadi pendamping dalam setiap proses perkembangan usaha klien kami menuju pertumbuhan yang berkelanjutan dan penuh keberkahan.</p>
                </div>

                <div data-aos="fade-up" className='bg-[#FF6F00] p-5 text-center rounded-xl'>
                    <h1 className='montserrat-bold text-white text-4xl mb-5'>Misi Kami</h1>
                    <p className='text-white'>PT Jasa Amanah Berkah didirikan pada tahun 2021 di Tasikmalaya, Jawa Barat, sebagai respons terhadap kebutuhan pelaku usaha yang semakin tinggi akan layanan legalitas dan digitalisasi bisnis yang mudah, cepat, dan terpercaya. Berawal dari sebuah tim kecil dengan semangat membantu UMKM dan pelaku usaha lokal, kami terus berkembang menjadi perusahaan profesional yang melayani klien dari berbagai daerah di Indonesia. Dengan mengusung prinsip “Amanah dalam Pelayanan, Berkah dalam Hasil”, kami telah membantu ratusan pelaku usaha mendirikan badan hukum, mengembangkan website bisnis, serta menjalankan pemasaran digital secara efisien. Komitmen kami adalah menjadi mitra terpercaya dalam setiap langkah pertumbuhan bisnis Anda.</p>
                </div>

            </section>

            <section className='flex flex-col items-center bg-white mt-20 xl:mt-10'>
                <p className='text-4xl montserrat-bold text-[#FF6F00] mb-10'>Pencapaian Kami</p>
                <div className='flex flex-col xl:flex-row gap-16'>

                    <div data-aos="fade-up" className='flex flex-col gap-5 bg-white shadow-1 p-5 min-w-72 rounded-lg'>
                        <img src="/assets/ilustras/gear_Ilus.png" alt="" className='' />
                        <div className='flex flex-col justify-center items-center h-full'>
                            <h1 className='montserrat-semibold text-5xl'>1000+</h1>
                            <h1 className='montserrat-regular text-3xl'>Projek</h1>
                        </div>
                    </div>

                    <div data-aos="fade-up" className='flex flex-col items-center gap-5 bg-white shadow-1 p-5 min-w-72 rounded-lg'>
                        <img src="/assets/ilustras/star_Ilus.png" alt="" className='w-52' />
                        <div className='flex flex-col justify-center items-center h-full'>
                            <h1 className='montserrat-semibold text-5xl'>5 Tahun</h1>
                            <h1 className='montserrat-regular text-3xl'>Pengalaman</h1>
                        </div>
                    </div>

                    <div data-aos="fade-up" className='flex flex-col items-center gap-5 bg-white shadow-1 p-5 min-w-72 rounded-lg'>
                        <img src="/assets/ilustras/headset_Ilus.png" alt="" className='w-52' />
                        <div className='flex flex-col justify-center items-center h-full'>
                            <h1 className='montserrat-semibold text-5xl'>24/7</h1>
                            <h1 className='montserrat-regular text-3xl'>Bantuan</h1>
                        </div>
                    </div>

                    <div data-aos="fade-up" className='flex flex-col items-center gap-5 bg-white shadow-1 p-5 min-w-72 rounded-lg'>
                        <img src="/assets/ilustras/client_Ilus.png" alt="" className='w-52' />
                        <div className='flex flex-col justify-center items-center h-full'>
                            <h1 className='montserrat-semibold text-5xl'>???%</h1>
                            <h1 className='montserrat-regular text-3xl'>Kepuasana Klien</h1>
                        </div>
                    </div>

                </div>
            </section>

            <section className='flex flex-col items-center mt-16'>
                <h1 className='text-4xl montserrat-bold text-[#FF6F00] mb-10'>Lokasi Kantor Kami</h1>

                <iframe
                data-aos="fade-up"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.1268275963607!2d108.22043289999999!3d-7.339651399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f5798bcf78e6d%3A0xd20cd79b3cdb4cab!2sJasa%20Amanah%20Berkah!5e0!3m2!1sid!2sid!4v1752213358149!5m2!1sid!2sid"
                width="400" 
                height="450"    
                className='shadow-1 xl:hidden'
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"></iframe>

                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.1268275963607!2d108.22043289999999!3d-7.339651399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f5798bcf78e6d%3A0xd20cd79b3cdb4cab!2sJasa%20Amanah%20Berkah!5e0!3m2!1sid!2sid!4v1752213358149!5m2!1sid!2sid"
                width="1350" 
                height="550"    
                className='shadow-1 hidden xl:flex'
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>

            <Footer/>
        </>
    )
}

export default AboutUs