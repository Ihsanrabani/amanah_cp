import '../index.css';
import { useState } from 'react';

const PricingC = () => {

    const [legalitas, setLegalitas] = useState(true)
    const [digmar, setDigmar] = useState(false)

    return (
        <div className='mt-20'>
            <div className='flex flex-col items-center gap-8'>
                <h1 className='montserrat-semibold text-[#000] text-4xl'>Pricing</h1>
                <div className='bg-white w-max shadow-1 p-3 flex gap-3 rounded-xl'>
                    <button className={legalitas ? 'bg-[#FF6F00] text-white duration-300 all py-2 px-3 rounded-full montserrat-semibold' : 'bg-[#EAEAEA] duration-300 py-2 px-3 rounded-full montserrat-semibold'} onClick={() => {
                        if (legalitas === false) {
                            setLegalitas(true)
                            setDigmar(false)
                        }
                    }}>Legalitas</button>
                    <button className={digmar ? 'bg-[#FF6F00] text-white duration-300 all py-2 px-3 rounded-full montserrat-semibold' : 'bg-[#EAEAEA] duration-300 py-2 px-3 rounded-full montserrat-semibold'} onClick={() => {
                        if (digmar === false) {
                            setDigmar(true)
                            setLegalitas(false)
                        }
                    }}>Digital Marketing</button>
                </div>
            </div>

            {/* Pricing Card Legalitas */}
            {legalitas &&
                <div className='flex flex-col xl:flex-row xl:justify-center items-center gap-16 mt-20'>

                    <div className='border border-[#559EFF] w-72 rounded-lg shadow-1 bg-white z-0'>
                        <div className='relative flex bg-[#559EFF] justify-center py-4 px-16 rounded-t-lg shadow-1'>
                            <div className='absolute top-2 left-2 w-3 h-3 bg-white rounded-full'>

                            </div>
                            <p className='montserrat-semibold text-white text-4xl'>Basic</p>
                        </div>

                        <div className='p-5'>
                            <div className='flex flex-col items-center'>
                                <p className='montserrat-semibold text-xl mb-4'>Legalitas</p>
                                <h1 className='montserrat-bold text-4xl mb-5'>Rp 400,000</h1>
                                <button className='border border-[#559EFF] py-1 px-16 montserrat-bold text-xl rounded-lg'>Pilih</button>
                            </div>
                            <div className='mt-5'>
                                <div>
                                    <p>Lorem ipsum dolor</p>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor</p>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor</p>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor</p>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor</p>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='border border-[#3FDF72] w-72 rounded-lg shadow-1 bg-white'>
                        <div className='relative flex bg-[#3FDF72] justify-center py-4 px-16 rounded-t-lg shadow-1'>
                            <div className='absolute top-2 left-2 w-3 h-3 bg-white rounded-full'>

                            </div>
                            <p className='montserrat-semibold text-white text-4xl'>Standard</p>
                        </div>

                        <div className='p-5'>
                            <div className='flex flex-col items-center'>
                                <p className='montserrat-semibold text-xl mb-4'>Legalitas</p>
                                <h1 className='montserrat-bold text-4xl mb-5'>Rp 400,000</h1>
                                <button className='border border-[#3FDF72] py-1 px-16 montserrat-bold text-xl rounded-lg'>Pilih</button>
                            </div>
                            <div className='mt-5'>
                                <div>
                                    <p>Lorem ipsum dolor</p>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor</p>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor</p>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor</p>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor</p>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='border border-[#FF6F00] w-72 rounded-lg shadow-1 bg-white'>
                        <div className='relative flex bg-[#FF6F00] justify-center py-4 px-16 rounded-t-lg shadow-1'>
                            <div className='absolute top-2 left-2 w-3 h-3 bg-white rounded-full'>

                            </div>
                            <p className='montserrat-semibold text-white text-4xl'>Premium</p>
                        </div>

                        <div className='p-5'>
                            <div className='flex flex-col items-center'>
                                <p className='montserrat-semibold text-xl mb-4'>Legalitas</p>
                                <h1 className='montserrat-bold text-4xl mb-5'>Rp 1,100,000</h1>
                                <button className='border border-[#FF6F00] py-1 px-16 montserrat-bold text-xl rounded-lg'>Pilih</button>
                            </div>
                            <div className='mt-5'>
                                <div>
                                    <p>Lorem ipsum dolor</p>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor</p>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor</p>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor</p>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor</p>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            }

            {/* Pricing Card Digital Marketing */}
            {digmar &&
                <div className='flex flex-col xl:flex-row xl:justify-center items-center gap-16 mt-20'>

                    <div className='border border-[#559EFF] w-72 rounded-lg shadow-1 bg-white'>
                        <div className='relative flex bg-[#559EFF] justify-center py-4 px-16 rounded-t-lg shadow-1'>
                            <div className='absolute top-2 left-2 w-3 h-3 bg-white rounded-full'>

                            </div>
                            <p className='montserrat-semibold text-white text-4xl'>Basic</p>
                        </div>

                        <div className='p-5'>
                            <div className='flex flex-col items-center'>
                                <p className='montserrat-semibold text-xl mb-4'>Digital Marketing</p>
                                <h1 className='montserrat-bold text-4xl mb-5'>Rp 400,000</h1>
                                <button className='border border-[#559EFF] py-1 px-16 montserrat-bold text-xl rounded-lg'>Pilih</button>
                            </div>
                            <div className='mt-5'>
                                <div>
                                    <p>Lorem ipsum dolor</p>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor</p>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor</p>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor</p>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor</p>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='border border-[#3FDF72] w-72 rounded-lg shadow-1 bg-white'>
                        <div className='relative flex bg-[#3FDF72] justify-center py-4 px-16 rounded-t-lg shadow-1'>
                            <div className='absolute top-2 left-2 w-3 h-3 bg-white rounded-full'>

                            </div>
                            <p className='montserrat-semibold text-white text-4xl'>Standard</p>
                        </div>

                        <div className='p-5'>
                            <div className='flex flex-col items-center'>
                                <p className='montserrat-semibold text-xl mb-4'>Digital Marketing</p>
                                <h1 className='montserrat-bold text-4xl mb-5'>Rp 400,000</h1>
                                <button className='border border-[#3FDF72] py-1 px-16 montserrat-bold text-xl rounded-lg'>Pilih</button>
                            </div>
                            <div className='mt-5'>
                                <div>
                                    <p>Lorem ipsum dolor</p>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor</p>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor</p>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor</p>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor</p>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='border border-[#FF6F00] w-72 rounded-lg shadow-1 bg-white'>
                        <div className='relative flex bg-[#FF6F00] justify-center py-4 px-16 rounded-t-lg shadow-1'>
                            <div className='absolute top-2 left-2 w-3 h-3 bg-white rounded-full'>

                            </div>
                            <p className='montserrat-semibold text-white text-4xl'>Premium</p>
                        </div>

                        <div className='p-5'>
                            <div className='flex flex-col items-center'>
                                <p className='montserrat-semibold text-xl mb-4'>Digital Marketing</p>
                                <h1 className='montserrat-bold text-4xl mb-5'>Rp 1,100,000</h1>
                                <button className='border border-[#FF6F00] py-1 px-16 montserrat-bold text-xl rounded-lg'>Pilih</button>
                            </div>
                            <div className='mt-5'>
                                <div>
                                    <p>Lorem ipsum dolor</p>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor</p>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor</p>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor</p>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor</p>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            }

        </div>
    )
}

export default PricingC;