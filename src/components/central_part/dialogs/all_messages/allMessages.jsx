import React from 'react';
import n from './allMessages.module.css';
import Message from "./message/message";

const AllMessages = (props) => {

    //функция addNewMessage добавляет новое сообщение на стену
    let addNewMessage = () => {

        props.addMessage();
    };

    //функция showMessageBody изменяет текст в textarea при наборе сообщения
    let showMessageBody = (event) => {

        let newMessage = event.target.value;
        props.updateMessage(newMessage);
    }

    let messagesComponents = props.messages.map(elem => <Message id={elem.id} text={elem.text} name={elem.name} />);

    return (
        <div className={n.all_messages}>
            {messagesComponents}

            <p>Write message:</p>
            <textarea onChange={showMessageBody} value={props.newMessageBody}></textarea>
            <button onClick={addNewMessage} >Send</button>
        </div>
    );
}

export default AllMessages;