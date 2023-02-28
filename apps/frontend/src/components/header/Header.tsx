import React from 'react';
import './Header.scss';
import NavLinks from "./navLinks/Navlinks";

function Header() : React.ReactElement {
    return (
        <header className="header">
            <h1>My App</h1>

            <NavLinks />
        </header>
    );
};

export default Header;