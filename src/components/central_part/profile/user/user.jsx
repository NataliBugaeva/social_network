import React from 'react';

import n from './user.module.css';

import Avatar from "./avatar/avatar";
import UserDescription from "./user_description/userDescription";

const User = (props) => {
    return (
        <div className={n.user}>

            <Avatar src={`${props.src}`}/>
            <UserDescription />

        </div>
    );
}

export default User;