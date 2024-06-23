import '../CSS/Navbar.css';
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <header className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
            <nav className="navbar">
                <ul className="navbar-list">
                    <li className={`navbar-item ${location.pathname === '/' ? 'selected' : ''}`}>
                        <Link to="/">בית</Link>
                    </li>
                    <li style={{color: 'white', fontSize: '25px'}}>|</li>
                    <li className={`navbar-item ${location.pathname === '/favorites' ? 'selected' : ''}`}>
                        <Link to="/favorites">מועדפים</Link>
                    </li>
                </ul>

            </nav>
        </header>
    );
}

export default Navbar;
