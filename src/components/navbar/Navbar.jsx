import './Navbar.css';
import { SiAnaconda } from "react-icons/si";

const Navbar = () => {
    return (
        <nav className='navbar container'>
            <div className="logo">
                <SiAnaconda color='#FFFFFF' size={33} />
                <p className="logo-text">
                    Social<span>X</span>
                </p>
            </div>

            <menu>
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Download</a></li>
                    <li><a href="#">Subscribe</a></li>
                    <li><a href="#" className='btn btn-dark'>Get Started</a></li>
                </ul>
            </menu>
        </nav>
    )
}

export default Navbar;