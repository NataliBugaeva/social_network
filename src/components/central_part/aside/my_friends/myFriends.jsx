import React from 'react';

import n from './myFriends.module.css';

import Friend from "./friend/friend";
import {NavLink} from "react-router-dom";

const MyFriends = (props) => {

    /*let friends = props.state.map( elem => <Friend path={elem.path} name={elem.name} />);*/
    let friends = props.friends.map(elem => <Friend path={elem.path} name={elem.name}/>);

    return (
        <div className={n.my_friends}>
            <h2>My friends</h2>

            <div className={n.friends}>
                {friends}
            </div>

            <div className={n.friends_amount}>
                <div>
                    <NavLink to="">All friends:</NavLink>
                </div>

                <div className={n.amount}>
                    {friends.length}
                </div>
            </div>
        </div>

    );
}

export default MyFriends;