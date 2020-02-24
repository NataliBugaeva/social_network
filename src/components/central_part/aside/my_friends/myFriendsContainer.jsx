import React from "react";
import StoreContext from "../../../../storeContext";
import MyFriends from "./myFriends";

import {connect} from "react-redux";

/*import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";*/

/*const MyFriendsContainer = (props) => {
    return (
        <StoreContext>
            {
                (store) => {
                    let friends = store.getState().asidePart.friends;

                    return <MyFriends friends={friends} />
                }
            }
        </StoreContext>
    );
};*/

let mapStateToProps = (state) => {
    return {
        friends: state.asidePart.friends
    }
};

let mapDispatchToProps = (dispatch) => {
    return {

    }
};

const MyFriendsContainer = connect(mapStateToProps, mapDispatchToProps)(MyFriends);

export default MyFriendsContainer;