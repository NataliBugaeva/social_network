import React from 'react';

import n from './friend.module.css';

const Friend = (props) => {
    return (
        <div className={n.friend}>
            <div className={n.friend_foto}>
                <img src={props.path} alt=""/>
            </div>

            <div className={n.friend_name}>
                {props.name}
            </div>
        </div>
    );
}

export default Friend;