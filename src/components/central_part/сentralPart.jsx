import React from 'react';

import Aside from "./aside/aside";
import Profile from "./profile/profile";
import Dialogs from "./dialogs/dialogs";
import UsersContainer from "./users/usersContainer";

import n from './centralPart.module.css';
import {Route} from "react-router-dom";


const CentralPart = (props) => {
    return (
        <div className={n.central_part}>
            <Aside />

            <div className={n.central_part_content}>
                <Route exact path="/profile" render={ () => <Profile /> } />
                <Route exact path="/dialogs" render={ () => <Dialogs /> } />
                <Route exact path="/users" render={ () => <UsersContainer /> } />
            </div>
        </div>
    );
}

export default CentralPart;