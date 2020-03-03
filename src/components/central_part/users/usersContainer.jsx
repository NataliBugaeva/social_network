import React from "react";
import {connect} from "react-redux";
/*import UsersClassComponent from "./usersClassComponent";*/

import {
    follow,
    unfollow,
    setUsers,
    setSelectedPage,
    setTotalUsersAmount,
    setPreloader
} from "../../../redux/usersPageReducer";
//импортируем все, что есть в этой библиотеке. и ко всему будем обращаться через имя axios
import * as axios from "axios";
import UsersFuncComponent from "./usersFuncComponent";



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
        this.props.setPreloader(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pageSelected}&count=${this.props.pageSize}`).then(response => {

            //передала сюда юзеров и общее их количество из ответа сервака
            this.props.setPreloader(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersAmount(response.data.totalCount);

        });
    }

    //методы пишем как стрелочные функции, чтобы сохранить контекст вызова
    //переключает странички наши
    //по клику выцепит номер страницы, перекл.чит на новую страницу, в соответсвии с этим номером сделает запрос на сервак, чтоб тот отрисовал нам пользователей для этогой страницы
    pageChange = (event) => {
        this.props.setPreloader(true);
        let target = event.target;
        if (target.tagName === 'SPAN') {
            this.props.setSelectedPage(+target.innerText);
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${+target.innerText}&count=${this.props.pageSize}`).then(response => {
            this.props.setPreloader(false);
            //передала сюда юзеров и общее их количество из ответа сервака
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersAmount(response.data.totalCount);
        });
    };


    render() {



        return (
                <UsersFuncComponent pageChange={this.pageChange} totalUsersAmount={this.props.totalUsersAmount} pageSize={this.props.pageSize}
                                    pageSelected={this.props.pageSelected} allUsers={this.props.allUsers}
                                    followUser={this.props.followUser} unfollowUser={this.props.unfollowUser} setUsers={this.props.setUsers}
                                    isFetching={this.props.isFetching} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        allUsers: state.usersPage.users,
        totalUsersAmount: state.usersPage.usersAmount,
        pageSize: state.usersPage.pageSize,
        pageSelected: state.usersPage.pageSelected,
        isFetching: state.usersPage.isFetching
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
                                  { follow, unfollow, setUsers,
                                   setSelectedPage, setTotalUsersAmount, setPreloader})(UsersClassComponent);

export default UsersContainer;