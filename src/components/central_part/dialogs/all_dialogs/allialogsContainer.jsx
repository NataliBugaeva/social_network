import React from "react";

import AllDialogs from "./allDialogs";

import {connect} from "react-redux";

/*import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";*/

/*const AllDialogsContainer = (props) => {
    return (
        <StoreContext>
            {
                (store) => {
                    let dialogs = store.getState().dialogsPage.dialogs;
                    return (<AllDialogs dialogs={dialogs}/>);
                }
            }
        </StoreContext>
    );
};*/
let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs
    }
};

let mapDispatchToProps = (dispatch) => {
    return {

    }
};

const AllDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AllDialogs);

export default AllDialogsContainer;