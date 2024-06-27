import React from 'react';


const Nav = () => {
    return (
        <nav>
            <img src="/icons_assets/Logo.svg" alt="" height="50" width="150"/>
            <ul className="nav-items">
                <li><a className="a" href="/home">Home</a></li>
                <li><a className="a" href="/about">About</a></li>
                <li><a className="a" href="/Menu">Menu</a></li>
                <li><a className="a" href="/reservations">Reservations</a></li>
                <li><a className="a" href="/Order-Online">Order Online</a></li>
                <li><a className="a" href="/Login">Login</a></li>
            </ul>
        </nav>
    );
};

export default Nav;
