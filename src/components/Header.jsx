import { useState } from "react";
import { Link } from "react-router-dom";
import alexa from '../assets/alexa.png';

function Header() {
    // State to control the mobile menu open/close
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle the mobile menu state
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="bg-background text-nav-heading p-4 flex justify-between items-center sticky top-0 z-50">
            {/* Logo and Title Section */}
            <div className='flex items-center space-x-2'>
                <div className="text-[2vh] sm:text-[4vh] pb-1">Alexa Developers SRM</div>
                <img 
                    src={alexa}
                    alt="Alexa Logo" 
                    className="w-8 h-8 rounded-full"
                />
            </div>

            {/* Navigation Links for Desktop */}
            <div className="hidden lg:flex space-x-8">
                <Link to="/" className="hover:text-accent1 cursor-pointer">Home</Link>
                <Link to="/events" className="hover:text-accent1 cursor-pointer">Events</Link>
                <Link to="/about" className="hover:text-accent1 cursor-pointer">About</Link>
                <Link to="/domain" className="hover:text-accent1 cursor-pointer">Domains</Link>
                <Link to="/apply" className="hover:text-accent1 cursor-pointer">Apply Now</Link>
            </div>

            {/* Hamburger Menu for Mobile */}
            <div className="block lg:hidden">
                <button onClick={toggleMenu} className="text-accent1 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-background transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 z-40' : 'opacity-0 z-0 pointer-events-none'}`}>
                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center ${isMenuOpen ? 'visible' : 'invisible'}`}>
                    {/* Close Button */}
                    <button onClick={toggleMenu} className="self-end mb-4 text-accent1 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    {/* Navigation Links for Mobile */}
                    <Link to="/" onClick={toggleMenu} className="hover:text-accent1 cursor-pointer py-2 text-nav-heading">Home</Link>
                    <Link to="/events" onClick={toggleMenu} className="hover:text-accent1 cursor-pointer py-2 text-nav-heading">Events</Link>
                    <Link to="/about" onClick={toggleMenu} className="hover:text-accent1 cursor-pointer py-2 text-nav-heading">About</Link>
                    <Link to="/domain" onClick={toggleMenu} className="hover:text-accent1 cursor-pointer py-2 text-nav-heading">Domains</Link>
                    <Link to="/apply" onClick={toggleMenu} className="hover:text-accent1 cursor-pointer py-2 text-nav-heading">Apply Now</Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
