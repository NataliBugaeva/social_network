import React from 'react';

import n from './user.module.css';

import Avatar from "./avatar/avatar";
import UserDescription from "./user_description/userDescription";
import Preloader from "../../../common/preloader/preloader";

const User = (props) => {


    return (
        <div className={n.user}>

            { !props.profile ? <Preloader/> : null}
            <Avatar {...props} />
            <UserDescription profile={props.profile}/>

        </div>
    );
};

export default User;