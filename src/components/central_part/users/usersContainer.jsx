import React from "react";
import {connect} from "react-redux";
/*import UsersClassComponent from "./usersClassComponent";*/

import {
    follow, unfollow, setUsers, setSelectedPage, setTotalUsersAmount, setPreloader, toggleFollowingProgress,
    getUsersThunkCreator, changePageThunkCreator, followUserThunkCreator, unfollowUserThunkCreator
} from "../../../redux/usersPageReducer";
//импортируем все, что есть в этой библиотеке. и ко всему будем обращаться через имя axios
import * as axios from "axios";
import UsersFuncComponent from "./usersFuncComponent";
import {usersAPI} from "../../../api/api";



/*import StoreContext from "../../../storeContext";*/

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

                    return <UsersClassComponent allUsers={allUsers}/>
                }
            }
        </StoreContext>
    );
};*/


class UsersClassComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        this.props.getUsers(this.props.pageSelected, this.props.pageSize);
        //этот код мы перенели в thunk в usersPageReducer
       /* this.props.setPreloader(true);
       usersAPI.getUsers(this.props.pageSelected, this.props.pageSize).then(data => {
            //передала сюда юзеров и общее их количество из ответа сервака
            this.props.setPreloader(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersAmount(data.totalCount);
        });*/
    }

    //методы пишем как стрелочные функции, чтобы сохранить контекст вызова
    //переключает странички наши
    //по клику выцепит номер страницы, перекл.чит на новую страницу, в соответсвии с этим номером сделает запрос на сервак, чтоб тот отрисовал нам пользователей для этогой страницы



    pageChange = (event) => {
        this.props.changePage(event, this.props.pageSize);
        /*
        this.props.setPreloader(true);
        let target = event.target;
        if (target.tagName === 'SPAN') {
            this.props.setSelectedPage(+target.innerText);
        }

        usersAPI.getUsers(+target.innerText, this.props.pageSize).then(data => {
            this.props.setPreloader(false);
            //передала сюда юзеров и общее их количество из ответа сервака
            this.props.setUsers(data.items);
            this.props.setTotalUsersAmount(data.totalCount);
        });*/
    };


    render() {

        return (
                <UsersFuncComponent pageChange={this.pageChange} totalUsersAmount={this.props.totalUsersAmount} pageSize={this.props.pageSize}
                                    pageSelected={this.props.pageSelected} allUsers={this.props.allUsers}
                                    followUser={this.props.follow} unfollowUser={this.props.unfollow} setUsers={this.props.setUsers}
                                    isFetching={this.props.isFetching} toggleFollowingProgress={this.props.toggleFollowingProgress}
                                    followingInProgress={this.props.followingInProgress} followSuccess={this.props.followSuccess}
                                    unfollowSuccess={this.props.unfollowSuccess}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        allUsers: state.usersPage.users,
        totalUsersAmount: state.usersPage.usersAmount,
        pageSize: state.usersPage.pageSize,
        pageSelected: state.usersPage.pageSelected,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};

//избавляемся от функции mapDispatchToProps. Вместо этого переименовываем наши все actionCreators такими же названиями,
//как и эти наши функции в mapDispatchToProps и сокращаем код с помощью деструктуризации. А в connect вторым параметром вместоо
//mapDispatchToProps передадим этот объект
/*let mapDispatchToProps = (dispatch) => {
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
        },

        setPreloader: (isFetching) => {
            dispatch(setPreloaderActionCreator(isFetching));
        }

    }
};*/
/*const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClassComponent);*/


const UsersContainer = connect(mapStateToProps,
    { follow, unfollow, setUsers, setSelectedPage,
        setTotalUsersAmount, setPreloader, toggleFollowingProgress,
        getUsers: getUsersThunkCreator, changePage: changePageThunkCreator,
        followSuccess: followUserThunkCreator, unfollowSuccess: unfollowUserThunkCreator })(UsersClassComponent);

export default UsersContainer;