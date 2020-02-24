import React from "react";
import n from './allDialogs.module.css';


import Dialog from "./dialog/dialog";
import StoreContext from "../../../../storeContext";

const AllDialogs = (props) => {
/*    //сделала отдельную переменную dialogs, так как в пропсах передавали store целиком
    let dialogs = props.store.getState().dialogsPage.dialogs;
    let dialogsComponents = dialogs.map(elem => <Dialog id={elem.id} name={elem.name} />);*/

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let dialogs = store.getState().dialogsPage.dialogs;
                    let dialogsComponents = dialogs.map(elem => <Dialog id={elem.id} name={elem.name} />);

                    return (
                        <div className={n.all_dialogs}>
                            {dialogsComponents}
                        </div>
                    );
                }
            }
        </StoreContext.Consumer>
    );
}

export default AllDialogs;
