import React from 'react';
import n from './menu.module.css';

import MenuItem from "./menu_item/menuItem";

const Menu = (props) => {
    return (
        <div className={n.menu}>

            <MenuItem path="/profile" menuItemName="Profile"/>
            <MenuItem path="/dialogs" menuItemName="Message"/>
            <MenuItem path="/users" menuItemName="Users"/>

        </div>
    );
}

export default Menu;