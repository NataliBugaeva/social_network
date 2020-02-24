import React from 'react';

import Aside from "./aside/aside";
import Start from "./start/start";
import Profile from "./profile/profile";
import Dialogs from "./dialogs/dialogs";


import n from './centralPart.module.css';
import {Route} from "react-router-dom";

const CentralPart = (props) => {
    return (
        <div className={n.central_part}>
            {/*<Aside state={props.state} />*/}
            <Aside />

            <div className={n.central_part_content}>
                {/*<Route exact path="/profile" render={ () => <Profile store={props.store} /> } />
                <Route exact path="/dialogs" render={ () => <Dialogs store={props.store}/> } />
                <Route exact path="/news" render={ () => <Start /> } />*/}

                <Route exact path="/profile" render={ () => <Profile /> } />
                <Route exact path="/dialogs" render={ () => <Dialogs /> } />
                <Route exact path="/news" render={ () => <Start /> } />
            </div>
        </div>
    );
}

export default CentralPart;