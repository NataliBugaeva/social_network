import React from 'react';

import n from './aside.module.css';

import Menu from "./menu/menu";

import MyFriendsContainer from "./my_friends/myFriendsContainer";

const Aside = (props) => {

    return (
        <aside className={n.central_part_aside}>

            <Menu />
            {/*<MyFriends state={props.state.asidePart.friends} />*/}
            <MyFriendsContainer />

        </aside>
    );
}

export default Aside;