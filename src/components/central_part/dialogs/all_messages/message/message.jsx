import React from 'react';
import n from './message.module.css';

const Message = (props) => {
    return (
        <div className={n.message}>
            <div className={n.user_info}>
                <div className={n.user_foto}></div>

                <div className={n.user_name}>
                    {props.name}
                </div>
            </div>

            <div className={n.message_text}>
                {props.text}
            </div>
        </div>
    );
}

export default Message;