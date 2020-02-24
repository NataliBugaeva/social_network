import React from 'react';

import n from './avatar.module.css';

const Avatar = (props) => {
    return (
        <div className={n.avatar}>
            <img src={`${props.src}`} alt=""/>
        </div>
    );
}

export default Avatar;