import React from "react";
import AllMessages from "./allMessages";
import {updateMessageBodyActionCreator, addNewMessageBodyActionCreator} from "../../../../redux/dialogsPageReducer";

/*import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";*/

import {connect} from 'react-redux';



    /*//переменную messages будем прокидывать через пропсы в allMessages для отрисовки
    let messages = props.store.getState().dialogsPage.messages,
        newMessageBody = props.store.getState().dialogsPage.newMessageBody;*/

   /* let addMessage = () => {
        props.store.dispatch(addNewMessageBodyActionCreator());
    };*/

   /* let updateMessage  = (messageText) => {
        props.store.dispatch(updateMessageBodyActionCreator(messageText));
    };*/
/*const AllMessagesContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let messages = store.getState().dialogsPage.messages,
                        newMessageBody = store.getState().dialogsPage.newMessageBody;

                    let addMessage = () => {
                        store.dispatch(addNewMessageBodyActionCreator());
                    };

                    let updateMessage  = (messageText) => {
                        store.dispatch(updateMessageBodyActionCreator(messageText));
                    };

                    return <AllMessages newMessageBody={newMessageBody} updateMessage={updateMessage} addMessage={addMessage} messages={messages}/>;
                }
            }
        </StoreContext.Consumer>
    );
};*/

 let mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody
    }
};

 let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addNewMessageBodyActionCreator());
        },

        updateMessage: (messageText) => {
            dispatch(updateMessageBodyActionCreator(messageText));
        }
    }
};


const AllMessagesContainer = connect(mapStateToProps, mapDispatchToProps)(AllMessages);

export default AllMessagesContainer;