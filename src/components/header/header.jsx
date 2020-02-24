import React from 'react';
import n from './header.module.css';

const Header = (props) => {
    return (
        <header className={n.header}>
            <div className={n.header_logo}></div>
        </header>
    );
}

export default Header;
