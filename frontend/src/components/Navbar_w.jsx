import '../index.css';

const Navbar_w = () => {
    
    return(
        <nav className='flex items-center justify-between h-20 py-12 px-3 xl:px-8 drop-shadow-lg'>
            <img src="/assets/JAB_Logo.png" alt="" className='w-auto h-20'/>

            <button><img src="/assets/bars.png" alt="" className="xl:hidden"/></button>
            <div className='hidden xl:flex text-black montserrat-semibold text-xl gap-8'>
                <a href="#" className="hover:text-[#FF6F00] duration-300">Home</a>
                <a href="#" className="hover:text-[#FF6F00] duration-300">Service</a>
                <a href="#" className="hover:text-[#FF6F00] duration-300">Pricing</a>
                <a href="#" className="hover:text-[#FF6F00] duration-300">About Us</a>
                <a href="#" className="hover:text-[#FF6F00] duration-300">Contact Us</a>
                <a href="#" className="hover:text-[#FF6F00] duration-300">Tracker</a>
            </div>
        </nav>
    )
}

export default Navbar_w;