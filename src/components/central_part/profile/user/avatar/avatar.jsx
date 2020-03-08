import React from 'react';

import n from './avatar.module.css';

const Avatar = (props) => {
    return (

        <div className={n.avatar}>
            <img src={`${ props.profile ?  props.profile.photos.small : ''}`}   alt=""/>
        </div>

    );
};

export default Avatar;