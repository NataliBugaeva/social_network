import React from 'react';

import n from './aside.module.css';

import Menu from "./menu/menu";

import MyFriends from "./my_friends/myFriends";

const Aside = (props) => {

    return (
        <aside className={n.central_part_aside}>

            <Menu />
            {/*<MyFriends state={props.state.asidePart.friends} />*/}
            <MyFriends />

        </aside>
    );
}

export default Aside;