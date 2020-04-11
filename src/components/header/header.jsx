import React from 'react';
import n from './header.module.css';

import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={n.header}>

            <div className={n.header_logo}></div>

            { props.isAuth ? props.login : <NavLink to={`/logo`} >Logo</NavLink> }

        </header>
    );
};

export default Header;
