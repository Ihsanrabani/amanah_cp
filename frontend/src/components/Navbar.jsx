import '../index.css';

const Navbar = () => {
    
    return(
        <nav className='flex items-center justify-between bg-[#B0B0B0]/25 backdrop-blur-lg h-20 py-12 px-3 xl:px-8 drop-shadow-lg'>
            <img src="/assets/JAB_Logo_W.png" alt="" className='w-auto h-20'/>

            <button><img src="/assets/bars_W.png" alt="" className="xl:hidden"/></button>
            <div className='hidden xl:flex text-white montserrat-semibold text-xl gap-8'>
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

export default Navbar;