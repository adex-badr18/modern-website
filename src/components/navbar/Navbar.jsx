import './Navbar.css';
import { useState } from 'react';
import { SiAnaconda } from "react-icons/si";
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    function toggleMenu() {
        setShowMenu(prev => !prev);
    }

    return (
        <nav className='navbar container'>
            <div className="logo">
                <SiAnaconda color='#FFFFFF' size={33} />
                <p className="logo-text">
                    Social<span>X</span>
                </p>
            </div>

            <menu>
                <ul className="nav-links" id={showMenu ? 'nav-links-mobile' : 'nav-links-mobile-hide'}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Download</a></li>
                    <li><a href="#">Subscribe</a></li>
                    <li className='nav-btn'><a href="#" className='btn btn-dark'>Get Started</a></li>
                </ul>
            </menu>

            <div className="menu-icons" onClick={toggleMenu}>
                {
                    showMenu ? 
                    <RiCloseLine color='#FFFFFF' size={30} /> : <AiOutlineBars color='#FFFFFF' size={30} />
                }
            </div>
        </nav>
    )
}

export default Navbar;