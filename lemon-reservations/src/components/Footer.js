import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="foooter-container">
                <div className="footerlinks">
                    <p>&copy; 2024 Little Lemon. All rights reserved.</p>
                    <ul className="footer-items">
                        <li><a className="a" href="/">Home</a></li>
                        <li><a className="a" href="/">About</a></li>
                        <li><a className="a" href="/">Menu</a></li>
                        <li><a className="a" href="/reservations">Reservations</a></li>
                        <li><a className="a" href="/">Order Online</a></li>
                        <li><a className="a" href="/">Login</a></li>
                        <li><a href="/">Privacy Policy</a></li>
                        <li><a href="/">Terms of Service</a></li>
                        <li><a href="/">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footerLogo">
                    <img alt="logo" src="/icons_assets/Logo%20.svg"/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;