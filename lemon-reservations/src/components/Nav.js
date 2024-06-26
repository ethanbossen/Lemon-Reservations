import React from 'react';

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><a className="a" href="/">Home</a></li>
                <li><a className="a" href="/">About</a></li>
                <li><a className="a" href="/">Menu</a></li>
                <li><a className="a" href="/reservations">Reservations</a></li>
                <li><a className="a" href="/">Order Online</a></li>
                <li><a className="a" href="/">Login</a></li>
            </ul>
        </nav>
    );
};

export default Nav;