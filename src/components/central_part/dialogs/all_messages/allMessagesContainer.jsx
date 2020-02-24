import React from "react";
import AllMessages from "./allMessages";
import {updateMessageBodyActionCreator, addNewMessageBodyActionCreator} from "../../../../redux/dialogsPageReducer";
import StoreContext from "../../../../storeContext";

const AllMessagesContainer = (props) => {

    /*//переменную messages будем прокидывать через пропсы в allMessages для отрисовки
    let messages = props.store.getState().dialogsPage.messages,
        newMessageBody = props.store.getState().dialogsPage.newMessageBody;*/

   /* let addMessage = () => {
        props.store.dispatch(addNewMessageBodyActionCreator());
    };*/

   /* let updateMessage  = (messageText) => {
        props.store.dispatch(updateMessageBodyActionCreator(messageText));
    };*/

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
};

export default AllMessagesContainer;