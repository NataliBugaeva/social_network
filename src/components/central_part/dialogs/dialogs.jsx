import React from 'react';
import n from './dialogs.module.css';

import AllDialogs from "./all_dialogs/allDialogs";
import AllMessagesContainer from "./all_messages/allMessagesContainer";

const Dialogs = (props) => {
    return (
        <div className={n.dialogs}>
           {/* <AllDialogs store={props.store} />
            <AllMessagesContainer store={props.store} />*/}

            <AllDialogs />
            <AllMessagesContainer />
        </div>
    );
}

export default Dialogs;