import React from 'react';

import n from './userDescription.module.css';

const UserDescription = (props) => {
    return (
        <div className={n.user_description}>
            <h2>Name: {props.profile ? props.profile.fullName : ''}</h2>
            <p>About me: {props.profile ? props.profile.aboutMe : ''}</p>
        </div>
    );
}

export default UserDescription;