import React from 'react';
import n from './footer.module.css';

const Footer = (props) => {
    return (
        <footer className={n.footer}>
            <div className={n.footer_info}>&copy; All Rights Reserved, 2020</div>
        </footer>
    );
}

export default Footer;