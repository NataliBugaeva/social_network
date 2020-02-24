import React from 'react';

import n from './userDescription.module.css';

const UserDescription = (props) => {
    return (
        <div className={n.user_description}>
            <h2>Natali Bugaeva</h2>
            <p>Date of birth: 26.12.1991</p>
            <p>City: Minsk</p>
            <p>Education: Academy of Management</p>
        </div>
    );
}

export default UserDescription;