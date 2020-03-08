import React from 'react';

import Aside from "./aside/aside";
import ProfileContainer from "./profile/profileContainer";
import Dialogs from "./dialogs/dialogs";
import UsersContainer from "./users/usersContainer";

import n from './centralPart.module.css';
import {Route} from "react-router-dom";


const CentralPart = (props) => {
    return (
        <div className={n.central_part}>
            <Aside />

            <div className={n.central_part_content}>
                {/*<Route  path="/profile" render={ () => <Profile /> } />*/}
                <Route  path="/profile/:userId?" render={ () => <ProfileContainer /> } />
                <Route exact path="/dialogs" render={ () => <Dialogs /> } />
                <Route exact path="/users" render={ () => <UsersContainer /> } />
            </div>
        </div>
    );
}

export default CentralPart;