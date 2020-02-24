import React from 'react';

import n from './dialog.module.css';

import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
        <div className={n.dialog}>
            <NavLink to={`/dialog/${props.id}`} activeClassName={n.active} >
                 {props.name}
            </NavLink>
        </div>
    );
}

export default Dialog;