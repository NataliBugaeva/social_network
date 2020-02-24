import React from 'react';

import n from './menuItem.module.css';
import {NavLink} from "react-router-dom";

const MenuItem = (props) => {
    return (
        <div className={n.menu_item}>
            <NavLink to={props.path} activeClassName={n.active}>
                {props.menuItemName}
            </NavLink>
        </div>
    );
}

export default MenuItem;