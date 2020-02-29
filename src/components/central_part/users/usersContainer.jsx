import React from "react";
import {connect} from "react-redux";
import Users from "./users";

import {followActionCreator, unfollowActionCreator, setUsersActionCreator, setSelectedPageActionCreator, setTotalUsersAmountActionCreator} from "../../../redux/usersPageReducer";

/*import StoreContext from "../../../storeContext";*/

/*import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";*/

/*const UsersContainer = (props) => {
    return (
        <StoreContext>
            {
                (store) => {
                    let allUsers = store.getState().usersPage.users;

                    let followUser = (userId) =>{
                      dispatch(followActionCreator(userId));
                    };

                    let unfollowUser = (userId) =>{
                      dispatch(unfollowActionCreator(userId));
                    };

                    let setUsers = (users) => {
                      dispatch(setUsersActionCreator(users));
                    };

                    return <Users allUsers={allUsers}/>
                }
            }
        </StoreContext>
    );
};*/

let mapStateToProps = (state) => {
    return {
        allUsers: state.usersPage.users,
        totalUsersAmount: state.usersPage.usersAmount,
        pageSize: state.usersPage.pageSize,
        pageSelected: state.usersPage.pageSelected
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => {
            dispatch(followActionCreator(userId));
        },

        unfollowUser: (userId) => {
            dispatch(unfollowActionCreator(userId));
        },

        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        },

        setSelectedPage: (pageSelected) => {
            dispatch(setSelectedPageActionCreator(pageSelected));
        },

        setTotalUsersAmount: (totalUsersAmount) => {
            dispatch(setTotalUsersAmountActionCreator(totalUsersAmount));
        }

    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;