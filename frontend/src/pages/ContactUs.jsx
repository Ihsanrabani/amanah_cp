import '../index.css'
import Navbar_B from '../components/Navbar_B';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp, faInstagram, faTiktok, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';

const PricingUs = () => {

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
            <ToastContainer />
            <Navbar_B/>

            <section className='flex flex-col items-center gap-10 xl:gap-20 mt-10'>
                <div className='text-center'>
                    <h1 className='text-3xl xl:text-4xl montserrat-bold text-[#FF6F00]'>Mari Wujudkan Bisnismu Bersama Kami</h1>
                </div>

                <div className='flex flex-col xl:flex-row'>
                    <div className='bg-white shadow-1 p-5 mx-5 rounded-xl xl:mr-36'>
                        <p className='montserrat-bold text-[#FF6F00] text-3xl text-center mb-10 mt-5'>Hubungi Kami!</p>

                        <form action="" className='flex flex-col' onSubmit={onSubmit}>
                            <div className='flex gap-5 mb-5'>
                                <input required type="text" name='nama_depan' placeholder='Nama Depan' className='rounded-md py-1 px-2 montserrat-semibold w-2/4 border border-[#FF6F00] bg-transparent' />
                                <input required type="text" name='nama_belakang' placeholder='Nama Belakang' className='rounded-md py-1 px-2 montserrat-semibold w-2/4 border border-[#FF6F00] bg-transparent' />
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

                    <div className='flex flex-col items-center gap-3 mt-10 xl:mt-0'>
                        <div className='flex gap-3'>
                            <Link to={"https://wa.me/081323244573"} target='blank'><FontAwesomeIcon icon={faWhatsapp} color='black' className='h-9' /></Link>
                            <Link to={"https://www.instagram.com/jasa.amanah.official/"} target='blank'><FontAwesomeIcon icon={faInstagram} color='black' className='h-9' /></Link>
                            <Link to={"https://www.facebook.com/p/PT-Jasa-Amanah-Berkah-100083770658632/"} target='blank'><FontAwesomeIcon icon={faFacebook} color='black' className='h-9' /></Link>
                            <Link target='blank'><FontAwesomeIcon icon={faTiktok} color='black' className='h-9' /></Link>
                            <Link to={"https://web.whatsapp.com/"} target='blank'><FontAwesomeIcon icon={faYoutube} color='black' className='h-9' /></Link>
                        </div>

                        <div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.1268275963607!2d108.22043289999999!3d-7.339651399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f5798bcf78e6d%3A0xd20cd79b3cdb4cab!2sJasa%20Amanah%20Berkah!5e0!3m2!1sid!2sid!4v1752213358149!5m2!1sid!2sid"
                                width="400"
                                height="450"
                                className='shadow-1'
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer/>
        </>
    )
}

export default PricingUs