import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <img src="/icons_assets/Logo.svg" alt="" height="50" width="150"/>
            <ul className="nav-items">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/reservations">Reservations</Link></li>
                <li><Link to="/order-online">Order Online</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>

        </nav>
    );
};

export default Nav;
