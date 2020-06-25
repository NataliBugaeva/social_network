import React from 'react';
import n from './dialogs.module.css';

import AllMessagesContainer from "./all_messages/allMessagesContainer";
import AllDialogsContainer from "./all_dialogs/allialogsContainer";

const Dialogs = (props) => {
    return (


        <div className={n.dialogs}>
           {/* <AllDialogs store={props.store} />
            <AllMessagesContainer store={props.store} />*/}

            <AllDialogsContainer />
            <AllMessagesContainer />
        </div>
    );
}

export default Dialogs;