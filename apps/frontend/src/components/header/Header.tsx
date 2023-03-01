import React from 'react';
import './Header.scss';
import NavLinks from "./navLinks/NavLinks";

function Header() : React.ReactElement {
    return (
        <header className="header">
            <h1>My App</h1>

            <NavLinks />
        </header>
    );
};

export default Header;