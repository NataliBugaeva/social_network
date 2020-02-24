import React from 'react';

import n from './myFriends.module.css';

import Friend from "./friend/friend";
import {NavLink} from "react-router-dom";
import StoreContext from "../../../../storeContext";

const MyFriends = (props) => {

    /*let friends = props.state.map( elem => <Friend path={elem.path} name={elem.name} />);*/

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let friends = store.getState().asidePart.friends.map(elem => <Friend path={elem.path} name={elem.name}/>);

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
            }
        </StoreContext.Consumer>
    );
}

export default MyFriends;