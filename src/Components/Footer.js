
import React from 'react';
import '../CSS/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} כל הזכויות שמורות</p>
            </div>
        </footer>
    );
};

export default Footer;
