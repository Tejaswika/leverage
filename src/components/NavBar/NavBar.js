import { useRef } from "react";
import { FaBars, FaTimes, FaSearch, FaPhone, FaUser } from "react-icons/fa";

import Logo from '../../assets/logo.png'

function Navbar() {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "nav_mobile"
        );
    };

    return (
        <div className="NavBar">
            <img src={Logo} alt="Logo" />
            <nav ref={navRef}>
                <a href="/#">Study Abroad</a>
                <a href="/#">Accommodation</a>
                <a href="/#">Test Prep</a>
                <a href="/#">Finance</a>
                <a href="/#">Community</a>
                <a href="/#">Products</a>
                <a href="/#">More</a>
                <div className="icons">
                    <a href="/#" className="btn-icon"><FaSearch /></a>
                    <a href="/#" className="btn-icon"><FaPhone /></a>
                    <a href="/#" className="btn-icon"><FaUser /></a>
                </div>

                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button
                className="nav-btn"
                onClick={showNavbar}>
                <FaBars />
            </button>
        </div>
    );
}

export default Navbar;