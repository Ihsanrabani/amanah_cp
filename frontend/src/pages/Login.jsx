import '../index.css';
import Navbar_B from '../components/Navbar_B';
import Footer from '../components/Footer';
import axios from 'axios';
import { useState } from 'react';

const Login = () => {

    const [token, setToken] = useState("")

    const handleChange = (e) => {
        setToken(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try{
            const res = await axios.post('https://localhost:4343/admin-login', {
                token: token
            }, {
                withCredentials: true
            })

            alert(res.data.message)
            window.location.href = "/"
        } catch (err) {
            alert(err.response.data.message)
        }
    }

    return (
        <>
            <div className='min-h-screen flex flex-col'>
                <Navbar_B/>

                <section className='h-96 flex flex-col items-center justify-center gap-8'>
                    <h1 className='text-3xl text-[#FF6F00] montserrat-bold'>Masukkan Token Admin</h1>
                    <form action="" className='flex flex-col gap-2'>
                        <input onChange={handleChange} type="text" placeholder='Masukkan Token Admin' className='bg-transparent border border-[#FF6F00] p-2 rounded-md '/>
                        <button onClick={handleSubmit} type='submit' className='bg-[#FF6F00] p-2 rounded-md text-white' >Submit</button>
                    </form>
                </section>

                <Footer/>
            </div>
        </>
    )
}

export default Login